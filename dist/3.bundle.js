(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{12:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n={l:30,r:30,t:80,b:30},r=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,l=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif"},title:{text:"<b>"+t+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:e,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},margin:o,xaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:r,showline:!1,showgrid:!0,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:c,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:a,showline:!1,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:i,modebar:{bgcolor:"transparent"}},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","pan2d","select2d","lasso2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","zoom3d","pan3d","resetCameraDefault3d","resetCameraLastSave3d","hoverClosest3d","orbitRotation","tableRotation","zoomInGeo","zoomOutGeo","resetGeo","hoverClosestGeo","toImage","sendDataToCloud","hoverClosestGl2d","hoverClosestPie","toggleHover","resetViews","toggleSpikelines","resetViewMapbox"]}}}},27:function(t,e,o){"use strict";var n=o(0),r=o.n(n),a=o(71);function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}e.a=function(){return function(t){return function(e){return r.a.createElement(a.a,null,(function(o){return r.a.createElement(t,i({},e,{api:o}))}))}}}},389:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(27),i=o(5),l=o(3),c=o(19),s=o(15),u=o(12),f=o(38),p=o.n(f);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=v(t);if(e){var r=v(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return g(this,o)}}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(i,t);var e,o,n,a=m(i);function i(){return d(this,i),a.apply(this,arguments)}return e=i,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.api,o=t.fetchQqPlotSuccess,n=t.fetchQqPlotError,r=t.data;Object(c.a)(r)&&e.getQqPlot().then((function(t){return o(t)})).catch((function(t){return n(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,o=t.data,n=(o.line,o.z_actual),a=o.z_theorical;return e?r.a.createElement(s.a,null):r.a.createElement(p.a,{data:[{x:a,y:n,name:"Actual theoretical",line:{color:"#0f5bb9",width:9},type:"scatter",mode:"markers"},{x:[-3.5,3.5],y:[-3.5,3.5],name:"Line",line:{color:"#deb513",width:1},type:"scatter",mode:"lines"}],layout:Object(u.a)("QQ plot",!0,{l:45,r:30,t:85,b:30},"","",0,"","<b>Quante Quantiles</b>").layout,useResizeHandler:Object(u.a)().useResizeHandler,style:Object(u.a)().style,config:Object(u.a)().config})}}])&&h(e.prototype,o),n&&h(e,n),i}(n.Component),B={fetchQqPlotSuccess:function(t){return{type:l.g,payload:t}},fetchQqPlotError:function(t){return{type:l.f,payload:t}}};e.default=Object(a.a)()(Object(i.b)((function(t){return t.qqPlotReducer}),B)(w))}}]);