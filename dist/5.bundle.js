(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{389:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),i=o(18),c=o(14),f=o(3),l=o(10),a=o(6),u=o(20),s=o.n(u),p=o(17);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=v(t);if(e){var r=v(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return g(this,o)}}function g(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(c,t);var e,o,n,i=m(c);function c(){return b(this,c),i.apply(this,arguments)}return e=c,(o=[{key:"componentDidMount",value:function(){var t=this.props,e=t.api,o=t.fetchProbPlotSuccess,n=t.fetchProbPlotError,r=t.data;Object(p.a)(r)&&e.getProbPlot().then((function(t){return o(t)})).catch((function(t){return n(t)}))}},{key:"render",value:function(){var t=this.props,e=t.isLoading,o=t.data,n=o.prob_theorical,i=o.prob_actual;return o.line,e?r.a.createElement(l.a,null):r.a.createElement(s.a,{data:[{x:n,y:i,name:"Actual theoretical",line:{color:"#0f5bb9",width:9},type:"scatter",mode:"markers"},{x:[-.1,1.1],y:[-.1,1.1],name:"Line",line:{color:"#deb513",width:1},type:"scatter",mode:"lines"}],layout:Object(a.a)("Probability Plot",!1,{l:45,r:30,t:35,b:30},"","",0,"Theoretical Quantiles","Ordered Values").layout,useResizeHandler:Object(a.a)().useResizeHandler,style:Object(a.a)().style,config:Object(a.a)().config})}}])&&d(e.prototype,o),n&&d(e,n),c}(n.Component),P={fetchProbPlotSuccess:function(t){return{type:f.e,payload:t}},fetchProbPlotError:function(t){return{type:f.d,payload:t}}};e.default=Object(i.a)()(Object(c.b)((function(t){return t.probabilityPlotReducer}),P)(w))},6:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var n={l:30,r:30,t:80,b:30},r=function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,f=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Rubik"},title:{text:t,x:.5,y:.95,font:{size:14,color:"#ffffff",family:"Rubik"}},autosize:!0,showlegend:e,legend:{orientation:"h",x:0,y:1.1,font:{family:"Rubik",size:10,color:"#f1f1f1"}},margin:o,xaxis:{color:"#8f8f8f",title:{text:f,font:{family:"Rubik",size:10,color:"#f1f1f1"},standoff:0},tickfont:{size:9,color:"#8f8f8f",family:"Rubik"},tickformat:r,showline:!0,linecolor:"#555456",showgrid:!0,gridcolor:"#211e22"},yaxis:{color:"#8f8f8f",title:{text:l,font:{family:"Rubik",size:10,color:"#f1f1f1"},standoff:0},tickfont:{size:9,color:"#8f8f8f",family:"Rubik"},tickformat:i,showline:!0,linecolor:"#555456",gridcolor:"#211e22"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:c},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!1}}}}}]);