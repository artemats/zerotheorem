(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{12:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n={l:30,r:30,t:80,b:30},r=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,s=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif"},title:{text:"<b>"+e+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:t,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},margin:o,xaxis:{color:"#B2B3B5",title:{text:s,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:r,showline:!1,showgrid:!0,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:a,showline:!1,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:i,modebar:{bgcolor:"transparent"}},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","pan2d","select2d","lasso2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","zoom3d","pan3d","resetCameraDefault3d","resetCameraLastSave3d","hoverClosest3d","orbitRotation","tableRotation","zoomInGeo","zoomOutGeo","resetGeo","hoverClosestGeo","toImage","sendDataToCloud","hoverClosestGl2d","hoverClosestPie","toggleHover","resetViews","toggleSpikelines","resetViewMapbox"]}}}},27:function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=o(71);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.a=function(){return function(e){return function(t){return r.a.createElement(a.a,null,(function(o){return r.a.createElement(e,i({},t,{api:o}))}))}}}},395:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(27),i=o(5),s=o(3),l=o(38),c=o.n(l),u=o(15),f=o(12),p=o(19);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=v(e);if(t){var r=v(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return g(this,o)}}function g(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,o,n,a=m(i);function i(){return d(this,i),a.apply(this,arguments)}return t=i,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.api,o=e.fetchResidualHisSuccess,n=e.fetchResidualHisError,r=e.data;Object(p.a)(r)&&t.getResidualHistogram().then((function(e){o(e)})).catch((function(e){return n(e)}))}},{key:"render",value:function(){var e=this.props,t=e.isLoading,o=e.data,n=o.bins,a=o.frecuencies;return t?r.a.createElement(u.a,null):r.a.createElement(c.a,{data:[{type:"bar",x:n,y:a,marker:{color:"#a78814"}}],layout:Object(f.a)("Residual Histogram",!1,{l:30,r:30,t:95,b:30}).layout,useResizeHandler:Object(f.a)().useResizeHandler,style:Object(f.a)().style,config:Object(f.a)().config})}}])&&h(t.prototype,o),n&&h(t,n),i}(n.Component),B={fetchResidualHisSuccess:function(e){return{type:s.i,payload:e}},fetchResidualHisError:function(e){return{type:s.h,payload:e}}};t.default=Object(a.a)()(Object(i.b)((function(e){return e.residualHisReducer}),B)(w))}}]);