(self.wpJsonpPcmallRcmd=self.wpJsonpPcmallRcmd||[]).push([[6972],{96972:function(t,e,r){"use strict";r.d(e,{q:function(){return V},U:function(){return $}});var n=r(63804),o=r(95325),i=r(40648),a=r(86704),u=r(36270),c=a.FetchUtils.fetchInfo;function s(t){return c(""+u.bp+t)}var l,f=r(66302),p=r(99508),d=r(61420),h=r(81404),v=(0,h.n)("FETCH_TOP_PRODUCT_CLUSTERS"),y=(0,h.n)("FETCH_TOP_PRODUCT_CLUSTER_ITEMS"),m="SET_TOP_PRODUCT_CLUSTERS",g=function(t){return t.BEST_SELLING="best_selling_sec",t.BEST_PRICE="best_price_sec",t}({}),E=((l={})[u.Hk.SALES]=g.BEST_SELLING,l[u.Hk.PRICE]=g.BEST_PRICE,l),S="top_products_homepage",_="top_products_landing_page",w=20,I=30,T=["list"];function L(t){var e=((0,p.Z)(t,["data","sections"])||[]).find((function(t){return t.key===g.BEST_SELLING})),r=(0,p.Z)(e,["index"])||[],n=(0,p.Z)(e,["data","top_product"])||[];return r.map((function(t){return n.find((function(e){return e.key===t.key}))})).filter(Boolean).map((function(t){return t.list,function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,T)}))}var k={total:0,key:"",index:[],data:{item:[]}};function x(t,e,r){var n=((0,p.Z)(t,["data","sections"])||[]).find((function(t){return t.key===e})),o=((0,p.Z)(n,["data","top_product"])||[]).find((function(t){return t.knodeid===r})),i=(0,p.Z)(o,["list"])||k,a=(0,p.Z)(i,["index"])||[],u=(0,p.Z)(i,["data","item"])||[],c=a.map((function(t){return u.find((function(e){return e.key===t.key}))})).filter(Boolean);return{total:i.total,data:c}}var b=6e4;function Z(t){return function(e){var r=t(e),n=Date.now();return!r||r.progress===d.Z.REQ||r.last_update_time+b>n}}function O(t,e){var r=e.section,n=e.knodeid;return function(e){var o=t(e);if(!o||o.progress!==d.Z.OK)return!0;var i=((0,p.Z)(o,["data",r,"clusterItems"])||{})[n];return!!i&&i.progress===d.Z.REQ}}function C(t){var e=t.limit,r=void 0===e?w:e,n=t.getStore,o=t.onFinish,a=t.shouldSkipCall,u=(0,f.Wc)({bundle:S,limit:r});return(0,i.Z)({apiCall:function(){return s(u)},actions:[function(){return{type:v.REQUESTED}},function(t,e){return{type:v.SUCCESS,payload:{clusters:L(e)}}},function(t,e){return{type:v.FAILED,payload:{error:e.error}}}],shouldSkipCall:n&&!a?Z(n):a,onFinish:o})}function R(t){var e=t.sortType,r=t.knodeid,n=t.itemOffset,o=t.itemLimit,a=t.getStore,u=t.onFinish,c=t.shouldSkipCall,l=E[e],p={bundle:_,section:l,knodeid:r,limit:w};n&&(p.l2_offset=n||0),o&&(p.l2_limit=o||I);var d=(0,f.Wc)(p);return(0,i.Z)({apiCall:function(){return s(d)},actions:[function(){return{type:y.REQUESTED,payload:{type:l,knodeid:r}}},function(t,e){return{type:y.SUCCESS,payload:{type:l,knodeid:r,clusterItems:x(e,l,r)}}},function(t,e){return{type:y.FAILED,payload:{type:l,knodeid:r,error:e.error}}}],shouldSkipCall:a&&!c?O(a,{section:l,knodeid:r}):c,onFinish:u})}function P(t,e){return{type:m,payload:{clusters:t,lastUpdateTime:e}}}var j,U=r(21936);function N(){return N=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},N.apply(this,arguments)}var D={last_update_time:0,progress:d.Z.INIT,data:{}},F={clusters:[],clusterItems:{}},G={progress:d.Z.INIT,total:0,data:[]},A=(0,U.Z)(((j={})[v.REQUESTED]=function(t){return N({},t,{progress:d.Z.REQ})},j[v.SUCCESS]=function(t,e){var r,n=e.payload.clusters.map((function(t){return N({},t,{progress:d.Z.INIT})}));return N({},t,{progress:d.Z.OK,last_update_time:Date.now(),data:(r={},r[g.BEST_SELLING]={clusters:n,clusterItems:{}},r[g.BEST_PRICE]={clusters:n,clusterItems:{}},r)})},j[v.FAILED]=function(t,e){var r=e.payload.error;return N({},t,{progress:d.Z.ERR,error:r})},j[y.REQUESTED]=function(t,e){var r,n,o=e.payload,i=o.type,a=o.knodeid,u=(0,p.Z)(t,["data",i])||F,c=(0,p.Z)(u,["clusterItems",a])||G;return N({},t,{data:N({},t.data,(n={},n[i]=N({},u,{clusterItems:N({},u.clusterItems,(r={},r[a]=N({},c,{progress:d.Z.REQ}),r))}),n))})},j[y.SUCCESS]=function(t,e){var r,n,o=e.payload,i=o.type,a=o.knodeid,u=o.clusterItems,c=(0,p.Z)(t,["data",i])||F;return N({},t,{data:N({},t.data,(n={},n[i]=N({},c,{clusterItems:N({},c.clusterItems,(r={},r[a]=N({},u,{progress:d.Z.OK}),r))}),n))})},j[y.FAILED]=function(t,e){var r,n,o=e.payload,i=o.type,a=o.knodeid,u=o.error,c=(0,p.Z)(t,["data",i])||F,s=(0,p.Z)(c,["clusterItems",a])||G;return N({},t,{data:N({},t.data,(n={},n[i]=N({},c,{clusterItems:N({},c.clusterItems,(r={},r[a]=N({},s,{progress:d.Z.ERR,error:u}),r))}),n))})},j[m]=function(t,e){var r,n=e.payload,o=n.clusters,i=n.lastUpdateTime;return N({},t,{progress:d.Z.OK,last_update_time:i,data:(r={},r[g.BEST_SELLING]={clusters:o,clusterItems:{}},r[g.BEST_PRICE]={clusters:o,clusterItems:{}},r)})},j),D);function B(t,e){var r=e.sortType,n=void 0===r?u.Hk.SALES:r,o=E[n];return t&&(0,p.Z)(t,["data",o,"clusters"])}function Q(t){return t?t.progress:d.Z.INIT}function H(t,e){var r=e.sortType,n=e.knodeid,o=E[r];return t?(0,p.Z)(t,["data",o,"clusterItems",n]):null}var K=[],X=r(50949),J=r(57762),W=r(14590);function Y(){Y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(b){c=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new L(o||[]);return n(a,"_invoke",{value:_(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(b){return{type:"throw",arg:b}}}t.wrap=s;var f={};function p(){}function d(){}function h(){}var v={};c(v,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(k([])));m&&m!==e&&r.call(m,i)&&(v=m);var g=h.prototype=p.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function o(n,i,a,u){var c=l(t[n],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function _(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=w(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function w(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=h,n(g,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},E(S.prototype),c(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function q(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function M(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){q(i,n,o,a,u,"next",t)}function u(t){q(i,n,o,a,u,"throw",t)}a(void 0)}))}}var z=W.X.isSupported();function V(t){var e=n.useContext(J.InjectReducerContext).injectAsyncReducer,r=(0,o.useDispatch)();(0,X.u)((function(){var r;e(((r={})[t]=A,r))}),[]);var i=n.useCallback((function(e){return e[t]}),[t]);n.useEffect((function(){if(z){var t=W.X.get(u.nO);t&&r(P(t.clusters,t.lastUpdateTime))}}),[r]),(0,X.u)(M(Y().mark((function t(){return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(C({getStore:i}));case 2:case"end":return t.stop()}}),t)}))),[]);var a=(0,o.useSelector)(i),c=Q(a),s=function(t){return t?t.last_update_time:0}(a),l=B(a,{sortType:u.Hk.SALES});return n.useEffect((function(){z&&l&&"number"==typeof s&&W.X.set(u.nO,{clusters:l,lastUpdateTime:s})}),[l,s]),{progress:c,clusters:l}}function $(t){var e=t.reduxKey,r=t.sortType,i=t.clusterId,a=n.useCallback((function(t){return t[e]}),[e]),c=(0,o.useDispatch)(),s=n.useContext(J.InjectReducerContext).injectAsyncReducer;(0,X.u)((function(){var t;s(((t={})[e]=A,t))}),[]),n.useEffect((function(){if(z){var t=W.X.get(u.nO);t&&c(P(t.clusters,t.lastUpdateTime))}}),[c]);var l=(0,o.useSelector)(a),f={sortType:r,knodeid:i||""},p=Q(l),h=B(l,{sortType:r}),v=function(t,e){var r=H(t,e);return r?r.progress:d.Z.INIT}(l,f),y=function(t,e){var r=H(t,e);return r?r.total:0}(l,f),m=function(t,e){var r=H(t,e);return r?r.data:K}(l,f);return(0,X.u)(M(Y().mark((function t(){return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p!==d.Z.INIT&&p!==d.Z.ERR){t.next=3;break}return t.next=3,c(C({getStore:a,shouldSkipCall:tt(a)}));case 3:case"end":return t.stop()}}),t)}))),[p,a]),(0,X.u)(M(Y().mark((function t(){return Y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i){t.next=3;break}return t.next=3,c(R({sortType:r,knodeid:i,getStore:a}));case 3:case"end":return t.stop()}}),t)}))),[i,p,a,r]),{clustersProgress:p,clusters:h,itemsProgress:v,itemsTotal:y,itemsData:m}}function tt(t){return function(e){return Q(t(e))===d.Z.OK}}}}]);
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-rcmd/_/6972.cce90590e8c933f02673.legacy.js.map