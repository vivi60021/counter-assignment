(function(e){function n(n){for(var r,a,c=n[0],i=n[1],f=n[2],s=0,l=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(n);while(l.length)l.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u=[];function a(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-142f2026":"c23f0781","chunk-2d0d5fdf":"ca187a33","chunk-5057a564":"443053ea"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(e);var f=new Error;u=function(n){i.onerror=i.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",f.name="ChunkLoadError",f.type=r,f.request=u,t[1](f)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/counter-assignment/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var s=0;s<i.length;s++)n(i[s]);var p=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function o(e,n,t,o,u,a){var c=Object(r["v"])("router-view");return Object(r["q"])(),Object(r["d"])(c)}var u=t("2ef0"),a=t.n(u),c=t("fd90"),i={name:"app",mounted:function(){this.SetStorage()},methods:{SetStorage:function(){a.a.isEmpty(sessionStorage.CounterName)&&(sessionStorage.CounterName=c.counters)}}},f=t("6b0d"),s=t.n(f);const p=s()(i,[["render",o]]);var l=p,d=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),h=[{path:"/",component:function(){return t.e("chunk-2d0d5fdf").then(t.bind(null,"713b"))},children:[{path:"",name:"Home",component:function(){return t.e("chunk-142f2026").then(t.bind(null,"bb51"))}},{path:"Setting",name:"Setting",component:function(){return t.e("chunk-5057a564").then(t.bind(null,"4ef5"))}}]}],b=Object(d["a"])({history:Object(d["b"])("/counter-assignment/"),routes:h}),m=b;t("6f98");Object(r["c"])(l).use(m).mount("#app")},"6f98":function(e,n,t){},fd90:function(e){e.exports=JSON.parse('{"counters":["Amy","Bob","Cory","Dora"]}')}});
//# sourceMappingURL=app.aa9f1c0c.js.map