(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{28:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(95);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}t.a=function(){return function(e){return function(t){return r.a.createElement(a.a,null,(function(n){return r.a.createElement(e,i({},t,{api:n}))}))}}}},5:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o={l:30,r:30,t:80,b:30},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.2,c=arguments.length>6?arguments[6]:void 0,l=arguments.length>7?arguments[7]:void 0,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"group",u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:"",f=!(arguments.length>10&&void 0!==arguments[10])||arguments[10],d=!(arguments.length>11&&void 0!==arguments[11])||arguments[11];return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif"},title:{text:"<b>"+e+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:t,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},margin:n,xaxis:{color:"#B2B3B5",title:{text:c,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:r,showline:!1,zeroline:!1,showgrid:d,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:a,showline:!1,zeroline:!1,showgrid:f,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:i,modebar:{bgcolor:"transparent"},barmode:s,barnorm:u},useResizeHandler:!0,style:{width:"100%",height:"100%"}}},a=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return{config:{scrollZoom:!0,displayModeBar:e,modeBarButtonsToRemove:["zoom2d","pan2d","select2d","lasso2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","zoom3d","pan3d","resetCameraDefault3d","resetCameraLastSave3d","hoverClosest3d","orbitRotation","tableRotation","zoomInGeo","zoomOutGeo","resetGeo","hoverClosestGeo","toImage","sendDataToCloud","hoverClosestGl2d","hoverClosestPie","toggleHover","resetViews","toggleSpikelines","resetViewMapbox"]}}}},504:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(28),i=n(8),c=n(82),l=n(10),s=n(14),u=n.n(s),f=n(5),d=n(21),p=n(17),y=n(26),h=n(34),b=n(59);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=j(e);if(t){var r=j(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return B(this,n)}}function B(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,e);var t,n,a,i=w(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e)).onChangeFilter=t.onChangeFilter.bind(O(t)),t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.api,n=e.fetchTrendSuccess,o=e.fetchTrendError,r=e.data;Object(d.a)(r)&&Object(b.a)(t.getTrend,n,o,Object(h.a)(Object(y.c)()))}},{key:"onChangeFilter",value:function(e){var t=this.props,n=t.api,o=t.fetchTrendSuccess,r=t.fetchTrendError;Object(b.a)(n.getTrend,o,r,e)}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.data,a=n.date,i=n.prediction,c=n.rmse,s=n.upper_band;return n.lower_band,t?r.a.createElement(l.a,null):r.a.createElement(o.Fragment,null,r.a.createElement(u.a,{data:[{x:a,y:i,name:"Forecast",line:{color:"#0f5bb9",width:2,dash:"dot"},type:"scatter",mode:"lines"},{x:a,y:c,name:"Confidence interval",line:{color:"#1f292a",width:40},type:"scatter",mode:"lines"},{x:a,y:s,name:"Actual",line:{color:"#deb513",width:2},type:"scatter",mode:"lines"}],layout:Object(f.b)("Cost Of Production Index ",!0,{l:45,r:30,t:95,b:30},"%y/%d/%m","",0,"","").layout,useResizeHandler:Object(f.b)().useResizeHandler,style:Object(f.b)().style,config:Object(f.a)().config}),r.a.createElement(p.a,{onSubmit:this.onChangeFilter,defaultStartDate:Object(y.c)(),defaultFinishedDate:y.a,defaultPeriod:0}))}}])&&g(t.prototype,n),a&&g(t,a),c}(o.Component),C={fetchTrendSuccess:c.b,fetchTrendError:c.a};t.default=Object(a.a)()(Object(i.b)((function(e){return e.trendReducer}),C)(R))},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e,t,n,o){return e(o).then((function(e){t(e)})).catch((function(e){return n(e)}))}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var o=n(7),r=function(e){return{type:o.l,payload:e}},a=function(e){return{type:o.m,payload:e}}}}]);