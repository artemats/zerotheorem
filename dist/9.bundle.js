(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{19:function(t,e,a){"use strict";var r=a(0),n=a.n(r),c=a(67);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}e.a=function(){return function(t){return function(e){return n.a.createElement(c.a,null,(function(a){return n.a.createElement(t,o({},e,{api:a}))}))}}}},380:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),c=a(19),o=a(14),s=a(3),i=a(17),l=a(10);var u=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setState=function(t,e){try{var a=JSON.stringify(e);localStorage.setItem(t,a)}catch(t){console.error("Error with save state to localStorage - ".concat(t))}},this.getState=function(t){try{var e=localStorage.getItem(t);if(null===e)return;return JSON.parse(e)}catch(t){console.error("Error with get state from localStorage - ".concat(t))}},this.remoteState=function(t){try{localStorage.removeItem(t)}catch(t){console.error("Error with removing state from localStorage - ".concat(t))}}};function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=h(t);if(e){var n=h(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y(this,a)}}function y(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var E=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(o,t);var e,a,r,c=d(o);function o(){var t,e;m(this,o);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return y(e,(t=e=c.call.apply(c,[this].concat(r)),e.state={forecastPriceDirection:"down"},e.detectDataWithLocalStorage=function(t){var a=new u,r=a.getState("forecastPrice");r&&r<t&&e.setState({forecastPriceDirection:"up"}),a.setState("forecastPrice",t)},e.onForecastDirection=function(t){var e=-1===t?"Down":"Up";return n.a.createElement("p",{className:"stat-value"},e," ",n.a.createElement("span",{className:"stat-value-arrow __".concat(e.toLocaleLowerCase())}))},t))}return e=o,(a=[{key:"componentDidMount",value:function(){var t=this,e=this.props,a=e.api,r=e.fetchMetricSuccess,n=e.fetchMetricError,c=e.data;Object(i.a)(c)&&a.getMetric().then((function(e){r(e.data),t.detectDataWithLocalStorage(e.data.predicted_price)})).catch((function(t){return n(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,a=t.data,r=this.state.forecastPriceDirection;return e||Object(i.a)(a)?n.a.createElement(l.a,null):n.a.createElement("div",{className:"stat"},n.a.createElement("div",{className:"stat-list __middle"},n.a.createElement("div",{className:"stat-list-item"},n.a.createElement("div",{className:"stat-row"},n.a.createElement("p",{className:"stat-label"},"RMSE:"),n.a.createElement("div",{className:"stat-value"},a.rmse))),n.a.createElement("div",{className:"stat-list-item"},n.a.createElement("div",{className:"stat-row"},n.a.createElement("p",{className:"stat-label"},"MAPPE:"),n.a.createElement("div",{className:"stat-value"},a.mape))),n.a.createElement("div",{className:"stat-list-item"},n.a.createElement("div",{className:"stat-row"},n.a.createElement("p",{className:"stat-label"},"MADS:"),n.a.createElement("div",{className:"stat-value"},a.mads))),n.a.createElement("div",{className:"stat-list-item"},n.a.createElement("div",{className:"stat-row"},n.a.createElement("p",{className:"stat-label"},"Accuary:"),n.a.createElement("div",{className:"stat-value"},"XX"))),n.a.createElement("div",{className:"stat-list-item full-width"},n.a.createElement("div",{className:"stat-row"},n.a.createElement("p",{className:"stat-label"},"Stationary:"),n.a.createElement("div",{className:"stat-value"},a.stationary)))),n.a.createElement("hr",{className:"hr"}),n.a.createElement("div",{className:"stat-list"},n.a.createElement("div",{className:"stat-list-item"},n.a.createElement("p",{className:"stat-label"},"Forecasted Price:"),n.a.createElement("p",{className:"stat-value"},"$ ",a.predicted_price.toFixed(2),n.a.createElement("span",{className:"stat-value-arrow __".concat(r)}))),n.a.createElement("div",{className:"stat-list-item"},n.a.createElement("p",{className:"stat-label"},"Forecasted Direction:"),this.onForecastDirection(a.predicted_direction))))}}])&&p(e.prototype,a),r&&p(e,r),o}(r.Component),b={fetchMetricSuccess:function(t){return{type:s.c,payload:t}},fetchMetricError:function(t){return{type:s.b,payload:t}}};e.default=Object(c.a)()(Object(o.b)((function(t){return t.metricReducer}),b)(E))}}]);