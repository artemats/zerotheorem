(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o={l:30,r:30,t:80,b:30},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,f=arguments.length>6?arguments[6]:void 0,u=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Rubik"},title:{text:t,x:.5,y:.95,font:{size:14,color:"#ffffff",family:"Rubik"}},autosize:!0,showlegend:e,legend:{orientation:"h",x:0,y:1.1,font:{family:"Rubik",size:10,color:"#f1f1f1"}},margin:n,xaxis:{color:"#8f8f8f",title:{text:f,font:{family:"Rubik",size:10,color:"#f1f1f1"},standoff:0},tickfont:{size:9,color:"#8f8f8f",family:"Rubik"},tickformat:r,showline:!0,linecolor:"#555456",showgrid:!0,gridcolor:"#211e22"},yaxis:{color:"#8f8f8f",title:{text:u,font:{family:"Rubik",size:10,color:"#f1f1f1"},standoff:0},tickfont:{size:9,color:"#8f8f8f",family:"Rubik"},tickformat:i,showline:!0,linecolor:"#555456",gridcolor:"#211e22"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:c},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!1}}}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t){return 0===Object.keys(t).length}},380:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(18),c=n(16),f=n(4),u=n(34),a=n.n(u),l=n(14),s=n(10),p=n(24);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v(t);if(e){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(c,t);var e,n,o,i=g(c);function c(){return b(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.api,n=t.fetchResidualHisSuccess,o=t.fetchResidualHisError,r=t.data;Object(p.a)(r)&&e.getResidualHistogram().then((function(t){n(t)})).catch((function(t){return o(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,n=t.data,o=n.bins,i=n.frecuencies;return e?r.a.createElement(l.a,null):r.a.createElement(a.a,{data:[{type:"bar",x:o,y:i,marker:{color:"#a78814"}}],layout:Object(s.a)("Residual Histogram",!1,{l:30,r:30,t:45,b:30}).layout,useResizeHandler:Object(s.a)().useResizeHandler,style:Object(s.a)().style,config:Object(s.a)().config})}}])&&d(e.prototype,n),o&&d(e,o),c}(o.Component),w={fetchResidualHisSuccess:function(t){return{type:f.h,payload:t}},fetchResidualHisError:function(t){return{type:f.g,payload:t}}};e.default=Object(i.a)()(Object(c.b)((function(t){return t.residualHisReducer}),w)(R))}}]);