(self.wpJsonpPcmallRcmd=self.wpJsonpPcmallRcmd||[]).push([[8096],{67829:function(t,e,n){"use strict";n.d(e,{_8:function(){return r},C8:function(){return a}});var r="#EE4D2D",a="#066BC8"},40648:function(t,e,n){"use strict";function r(){r=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),c=new R(r||[]);return a(i,"_invoke",{value:O(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(L){return{type:"throw",arg:L}}}t.wrap=d;var f={};function _(){}function p(){}function m(){}var g={};l(g,i,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(T([])));v&&v!==e&&n.call(v,i)&&(g=v);var y=m.prototype=_.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(a,o,i,c){var u=s(t[a],t,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function O(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function T(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=m,a(y,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:p,configurable:!0}),p.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(d(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,u,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;I(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function a(t,e,n,r,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,a)}e.Z=function(t){return function(){var e,n=(e=r().mark((function e(n,a){var o,i,c,u,l,d,s,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.apiCall,i=t.actions,c=i[0],u=i[1],l=i[2],d=t.shouldSkipCall,s=t.onFinish,"function"!=typeof d||!d(a())){e.next=4;break}return s&&s(),e.abrupt("return",null);case 4:if("function"!=typeof c){e.next=12;break}return e.t0=n,e.next=8,c(a());case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(c);case 13:return e.next=15,o();case 15:if(!(f=e.sent).error&&0!==f.error){e.next=24;break}return e.t2=n,e.next=20,l(a(),f);case 20:e.t3=e.sent,(0,e.t2)(e.t3),e.next=29;break;case 24:return e.t4=n,e.next=27,u(a(),f.response);case 27:e.t5=e.sent,(0,e.t4)(e.t5);case 29:return s&&s(),e.abrupt("return",f);case 31:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(t){a(i,r,o,c,u,"next",t)}function u(t){a(i,r,o,c,u,"throw",t)}c(void 0)}))});return function(t,e){return n.apply(this,arguments)}}()}},15806:function(t,e,n){"use strict";function r(t,e){return function(n,r){return void 0===n&&(n=e),r&&t.hasOwnProperty(r.type)?t[r.type](n,r):n}}n.d(e,{Z:function(){return r}})},20985:function(t,e,n){"use strict";n.d(e,{fp:function(){return T},aN:function(){return b},zP:function(){return F},WO:function(){return w},l_:function(){return x},Vx:function(){return U},KM:function(){return L},NU:function(){return D}});var r=n(40648),a=n(66302),o=n(12982),i=n(98902),c=(0,i.n)("FETCH_DAILY_DISCOVER_MAIN"),u=(0,i.n)("DAILY_DISCOVER_MAIN_REMOVE_ITEM"),l={1:"free-gifts",2:"exclusive-deals"},d=function(t){return t.Item="item",t.Ads="ads",t.Collection="collection",t.TopProduct="top_product",t.Keyword="keyword",t.L2Cat="l2cat",t.Shop="shop",t.Knode="knode",t.Food="food_item",t.Livestream="stream",t.Video="video",t}({}),s={SG:{all_tab_config:{display_text:"All",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}},ID:{all_tab_config:{display_text:"Semua",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}},MY:{all_tab_config:{display_text:"All",tab_image:"439e072505267a0ee1697ffdd38f886b",text_color:"#ee4d2d"}},PH:{all_tab_config:{display_text:"All",tab_image:"f0c0b4f654ffde3b97edb9468b7782d5",text_color:"#ee4d2d"}},TH:{all_tab_config:{display_text:"สินค้าแนะนำ",tab_image:"7cb98aae24d04ff82ef2ee8879dbca33",text_color:"#ee4d2d"}},TW:{all_tab_config:{display_text:"全部",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}},VN:{all_tab_config:{display_text:"Tất cả",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}},BR:{all_tab_config:{display_text:"Tudo",tab_image:"0668017f080a7aa5c62a32cff930bd5b",text_color:"#000000"}},MX:{all_tab_config:{display_text:"Todo",tab_image:"c914bd47df5c1905e77af69092f05501",text_color:"#ee4d2d"}},CO:{all_tab_config:{display_text:"Todo",tab_image:"c914bd47df5c1905e77af69092f05501",text_color:"#ee4d2d"}},CL:{all_tab_config:{display_text:"Todo",tab_image:"c914bd47df5c1905e77af69092f05501",text_color:"#ee4d2d"}},AR:{all_tab_config:{display_text:"Todos",tab_image:"3625beb950f8e8e7d4e253c933c2f169",text_color:"#ee4d2d"}},PL:{all_tab_config:{display_text:"Wszystkie",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}},ES:{all_tab_config:{display_text:"Todo",tab_image:"c914bd47df5c1905e77af69092f05501",text_color:"#ee4d2d"}},FR:{all_tab_config:{display_text:"TOUT",tab_image:"c914bd47df5c1905e77af69092f05501",text_color:"#ee4d2d"}},IN:{all_tab_config:{display_text:"All",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}},default:{all_tab_config:{display_text:"All",tab_image:"8605794b554a56fbd45124ab53f87ca7",text_color:"#ee4d2d"}}},f=n(60870);function _(){return _=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_.apply(this,arguments)}function p(t){return t?{name:t.display_text,color:t.text_color,imageForPC:t.pc_image,imageForApp:t.tab_image,label:t.product_label,recommendType:t.algo_type||0}:{}}function m(t){var e,n=t.headers,r=null!=(e=null==t?void 0:t.data)?e:{},a=r.update_time,o=r.sections,i=void 0===o?[]:o,c=r.version,u=r.tab_meta_data,s=r.user_meta_data,f=i.find((function(t){return"dd_main_sec"===t.key}));if(!f)return v(a,c);var m,g,y,b=f.index,E=f.data,O=f.total,S=(m=u)?{tabConfig:{all:p(m.all_tab_config),campaign:null!=(g=null===(y=m.campaign_tabs)||void 0===y?void 0:y.map(p))?g:[],shouldHideTabs:Boolean(m.should_hide_tabs)}}:{};return _({},function(t){var e=t.index,n=t.data,r=t.total,a=t.update_time,o=t.version;if(!e||!n)return v(a,o);var i=[];return e.forEach((function(t){var e=function(t,e){var n,r,a,o,i,c=e.data_type,u=(t&&t[c]||[]).find((function(t){return t.key===e.key}));switch(c){case d.Collection:return u?(r=(n=u).key,a=n.collection_id,o=n.collectionid,{key:r,collectionId:a||o,name:n.name,image:n.page_template_image,images:void 0===(i=n.images)?[]:i,sold:n.sold,recommendation_info:n.info,recommendation_algorithm:n.from,data_type:n.data_type}):void 0;case d.Knode:return u?function(t){var e=t.data_type,n=t.name,r=t.label,a=t.key,o=t.knodeid,i=t.images,c=t.info,u=t.count,l=t.item_count,d=void 0===l?0:l;return{data_type:e,name:n,label:r,key:a,knodeid:o,image:i?i[0]:null,images:i,count:u,item_count:d,recommendation_algorithm:"",recommendation_info:c}}(u):void 0;case d.TopProduct:return u?function(t){var e=t.key,n=t.intentionid,r=t.label,a=t.name,o=t.images,i=t.count,c=t.info,u=t.from,l=t.data_type;return{key:e,count:i,topProductId:n||r||"",name:a,image:o?o[0]:null,sold:i,recommendation_info:c,recommendation_algorithm:u,data_type:l}}(u):void 0;case d.Item:return u?function(t){var e;if(null===(e=t.product_banners)||void 0===e||!e.length)return t;var n=t.product_banners[0];if(0===n.priority){var r=t.wp_eligibility?l[t.wp_eligibility.wp_type]:null,a=r?"rn/@shopee-rn/welcome-package/WELCOME_PACKAGE_PAGE?type="+r:"rn/@shopee-rn/welcome-package/WELCOME_PACKAGE_PAGE";return _({},h(t),{item_bottom_label:_({},n,{url:a,targetType:"NEW_USER_LABEL"})})}if(1===n.priority&&t.top_product_label){var o=t.top_product_label,i=o.knodeid,c=o.top_product_type,u=void 0===c?1:c,d=o.section,s=void 0===d?"dd_tsp_item_sec":d;return i?_({},t,{item_bottom_label:_({},n,{url:"rn/@shopee-rn/recommendation/DAILY_DISCOVER_TOP_PRODUCTS?intentionId="+encodeURIComponent(i)+"&sortType="+u+"&section="+s,targetType:"TOP_PRODUCT_BANNER"})}):t}}(u):void 0;default:return u}}(n,t);e&&i.push(e)})),{update_time:a,sections:{dd_main_sec:{total:r,data:i}}}}({index:b,data:E,total:O,update_time:a,version:c}),S,{requestId:n.get("x-request-id"),user_meta_data:s})}function g(t){var e=t.data.tab_meta_data;return{all:y(e&&e.all_tab_config),campaign:(e&&e.campaign_tabs||[]).map((function(t){return t?y(t):{}})),shouldHideTabs:Boolean(null==e?void 0:e.should_hide_tabs)}}var h=function(t){return _({},t,{label_ids:t.label_ids||[]})};function v(t,e){return{update_time:t||0,version:e||void 0,sections:{dd_main_sec:{total:0,data:[]}}}}function y(t){var e=(0,f.Kd)();if(!t){var n=s[""+e].all_tab_config||s.default.all_tab_config;return{name:n.display_text,color:n.text_color,imageForApp:n.tab_image,imageForPC:n.tab_image}}return{name:t.display_text,color:t.text_color,imageForPC:t.pc_image,imageForApp:t.tab_image,label:t.product_label,recommendType:t.algo_type||0}}function b(t){var e=t.limit,n=t.offset,i=t.latitude,u=t.longitude,l=t.division_info_list,d=t.itemCardStyle,s=t.onFinish,f=t.shouldSkipCall,_=t.shouldReset,p=t.isFriendVisible,h=t.layout_track_id,v=t.treatment_group,y=t.treatment_toggle,b=t.view_session_id,E=(0,a.Wc)({bundle:"daily_discover_main",limit:e,offset:n,latitude:i,longitude:u,division_info_list:l,item_card:d,friend_visible:p,layout_track_id:h,treatment_group:v,treatment_toggle:y,view_session_id:b});return(0,r.Z)({apiCall:function(){return function(t){return(0,o.fetchInfo)("/api/v4/recommend/recommend"+t)}(E)},actions:[function(){return{type:c.REQUESTED}},function(t,r){return{type:c.SUCCESS,payload:{offset:n,limit:e,data:m(r),tabConfig:g(r),shouldReset:_}}},function(t,e){return{type:c.FAILED,payload:{error:e.error}}}],shouldSkipCall:f,onFinish:s})}var E,O=n(15806),S=n(4371),C=n(61420);function I(){return I=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},I.apply(this,arguments)}var R={nextOffset:0,progress:C.Z.INIT,error:0,requestId:""},T=(0,O.Z)(((E={})[c.REQUESTED]=function(t){return I({},t,{progress:C.Z.REQ})},E[c.SUCCESS]=function(t,e){var n=e.payload,r=n.data,a=n.tabConfig,o=n.rnTabConfig,i=n.offset,c=n.limit,u=n.shouldReset,l=t.data||r;return I({},t,{data:I({},l,{update_time:Number(Date.now()),sections:I({},l.sections,{dd_main_sec:I({},l.sections.dd_main_sec,{data:u?r.sections.dd_main_sec.data:(0,S.Z)(t.data?t.data.sections.dd_main_sec.data:[],r.sections.dd_main_sec.data,i)})})}),nextOffset:(i||0)+(c||0),tabConfig:a||t.tabConfig,rnTabConfig:o||t.rnTabConfig,progress:C.Z.OK,requestId:r.requestId||"",userMetaData:r.user_meta_data})},E[c.FAILED]=function(t,e){return I({},t,{error:e.payload.error,progress:C.Z.ERR})},E[u.SUCCESS]=function(t,e){var n,r=e.data,a=r.item_id,o=r.shop_id,i=r.data_type,c=t.data,u=((null==c||null===(n=c.sections)||void 0===n?void 0:n.dd_main_sec.data)||[]).filter((function(t){return!(t.data_type===i&&t.shopid===o&&t.itemid===a)}));return I({},t,{data:I({},c,{sections:I({},null==c?void 0:c.sections,{dd_main_sec:{total:(null==c?void 0:c.sections.dd_main_sec.total)||0,data:u}})})})},E[u.FAILED]=function(t,e){var n,r=e.data,a=r.item_id,o=r.shop_id,i=r.data_type,c=t.data,u=((null==c||null===(n=c.sections)||void 0===n?void 0:n.dd_main_sec.data)||[]).filter((function(t){return!(t.data_type===i&&t.shopid===o&&t.itemid===a)}));return I({},t,{data:I({},c,{sections:I({},null==c?void 0:c.sections,{dd_main_sec:{total:(null==c?void 0:c.sections.dd_main_sec.total)||0,data:u}})})})},E),R),A=[];function L(t,e){if(!t||!t.data)return A;if(!e||!e.limit&&!e.offset)return t.data.sections.dd_main_sec.data;var n=e.offset,r=void 0===n?0:n,a=e.limit;return t.data.sections.dd_main_sec.data.slice(r,"number"==typeof a?a+r:void 0)}function P(t){return!!t.data_type&&[d.Item,d.Ads].includes(t.data_type)}function x(t,e){return L(t,e).filter(P)}function D(t){return t&&t.data?t.data.sections.dd_main_sec.total:0}function F(t){return t&&t.tabConfig?t.tabConfig.all:null}function w(t){return t&&t.tabConfig?t.tabConfig.campaign:null}function U(t){return t?t.progress:C.Z.INIT}},78142:function(t,e,n){"use strict";n.d(e,{zZ:function(){return v},Gn:function(){return f},zP:function(){return b},hU:function(){return E},uG:function(){return y}});var r=n(59668),a=n(99508);function o(t){return t?{name:t.display_text,color:t.text_color,imageForPC:t.pc_image,imageForApp:t.tab_image,label:t.product_label,recommendType:t.algo_type||0}:{}}var i=n(12982),c=n(82074),u=(0,c.n)("FETCH_DAILY_DISCOVER_TAB_CONFIG"),l=(0,c.n)("FETCH_DAILY_DISCOVER_PERSONALIZED_TABS"),d=(0,c.n)("FETCH_DAILY_DISCOVER_COLLECTIONS"),s=(0,c.n)("FETCH_DAILY_DISCOVER_TOP_PRODUCTS");function f(t){var e=t.shouldSkipCall;return(0,r.Z)({apiCall:function(){return(0,i.fetchInfo)("/api/v2/cms/daily_discover_config")},actions:[function(){return{type:u.REQUESTED}},function(t,e){var n=(0,a.Z)(e,["data","all_tab_config"]),r=(0,a.Z)(e,["data","campaign_tabs"],[]);return{type:u.SUCCESS,data:{all:o(n),campaign:r.map((function(t){return o(t)}))}}},function(t,e){return{type:u.FAILED,data:e.error}}],shouldSkipCall:function(t){return"function"==typeof e&&e(t)}})}var _,p=n(98953),m=n(72108);function g(){return g=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},g.apply(this,arguments)}var h={collections:[],topProducts:[],personalizedTabs:{error:0,loading:!1,categories:[]},tabConfig:{error:0,fetchStatus:m.Z.INIT,config:{all:{},campaign:[]}}},v=(0,p.Z)(((_={})[u.REQUESTED]=function(t){return g({},t,{tabConfig:g({},t.tabConfig,{fetchStatus:m.Z.REQ,error:0})})},_[u.SUCCESS]=function(t,e){return g({},t,{tabConfig:{config:e.data,fetchStatus:m.Z.OK,error:0}})},_[u.FAILED]=function(t,e){return g({},t,{tabConfig:{config:g({all:{},campaign:[]},(0,a.Z)(t,["tabConfig","config"])),fetchStatus:m.Z.ERR,error:e.data}})},_[l.REQUESTED]=function(t){return g({},t,{personalizedTabs:g({},t.personalizedTabs,{loading:!0,error:0})})},_[l.SUCCESS]=function(t,e){return g({},t,{personalizedTabs:{loading:!1,error:0,categories:e.data}})},_[l.FAILED]=function(t,e){return g({},t,{personalizedTabs:{loading:!1,error:e.data,categories:[]}})},_[d.REQUESTED]=function(t){return g({},t,{collections:[]})},_[d.SUCCESS]=function(t,e){return g({},t,{collections:e.data})},_[s.REQUESTED]=function(t){return g({},t,{topProducts:[]})},_[s.SUCCESS]=function(t,e){return g({},t,{topProducts:e.data})},_),h);function y(t){return(0,a.Z)(t,["tabConfig","fetchStatus"],m.Z.INIT)}function b(t){return(0,a.Z)(t,["tabConfig","config","all"])}function E(t){var e=function(t){return(0,a.Z)(t,["tabConfig","config","campaign"])}(t);return e?e[0]:void 0}},35841:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(63804),a=n(79235),o=n(19253),i=function(t){var e=t.customHeader;return r.createElement("img",{src:(0,a.Jn)(e.image),style:{width:e.display_width?(0,o.Z)(e.display_width):"auto",height:e.display_height?(0,o.Z)(e.display_height):"auto"}})},c=function(t){var e=t.headerText,n=t.customHeader;return n?n.image?r.createElement(i,{customHeader:{image:n.image,display_width:n.display_width,display_height:n.display_height}}):r.createElement("span",{style:{color:n.color||void 0}},e):r.createElement(r.Fragment,null,e)||null}},83920:function(t,e,n){"use strict";n.d(e,{Au:function(){return r.Au}}),n(71437),(0,n(98902).n)("FETCH_FEATURE_TOGGLES"),n(63804),n(95325),n(54703),n(15936);var r=n(29918)},29918:function(t,e,n){"use strict";n.d(e,{Au:function(){return a}});var r=n(99508);function a(t,e,n){return void 0===n&&(n=!1),(0,r.Z)(t,["toggles",e],n)}n(54703)},1024:function(t,e,n){"use strict";n.d(e,{u:function(){return r}});var r={FLASH_SALE:"FLASH_SALE",CATEGORY:"CATEGORY",GROUP_BUY:"GROUP_BUY",OFFICIAL_MALL:"OFFICIAL_MALL",TRENDING_SEARCH:"TRENDING_SEARCH",TOP_PRODUCTS:"TOP_PRODUCTS",COLLECTIONS:"COLLECTIONS",DAILY_DISCOVER:"DAILY_DISCOVER",DAILY_DISCOVER_CAMPAIGN:"DAILY_DISCOVER_CAMPAIGN",LIVE_STREAMING:"LIVE_STREAMING"}},60870:function(t,e,n){"use strict";function r(){return self.__LOCALE__}n.d(e,{Kd:function(){return r}}),n(38173),n(98072),n(63804),n(28401)},22889:function(t,e,n){"use strict";n.d(e,{D4:function(){return r},dY:function(){return a},dF:function(){return o},tW:function(){return i},of:function(){return c}});var r="topProductWeb",a="topProductMicrosite",o="recommendItem",i="dailyDiscoverMain",c="dailyDiscoverCampaign"},98902:function(t,e,n){"use strict";function r(t){return{NAME:""+t,REQUESTED:t+"_REQUESTED",SUCCESS:t+"_SUCCESS",FAILED:t+"_FAILED"}}n.d(e,{n:function(){return r}})},9748:function(t,e,n){"use strict";n.d(e,{P:function(){return r}});var r=function(t){return t[t.SIMILAR_PRODUCTS=0]="SIMILAR_PRODUCTS",t[t.CATEGORY=1]="CATEGORY",t[t.COUNTRY=2]="COUNTRY",t[t.SIMILAR_ITEM=3]="SIMILAR_ITEM",t[t.POPULAR=4]="POPULAR",t[t.DAILY_DISCOVER=5]="DAILY_DISCOVER",t[t.OFFICIAL_SHOP=6]="OFFICIAL_SHOP",t[t.OFFICIAL_SHOP_POPULAR=7]="OFFICIAL_SHOP_POPULAR",t[t.TRENDING_SEARCHES=8]="TRENDING_SEARCHES",t[t.FROM_SAME_SHOP=9]="FROM_SAME_SHOP",t[t.SHOPPING_CART=10]="SHOPPING_CART",t[t.RECENTLY_VIEWED=11]="RECENTLY_VIEWED",t[t.YMAL=16]="YMAL",t[t.FIND_SIMILAR_PRODUCTS_FROM_ITEM_CARD=17]="FIND_SIMILAR_PRODUCTS_FROM_ITEM_CARD",t[t.FIND_SIMILAR_PRODUCTS_FROM_SHOPPING_CART=18]="FIND_SIMILAR_PRODUCTS_FROM_SHOPPING_CART",t[t.SIMILAR_PRODUCT_S_MART=19]="SIMILAR_PRODUCT_S_MART",t[t.JUST_FOR_YOU_1111=22]="JUST_FOR_YOU_1111",t[t.SHOP_FOR_YOU_1111=23]="SHOP_FOR_YOU_1111",t[t.BIG_SALE_11_11=26]="BIG_SALE_11_11",t[t.ORDER_PAID=24]="ORDER_PAID",t[t.SIMILAR_PRODUCTS_FROM_PRODUCT_DETAIL=27]="SIMILAR_PRODUCTS_FROM_PRODUCT_DETAIL",t[t.JUST_FOR_YOU_SHOP_FLASH_SALE=28]="JUST_FOR_YOU_SHOP_FLASH_SALE",t[t.COLLECTION_SHOP=34]="COLLECTION_SHOP",t[t.JUST_FOR_YOU_WELCOME_PACKAGE=49]="JUST_FOR_YOU_WELCOME_PACKAGE",t[t.FREQUENTLY_BOUGHT_TOGETHER=35]="FREQUENTLY_BOUGHT_TOGETHER",t[t.SHOP=-1]="SHOP",t}({})},23640:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var r=function(t){return String(t/16)+"rem"}},19253:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});var r=function(t){return String(t/16)+"rem"}},15936:function(t,e,n){"use strict";n.d(e,{u:function(){return o}});var r=n(63804),a=n.n(r);function o(t,e){a().useEffect((function(){var e=t();if(Array.isArray(e))return e[1]}),e)}},6334:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(63804),a=n.n(r),o=n(1962),i=n.n(o),c=n(67829);function u(t){var e=t.show,n=void 0!==e&&e,r=t.color,o=void 0===r?c._8:r,u=t.hideOverlay,l=void 0!==u&&u,d=t.spinnerClassName;return a().createElement("div",{className:i()({"stardust-spinner--hidden":!n},"stardust-spinner")},a().createElement("div",{className:i()("stardust-spinner__background",{"stardust-spinner__background--no-overlay":l})},a().createElement("div",{className:i()(d,"stardust-spinner__main"),role:"img"},a().createElement("svg",{width:"34",height:"12",viewBox:"-1 0 33 12"},a().createElement("circle",{className:"stardust-spinner__spinner",cx:4,cy:6,r:4,fill:o}),a().createElement("circle",{className:"stardust-spinner__spinner",cx:16,cy:6,r:4,fill:o}),a().createElement("circle",{className:"stardust-spinner__spinner",cx:28,cy:6,r:4,fill:o})))))}}}]);
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-rcmd/_/8096.ed686ff7a4484b80756d.legacy.js.map