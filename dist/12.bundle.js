(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{5:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return a}));var r={l:30,r:30,t:80,b:30},n=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,n=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.2,l=arguments.length>6?arguments[6]:void 0,s=arguments.length>7?arguments[7]:void 0,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"group",f=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",u=!(arguments.length>10&&void 0!==arguments[10])||arguments[10],p=!(arguments.length>11&&void 0!==arguments[11])||arguments[11],y=arguments.length>12?arguments[12]:void 0;return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif",color:"#B2B3B5",size:12,fontWeight:600},title:{text:"<b>"+e+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:t,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},margin:o,xaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:n,showline:!1,zeroline:!1,showgrid:p,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:s,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:a,showline:!1,zeroline:!1,showgrid:u,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:i,modebar:{bgcolor:"transparent"},barmode:c,barnorm:f,annotations:y},useResizeHandler:!0,style:{width:"100%",height:"100%"}}},a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{config:{scrollZoom:!0,displayModeBar:e,modeBarButtonsToRemove:["zoom2d","pan2d","select2d","lasso2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","zoom3d","pan3d","resetCameraDefault3d","resetCameraLastSave3d","hoverClosest3d","orbitRotation","tableRotation","zoomInGeo","zoomOutGeo","resetGeo","hoverClosestGeo","toImage","sendDataToCloud","hoverClosestGl2d","hoverClosestPie","toggleHover","resetViews","toggleSpikelines","resetViewMapbox"]}}}},510:function(e,t,o){"use strict";o.r(t);var r=o(0),n=o.n(r),a=o(14),i=o.n(a),l=o(17),s=o(5);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=b(e);if(t){var n=b(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return d(this,o)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=["ETH","LTC","XRP","BCH","EOS","XLM","XMR2","ADA","XMR","DASH"],h=["DASH","XMR","ADA","XMR2","XLM","EOS","BCH","XRP","LTC","ETH"],m=[[0,0,.8,.4,.8,.4,1,.4,.2,1],[.4,.8,0,.2,.4,.2,.8,1,1,.8],[.2,.8,.8,.6,1,0,.2,1,.2,.2],[.4,1,.4,1,0,.2,1,.8,0,1],[.2,.6,1,.2,.4,1,0,.4,.8,.4],[.2,1,.4,.2,1,0,.6,1,.4,.2],[.8,.4,1,1,.2,.4,.8,0,1,.6],[0,.8,1,.2,0,1,.8,.2,.6,.2],[0,1,0,.8,.2,.4,1,.6,.2,.2],[1,.8,.8,.8,.8,1,.4,1,.8,1]],v=[],w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,o,a,c=y(d);function d(){return f(this,d),c.apply(this,arguments)}return t=d,(o=[{key:"componentDidMount",value:function(){for(var e=0;e<h.length;e++)for(var t=0;t<g.length;t++){var o={x:g[t],y:h[e],text:m[e][t],font:{size:12,color:"rgb(255,255,255)"},showarrow:!1};v.push(o)}}},{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement(i.a,{data:[{z:m,x:g,y:h,colorscale:[["0.0","rgb(255,198,0)"],["0.2","rgb(207,176,36)"],["0.4","rgb(158,153,72)"],["0.6","rgb(111,132,108)"],["0.8","rgb(63,110,143)"],["1.0","rgb(15,88,179)"]],type:"heatmap"}],layout:Object(s.b)("market Correlation Matrix",!0,{l:40,r:30,t:95,b:30},"","",.5,"","","group","",!0,!0,v).layout,useResizeHandler:Object(s.b)().useResizeHandler,style:Object(s.b)().style,config:Object(s.a)(!0).config}),n.a.createElement(l.a,null))}}])&&u(t.prototype,o),a&&u(t,a),d}(r.Component);t.default=w}}]);