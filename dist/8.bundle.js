(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{28:function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=o(95);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}t.a=function(){return function(e){return function(t){return r.a.createElement(a.a,null,(function(o){return r.a.createElement(e,i({},t,{api:o}))}))}}}},5:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return a}));var n={l:30,r:30,t:80,b:30},r=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.2,l=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"group",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",f=!(arguments.length>10&&void 0!==arguments[10])||arguments[10],p=!(arguments.length>11&&void 0!==arguments[11])||arguments[11],d=arguments.length>12?arguments[12]:void 0;return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif",color:"#B2B3B5",size:12,fontWeight:600},title:{text:"<b>"+e+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:t,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},margin:o,xaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:r,showline:!1,zeroline:!1,showgrid:p,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:s,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:a,showline:!1,zeroline:!1,showgrid:f,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:i,modebar:{bgcolor:"transparent"},barmode:c,barnorm:u,annotations:d},useResizeHandler:!0,style:{width:"100%",height:"100%"}}},a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{config:{scrollZoom:!0,displayModeBar:e,modeBarButtonsToRemove:["zoom2d","pan2d","select2d","lasso2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","zoom3d","pan3d","resetCameraDefault3d","resetCameraLastSave3d","hoverClosest3d","orbitRotation","tableRotation","zoomInGeo","zoomOutGeo","resetGeo","hoverClosestGeo","toImage","sendDataToCloud","hoverClosestGl2d","hoverClosestPie","toggleHover","resetViews","toggleSpikelines","resetViewMapbox"]}}}},505:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(28),i=o(8),l=o(6),s=o(14),c=o.n(s),u=o(9),f=o(5),p=o(21);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=v(e);if(t){var r=v(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return m(this,o)}}function m(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,o,a,i=g(l);function l(){return y(this,l),i.apply(this,arguments)}return t=l,(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.api,o=e.fetchResidualHisSuccess,n=e.fetchResidualHisError,r=e.data;Object(p.a)(r)&&t.getResidualHistogram().then((function(e){o(e)})).catch((function(e){return n(e)}))}},{key:"render",value:function(){var e=this.props,t=e.isLoading,o=e.data,a=o.bins,i=o.frecuencies;return t?r.a.createElement(u.a,null):r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{data:[{type:"bar",x:a,y:i,marker:{color:"#a78814"}}],layout:Object(f.b)("Residual Histogram",!1,{l:30,r:30,t:95,b:30}).layout,useResizeHandler:Object(f.b)().useResizeHandler,style:Object(f.b)().style,config:Object(f.a)().config}))}}])&&h(t.prototype,o),a&&h(t,a),l}(n.Component),B={fetchResidualHisSuccess:function(e){return{type:l.j,payload:e}},fetchResidualHisError:function(e){return{type:l.i,payload:e}}};t.default=Object(a.a)()(Object(i.b)((function(e){return e.residualHisReducer}),B)(w))}}]);