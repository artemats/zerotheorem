(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o={l:30,r:30,t:80,b:30},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,f=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Rubik"},title:{text:t,x:.5,y:.95,font:{size:14,color:"#ffffff",family:"Rubik"}},autosize:!0,showlegend:e,legend:{orientation:"h",x:0,y:1.1,font:{family:"Rubik",size:10,color:"#f1f1f1"}},margin:n,xaxis:{color:"#8f8f8f",title:{text:f,font:{family:"Rubik",size:10,color:"#f1f1f1"},standoff:0},tickfont:{size:9,color:"#8f8f8f",family:"Rubik"},tickformat:r,showline:!0,linecolor:"#555456",showgrid:!0,gridcolor:"#211e22"},yaxis:{color:"#8f8f8f",title:{text:l,font:{family:"Rubik",size:10,color:"#f1f1f1"},standoff:0},tickfont:{size:9,color:"#8f8f8f",family:"Rubik"},tickformat:i,showline:!0,linecolor:"#555456",gridcolor:"#211e22"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:c},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!1}}}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=function(t){return 0===Object.keys(t).length}},381:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(18),c=n(16),f=n(4),l=n(24),a=n(14),u=n(10),s=n(34),p=n.n(s);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=v(t);if(e){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(c,t);var e,n,o,i=m(c);function c(){return b(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.api,n=t.fetchQqPlotSuccess,o=t.fetchQqPlotError,r=t.data;Object(l.a)(r)&&e.getQqPlot().then((function(t){return n(t)})).catch((function(t){return o(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,n=t.data,o=(n.line,n.z_actual),i=n.z_theorical;return e?r.a.createElement(a.a,null):r.a.createElement(p.a,{data:[{x:i,y:o,name:"Actual theoretical",line:{color:"#0f5bb9",width:9},type:"scatter",mode:"markers"},{x:[-3.5,3.5],y:[-3.5,3.5],name:"Line",line:{color:"#deb513",width:1},type:"scatter",mode:"lines"}],layout:Object(u.a)("QQ plot",!1,{l:45,r:30,t:35,b:30},"","",0,"Theoretical Quantiles","Sample Quantiles").layout,useResizeHandler:Object(u.a)().useResizeHandler,style:Object(u.a)().style,config:Object(u.a)().config})}}])&&h(e.prototype,n),o&&h(e,o),c}(o.Component),k={fetchQqPlotSuccess:function(t){return{type:f.f,payload:t}},fetchQqPlotError:function(t){return{type:f.e,payload:t}}};e.default=Object(i.a)()(Object(c.b)((function(t){return t.qqPlotReducer}),k)(w))}}]);