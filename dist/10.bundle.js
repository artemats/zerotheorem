(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{381:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r.p+"videos/hero.mp4";function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(){var e=i(Object(n.useState)(!1),2),t=e[0],r=e[1];return o.a.createElement("div",{className:"hero-video"},o.a.createElement("video",{className:"hero-video-item ".concat(t?"is-visible":""),width:"100%",height:"100%",preload:"auto",loop:!0,muted:!0,playsInline:!0,autoPlay:!0,onLoadedData:function(){return r(!0)}},o.a.createElement("source",{src:a,type:"video/mp4"})))}}}]);