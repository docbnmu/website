/*! For license information please see commons-667f10eb77424a1857b3.js.LICENSE.txt */
(self.webpackChunkdocbnmu=self.webpackChunkdocbnmu||[]).push([[351],{6156:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,{Z:function(){return r}})},1253:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(9756);function o(t,n){if(null==t)return{};var e,o,i=(0,r.Z)(t,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(o=0;o<u.length;o++)e=u[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},9756:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,{Z:function(){return r}})},9424:function(t,n,e){"use strict";var r=e(7294);n.Z=function(t){var n=(0,r.useRef)(t);return(0,r.useEffect)((function(){n.current=t}),[t]),n}},5655:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});var r=e(7294),o=e(9424);function i(t){var n=(0,o.Z)(t);return(0,r.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}},1822:function(t,n,e){"use strict";var r=e(7294),o=function(t){return t&&"function"!=typeof t?function(n){t.current=n}:t};n.Z=function(t,n){return(0,r.useMemo)((function(){return function(t,n){var e=o(t),r=o(n);return function(t){e&&e(t),r&&r(t)}}(t,n)}),[t,n])}},5900:function(t,n){var e;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var e=arguments[n];if(e){var i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)){if(e.length){var u=o.apply(null,e);u&&t.push(u)}}else if("object"===i)if(e.toString===Object.prototype.toString)for(var a in e)r.call(e,a)&&e[a]&&t.push(a);else t.push(e.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(e=function(){return o}.apply(n,[]))||(t.exports=e)}()},6594:function(t,n,e){"use strict";var r=e(6156),o=e(1253),i=e(5900),u=e.n(i),a=e(7294),c=e(9541),s=e(6306),f=e(5893),l=["bsPrefix","variant","size","active","className","type","as"];function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=a.forwardRef((function(t,n){var e=t.bsPrefix,r=t.variant,i=t.size,a=t.active,p=t.className,v=t.type,b=t.as,h=(0,o.Z)(t,l),y=(0,c.vE)(e,"btn"),E=u()(p,y,a&&"active",r&&"".concat(y,"-").concat(r),i&&"".concat(y,"-").concat(i));if(h.href)return(0,f.jsx)(s.Z,d(d({},h),{},{as:b,ref:n,className:u()(E,h.disabled&&"disabled")}));v||b||(v="button");var O=b||"button";return(0,f.jsx)(O,d(d({},h),{},{ref:n,type:v,className:E}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},n.Z=v},6306:function(t,n,e){"use strict";var r=e(6156),o=e(1253),i=e(7294),u=e(9758),a=e(5893),c=["as","disabled","onKeyDown"];function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t){return!t||"#"===t.trim()}var p=i.forwardRef((function(t,n){var e=t.as,r=void 0===e?"a":e,i=t.disabled,s=t.onKeyDown,p=(0,o.Z)(t,c),d=function(t){var n=p.href,e=p.onClick;(i||l(n))&&t.preventDefault(),i?t.stopPropagation():null==e||e(t)};return l(p.href)&&(p.role=p.role||"button",p.href=p.href||"#"),i&&(p.tabIndex=-1,p["aria-disabled"]=!0),(0,a.jsx)(r,f(f({ref:n},p),{},{onClick:d,onKeyDown:(0,u.Z)((function(t){" "===t.key&&(t.preventDefault(),d(t))}),s)}))}));p.displayName="SafeAnchor",n.Z=p},9541:function(t,n,e){"use strict";e.d(n,{vE:function(){return i}});var r=e(7294);e(5893);var o=r.createContext({});o.Consumer,o.Provider;function i(t,n){var e=(0,r.useContext)(o);return t||e[n]||n}},707:function(t,n,e){"use strict";e.d(n,{Z:function(){return d}});var r=e(6156),o=e(1253),i=e(7294),u=e(5160),a=e(3935);var c=e(1822),s=e(5893),f=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"];function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var d=i.forwardRef((function(t,n){var e=t.onEnter,r=t.onEntering,l=t.onEntered,d=t.onExit,v=t.onExiting,b=t.onExited,h=t.addEndListener,y=t.children,E=t.childRef,O=(0,o.Z)(t,f),m=(0,i.useRef)(null),g=(0,c.Z)(m,E),x=function(t){var n;g((n=t)&&"setState"in n?a.findDOMNode(n):null!=n?n:null)},j=function(t){return function(n){t&&m.current&&t(m.current,n)}},w=(0,i.useCallback)(j(e),[e]),P=(0,i.useCallback)(j(r),[r]),C=(0,i.useCallback)(j(l),[l]),S=(0,i.useCallback)(j(d),[d]),k=(0,i.useCallback)(j(v),[v]),Z=(0,i.useCallback)(j(b),[b]),D=(0,i.useCallback)(j(h),[h]);return(0,s.jsx)(u.ZP,p(p({ref:n},O),{},{onEnter:w,onEntered:C,onEntering:P,onExit:S,onExited:Z,onExiting:k,addEndListener:D,nodeRef:m,children:"function"==typeof y?function(t,n){return y(t,p(p({},n),{},{ref:x}))}:i.cloneElement(y,{ref:x})}))}))},9758:function(t,n){"use strict";n.Z=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return null!=t})).reduce((function(t,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?n:function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];t.apply(this,r),n.apply(this,r)}}),null)}},8870:function(t,n,e){"use strict";e.d(n,{Z:function(){return b}});var r=e(6156),o=e(1253),i=e(5900),u=e.n(i),a=/-(.)/g;var c=e(7294),s=e(9541),f=e(5893),l=["className","bsPrefix","as"];function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){(0,r.Z)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var v=function(t){return t[0].toUpperCase()+(n=t,n.replace(a,(function(t,n){return n.toUpperCase()}))).slice(1);var n};function b(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.displayName,r=void 0===e?v(t):e,i=n.Component,a=n.defaultProps,p=c.forwardRef((function(n,e){var r=n.className,a=n.bsPrefix,c=n.as,p=void 0===c?i||"div":c,v=(0,o.Z)(n,l),b=(0,s.vE)(a,t);return(0,f.jsx)(p,d({ref:e,className:u()(r,b)},v))}));return p.defaultProps=a,p.displayName=r,p}},1714:function(t,n,e){"use strict";e.d(n,{Z:function(){return v}});var r=e(5175),o=!("undefined"==typeof window||!window.document||!window.document.createElement),i=!1,u=!1;try{var a={get passive(){return i=!0},get once(){return u=i=!0}};o&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(b){}var c=function(t,n,e,r){if(r&&"boolean"!=typeof r&&!u){var o=r.once,a=r.capture,c=e;!u&&o&&(c=e.__once||function t(r){this.removeEventListener(n,t,a),e.call(this,r)},e.__once=c),t.addEventListener(n,c,i?r:a)}t.addEventListener(n,e,r)};var s=function(t,n,e,r){var o=r&&"boolean"!=typeof r?r.capture:r;t.removeEventListener(n,e,o),e.__once&&t.removeEventListener(n,e.__once,o)};var f=function(t,n,e,r){return c(t,n,e,r),function(){s(t,n,e,r)}};function l(t,n,e){void 0===e&&(e=5);var r=!1,o=setTimeout((function(){r||function(t,n,e,r){if(void 0===e&&(e=!1),void 0===r&&(r=!0),t){var o=document.createEvent("HTMLEvents");o.initEvent(n,e,r),t.dispatchEvent(o)}}(t,"transitionend",!0)}),n+e),i=f(t,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),i()}}function p(t,n,e,o){var i,u,a;null==e&&(i=t,u=(0,r.Z)(i,"transitionDuration")||"",a=-1===u.indexOf("ms")?1e3:1,e=parseFloat(u)*a||0);var c=l(t,e,o),s=f(t,"transitionend",n);return function(){c(),s()}}function d(t,n){var e=(0,r.Z)(t,n)||"",o=-1===e.indexOf("ms")?1e3:1;return parseFloat(e)*o}function v(t,n){var e=d(t,"transitionDuration"),r=d(t,"transitionDelay"),o=p(t,(function(e){e.target===t&&(o(),n(e))}),e+r)}},9059:function(t,n,e){"use strict";function r(t){t.offsetHeight}e.d(n,{Z:function(){return r}})},5160:function(t,n,e){"use strict";e.d(n,{cn:function(){return p},d0:function(){return l},Wj:function(){return f},Ix:function(){return d},ZP:function(){return h}});var r=e(9756),o=e(3552),i=e(7294),u=e(3935),a=!1,c=i.createContext(null),s="unmounted",f="exited",l="entering",p="entered",d="exiting",v=function(t){function n(n,e){var r;r=t.call(this,n,e)||this;var o,i=e&&!e.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?i?(o=f,r.appearStatus=l):o=p:o=n.unmountOnExit||n.mountOnEnter?s:f,r.state={status:o},r.nextCallback=null,r}(0,o.Z)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===s?{status:f}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==l&&e!==p&&(n=l):e!==l&&e!==p||(n=d)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,r=this.props.timeout;return t=n=e=r,null!=r&&"number"!=typeof r&&(t=r.exit,n=r.enter,e=void 0!==r.appear?r.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){void 0===t&&(t=!1),null!==n?(this.cancelNextCallback(),n===l?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:s})},e.performEnter=function(t){var n=this,e=this.props.enter,r=this.context?this.context.isMounting:t,o=this.props.nodeRef?[r]:[u.findDOMNode(this),r],i=o[0],c=o[1],s=this.getTimeouts(),f=r?s.appear:s.enter;!t&&!e||a?this.safeSetState({status:p},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,c),this.safeSetState({status:l},(function(){n.props.onEntering(i,c),n.onTransitionEnd(f,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(i,c)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),r=this.props.nodeRef?void 0:u.findDOMNode(this);n&&!a?(this.props.onExit(r),this.safeSetState({status:d},(function(){t.props.onExiting(r),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(r)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(r)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(r){e&&(e=!1,n.nextCallback=null,t(r))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:u.findDOMNode(this),r=null==t&&!this.props.addEndListener;if(e&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],i=o[0],a=o[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===s)return null;var n=this.props,e=n.children,o=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,r.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(c.Provider,{value:null},"function"==typeof e?e(t,o):i.cloneElement(i.Children.only(e),o))},n}(i.Component);function b(){}v.contextType=c,v.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b},v.UNMOUNTED=s,v.EXITED=f,v.ENTERING=l,v.ENTERED=p,v.EXITING=d;var h=v},124:function(t,n,e){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,{Ch:function(){return c}});var o=e(9756),i=e(7294);e(1143);function u(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function a(t){var n=function(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}function c(t,n){return Object.keys(n).reduce((function(e,c){var s,f=e,l=f[u(c)],p=f[c],d=(0,o.Z)(f,[u(c),c].map(a)),v=n[c],b=function(t,n,e){var r=(0,i.useRef)(void 0!==t),o=(0,i.useState)(n),u=o[0],a=o[1],c=void 0!==t,s=r.current;return r.current=c,!c&&s&&u!==n&&a(n),[c?t:u,(0,i.useCallback)((function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e&&e.apply(void 0,[t].concat(r)),a(t)}),[e])]}(p,l,t[v]),h=b[0],y=b[1];return r({},d,((s={})[c]=h,s[v]=y,s))}),t)}e(3639)},5175:function(t,n,e){"use strict";function r(t){var n=function(t){return t&&t.ownerDocument||document}(t);return n&&n.defaultView||window}e.d(n,{Z:function(){return c}});var o=/([A-Z])/g;var i=/^ms-/;function u(t){return function(t){return t.replace(o,"-$1").toLowerCase()}(t).replace(i,"-ms-")}var a=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var c=function(t,n){var e="",o="";if("string"==typeof n)return t.style.getPropertyValue(u(n))||function(t,n){return r(t).getComputedStyle(t,n)}(t).getPropertyValue(u(n));Object.keys(n).forEach((function(r){var i=n[r];i||0===i?!function(t){return!(!t||!a.test(t))}(r)?e+=u(r)+": "+i+";":o+=r+"("+i+") ":t.style.removeProperty(u(r))})),o&&(e+="transform: "+o+";"),t.style.cssText+=";"+e}}}]);
//# sourceMappingURL=commons-667f10eb77424a1857b3.js.map