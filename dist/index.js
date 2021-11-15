/*!
 *  name: @jswork/react-ckeditor
 *  description: CKEditor component for react.
 *  homepage: https://github.com/afeiship/react-ckeditor#readme
 *  version: 1.0.5
 *  date: 2021-11-15T02:22:05.229Z
 *  license: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactCkeditor=e():t.ReactCkeditor=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("@jswork/noop")},function(t,e){t.exports=require("classnames")},function(t,e){t.exports=require("@jswork/ckeditor5-build-classic")},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),u=n(3),c=n.n(u),f=n(2),l=n.n(f),p=n(4),s=n.n(p);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var y=["className","value","options","adapterOptions","imageUploadAdapter"];function b(){return(b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function h(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(a,t);var e,n,r,i=O(a);function a(){return v(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"html",get:function(){return this.editor?this.editor.getData():null},set:function(t){this.editor&&this.editor.setData(t)}},{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.value,r=e.options;s.a.create(this.root,r).then((function(e){t.editor=e,t.html=n,t.attacheEvents()}))}},{key:"shouldComponentUpdate",value:function(t){var e=t.value;return e!==this.html&&(this.html=e),!0}},{key:"onDataChange",value:function(){var t=this,e=this.props.onChange;this.editor.model.document.on("change:data",(function(){e({target:{value:t.html}})}))}},{key:"onImageUpload",value:function(){var t=this.props,e=t.imageUploadAdapter,n=t.adapterOptions;this.editor.plugins.get("FileRepository").createUploadAdapter=function(t){return new e(t,n)}}},{key:"attacheEvents",value:function(){this.onDataChange(),this.onImageUpload()}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,r=(e.value,e.options,e.adapterOptions,e.imageUploadAdapter,h(e,y));return o.a.createElement("div",b({ref:function(e){return t.root=e},"data-component":"react-ckeditor",className:c()("react-ckeditor",n)},r))}}])&&m(e.prototype,n),r&&m(e,r),a}(r.Component);x(k,"displayName","react-ckeditor"),x(k,"version","1.0.5"),x(k,"propTypes",{className:a.a.string,value:a.a.string,onChange:a.a.func,options:a.a.any,imageUploadAdapter:a.a.func,adapterOptions:a.a.object}),x(k,"defaultProps",{value:"",options:{},onChange:l.a,imageUploadAdapter:l.a});e.default=k}])}));
//# sourceMappingURL=index.js.map