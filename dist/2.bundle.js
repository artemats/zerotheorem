(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a={l:30,r:30,t:80,b:30},r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:3,l=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0;return{layout:{width:null,height:null,font:{family:"Raleway, sans-serif"},title:{text:"<b>"+e+"</b>",x:.05,y:.98,font:{size:16,color:"#B2B3B5",family:"Raleway, sans-serif",fontWeight:600}},autosize:!0,showlegend:t,legend:{orientation:"h",x:-.04,y:1.15,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},margin:n,xaxis:{color:"#B2B3B5",title:{text:l,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:r,showline:!1,showgrid:!0,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},yaxis:{color:"#B2B3B5",title:{text:c,standoff:0,font:{family:"Raleway, sans-serif",size:12,color:"#B2B3B5"}},tickfont:{size:10,color:"#B2B3B5",family:"Raleway, sans-serif"},tickformat:o,showline:!1,zeroline:!1,linecolor:"#4A4A4A",gridcolor:"#4A4A4A"},paper_bgcolor:"transparent",plot_bgcolor:"transparent",bargroupgap:!1,bargap:i,modebar:{bgcolor:"transparent"}},useResizeHandler:!0,style:{width:"100%",height:"100%"},config:{scrollZoom:!0,displayModeBar:!0,modeBarButtonsToRemove:["zoom2d","pan2d","select2d","lasso2d","autoScale2d","resetScale2d","hoverClosestCartesian","hoverCompareCartesian","zoom3d","pan3d","resetCameraDefault3d","resetCameraLastSave3d","hoverClosest3d","orbitRotation","tableRotation","zoomInGeo","zoomOutGeo","resetGeo","hoverClosestGeo","toImage","sendDataToCloud","hoverClosestGl2d","hoverClosestPie","toggleHover","resetViews","toggleSpikelines","resetViewMapbox"]}}}},164:function(e,t,n){var a=n(387),r=n(165);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},165:function(e,t,n){(t=n(388)(!1)).push([e.i,'.dropdown{position:relative;z-index:0}.dropdown-header{height:40px;border-radius:5px;padding:0 40px 0 20px;border:1px solid #4a4a4a;line-height:36px;cursor:pointer;position:relative;transition:background-color .1s ease}.dropdown-header-title{font-size:12px}.dropdown-header:before{content:"";position:absolute;right:14px;top:16px;width:0;height:0;border-color:#4a4a4a transparent transparent;border-style:solid;border-width:8px 4.5px 0;transition:all .2s ease}@media (any-hover:hover),only screen and (min-width:991px){.dropdown-header:hover{background-color:hsla(0,0%,100%,.08)}}.dropdown-select{position:absolute;top:40px;right:0;padding-top:26px;opacity:0;pointer-events:none;transform:translateY(-5px);z-index:-1;transition:opacity .2s ease,transform .2s ease}.dropdown-select-list{background-color:#121c21;border:1px solid #4a4a4a;border-radius:5px;padding:30px 20px;max-width:254px;width:100vw}.dropdown-select .input-container{margin:10px 0}.dropdown-select .input-label{padding:0;font-size:12px}@media (any-hover:hover),only screen and (min-width:991px){.dropdown-select .input-label:hover{color:#cfb024}}.dropdown-select .input-check:checked~.input-label{color:#ffc600}.dropdown-action{display:flex;align-items:center;padding-top:15px}.dropdown-divider{background-color:#4a4a4a;height:1px;opacity:1;margin:7px 0}.dropdown.is-active{z-index:9}.dropdown.is-active .dropdown-header:before{transform:scaleY(-1);top:15px}.dropdown.is-active .dropdown-select{opacity:1;z-index:1;pointer-events:auto;transform:translateY(0)}',""]),e.exports=t},27:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(71);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}t.a=function(){return function(e){return function(t){return r.a.createElement(o.a,null,(function(n){return r.a.createElement(e,i({},t,{api:n}))}))}}}},389:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(27),i=n(5),l=n(3),c=n(19),s=n(38),d=n.n(s),p=n(12),u=n(18);n(164);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var h=function(){var e=f(Object(a.useState)(!1),2),t=e[0],n=e[1],o=f(Object(a.useState)("week"),2),i=o[0],l=o[1],c=function(e){l(e.target.value)};return r.a.createElement("div",{className:"dashboard-box-filter"},r.a.createElement("div",{className:"dropdown ".concat(t?"is-active":"")},r.a.createElement("div",{className:"dropdown-header",onClick:function(){n(!t)}},r.a.createElement("span",{className:"dropdown-header-title semi-bold"},"Last Week")),r.a.createElement("div",{className:"dropdown-select"},r.a.createElement("div",{className:"dropdown-select-list"},r.a.createElement("label",{className:"input-container"},r.a.createElement("input",{type:"radio",name:"period",value:"week",className:"input-check",checked:"week"===i,onChange:c}),r.a.createElement("span",{className:"input-label semi-bold"},"Last Week")),r.a.createElement("label",{className:"input-container"},r.a.createElement("input",{type:"radio",name:"period",value:"month",className:"input-check",checked:"month"===i,onChange:c}),r.a.createElement("span",{className:"input-label semi-bold"},"Last Month")),r.a.createElement("label",{className:"input-container"},r.a.createElement("input",{type:"radio",name:"period",value:"quarter",className:"input-check",checked:"quarter"===i,onChange:c}),r.a.createElement("span",{className:"input-label semi-bold"},"Last Quarter")),r.a.createElement("label",{className:"input-container"},r.a.createElement("input",{type:"radio",name:"period",value:"half-year",className:"input-check",checked:"half-year"===i,onChange:c}),r.a.createElement("span",{className:"input-label semi-bold"},"Last Half Year")),r.a.createElement("label",{className:"input-container"},r.a.createElement("input",{type:"radio",name:"period",value:"year",className:"input-check",checked:"year"===i,onChange:c}),r.a.createElement("span",{className:"input-label semi-bold"},"Last Year")),r.a.createElement("hr",{className:"hr dropdown-divider"}),r.a.createElement("div",{className:"input-container"},r.a.createElement("span",{className:"input-container-title"},"From"),r.a.createElement("input",{type:"text",className:"input sm"})),r.a.createElement("div",{className:"input-container"},r.a.createElement("span",{className:"input-container-title"},"To"),r.a.createElement("input",{type:"text",className:"input sm"})),r.a.createElement("div",{className:"dropdown-action"},r.a.createElement("button",{className:"btn sm"},"Apply"),r.a.createElement("button",{className:"btn sm default",onClick:function(){n(!1)}},"Cancel"))))))};function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=E(e);if(t){var r=E(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(l,e);var t,n,o,i=g(l);function l(){return b(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.api,n=e.fetchTrendSuccess,a=e.fetchTrendError,r=e.data;Object(u.a)(r)&&t.getTrend().then((function(e){n(e)})).catch((function(e){return a(e)}))}},{key:"render",value:function(){var e=this.props,t=e.isLoading,n=e.data,o=n.date,i=n.prediction,l=n.rmse,s=n.upper_band,u=n.lower_band;return t?r.a.createElement(c.a,null):r.a.createElement(a.Fragment,null,r.a.createElement(d.a,{data:[{x:o,y:i,name:"Prediction",line:{color:"#0f5bb9",width:6},type:"scatter",mode:"lines"},{x:o,y:l,name:"Rmse",line:{color:"#1f292a",width:20},type:"scatter",mode:"lines"},{x:o,y:s,name:"Upper band",line:{color:"#deb513",width:1},type:"scatter",mode:"lines"},{x:o,y:u,name:"Lower band",line:{color:"#FF4000",width:1},type:"scatter",mode:"lines"}],layout:Object(p.a)("Trend Plot",!0,{l:45,r:30,t:95,b:30},"%y/%d/%m","",0,"","<b>Price USD</b>").layout,useResizeHandler:Object(p.a)().useResizeHandler,style:Object(p.a)().style,config:Object(p.a)().config}),r.a.createElement(h,null))}}])&&v(t.prototype,n),o&&v(t,o),l}(a.Component),N={fetchTrendSuccess:function(e){return{type:l.l,payload:e}},fetchTrendError:function(e){return{type:l.m,payload:e}}};t.default=Object(o.a)()(Object(i.b)((function(e){return e.trendReducer}),N)(k))}}]);