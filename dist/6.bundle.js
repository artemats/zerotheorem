(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{19:function(t,e,n){"use strict";var r=n(0),o=n.n(r),c=n(67);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}e.a=function(){return function(t){return function(e){return o.a.createElement(c.a,null,(function(n){return o.a.createElement(t,u({},e,{api:n}))}))}}}},383:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c=n(19),u=n(16),a=n(4),i=n(17),f=n(12),l=n(6),s=n(20),p=n.n(s);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(u,t);var e,n,r,c=m(u);function u(){return b(this,u),c.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.api,n=t.fetchQqPlotSuccess,r=t.fetchQqPlotError,o=t.data;Object(i.a)(o)&&e.getQqPlot().then((function(t){return n(t)})).catch((function(t){return r(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,n=t.data,r=(n.line,n.z_actual),c=n.z_theorical;return e?o.a.createElement(f.a,null):o.a.createElement(p.a,{data:[{x:c,y:r,name:"Actual theoretical",line:{color:"#0f5bb9",width:9},type:"scatter",mode:"markers"},{x:[-3.5,3.5],y:[-3.5,3.5],name:"Line",line:{color:"#deb513",width:1},type:"scatter",mode:"lines"}],layout:Object(l.a)("QQ plot",!1,{l:45,r:30,t:35,b:30},"","",0,"Theoretical Quantiles","Sample Quantiles").layout,useResizeHandler:Object(l.a)().useResizeHandler,style:Object(l.a)().style,config:Object(l.a)().config})}}])&&h(e.prototype,n),r&&h(e,r),u}(r.Component),j={fetchQqPlotSuccess:function(t){return{type:a.f,payload:t}},fetchQqPlotError:function(t){return{type:a.e,payload:t}}};e.default=Object(c.a)()(Object(u.b)((function(t){return t.qqPlotReducer}),j)(w))}}]);