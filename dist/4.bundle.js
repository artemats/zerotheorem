(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o={l:30,r:30,t:80,b:30},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif"},title:{text:"<b>"+t+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:e,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:10,color:"#B2B3B5"}},margin:n,xaxis:{color:"#B2B3B5",title:{text:c,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:r,showline:!1,showgrid:!0,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:i,showline:!1,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:a},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!1}}}},27:function(t,e,n){"use strict";var o=n(0),r=n.n(o),i=n(71);function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}e.a=function(){return function(t){return function(e){return r.a.createElement(i.a,null,(function(n){return r.a.createElement(t,a({},e,{api:n}))}))}}}},392:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(27),a=n(13),c=n(3),l=n(15),u=n(11),f=n(38),s=n.n(f),y=n(19);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=w(t);if(e){var r=w(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,o,i=g(a);function a(){return b(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){var t=this.props,e=t.api,n=t.fetchProbPlotSuccess,o=t.fetchProbPlotError,r=t.data;Object(y.a)(r)&&e.getProbPlot().then((function(t){return n(t)})).catch((function(t){return o(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,n=t.data,o=n.prob_theorical,i=n.prob_actual;return n.line,e?r.a.createElement(l.a,null):r.a.createElement(s.a,{data:[{x:o,y:i,name:"Actual theoretical",line:{color:"#0f5bb9",width:9},type:"scatter",mode:"markers"},{x:[-.1,1.1],y:[-.1,1.1],name:"Line",line:{color:"#deb513",width:1},type:"scatter",mode:"lines"}],layout:Object(u.a)("Probability Plot",!0,{l:45,r:30,t:70,b:30},"","",0,"Theoretical Quantiles","Ordered Values").layout,useResizeHandler:Object(u.a)().useResizeHandler,style:Object(u.a)().style,config:Object(u.a)().config})}}])&&h(e.prototype,n),o&&h(e,o),a}(o.Component),B={fetchProbPlotSuccess:function(t){return{type:c.e,payload:t}},fetchProbPlotError:function(t){return{type:c.d,payload:t}}};e.default=Object(i.a)()(Object(a.b)((function(t){return t.probabilityPlotReducer}),B)(v))}}]);