!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@ckeditor/ckeditor5-build-classic"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["@ckeditor/ckeditor5-build-classic","classnames","noop","object-assign","prop-types","react","react-dom"],t):"object"==typeof exports?exports.ReactCkeditor=t(require("@ckeditor/ckeditor5-build-classic"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-dom")):e.ReactCkeditor=t(e["@ckeditor/ckeditor5-build-classic"],e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-dom"])}(this,function(e,t,r,o,n,a,i){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),a=o(n);t.default=a.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),f=r(7),d=o(f),h=r(8),m=(o(h),r(6)),y=o(m),v=r(3),b=o(v),g=r(4),O=o(g),j=r(5),k=(o(j),r(2)),x=o(k),_=(s=c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.value;x.default.create(this.root).then(function(r){e.editor=r,e.html=t,e.attacheEvents()})}},{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.html&&(this.html=t)}},{key:"onDataChange",value:function(){var e=this,t=this.props.onChange;this.editor.model.document.on("change:data",function(r){t({target:{value:e.html}})})}},{key:"onImageUpload",value:function(){var e=this.props,t=e.imageUploadAdapter,r=e.adapterOptions;this.editor.plugins.get("FileRepository").createUploadAdapter=function(e){return new t(e,r)}}},{key:"attacheEvents",value:function(){this.onDataChange(),this.onImageUpload()}},{key:"render",value:function(){var e=this,t=this.props,r=t.className,o=(t.value,t.adapterOptions,t.imageUploadAdapter,n(t,["className","value","adapterOptions","imageUploadAdapter"]));return d.default.createElement("div",p({ref:function(t){return e.root=t},className:(0,b.default)("react-ckeditor",r)},o))}},{key:"html",get:function(){return this.editor?this.editor.data.get():null},set:function(e){this.editor&&this.editor.data.set(e)}}]),t}(f.Component),c.propTypes={className:y.default.string,value:y.default.string,onChange:y.default.func,imageUploadAdapter:y.default.func,adapterOptions:y.default.object},c.defaultProps={onChange:O.default,imageUploadAdapter:O.default},s);t.default=_},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=n},function(e,t){e.exports=a},function(e,t){e.exports=i}])});
//# sourceMappingURL=react-ckeditor.js.map