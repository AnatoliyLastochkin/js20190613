!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(9),o=n(10);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){t.exports=n(8)},function(t,e){function n(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}},function(t,e){function n(t,e,n){var r,o,i,a,c;function u(){var l=Date.now()-a;l<e&&l>=0?r=setTimeout(u,e-l):(r=null,n||(c=t.apply(i,o),i=o=null))}null==e&&(e=100);var l=function(){i=this,o=arguments,a=Date.now();var l=n&&!r;return r||(r=setTimeout(u,e)),l&&(c=t.apply(i,o),i=o=null),c};return l.clear=function(){r&&(clearTimeout(r),r=null)},l.flush=function(){r&&(c=t.apply(i,o),i=o=null,clearTimeout(r),r=null)},l}n.debounce=n,t.exports=n},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,e,n){var r=s;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===s)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:f,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s="suspendedStart",f="suspendedYield",h="executing",d="completed",p={};function v(){}function y(){}function m(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(O([])));_&&_!==n&&r.call(_,i)&&(b=_);var w=m.prototype=v.prototype=Object.create(b);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){var e;this._invoke=function(n,o){function i(){return new Promise(function(e,i){!function e(n,o,i,a){var c=l(t[n],t,o);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}(n,o,e,i)})}return e=e?e.then(i,i):i()}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function O(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=w.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,o){var i=new L(u(e,n,r,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:O(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){var r=n(13);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(15)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(i).concat([o]).join("\n")}var a,c,u;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(v(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(v(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var s,f=(s=[],function(t,e){return s[t]=e,s.filter(Boolean).join("\n")});function h(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}var d=null,p=0;function v(t,e){var n,r,o;if(e.singleton){var i=p++;n=d||(d=l(e)),r=h.bind(null,n,i,!1),o=h.bind(null,n,i,!0)}else n=l(e),r=function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t,e);return u(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i],l=o[a.id];l&&(l.refs--,r.push(l))}t&&u(c(t,e),e);for(var s=0;s<r.length;s++){var f=r[s];if(0===f.refs){for(var h=0;h<f.parts.length;h++)f.parts[h]();delete o[f.id]}}}}},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r),i=n(6),a=n.n(i),c=n(0),u=n.n(c),l=n(1),s=n.n(l),f=n(2),h=n.n(f),d=n(3),p=n.n(d),v=n(4),y=n.n(v),m=n(7),b=function(){function t(e){u()(this,t),this._el=e}return s()(t,[{key:"on",value:function(t,e){this._el.addEventListener(t,e)}}]),t}(),g=function(t){function e(t){var n,r=t.element;return u()(this,e),(n=h()(this,p()(e).call(this)))._el=r,n.render(),n.on("input",Object(m.debounce)(function(t){var e=t.target.value,r=new CustomEvent("filter",{detail:e.toLowerCase()});n._el.dispatchEvent(r)},300)),n}return y()(e,t),s()(e,[{key:"render",value:function(){this._el.innerHTML='\n      <div class="input-field col s4">\n        <input type="text">\n        <label>Filter</label>\n      </div>    \n    '}}]),e}(b),_=function(t){function e(t){var n,r=t.element,o=t.data;return u()(this,e),(n=h()(this,p()(e).call(this)))._el=r,n._render(o),n._el.addEventListener("click",function(t){return n._onRowClick(t)}),n}return y()(e,t),s()(e,[{key:"_onRowClick",value:function(t){var e=t.target.closest("tbody tr");if(e){var n=e.dataset.id;if(n){var r=new CustomEvent("rowClick",{detail:n});this._el.dispatchEvent(r)}}}},{key:"update",value:function(t){this._render(t)}},{key:"_render",value:function(t){this._el.innerHTML='\n      <table class="highlight">\n        <thead>\n          <tr>\n              <th>Name</th>\n              <th>Symbol</th>\n              <th>Rank</th>\n              <th>Price</th>\n          </tr>\n        </thead>\n        <tbody>\n          '.concat(t.map(function(t){return'\n            <tr data-id="'.concat(t.id,'">  \n              <td>').concat(t.name,"</td>\n              <td>").concat(t.symbol,"</td>\n              <td>").concat(t.rank,"</td>\n              <td>").concat(t.price.toFixed(2),"</td>\n            </tr>\n          ")}).join(""),"\n          \n        </tbody>\n      </table>\n    ")}}]),e}(b),w=function(){function t(e){var n=e.element,r=e.balance,o=e.items,i=void 0===o?{}:o;u()(this,t),this._el=n,this._balance=r,this._items=i,this._portfolioWorth=0,this._render()}return s()(t,[{key:"addItem",value:function(t,e){var n=t.id,r=t.name,o=t.price,i=this._items[n]||{name:r,id:n,amount:0,totalPrice:0};i.price=o,i.amount+=e,i.totalPrice=o*i.amount,this._items[n]=i,this._portfolioWorth=Object.values(this._items).reduce(function(t,e){return t+e.totalPrice},0),this._render()}},{key:"updateBalance",value:function(t){this._balance=t,this._render()}},{key:"_render",value:function(){var t=Object.values(this._items);this._el.innerHTML='\n      <ul class="collapsible portfolio">\n        <li>\n          <p class="collapsible-header">\n            Current Balance: $'.concat(this._balance,"\n            Portfolio Worth: $").concat(this._portfolioWorth,'\n          </p>\n          <div class="collapsible-body">\n            <table>\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Amount</th>\n                  <th>Price</th>\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody>\n              ').concat(0===t.length?"":"\n                  ".concat(t.map(function(t){return'\n                   <tr data-id="'.concat(t.id,'">\n                    <td>').concat(t.name,"</td>\n                    <td>").concat(t.amount,"</td>\n                    <td>").concat(t.price,"</td>\n                    <td>").concat(t.totalPrice,"</td>\n                   </tr>\n                  ")}).join("")),"\n              </tbody>\n            </table>\n          </div>\n        </li>\n      </ul>\n    ");var e=this._el.querySelectorAll(".collapsible");M.Collapsible.init(e)}}]),t}(),x=function(t){function e(t){var n,r=t.element;return u()(this,e),(n=h()(this,p()(e).call(this)))._el=r,n._el.addEventListener("keydown",function(t){if(t.target.closest("#amount")){var e,n=t.key;e=n,!isNaN(parseFloat(e))&&isFinite(e)||"Backspace"===n||"."===n||t.preventDefault()}}),n._el.addEventListener("input",function(t){var e=+t.target.value;n._updateDisplay(e)}),n._el.addEventListener("click",function(t){if(t.preventDefault(),t.target.closest('[data-action="close"]')&&n.close(),t.target.closest('[data-action="buy"]')){var e=new CustomEvent("buy",{detail:{item:n._currentItem,amount:+n._el.querySelector("#amount").value}});n._el.dispatchEvent(e)}}),n}return y()(e,t),s()(e,[{key:"close",value:function(){this._el.querySelector(".modal").classList.remove("open")}},{key:"trade",value:function(t){this._currentItem=t,this._total=0*t.price,this._render(t)}},{key:"_updateDisplay",value:function(t){this._totalEl=this._el.querySelector("#item-total"),this._totalEl.textContent=this._currentItem.price*t}},{key:"_render",value:function(t){this._el.innerHTML='\n      <div id="modal" class="modal open">\n        <div class="modal-content">\n          <h4>Buying'.concat(t.name,":</h4>\n          <p>\n            Current price: ").concat(t.price,'. Total: <span id="item-total">').concat(this._total,'</span>\n          </p>\n          <div class="row">\n            <form class="col s12">\n              <div class="input-field col s4">\n                <input type="text" id="amount">\n                <label for="amount">Amount</label>\n              </div>\n            </form>\n          </div>\n        </div>\n        <div class="modal-footer">\n          <a href="#!" data-action="buy" class="modal-buy waves-effect waves-teal btn-flat">Buy</a>\n          <a href="#!" data-action="close" class="modal-close waves-effect waves-teal btn-flat">Cancel</a>\n        </div>\n      </div>  \n    ')}}]),e}(b);var L,E={sendRequest:function(t){return fetch(t).then(function(t){return t.json()})},sendMultipleRequests:function(t){var e=t.map(function(t){return E.sendRequest(t)});return Promise.all(e)}},k="https://api.coinpaprika.com/v1/coins",S={getCurrencies:(L=a()(o.a.mark(function t(){var e,n,r,i,a=arguments;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:{filter:""},n=E.sendRequest(k),r=e.filter,t.next=5,n;case 5:return i=(i=t.sent).filter(function(t){return t.name.toLowerCase().includes(r)}).slice(0,10),t.abrupt("return",S.getCurrenciesPrices(i));case 8:case"end":return t.stop()}},t)})),function(){return L.apply(this,arguments)}),getCurrenciesPrices:function(t){var e=t.map(function(t){return e=t.id,"".concat(k,"/").concat(e,"/ohlcv/latest");var e});return E.sendMultipleRequests(e).then(function(e){return t.map(function(t,n){var r=e[n][0]||{close:0};return t.price=r.close,t})})}};n(12);new(function(){function t(e){var n=this,r=e.element;u()(this,t),this._el=r,this._userBalance=1e4,this._render(),S.getCurrencies().then(function(t){n._data=t,n._initTable(),n._initFilter()}),this._initPortfolio(),this._initTradeWidget()}return s()(t,[{key:"_tradeItem",value:function(t){var e=this._data.find(function(e){return e.id===t});this._tradeWidget.trade(e)}},{key:"_initTable",value:function(){var t=this;this._table=new _({element:this._el.querySelector('[data-element="table"]'),data:this._data}),this._table.on("rowClick",function(e){return t._tradeItem(e.detail)})}},{key:"_initFilter",value:function(){var t=this;this._filter=new g({element:this._el.querySelector('[data-element="filter"]')}),this._filter.on("filter",function(){var e=a()(o.a.mark(function e(n){var r,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.detail,e.next=3,S.getCurrencies({filter:r});case 3:i=e.sent,t._table.update(i);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"_initPortfolio",value:function(){this._portfolio=new w({element:this._el.querySelector('[data-element="portfolio"]'),balance:this._userBalance})}},{key:"_initTradeWidget",value:function(){var t=this;this._tradeWidget=new x({element:this._el.querySelector('[data-element="portfolio"]')}),this._tradeWidget.on("buy",function(e){var n=e.detail,r=n.item,o=n.amount,i=r.price*o;t._userBalance-=i,t._portfolio.addItem(r,o),t._portfolio.updateBalance(t._userBalance)})}},{key:"_render",value:function(){this._el.innerHTML='\n      \n      <div class="row">\n        <div class="col s12">\n          <h1 class="title">Tiny Crypto Market</h1>\n        </div>\n      </div>\n      \n      <div class="row">\n        <div class="col s12" data-element="filter"></div>\n      </div>\n      \n      <div class="row">\n        <div class="col s12" data-element="table"></div>\n      </div>\n      \n      <div class="col s6 offset-s6 portfolio" data-element="portfolio"></div>\n      <div data-element="tradeWidget"></div>\n    '}}]),t}())({element:document.getElementById("app")}),console.log(1)}]);