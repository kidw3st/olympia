
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/olympia/js/jquery-3.4.1.min.js?167325310688145";s:6:"source";s:47:"/local/templates/olympia/js/jquery-3.4.1.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/templates/olympia/js/search.js?1673253106957";s:6:"source";s:37:"/local/templates/olympia/js/search.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(()=>{
	
	
	//width search
	$('.search_form_header').width($('.search_btn_mobile').position().left + $('.search_btn_mobile').innerWidth());

	$('.header.new .search_form_header').width('100%');
	
	//open search
	$('.search_btn_mobile').on('click', ()=> {
		$('.search_form_header').css({height:'100%' , opacity:1, transition:'all .25s'});
		$('.header.new .search_form_header').css({height:'59px' , opacity:1, transition:'all .25s'});
	});
	//close search
	$('.search_form_header__close').on('click', ()=> {
		$('.search_form_header').css({height:'0px' , opacity:0, transition:'all 0s'});
	});
	
	//resize
	$(window).resize(()=> {
		if ($(window).width() > 1100)
			{
				$('.search_form_header').css({height:'0px' , opacity:0, transiton:'all 0s'});
			}
		$('.search_form_header').width($('.search_btn_mobile').position().left + $('.search_btn_mobile').innerWidth()).css({transition: 'all 0s'});
	});
	
	
	
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:57:"/local/templates/olympia/js/bitrix_form.js?16732531061144";s:6:"source";s:42:"/local/templates/olympia/js/bitrix_form.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function addClasses(){
    if(!$('form[name=Send_us_a_message]').hasClass('feedback_form')){
        $('form[name=Send_us_a_message]').addClass('feedback_form');
        $('form[name=Send_us_a_message] input[name=web_form_submit]').addClass('send_feedback_form simple_red_btn sent_question');
    }
    if(!$('.questions_section .right_col form').hasClass('question_form')){
        $('.questions_section .right_col form').addClass('question_form');
        $('.questions_section .right_col form input[name=web_form_submit]').addClass('send_question_form simple_red_btn');
    }
	if(!$('form[name=callback]').hasClass('order_form')){
        $('form[name=callback]').addClass('order_form');
        $('form[name=callback] input[name=web_form_submit]').addClass('send_order_form simple_red_btn send_callback send_feedback_form');

    }
	if(!$('form[name=form_subscribes]').hasClass('goalown'))
		{
				$('form[name=form_subscribes]').attr('onsubmit', "ga('send', 'event', 'form', 'sendme'); ym(29323175, 'reachGoal', 'sendme'); return true;");	
				$('form[name=form_subscribes]').addClass('goalown');
      
    }

}
setInterval(addClasses,0);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:61:"/local/templates/olympia/js/smartphoto.min.js?167325310654494";s:6:"source";s:45:"/local/templates/olympia/js/smartphoto.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Modules in this bundle
 * @license
 *
 * smartphoto:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: appleple
 *   homepage: http://developer.a-blogcms.jp
 *   version: 1.5.1
 *
 * a-template:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: steelydylan
 *   version: 0.5.4
 *
 * custom-event-polyfill:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   contributors: Frank Panetta, Mikhail Reenko <reenko@yandex.ru>, Joscha Feth <joscha@feth.com>
 *   homepage: https://github.com/krambuhl/custom-event-polyfill#readme
 *   version: 0.3.0
 *
 * es6-promise-polyfill:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: Roman Dvornov <rdvornov@gmail.com>
 *   homepage: https://github.com/lahmatiy/es6-promise-polyfill#readme
 *   version: 1.2.0
 *
 * ie-array-find-polyfill:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: Carlos Abdalla
 *   homepage: https://github.com/abdalla/ie-array-find-polyfill#readme
 *   version: 1.1.0
 *
 * morphdom:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: Patrick Steele-Idem <pnidem@gmail.com>
 *   homepage: https://github.com/patrick-steele-idem/morphdom#readme
 *   version: 2.3.3
 *
 * process:
 *   license: MIT (http://opensource.org/licenses/MIT)
 *   author: Roman Shtylman <shtylman@gmail.com>
 *   homepage: https://github.com/shtylman/node-process#readme
 *   version: 0.11.10
 *
 * timers-browserify:
 *   licenses: MIT (http://opensource.org/licenses/MIT)
 *   author: J. Ryan Stinnett <jryans@gmail.com>
 *   contributors: Guy Bedford <guybedford@gmail.com>, Ionut-Cristian Florescu <ionut.florescu@gmail.com>, James Halliday <mail@substack.net>, Jan Schär <jscissr@gmail.com>, Johannes Ewald <johannes.ewald@peerigon.com>, Jonathan Prins <jon@blip.tv>, Matt Esch <matt@mattesch.info>
 *   homepage: https://github.com/jryans/timers-browserify
 *   version: 1.4.2
 *
 * This header is generated by licensify (https://github.com/twada/licensify)
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.SmartPhoto=t()}}(function(){var t;return function(){function t(e,a,o){function i(r,s){if(!a[r]){if(!e[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(n)return n(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var u=a[r]={exports:{}};e[r][0].call(u.exports,function(t){return i(e[r][1][t]||t)},u,u.exports,t,e,a,o)}return a[r].exports}for(var n="function"==typeof require&&require,r=0;r<o.length;r++)i(o[r]);return i}return t}()({1:[function(t,e,a){"use strict";function o(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}}();t("ie-array-find-polyfill");var r=t("morphdom"),s=function(t){return t&&t.__esModule?t:{default:t}}(r),c=t("./util"),d="input paste copy click change keydown keyup keypress contextmenu mouseup mousedown mousemove touchstart touchend touchmove compositionstart compositionend focus",u=d.replace(/([a-z]+)/g,"[data-action-$1],")+"[data-action]",l=function(){function t(e){var a=this;i(this,t),this.atemplate=[],e&&Object.keys(e).forEach(function(t){a[t]=e[t]}),this.data||(this.data={}),this.templates||(this.templates=[]);for(var o=this.templates,n=o.length,r=0,s=n;r<s;r+=1){var d=this.templates[r],u=(0,c.selector)("#"+d).innerHTML;this.atemplate.push({id:d,html:u,binded:!1})}}return n(t,[{key:"addDataBind",value:function(t){var e=this;(0,c.on)(t,"[data-bind]","input change click",function(t){var a=t.delegateTarget,o=a.getAttribute("data-bind"),i=a.getAttribute("href"),n=a.value;i&&(n=n.replace("#","")),"checkbox"===a.getAttribute("type")?function(){var t=[],e=document.querySelectorAll('[data-bind="'+o+'"]');[].forEach.call(e,function(e){e.checked&&t.push(e.value)})}():"radio"!==a.getAttribute("type")&&e.updateDataByString(o,n)})}},{key:"addActionBind",value:function(t){var e=this;(0,c.on)(t,u,d,function(t){var a=t.delegateTarget,i=d.split(" "),n="action";i.forEach(function(e){a.getAttribute("data-action-"+e)&&t.type===e&&(n+="-"+e)});var r=a.getAttribute("data-"+n);if(r){var s=r.replace(/\(.*?\);?/,""),c=r.replace(/(.*?)\((.*?)\);?/,"$2"),u=c.split(",");if(e.e=t,e.method&&e.method[s]){var l;(l=e.method)[s].apply(l,o(u))}else e[s]&&e[s].apply(e,o(u))}})}},{key:"addTemplate",value:function(t,e){this.atemplate.push({id:t,html:e,binded:!1}),this.templates.push(t)}},{key:"getData",value:function(){return JSON.parse(JSON.stringify(this.data))}},{key:"saveData",value:function(t){var e=JSON.stringify(this.data);localStorage.setItem(t,e)}},{key:"setData",value:function(t){var e=this;Object.keys(t).forEach(function(a){"function"!=typeof t[a]&&(e.data[a]=t[a])})}},{key:"loadData",value:function(t){var e=JSON.parse(localStorage.getItem(t));e&&this.setData(e)}},{key:"getRand",value:function(t,e){return~~(Math.random()*(e-t+1))+t}},{key:"getRandText",value:function(t){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=a.length,i=0;i<t;i+=1)e+=a.charAt(Math.floor(this.getRand(0,o)));return e}},{key:"getDataFromObj",value:function(t,e){t=t.replace(/\[([\w\-\.ぁ-んァ-ヶ亜-熙]+)\]/g,".$1"),t=t.replace(/^\./,"");for(var a=t.split(".");a.length;){var o=a.shift();if(!(o in e))return null;e=e[o]}return e}},{key:"getDataByString",value:function(t){var e=this.data;return this.getDataFromObj(t,e)}},{key:"updateDataByString",value:function(t,e){for(var a=this.data,o=t.split(".");o.length>1;)a=a[o.shift()];a[o.shift()]=e}},{key:"removeDataByString",value:function(t){for(var e=this.data,a=t.split(".");a.length>1;)e=e[a.shift()];var o=a.shift();o.match(/^\d+$/)?e.splice(Number(o),1):delete e[o]}},{key:"resolveBlock",value:function(t,e,a){var o=this,i=t.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):touch#([\w\-\.ぁ-んァ-ヶ亜-熙]+) -->/g),n=t.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):touchnot#([\w\-\.ぁ-んァ-ヶ亜-熙]+) -->/g),r=t.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):exist -->/g),s=t.match(/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):empty -->/g);if(i)for(var c=0,d=i.length;c<d;c+=1){var u=i[c];u=u.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):touch#([\w\-\.ぁ-んァ-ヶ亜-熙]+)/,"($1):touch#($2)");var l=u.replace(/BEGIN/,"END"),h=new RegExp(u+"(([\\n\\r\\t]|.)*?)"+l,"g");t=t.replace(h,function(t,a,i,n){return""+("function"==typeof e[a]?e[a].apply(o):o.getDataFromObj(a,e))===i?n:""})}if(n)for(var f=0,p=n.length;f<p;f+=1){var m=n[f];m=m.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):touchnot#([\w\-\.ぁ-んァ-ヶ亜-熙]+)/,"($1):touchnot#($2)");var v=m.replace(/BEGIN/,"END"),g=new RegExp(m+"(([\\n\\r\\t]|.)*?)"+v,"g");t=t.replace(g,function(t,a,i,n){return""+("function"==typeof e[a]?e[a].apply(o):o.getDataFromObj(a,e))!==i?n:""})}if(r)for(var y=0,x=r.length;y<x;y+=1){var w=r[y];w=w.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):exist/,"($1):exist");var P=w.replace(/BEGIN/,"END"),b=new RegExp(w+"(([\\n\\r\\t]|.)*?)"+P,"g");t=t.replace(b,function(t,a,i){var n="function"==typeof e[a]?e[a].apply(o):o.getDataFromObj(a,e);return n||0===n?i:""})}if(s)for(var E=0,_=s.length;E<_;E+=1){var I=s[E];I=I.replace(/([\w\-\.ぁ-んァ-ヶ亜-熙]+):empty/,"($1):empty");var S=I.replace(/BEGIN/,"END"),N=new RegExp(I+"(([\\n\\r\\t]|.)*?)"+S,"g");t=t.replace(N,function(t,a,i){var n="function"==typeof e[a]?e[a].apply(o):o.getDataFromObj(a,e);return n||0===n?"":i})}return t=t.replace(/{([\w\-\.ぁ-んァ-ヶ亜-熙]+)}(\[([\w\-\.ぁ-んァ-ヶ亜-熙]+)\])*/g,function(t,i,n,r){var s=void 0;if(""+i=="i")s=a;else{if(!e[i]&&0!==e[i])return r&&o.convert&&o.convert[r]?o.convert[r].call(o,""):"";s="function"==typeof e[i]?e[i].apply(o):e[i]}return r&&o.convert&&o.convert[r]?o.convert[r].call(o,s):s})}},{key:"resolveAbsBlock",value:function(t){var e=this;return t=t.replace(/{(.*?)}/g,function(t,a){var o=e.getDataByString(a);return void 0!==o?"function"==typeof o?o.apply(e):o:t})}},{key:"resolveInclude",value:function(t){var e=/<!-- #include id="(.*?)" -->/g;return t=t.replace(e,function(t,e){return(0,c.selector)("#"+e).innerHTML})}},{key:"resolveWith",value:function(t){var e=/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+):with -->(([\n\r\t]|.)*?)<!-- END ([\w\-\.ぁ-んァ-ヶ亜-熙]+):with -->/g;return t=t.replace(e,function(t,e){return t=t.replace(/data\-bind=['"](.*?)['"]/g,"data-bind='"+e+".$1'")})}},{key:"resolveLoop",value:function(t){var e=/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->(([\n\r\t]|.)*?)<!-- END ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->/g,a=this;return t=t.replace(e,function(t,e,o){var i=a.getDataByString(e),n=[];n="function"==typeof i?i.apply(a):i;var r="";if(n instanceof Array)for(var s=0,c=n.length;s<c;s+=1)r+=a.resolveBlock(o,n[s],s);return r=r.replace(/\\([^\\])/g,"$1")})}},{key:"removeData",value:function(t){var e=this.data;return Object.keys(e).forEach(function(a){for(var o=0,i=t.length;o<i;o+=1)a===t[o]&&delete e[a]}),this}},{key:"hasLoop",value:function(t){var e=/<!-- BEGIN ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->(([\n\r\t]|.)*?)<!-- END ([\w\-\.ぁ-んァ-ヶ亜-熙]+?):loop -->/g;return!!t.match(e)}},{key:"getHtml",value:function(t,e){var a=this.atemplate.find(function(e){return e.id===t}),o="";if(a&&a.html&&(o=a.html),e&&(o=t),!o)return"";var i=this.data;for(o=this.resolveInclude(o),o=this.resolveWith(o);this.hasLoop(o);)o=this.resolveLoop(o);return o=this.resolveBlock(o,i),o=o.replace(/\\([^\\])/g,"$1"),o=this.resolveAbsBlock(o),o.replace(/^([\t ])*\n/gm,"")}},{key:"update",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"html",a=arguments[1],o=this.templates;this.beforeUpdated&&this.beforeUpdated();for(var i=0,n=o.length;i<n;i+=1)!function(i,n){var r=o[i],d="#"+r,u=t.getHtml(r),l=(0,c.selector)("[data-id='"+r+"']");if(l)if("text"===e)l.innerText=u;else if(a){var h=document.createElement("div");h.innerHTML=u;var f=h.querySelector(a).outerHTML;(0,s.default)(l.querySelector(a),f)}else(0,s.default)(l,"<div data-id='"+r+"'>"+u+"</div>");else(0,c.selector)(d).insertAdjacentHTML("afterend",'<div data-id="'+r+'"></div>'),"text"===e?(0,c.selector)("[data-id='"+r+"']").innerText=u:(0,c.selector)("[data-id='"+r+"']").innerHTML=u;var p=t.atemplate.find(function(t){return t.id===r});p.binded||(p.binded=!0,t.addDataBind((0,c.selector)("[data-id='"+r+"']")),t.addActionBind((0,c.selector)("[data-id='"+r+"']")))}(i);return this.updateBindingData(a),this.onUpdated&&this.onUpdated(a),this}},{key:"updateBindingData",value:function(t){for(var e=this,a=this.templates,o=0,i=a.length;o<i;o+=1){var n=a[o],r=(0,c.selector)("[data-id='"+n+"']");t&&(r=r.querySelector(t));var s=r.querySelectorAll("[data-bind]");[].forEach.call(s,function(t){var a=e.getDataByString(t.getAttribute("data-bind"));"checkbox"===t.getAttribute("type")||"radio"===t.getAttribute("type")?a===t.value&&(t.checked=!0):t.value=a});var d=r.querySelectorAll("[data-bind-oneway]");[].forEach.call(d,function(t){var a=e.getDataByString(t.getAttribute("data-bind-oneway"));"checkbox"===t.getAttribute("type")||"radio"===t.getAttribute("type")?a===t.value&&(t.checked=!0):t.value=a})}return this}},{key:"applyMethod",value:function(t){for(var e,a=arguments.length,o=Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];return(e=this.method)[t].apply(e,o)}},{key:"getComputedProp",value:function(t){return this.data[t].apply(this)}},{key:"remove",value:function(t){for(var e=this.data,a=t.split(".");a.length>1;)e=e[a.shift()];var o=a.shift();return o.match(/^\d+$/)?e.splice(Number(o),1):delete e[o],this}}]),t}();a.default=l,e.exports=a.default},{"./util":2,"ie-array-find-polyfill":5,morphdom:6}],2:[function(t,e,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=a.matches=function(t,e){for(var a=(t.document||t.ownerDocument).querySelectorAll(e),o=a.length;--o>=0&&a.item(o)!==t;);return o>-1},i=(a.selector=function(t){return document.querySelector(t)},a.findAncestor=function(t,e){if("function"==typeof t.closest)return t.closest(e)||null;for(;t&&t!==document;){if(o(t,e))return t;t=t.parentElement}return null});a.on=function(t,e,a,o){a.split(" ").forEach(function(a){t.addEventListener(a,function(t){var a=(t.target,i(t.target,e));a&&(t.delegateTarget=a,o(t))})})}},{}],3:[function(t,e,a){try{var o=new window.CustomEvent("test");if(o.preventDefault(),!0!==o.defaultPrevented)throw new Error("Could not prevent default")}catch(t){var i=function(t,e){var a,o;return e=e||{bubbles:!1,cancelable:!1,detail:void 0},a=document.createEvent("CustomEvent"),a.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o=a.preventDefault,a.preventDefault=function(){o.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},a};i.prototype=window.Event.prototype,window.CustomEvent=i}},{}],4:[function(e,a,o){(function(e,a){!function(e){function i(t){return"[object Array]"===Object.prototype.toString.call(t)}function n(){for(var t=0;t<S.length;t++)S[t][0](S[t][1]);S=[],x=!1}function r(t,e){S.push([t,e]),x||(x=!0,I(n,0))}function s(t,e){function a(t){u(e,t)}function o(t){h(e,t)}try{t(a,o)}catch(t){o(t)}}function c(t){var e=t.owner,a=e.state_,o=e.data_,i=t[a],n=t.then;if("function"==typeof i){a=b;try{o=i(o)}catch(t){h(n,t)}}d(n,o)||(a===b&&u(n,o),a===E&&h(n,o))}function d(t,e){var a;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"==typeof e)){var o=e.then;if("function"==typeof o)return o.call(e,function(o){a||(a=!0,e!==o?u(t,o):l(t,o))},function(e){a||(a=!0,h(t,e))}),!0}}catch(e){return a||h(t,e),!0}return!1}function u(t,e){t!==e&&d(t,e)||l(t,e)}function l(t,e){t.state_===w&&(t.state_=P,t.data_=e,r(p,t))}function h(t,e){t.state_===w&&(t.state_=P,t.data_=e,r(m,t))}function f(t){var e=t.then_;t.then_=void 0;for(var a=0;a<e.length;a++)c(e[a])}function p(t){t.state_=b,f(t)}function m(t){t.state_=E,f(t)}function v(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument");if(this instanceof v==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this.then_=[],s(t,this)}var g=e.Promise,y=g&&"resolve"in g&&"reject"in g&&"all"in g&&"race"in g&&function(){var t;return new g(function(e){t=e}),"function"==typeof t}();void 0!==o&&o?(o.Promise=y?g:v,o.Polyfill=v):"function"==typeof t&&t.amd?t(function(){return y?g:v}):y||(e.Promise=v);var x,w="pending",P="sealed",b="fulfilled",E="rejected",_=function(){},I=void 0!==a?a:setTimeout,S=[];v.prototype={constructor:v,state_:w,then_:null,data_:void 0,then:function(t,e){var a={owner:this,then:new this.constructor(_),fulfilled:t,rejected:e};return this.state_===b||this.state_===E?r(c,a):this.then_.push(a),a.then},catch:function(t){return this.then(null,t)}},v.all=function(t){var e=this;if(!i(t))throw new TypeError("You must pass an array to Promise.all().");return new e(function(e,a){for(var o,i=[],n=0,r=0;r<t.length;r++)o=t[r],o&&"function"==typeof o.then?o.then(function(t){return n++,function(a){i[t]=a,--n||e(i)}}(r),a):i[r]=o;n||e(i)})},v.race=function(t){var e=this;if(!i(t))throw new TypeError("You must pass an array to Promise.race().");return new e(function(e,a){for(var o,i=0;i<t.length;i++)o=t[i],o&&"function"==typeof o.then?o.then(e,a):e(o)})},v.resolve=function(t){var e=this;return t&&"object"==typeof t&&t.constructor===e?t:new e(function(e){e(t)})},v.reject=function(t){return new this(function(e,a){a(t)})}}("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("timers").setImmediate)},{timers:8}],5:[function(t,e,a){"use strict";Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){if(null==this)throw new TypeError("this is null or not defined");var e=Object(this),a=e.length>>>0;if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var o=arguments[1],i=0;i<a;){var n=e[i];if(t.call(o,n,i,e))return n;i++}}})},{}],6:[function(t,e,a){"use strict";function o(t){!l&&p.createRange&&(l=p.createRange(),l.selectNode(p.body));var e;return l&&l.createContextualFragment?e=l.createContextualFragment(t):(e=p.createElement("body"),e.innerHTML=t),e.childNodes[0]}function i(t,e){var a=t.nodeName,o=e.nodeName;return a===o||!!(e.actualize&&a.charCodeAt(0)<91&&o.charCodeAt(0)>90)&&a===o.toUpperCase()}function n(t,e){return e&&e!==f?p.createElementNS(e,t):p.createElement(t)}function r(t,e){for(var a=t.firstChild;a;){var o=a.nextSibling;e.appendChild(a),a=o}return e}function s(t,e){var a,o,i,n,r,s=e.attributes;for(a=s.length-1;a>=0;--a)o=s[a],i=o.name,n=o.namespaceURI,r=o.value,n?(i=o.localName||i,t.getAttributeNS(n,i)!==r&&t.setAttributeNS(n,i,r)):t.getAttribute(i)!==r&&t.setAttribute(i,r);for(s=t.attributes,a=s.length-1;a>=0;--a)o=s[a],!1!==o.specified&&(i=o.name,n=o.namespaceURI,n?(i=o.localName||i,v(e,n,i)||t.removeAttributeNS(n,i)):v(e,null,i)||t.removeAttribute(i))}function c(t,e,a){t[a]!==e[a]&&(t[a]=e[a],t[a]?t.setAttribute(a,""):t.removeAttribute(a,""))}function d(){}function u(t){return t.id}var l,h,f="http://www.w3.org/1999/xhtml",p="undefined"==typeof document?void 0:document,m=p?p.body||p.createElement("div"):{};h=m.hasAttributeNS?function(t,e,a){return t.hasAttributeNS(e,a)}:m.hasAttribute?function(t,e,a){return t.hasAttribute(a)}:function(t,e,a){return null!=t.getAttributeNode(e,a)};var v=h,g={OPTION:function(t,e){c(t,e,"selected")},INPUT:function(t,e){c(t,e,"checked"),c(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),v(e,null,"value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var a=e.value;t.value!==a&&(t.value=a);var o=t.firstChild;if(o){var i=o.nodeValue;if(i==a||!a&&i==t.placeholder)return;o.nodeValue=a}},SELECT:function(t,e){if(!v(e,null,"multiple")){for(var a=0,o=e.firstChild;o;){var i=o.nodeName;if(i&&"OPTION"===i.toUpperCase()){if(v(o,null,"selected")){a;break}a++}o=o.nextSibling}t.selectedIndex=a}}},y=1,x=3,w=8,P=function(t){return function(e,a,s){function c(t){b?b.push(t):b=[t]}function l(t,e){if(t.nodeType===y)for(var a=t.firstChild;a;){var o=void 0;e&&(o=E(a))?c(o):(A(a),a.firstChild&&l(a,e)),a=a.nextSibling}}function h(t,e,a){!1!==k(t)&&(e&&e.removeChild(t),A(t),l(t,a))}function f(t){if(t.nodeType===y)for(var e=t.firstChild;e;){var a=E(e);a&&(T[a]=e),f(e),e=e.nextSibling}}function m(t){I(t);for(var e=t.firstChild;e;){var a=e.nextSibling,o=E(e);if(o){var n=T[o];n&&i(e,n)&&(e.parentNode.replaceChild(n,e),v(n,e))}m(e),e=a}}function v(o,n,r){var s,d=E(n);if(d&&delete T[d],!a.isSameNode||!a.isSameNode(e)){if(!r){if(!1===S(o,n))return;if(t(o,n),N(o),!1===B(o,n))return}if("TEXTAREA"!==o.nodeName){var u,l,f,P,b=n.firstChild,I=o.firstChild;t:for(;b;){for(f=b.nextSibling,u=E(b);I;){if(l=I.nextSibling,b.isSameNode&&b.isSameNode(I)){b=f,I=l;continue t}s=E(I);var k=I.nodeType,A=void 0;if(k===b.nodeType&&(k===y?(u?u!==s&&((P=T[u])?I.nextSibling===P?A=!1:(o.insertBefore(P,I),l=I.nextSibling,s?c(s):h(I,o,!0),I=P):A=!1):s&&(A=!1),(A=!1!==A&&i(I,b))&&v(I,b)):k!==x&&k!=w||(A=!0,I.nodeValue!==b.nodeValue&&(I.nodeValue=b.nodeValue))),A){b=f,I=l;continue t}s?c(s):h(I,o,!0),I=l}if(u&&(P=T[u])&&i(P,b))o.appendChild(P),v(P,b);else{var D=_(b);!1!==D&&(D&&(b=D),b.actualize&&(b=b.actualize(o.ownerDocument||p)),o.appendChild(b),m(b))}b=f,I=l}for(;I;)l=I.nextSibling,(s=E(I))?c(s):h(I,o,!0),I=l}var O=g[o.nodeName];O&&O(o,n)}}if(s||(s={}),"string"==typeof a)if("#document"===e.nodeName||"HTML"===e.nodeName){var P=a;a=p.createElement("html"),a.innerHTML=P}else a=o(a);var b,E=s.getNodeKey||u,_=s.onBeforeNodeAdded||d,I=s.onNodeAdded||d,S=s.onBeforeElUpdated||d,N=s.onElUpdated||d,k=s.onBeforeNodeDiscarded||d,A=s.onNodeDiscarded||d,B=s.onBeforeElChildrenUpdated||d,D=!0===s.childrenOnly,T={};f(e);var O=e,C=O.nodeType,G=a.nodeType;if(!D)if(C===y)G===y?i(e,a)||(A(e),O=r(e,n(a.nodeName,a.namespaceURI))):O=a;else if(C===x||C===w){if(G===C)return O.nodeValue!==a.nodeValue&&(O.nodeValue=a.nodeValue),O;O=a}if(O===a)A(e);else if(v(O,a,D),b)for(var L=0,z=b.length;L<z;L++){var X=T[b[L]];X&&h(X,X.parentNode,!1)}return!D&&O!==e&&e.parentNode&&(O.actualize&&(O=O.actualize(e.ownerDocument||p)),e.parentNode.replaceChild(O,e)),O}}(s);e.exports=P},{}],7:[function(t,e,a){function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function n(t){if(l===setTimeout)return setTimeout(t,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(h===clearTimeout)return clearTimeout(t);if((h===i||!h)&&clearTimeout)return h=clearTimeout,clearTimeout(t);try{return h(t)}catch(e){try{return h.call(null,t)}catch(e){return h.call(this,t)}}}function s(){v&&p&&(v=!1,p.length?m=p.concat(m):g=-1,m.length&&c())}function c(){if(!v){var t=n(s);v=!0;for(var e=m.length;e;){for(p=m,m=[];++g<e;)p&&p[g].run();g=-1,e=m.length}p=null,v=!1,r(t)}}function d(t,e){this.fun=t,this.array=e}function u(){}var l,h,f=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(t){l=o}try{h="function"==typeof clearTimeout?clearTimeout:i}catch(t){h=i}}();var p,m=[],v=!1,g=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)e[a-1]=arguments[a];m.push(new d(t,e)),1!==m.length||v||n(c)},d.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=u,f.addListener=u,f.once=u,f.off=u,f.removeListener=u,f.removeAllListeners=u,f.emit=u,f.prependListener=u,f.prependOnceListener=u,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],8:[function(t,e,a){(function(e,o){function i(t,e){this._id=t,this._clearFn=e}var n=t("process/browser.js").nextTick,r=Function.prototype.apply,s=Array.prototype.slice,c={},d=0;a.setTimeout=function(){return new i(r.call(setTimeout,window,arguments),clearTimeout)},a.setInterval=function(){return new i(r.call(setInterval,window,arguments),clearInterval)},a.clearTimeout=a.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},a.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},a.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},a._unrefActive=a.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},a.setImmediate="function"==typeof e?e:function(t){var e=d++,o=!(arguments.length<2)&&s.call(arguments,1);return c[e]=!0,n(function(){c[e]&&(o?t.apply(null,o):t.call(null),a.clearImmediate(e))}),e},a.clearImmediate="function"==typeof o?o:function(t){delete c[t]}}).call(this,t("timers").setImmediate,t("timers").clearImmediate)},{"process/browser.js":7,timers:8}],9:[function(t,e,a){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var a=0;a<e.length;a++){var o=e[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}function s(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?c(t):e}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var h=function(t){return t&&t.__esModule?t:{default:t}}(t("a-template"));t("custom-event-polyfill");var f='<div class="\\{classNames.smartPhoto\\}"\x3c!-- BEGIN hide:exist --\x3e aria-hidden="true"\x3c!-- END hide:exist --\x3e\x3c!-- BEGIN hide:empty --\x3e aria-hidden="false"\x3c!-- END hide:empty --\x3e role="dialog">\n\t<div class="\\{classNames.smartPhotoBody\\}">\n\t\t<div class="\\{classNames.smartPhotoInner\\}">\n\t\t\t   <div class="\\{classNames.smartPhotoHeader\\}">\n\t\t\t\t\t<span class="\\{classNames.smartPhotoCount\\}">{currentIndex}[increment]/{total}</span>\n\t\t\t\t\t<span class="\\{classNames.smartPhotoCaption\\}" aria-live="polite" tabindex="-1">\x3c!-- BEGIN groupItems:loop --\x3e\x3c!-- \\BEGIN currentIndex:touch#{index} --\x3e{caption}\x3c!-- \\END currentIndex:touch#{index} --\x3e\x3c!-- END groupItems:loop --\x3e</span>\n\t\t\t\t\t<button class="\\{classNames.smartPhotoDismiss\\}" data-action-click="hidePhoto()"><span class="smartphoto-sr-only">\\{message.closeDialog\\}</span></button>\n\t\t\t\t</div>\n\t\t\t\t<div class="\\{classNames.smartPhotoContent\\}"\x3c!-- BEGIN isSmartPhone:exist --\x3e data-action-touchstart="beforeDrag" data-action-touchmove="onDrag" data-action-touchend="afterDrag(false)"\x3c!-- END isSmartPhone:exist --\x3e\x3c!-- BEGIN isSmartPhone:empty --\x3e data-action-click="hidePhoto()"\x3c!-- END isSmartPhone:empty --\x3e>\n\t\t\t\t</div>\n\t\t\t\t<ul style="transform:translate({translateX}[round]px,{translateY}[round]px);" class="\\{classNames.smartPhotoList\\}\x3c!-- BEGIN onMoveClass:exist --\x3e \\{classNames.smartPhotoListOnMove\\}\x3c!-- END onMoveClass:exist --\x3e">\n\t\t\t\t\t\x3c!-- BEGIN groupItems:loop --\x3e\n\t\t\t\t\t<li style="transform:translate({translateX}[round]px,{translateY}[round]px);" class="\x3c!-- \\BEGIN currentIndex:touch#{index} --\x3ecurrent\x3c!-- \\END currentIndex:touch#{index} --\x3e">\n\t\t\t\t\t\t\x3c!-- BEGIN processed:exist --\x3e\n\t\t\t\t\t\t<div style="transform:translate({x}[round]px,{y}[round]px) scale({scale});" class="\\\\{classNames.smartPhotoImgWrap\\\\}"\x3c!-- \\BEGIN isSmartPhone:empty --\x3e data-action-mousemove="onDrag" data-action-mousedown="beforeDrag" data-action-mouseup="afterDrag"\x3c!-- \\END isSmartPhone:empty --\x3e\x3c!-- \\BEGIN isSmartPhone:exist --\x3e data-action-touchstart="beforeDrag" data-action-touchmove="onDrag" data-action-touchend="afterDrag"\x3c!-- \\END isSmartPhone:exist --\x3e>\n\t\t\t\t\t\t\t<img style="\x3c!-- \\BEGIN currentIndex:touch#{index} --\x3etransform:translate(\\{photoPosX\\}[virtualPos]px,\\{photoPosY\\}[virtualPos]px) scale(\\{scaleSize\\});\x3c!-- \\END currentIndex:touch#{index} --\x3ewidth:{width}px;" src="{src}" class="\\\\{classNames.smartPhotoImg\\\\}\x3c!-- \\BEGIN scale:exist --\x3e  \\\\{classNames.smartPhotoImgOnMove\\\\}\x3c!-- \\END scale:exist --\x3e\x3c!-- \\BEGIN elastic:exist --\x3e \\\\{classNames.smartPhotoImgElasticMove\\\\}\x3c!-- \\END elastic:exist --\x3e\x3c!-- \\BEGIN appear:exist --\x3e active\x3c!-- \\END appear:exist --\x3e" ondragstart="return false;">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\x3c!-- END processed:exist --\x3e\n\t\t\t\t\t\t\x3c!-- BEGIN processed:empty --\x3e\n\t\t\t\t\t\t<div class="\\\\{classNames.smartPhotoLoaderWrap\\\\}">\n\t\t\t\t\t\t\t<span class="\\\\{classNames.smartPhotoLoader\\\\}"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\x3c!-- END processed:empty --\x3e\n\t\t\t\t\t</li>\n\t\t\t\t\t\x3c!-- END groupItems:loop --\x3e\n\t\t\t\t</ul>\n\t\t\t\t\x3c!-- BEGIN arrows:exist --\x3e\n\t\t\t\t<ul class="\\{classNames.smartPhotoArrows\\}"\x3c!-- BEGIN hideUi:exist --\x3e aria-hidden="true"\x3c!-- END hideUi:exist --\x3e\x3c!-- BEGIN hideUi:exist --\x3e aria-hidden="false"\x3c!-- END hideUi:exist --\x3e>\n\t\t\t\t\t<li class="\\{classNames.smartPhotoArrowLeft\\}\x3c!-- BEGIN isSmartPhone:exist --\x3e \\{classNames.smartPhotoArrowHideIcon\\}\x3c!-- END isSmartPhone:exist --\x3e"\x3c!-- BEGIN showPrevArrow:empty --\x3e aria-hidden="true"\x3c!-- END showPrevArrow:empty --\x3e><a href="#" data-action-click="gotoSlide({prev})" role="button"><span class="smartphoto-sr-only">\\{message.gotoPrevImage\\}</span></a></li>\n\t\t\t\t\t<li class="\\{classNames.smartPhotoArrowRight\\}\x3c!-- BEGIN isSmartPhone:exist --\x3e \\{classNames.smartPhotoArrowHideIcon\\}\x3c!-- END isSmartPhone:exist --\x3e"\x3c!-- BEGIN showNextArrow:empty --\x3e aria-hidden="true"\x3c!-- END showNextArrow:empty --\x3e><a href="#" data-action-click="gotoSlide({next})" role="button"><span class="smartphoto-sr-only">\\{message.gotoNextImage\\}</span></a></li>\n\t\t\t\t</ul>\n\t\t\t\t\x3c!-- END arrows:exist --\x3e\n\t\t\t\t\x3c!-- BEGIN nav:exist --\x3e\n\t\t\t\t<nav class="\\{classNames.smartPhotoNav\\}"\x3c!-- BEGIN hideUi:exist --\x3e aria-hidden="true"\x3c!-- END hideUi:exist --\x3e\x3c!-- BEGIN hideUi:exist --\x3e aria-hidden="false"\x3c!-- END hideUi:exist --\x3e>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t\x3c!-- BEGIN groupItems:loop --\x3e\n\t\t\t\t\t\t<li><a href="#" data-action-click="gotoSlide({index})" class="\x3c!-- \\BEGIN currentIndex:touch#{index} --\x3ecurrent\x3c!-- \\END currentIndex:touch#{index} --\x3e" style="background-image:url({thumb});" role="button"><span class="smartphoto-sr-only">go to {caption}</span></a></li>\n\t\t\t\t\t\t\x3c!-- END groupItems:loop --\x3e\n\t\t\t\t\t</ul>\n\t\t\t\t</nav>\n\t\t\t\t\x3c!-- END nav:exist --\x3e\n\t\t</div>\n\t\t\x3c!-- BEGIN appearEffect:exist --\x3e\n\t\t<img src=\\{appearEffect.img\\}\n\t\tclass="\\{classNames.smartPhotoImgClone\\}"\n\t\tstyle="width:\\{appearEffect.width\\}px;height:\\{appearEffect.height\\}px;transform:translate(\\{appearEffect.left\\}px,\\{appearEffect.top\\}px) scale(1)" />\n\t\t\x3c!-- END appearEffect:exist --\x3e\n\t</div>\n</div>\n',p=t("../lib/util"),m=t("es6-promise-polyfill"),v=m.Promise,g={classNames:{smartPhoto:"smartphoto",smartPhotoClose:"smartphoto-close",smartPhotoBody:"smartphoto-body",smartPhotoInner:"smartphoto-inner",smartPhotoContent:"smartphoto-content",smartPhotoImg:"smartphoto-img",smartPhotoImgOnMove:"smartphoto-img-onmove",smartPhotoImgElasticMove:"smartphoto-img-elasticmove",smartPhotoImgWrap:"smartphoto-img-wrap",smartPhotoArrows:"smartphoto-arrows",smartPhotoNav:"smartphoto-nav",smartPhotoArrowRight:"smartphoto-arrow-right",smartPhotoArrowLeft:"smartphoto-arrow-left",smartPhotoArrowHideIcon:"smartphoto-arrow-hide",smartPhotoImgLeft:"smartphoto-img-left",smartPhotoImgRight:"smartphoto-img-right",smartPhotoList:"smartphoto-list",smartPhotoListOnMove:"smartphoto-list-onmove",smartPhotoHeader:"smartphoto-header",smartPhotoCount:"smartphoto-count",smartPhotoCaption:"smartphoto-caption",smartPhotoDismiss:"smartphoto-dismiss",smartPhotoLoader:"smartphoto-loader",smartPhotoLoaderWrap:"smartphoto-loader-wrap",smartPhotoImgClone:"smartphoto-img-clone"},message:{gotoNextImage:"go to the next image",gotoPrevImage:"go to the previous image",closeDialog:"close the image dialog"},arrows:!0,nav:!0,showAnimation:!0,verticalGravity:!1,useOrientationApi:!1,useHistoryApi:!0,swipeTopToClose:!1,swipeBottomToClose:!0,swipeOffset:100,headerHeight:60,footerHeight:60,forceInterval:10,registance:.5,loadOffset:2,resizeStyle:"fit",lazyAttribute:"data-src"},y=function(t){function e(t,a){var o;i(this,e),o=s(this,d(e).call(this)),o.data=p.extend({},g,a),o.data.currentIndex=0,o.data.oldIndex=0,o.data.hide=!0,o.data.group={},o.data.scaleSize=1,o.data.scale=!1,o.pos={x:0,y:0},o.data.photoPosX=0,o.data.photoPosY=0,o.convert={increment:o.increment,virtualPos:o.virtualPos,round:o.round},o.data.groupItems=o.groupItems,o.elements="string"==typeof t?document.querySelectorAll(t):t;var n=new Date;o.tapSecond=n.getTime(),o.onListMove=!1,o.clicked=!1,o.id=o._getUniqId(),o.vx=0,o.vy=0,o.data.appearEffect=null,o.addTemplate(o.id,f),o.data.isSmartPhone=o._isSmartPhone();var r=document.querySelector("body");p.append(r,"<div data-id='".concat(o.id,"'></div>")),[].forEach.call(o.elements,function(t){o.addNewItem(t)}),o.update();var c=o._getCurrentItemByHash();return c&&p.triggerEvent(c.element,"click"),setInterval(function(){o._doAnim()},o.data.forceInterval),o.data.isSmartPhone?(window.addEventListener("orientationchange",function(){o.groupItems()&&(o._resetTranslate(),o._setPosByCurrentIndex(),o._setHashByCurrentIndex(),o._setSizeByScreen(),o.update())}),o.data.useOrientationApi?(window.addEventListener("deviceorientation",function(t){var e=window,a=e.orientation;t&&t.gamma&&!o.data.appearEffect&&(o.isBeingZoomed||o.photoSwipable||o.data.elastic||!o.data.scale||(0===a?o._calcGravity(t.gamma,t.beta):90===a?o._calcGravity(t.beta,t.gamma):-90===a?o._calcGravity(-t.beta,-t.gamma):180===a&&o._calcGravity(-t.gamma,-t.beta)))}),o):s(o)):(window.addEventListener("resize",function(){o.groupItems()&&(o._resetTranslate(),o._setPosByCurrentIndex(),o._setSizeByScreen(),o.update())}),window.addEventListener("keydown",function(t){var e=t.keyCode||t.which;!0!==o.data.hide&&(37===e?o.gotoSlide(o.data.prev):39===e?o.gotoSlide(o.data.next):27===e&&o.hidePhoto())}),s(o))}return u(e,t),r(e,[{key:"on",value:function(t,e){var a=this;this._getElementByClass(this.data.classNames.smartPhoto).addEventListener(t,function(t){e.call(a,t)})}},{key:"increment",value:function(t){return t+1}},{key:"round",
value:function(t){return Math.round(t)}},{key:"virtualPos",value:function(t){return(t=parseInt(t,10))/this._getSelectedItem().scale/this.data.scaleSize}},{key:"groupItems",value:function(){return this.data.group[this.data.currentGroup]}},{key:"_resetTranslate",value:function(){var t=this;this.groupItems().forEach(function(e,a){e.translateX=t._getWindowWidth()*a})}},{key:"addNewItem",value:function(t){var e=this,a=t.getAttribute("data-group")||"nogroup",o=this.data.group;"nogroup"===a&&t.setAttribute("data-group","nogroup"),o[a]||(o[a]=[]);var i=o[a].length,n=document.querySelector("body"),r=t.getAttribute("href"),s=t.querySelector("img"),c=r;s&&(c=s.getAttribute(this.data.lazyAttribute)?s.getAttribute(this.data.lazyAttribute):s.currentSrc?s.currentSrc:s.src);var d={src:r,thumb:c,caption:t.getAttribute("data-caption"),groupId:a,translateX:this._getWindowWidth()*i,index:i,translateY:0,width:50,height:50,id:t.getAttribute("data-id")||i,loaded:!1,processed:!1,element:t};o[a].push(d),this.data.currentGroup=a,t.getAttribute("data-id")||t.setAttribute("data-id",i),t.setAttribute("data-index",i),t.addEventListener("click",function(a){a.preventDefault(),e.data.currentGroup=t.getAttribute("data-group"),e.data.currentIndex=parseInt(t.getAttribute("data-index"),10),e._setHashByCurrentIndex();var o=e._getSelectedItem();o.loaded?(e._initPhoto(),e.addAppearEffect(t,o),e.clicked=!0,e.update(),n.style.overflow="hidden",e._fireEvent("open")):e._loadItem(o).then(function(){e._initPhoto(),e.addAppearEffect(t,o),e.clicked=!0,e.update(),n.style.overflow="hidden",e._fireEvent("open")})})}},{key:"_initPhoto",value:function(){this.data.total=this.groupItems().length,this.data.hide=!1,this.data.photoPosX=0,this.data.photoPosY=0,this._setPosByCurrentIndex(),this._setSizeByScreen(),this.setArrow(),"fill"===this.data.resizeStyle&&this.data.isSmartPhone&&(this.data.scale=!0,this.data.hideUi=!0,this.data.scaleSize=this._getScaleBoarder())}},{key:"onUpdated",value:function(){var t=this;if(this.data.appearEffect&&this.data.appearEffect.once&&(this.data.appearEffect.once=!1,this.execEffect().then(function(){t.data.appearEffect=null,t.data.appear=!0,t.update()})),this.clicked){this.clicked=!1;var e=this.data.classNames;this._getElementByClass(e.smartPhotoCaption).focus()}}},{key:"execEffect",value:function(){var t=this;return new v(function(e){p.isOldIE()&&e();var a=t.data,o=a.appearEffect,i=a.classNames,n=t._getElementByClass(i.smartPhotoImgClone),r=function t(){n.removeEventListener("transitionend",t,!0),e()};n.addEventListener("transitionend",r,!0),setTimeout(function(){n.style.transform="translate(".concat(o.afterX,"px, ").concat(o.afterY,"px) scale(").concat(o.scale,")")},10)})}},{key:"addAppearEffect",value:function(t,e){if(!1===this.data.showAnimation)return void(this.data.appear=!0);var a=t.querySelector("img"),o=p.getViewPos(a),i={},n=1;i.width=a.offsetWidth,i.height=a.offsetHeight,i.top=o.top,i.left=o.left,i.once=!0,a.getAttribute(this.data.lazyAttribute)?i.img=a.getAttribute(this.data.lazyAttribute):i.img=e.src;var r=this._getWindowWidth(),s=this._getWindowHeight(),c=s-this.data.headerHeight-this.data.footerHeight;"fill"===this.data.resizeStyle&&this.data.isSmartPhone?n=a.offsetWidth>a.offsetHeight?s/a.offsetHeight:r/a.offsetWidth:(i.width>=i.height?n=e.height<c?e.width/i.width:c/i.height:i.height>i.width&&(n=e.height<c?e.height/i.height:c/i.height),i.width*n>r&&(n=r/i.width));var d=(n-1)/2*a.offsetWidth+(r-a.offsetWidth*n)/2,u=(n-1)/2*a.offsetHeight+(s-a.offsetHeight*n)/2;i.afterX=d,i.afterY=u,i.scale=n,this.data.appearEffect=i}},{key:"hidePhoto",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom";this.data.hide=!0,this.data.appear=!1,this.data.appearEffect=null,this.data.hideUi=!1,this.data.scale=!1,this.data.scaleSize=1;var a=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,o=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,i=document.querySelector("body");window.location.hash&&this._setHash(""),window.scroll(a,o),this._doHideEffect(e).then(function(){t.update(),i.style.overflow="",t._fireEvent("close")})}},{key:"_doHideEffect",value:function(t){var e=this;return new v(function(a){p.isOldIE()&&a();var o=e.data.classNames,i=e._getElementByClass(o.smartPhoto),n=e._getElementByQuery(".current .".concat(o.smartPhotoImg)),r=e._getWindowHeight(),s=function t(){i.removeEventListener("transitionend",t,!0),a()};i.style.opacity=0,"bottom"===t?n.style.transform="translateY(".concat(r,"px)"):"top"===t&&(n.style.transform="translateY(-".concat(r,"px)")),i.addEventListener("transitionend",s,!0)})}},{key:"_getElementByClass",value:function(t){return document.querySelector('[data-id="'.concat(this.id,'"] .').concat(t))}},{key:"_getElementByQuery",value:function(t){return document.querySelector('[data-id="'.concat(this.id,'"] ').concat(t))}},{key:"_getTouchPos",value:function(){var t=0,e=0,a="undefined"==typeof event?this.e:event;return this._isTouched(a)?(t=a.touches[0].pageX,e=a.touches[0].pageY):a.pageX&&(t=a.pageX,e=a.pageY),{x:t,y:e}}},{key:"_getGesturePos",value:function(t){var e=t.touches;return[{x:e[0].pageX,y:e[0].pageY},{x:e[1].pageX,y:e[1].pageY}]}},{key:"_setPosByCurrentIndex",value:function(){var t=this,e=this.groupItems(),a=-1*e[this.data.currentIndex].translateX;this.pos.x=a,setTimeout(function(){t.data.translateX=a,t.data.translateY=0,t._listUpdate()},1)}},{key:"_setHashByCurrentIndex",value:function(){var t=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,a=this.groupItems(),o=a[this.data.currentIndex].id,i=this.data.currentGroup,n="group=".concat(i,"&photo=").concat(o);this._setHash(n),window.scroll(t,e)}},{key:"_setHash",value:function(t){window.history&&window.history.pushState&&this.data.useHistoryApi&&(t?window.history.replaceState(null,null,"".concat(location.pathname).concat(location.search,"#").concat(t)):window.history.replaceState(null,null,"".concat(location.pathname).concat(location.search)))}},{key:"_getCurrentItemByHash",value:function(){var t=this.data.group,e=location.hash.substr(1),a=p.parseQuery(e),o=null,i=function(t){a.group===t.groupId&&a.photo===t.id&&(o=t)};return Object.keys(t).forEach(function(e){t[e].forEach(i)}),o}},{key:"_loadItem",value:function(t){return new v(function(e){var a=new Image;a.onload=function(){t.width=a.width,t.height=a.height,t.loaded=!0,e()},a.onerror=function(){e()},a.src=t.src})}},{key:"_getItemByIndex",value:function(t){var e=this.data;return e.group[e.currentGroup][t]?e.group[e.currentGroup][t]:null}},{key:"_loadNeighborItems",value:function(){for(var t=this,e=this.data.currentIndex,a=this.data.loadOffset,o=e-a,i=e+a,n=[],r=o;r<i;r++){var s=this._getItemByIndex(r);s&&!s.loaded&&n.push(this._loadItem(s))}n.length&&v.all(n).then(function(){t._initPhoto(),t.update()})}},{key:"_setSizeByScreen",value:function(){var t=this._getWindowWidth(),e=this._getWindowHeight(),a=this.data.headerHeight,o=this.data.footerHeight,i=e-(a+o);this.groupItems().forEach(function(a){a.loaded&&(a.processed=!0,a.scale=i/a.height,a.height<i&&(a.scale=1),a.x=(a.scale-1)/2*a.width+(t-a.width*a.scale)/2,a.y=(a.scale-1)/2*a.height+(e-a.height*a.scale)/2,a.width*a.scale>t&&(a.scale=t/a.width,a.x=(a.scale-1)/2*a.width))})}},{key:"_slideList",value:function(){var t=this;this.data.scaleSize=1,this.isBeingZoomed=!1,this.data.hideUi=!1,this.data.scale=!1,this.data.photoPosX=0,this.data.photoPosY=0,this.data.onMoveClass=!0,this._setPosByCurrentIndex(),this._setHashByCurrentIndex(),this._setSizeByScreen(),setTimeout(function(){var e=t._getSelectedItem();t.data.onMoveClass=!1,t.setArrow(),t.update(),t.data.oldIndex!==t.data.currentIndex&&t._fireEvent("change"),t.data.oldIndex=t.data.currentIndex,t._loadNeighborItems(),e.loaded||t._loadItem(e).then(function(){t._initPhoto(),t.update()})},200)}},{key:"gotoSlide",value:function(t){this.e&&this.e.preventDefault&&this.e.preventDefault(),this.data.currentIndex=parseInt(t,10),this.data.currentIndex||(this.data.currentIndex=0),this._slideList()}},{key:"setArrow",value:function(){var t=this.groupItems(),e=t.length,a=this.data.currentIndex+1,o=this.data.currentIndex-1;this.data.showNextArrow=!1,this.data.showPrevArrow=!1,a!==e&&(this.data.next=a,this.data.showNextArrow=!0),-1!==o&&(this.data.prev=o,this.data.showPrevArrow=!0)}},{key:"beforeDrag",value:function(){if(this._isGestured(this.e))return void this.beforeGesture();if(this.isBeingZoomed=!1,this.data.scale)return void this.beforePhotoDrag();var t=this._getTouchPos();this.isSwipable=!0,this.dragStart=!0,this.firstPos=t,this.oldPos=t}},{key:"afterDrag",value:function(){var t=this.groupItems(),e=new Date,a=e.getTime(),o=this.tapSecond-a,i=0,n=0;return this.isSwipable=!1,this.onListMove=!1,this.oldPos&&(i=this.oldPos.x-this.firstPos.x,n=this.oldPos.y-this.firstPos.y),this.isBeingZoomed?void this.afterGesture():this.data.scale?void this.afterPhotoDrag():p.isSmartPhone()||0!==i||0!==n?Math.abs(o)<=500&&0===i&&0===n?(this.e.preventDefault(),void this.zoomPhoto()):(this.tapSecond=a,this._fireEvent("swipeend"),"horizontal"===this.moveDir&&(i>=this.data.swipeOffset&&0!==this.data.currentIndex?this.data.currentIndex-=1:i<=-this.data.swipeOffset&&this.data.currentIndex!==t.length-1&&(this.data.currentIndex+=1),this._slideList()),void("vertical"===this.moveDir&&(this.data.swipeBottomToClose&&n>=this.data.swipeOffset?this.hidePhoto("bottom"):this.data.swipeTopToClose&&n<=-this.data.swipeOffset?this.hidePhoto("top"):(this.data.translateY=0,this._slideList())))):void this.zoomPhoto()}},{key:"onDrag",value:function(){if(this.e.preventDefault(),this._isGestured(this.e)&&!1===this.onListMove)return void this.onGesture();if(!this.isBeingZoomed){if(this.data.scale)return void this.onPhotoDrag();if(this.isSwipable){var t=this._getTouchPos(),e=t.x-this.oldPos.x,a=t.y-this.firstPos.y;this.dragStart&&(this._fireEvent("swipestart"),this.dragStart=!1,Math.abs(e)>Math.abs(a)?this.moveDir="horizontal":this.moveDir="vertical"),"horizontal"===this.moveDir?(this.pos.x+=e,this.data.translateX=this.pos.x):this.data.translateY=a,this.onListMove=!0,this.oldPos=t,this._listUpdate()}}}},{key:"zoomPhoto",value:function(){var t=this;this.data.hideUi=!0,this.data.scaleSize=this._getScaleBoarder(),this.data.scaleSize<=1||(this.data.photoPosX=0,this.data.photoPosY=0,this._photoUpdate(),setTimeout(function(){t.data.scale=!0,t._photoUpdate(),t._fireEvent("zoomin")},300))}},{key:"zoomOutPhoto",value:function(){this.data.scaleSize=1,this.isBeingZoomed=!1,this.data.hideUi=!1,this.data.scale=!1,this.data.photoPosX=0,this.data.photoPosY=0,this._photoUpdate(),this._fireEvent("zoomout")}},{key:"beforePhotoDrag",value:function(){var t=this._getTouchPos();this.photoSwipable=!0,this.data.photoPosX||(this.data.photoPosX=0),this.data.photoPosY||(this.data.photoPosY=0),this.oldPhotoPos=t,this.firstPhotoPos=t}},{key:"onPhotoDrag",value:function(){if(this.photoSwipable){this.e.preventDefault();var t=this._getTouchPos(),e=t.x-this.oldPhotoPos.x,a=t.y-this.oldPhotoPos.y,o=this._round(this.data.scaleSize*e,6),i=this._round(this.data.scaleSize*a,6);"number"==typeof o&&(this.data.photoPosX+=o,this.photoVX=o),"number"==typeof i&&(this.data.photoPosY+=i,this.photoVY=i),this.oldPhotoPos=t,this._photoUpdate()}}},{key:"afterPhotoDrag",value:function(){if(this.oldPhotoPos.x===this.firstPhotoPos.x&&this.photoSwipable)this.photoSwipable=!1,this.zoomOutPhoto();else{this.photoSwipable=!1;var t=this._getSelectedItem(),e=this._makeBound(t),a=this.data.swipeOffset*this.data.scaleSize,o=0,i=0;if(this.data.photoPosX>e.maxX?o=-1:this.data.photoPosX<e.minX&&(o=1),this.data.photoPosY>e.maxY?i=-1:this.data.photoPosY<e.minY&&(i=1),this.data.photoPosX-e.maxX>a&&0!==this.data.currentIndex)return void this.gotoSlide(this.data.prev);if(e.minX-this.data.photoPosX>a&&this.data.currentIndex+1!==this.data.total)return void this.gotoSlide(this.data.next);0===o&&0===i?(this.vx=this.photoVX/5,this.vy=this.photoVY/5):this._registerElasticForce(o,i)}}},{key:"beforeGesture",value:function(){this._fireEvent("gesturestart");var t=this._getGesturePos(this.e),e=this._getDistance(t[0],t[1]);this.isBeingZoomed=!0,this.oldDistance=e,this.data.scale=!0,this.e.preventDefault()}},{key:"onGesture",value:function(){var t=this._getGesturePos(this.e),e=this._getDistance(t[0],t[1]),a=(e-this.oldDistance)/100,o=this.data.scaleSize,i=this.data.photoPosX,n=this.data.photoPosY;this.isBeingZoomed=!0,this.data.scaleSize+=this._round(a,6),this.data.scaleSize<.2&&(this.data.scaleSize=.2),this.data.scaleSize<o&&(this.data.photoPosX=(1+this.data.scaleSize-o)*i,this.data.photoPosY=(1+this.data.scaleSize-o)*n),this.data.scaleSize<1||this.data.scaleSize>this._getScaleBoarder()?this.data.hideUi=!0:this.data.hideUi=!1,this.oldDistance=e,this.e.preventDefault(),this._photoUpdate()}},{key:"afterGesture",value:function(){this.data.scaleSize>this._getScaleBoarder()||(this.data.photoPosX=0,this.data.photoPosY=0,this.data.scale=!1,this.data.scaleSize=1,this.data.hideUi=!1,this._fireEvent("gestureend"),this._photoUpdate())}},{key:"_getForceAndTheta",value:function(t,e){return{force:Math.sqrt(t*t+e*e),theta:Math.atan2(e,t)}}},{key:"_getScaleBoarder",value:function(){var t=this._getSelectedItem(),e=this._getWindowWidth(),a=this._getWindowHeight();return p.isSmartPhone()?t.width>t.height?a/(t.height*t.scale):e/(t.width*t.scale):1/t.scale}},{key:"_makeBound",value:function(t){var e,a,o,i,n=t.width*t.scale*this.data.scaleSize,r=t.height*t.scale*this.data.scaleSize,s=this._getWindowWidth(),c=this._getWindowHeight();return s>n?(o=(s-n)/2,e=-1*o):(o=(n-s)/2,e=-1*o),c>r?(i=(c-r)/2,a=-1*i):(i=(r-c)/2,a=-1*i),{minX:this._round(e,6)*this.data.scaleSize,minY:this._round(a,6)*this.data.scaleSize,maxX:this._round(o,6)*this.data.scaleSize,maxY:this._round(i,6)*this.data.scaleSize}}},{key:"_registerElasticForce",value:function(t,e){var a=this,o=this._getSelectedItem(),i=this._makeBound(o);this.data.elastic=!0,1===t?this.data.photoPosX=i.minX:-1===t&&(this.data.photoPosX=i.maxX),1===e?this.data.photoPosY=i.minY:-1===e&&(this.data.photoPosY=i.maxY),this._photoUpdate(),setTimeout(function(){a.data.elastic=!1,a._photoUpdate()},300)}},{key:"_getSelectedItem",value:function(){var t=this.data,e=t.currentIndex;return t.group[t.currentGroup][e]}},{key:"_getUniqId",value:function(){return(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase()}},{key:"_getDistance",value:function(t,e){var a=t.x-e.x,o=t.y-e.y;return Math.sqrt(a*a+o*o)}},{key:"_round",value:function(t,e){var a=Math.pow(10,e);return t*=a,t=Math.round(t),t/=a}},{key:"_isTouched",value:function(t){return!(!t||!t.touches)}},{key:"_isGestured",value:function(t){return!!(t&&t.touches&&t.touches.length>1)}},{key:"_isSmartPhone",value:function(){var t=navigator.userAgent;return t.indexOf("iPhone")>0||t.indexOf("iPad")>0||t.indexOf("ipod")>0||t.indexOf("Android")>0}},{key:"_calcGravity",value:function(t,e){(t>5||t<-5)&&(this.vx+=.05*t),!1!==this.data.verticalGravity&&(e>5||e<-5)&&(this.vy+=.05*e)}},{key:"_photoUpdate",value:function(){var t=this.data.classNames,e=this._getElementByQuery(".current"),a=e.querySelector(".".concat(t.smartPhotoImg)),o=this._getElementByQuery(".".concat(t.smartPhotoNav)),i=this._getElementByQuery(".".concat(t.smartPhotoArrows)),n=this.virtualPos(this.data.photoPosX),r=this.virtualPos(this.data.photoPosY),s=this.data.scaleSize,c="translate(".concat(n,"px,").concat(r,"px) scale(").concat(s,")");a.style.transform=c,this.data.scale?p.addClass(a,t.smartPhotoImgOnMove):p.removeClass(a,t.smartPhotoImgOnMove),this.data.elastic?p.addClass(a,t.smartPhotoImgElasticMove):p.removeClass(a,t.smartPhotoImgElasticMove),this.data.hideUi?(o&&o.setAttribute("aria-hidden","true"),i&&i.setAttribute("aria-hidden","true")):(o&&o.setAttribute("aria-hidden","false"),i&&i.setAttribute("aria-hidden","false"))}},{key:"_getWindowWidth",value:function(){return document&&document.documentElement?document.documentElement.clientWidth:window&&window.innerWidth?window.innerWidth:0}},{key:"_getWindowHeight",value:function(){return document&&document.documentElement?document.documentElement.clientHeight:window&&window.innerHeight?window.innerHeight:0}},{key:"_listUpdate",value:function(){var t=this.data.classNames,e=this._getElementByQuery(".".concat(t.smartPhotoList)),a="translate(".concat(this.data.translateX,"px,").concat(this.data.translateY,"px)");e.style.transform=a,this.data.onMoveClass?p.addClass(e,t.smartPhotoListOnMove):p.removeClass(e,t.smartPhotoListOnMove)}},{key:"_fireEvent",value:function(t){var e=this._getElementByClass(this.data.classNames.smartPhoto);p.triggerEvent(e,t)}},{key:"_doAnim",value:function(){if(!(this.isBeingZoomed||this.isSwipable||this.photoSwipable||this.data.elastic)&&this.data.scale){this.data.photoPosX+=this.vx,this.data.photoPosY+=this.vy;var t=this._getSelectedItem(),e=this._makeBound(t);this.data.photoPosX<e.minX?(this.data.photoPosX=e.minX,this.vx*=-.2):this.data.photoPosX>e.maxX&&(this.data.photoPosX=e.maxX,this.vx*=-.2),this.data.photoPosY<e.minY?(this.data.photoPosY=e.minY,this.vy*=-.2):this.data.photoPosY>e.maxY&&(this.data.photoPosY=e.maxY,this.vy*=-.2);var a=this._getForceAndTheta(this.vx,this.vy),o=a.force,i=a.theta;o-=this.data.registance,Math.abs(o)<.5||(this.vx=Math.cos(i)*o,this.vy=Math.sin(i)*o,this._photoUpdate())}}}]),e}(h.default);a.default=y,e.exports=a.default},{"../lib/util":11,"a-template":1,"custom-event-polyfill":3,"es6-promise-polyfill":4}],10:[function(t,e,a){"use strict";e.exports=t("./core/")},{"./core/":9}],11:[function(t,e,a){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){t=t||{};for(var e=1;e<arguments.length;e++){var a=arguments[e];if(a)for(var n in a)a.hasOwnProperty(n)&&("object"===o(a[n])?t[n]=i(t[n],a[n]):t[n]=a[n])}return t}Object.defineProperty(a,"__esModule",{value:!0}),a.isOldIE=a.getBrowser=a.removeClass=a.addClass=a.append=a.removeElement=a.getViewPos=a.parseQuery=a.triggerEvent=a.extend=a.isSmartPhone=void 0;var n=function(){var t=navigator.userAgent;return t.indexOf("iPhone")>0||t.indexOf("iPad")>0||t.indexOf("ipod")>0||t.indexOf("Android")>0};a.isSmartPhone=n;var r=i;a.extend=r;var s=function(t,e,a){var o;window.CustomEvent?o=new CustomEvent(e,{cancelable:!0}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(e,!1,!1,a)),t.dispatchEvent(o)};a.triggerEvent=s;var c=function(t){for(var e,a,o,i=t.split("&"),n={},r=0,s=i.length;r<s;r++)e=i[r].split("="),void 0!==e[0]&&(a=e[0],o=void 0!==e[1]?e.slice(1).join("="):a,n[a]=decodeURIComponent(o));return n};a.parseQuery=c;var d=function(t){return{left:t.getBoundingClientRect().left,top:t.getBoundingClientRect().top}};a.getViewPos=d;var u=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)};a.removeElement=u;var l=function(t,e){var a=document.createElement("div");for(a.innerHTML=e;a.children.length>0;)t.appendChild(a.children[0])};a.append=l;var h=function(t,e){t.classList?t.classList.add(e):t.className+=" ".concat(e)};a.addClass=h;var f=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")};a.removeClass=f;var p=function(){var t=window.navigator.userAgent.toLowerCase(),e=window.navigator.appVersion.toLowerCase(),a="unknown";return-1!=t.indexOf("msie")?a=-1!=e.indexOf("msie 6.")?"ie6":-1!=e.indexOf("msie 7.")?"ie7":-1!=e.indexOf("msie 8.")?"ie8":-1!=e.indexOf("msie 9.")?"ie9":-1!=e.indexOf("msie 10.")?"ie10":"ie":-1!=t.indexOf("trident/7")?a="ie11":-1!=t.indexOf("chrome")?a="chrome":-1!=t.indexOf("safari")?a="safari":-1!=t.indexOf("opera")?a="opera":-1!=t.indexOf("firefox")&&(a="firefox"),a};a.getBrowser=p;var m=function(){var t=p();return-1!==t.indexOf("ie")&&parseInt(t.replace(/[^0-9]/g,""))<=10};a.isOldIE=m},{}]},{},[10])(10)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:79:"/bitrix/components/x10/popup_multi/templates/.default/script.js?177996897316447";s:6:"source";s:63:"/bitrix/components/x10/popup_multi/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/


(function(){

    var popup_inited = [];

    function push_popup_inited(popup){
        popup_inited.push(popup);
    }

    function getPopupModal(popup){
        for( let popup_ of popup_inited ){
            if( popup_.url !== popup.url )
                continue;

            popup.modal = popup_?.modal;
            popup.background = popup_?.background;
        }
    }

    window.modal_custom = function modal_custom( zIndex, popup_data, queueName, queueInterval, removeLSI ){

        if( removeLSI ){
            if( !Array.isArray( removeLSI ) ) 
                removeLSI = Array( removeLSI );

            for( let removeLSI_ of removeLSI )
                localStorage.removeItem(removeLSI_);
        }
            
        
        if( queueInterval && !queueName )
            return;

            
        if( queueInterval )
            queueInterval *= 1000;

        var cookie;

        var fadeModal, showed = [];

        if( !Array.isArray(popup_data) )
            popup_data = Array( popup_data );


        function css( elem, styles ) {
            if (typeof styles != 'object')
                return;

            for (let style in styles) {
                if (!styles.hasOwnProperty(style) || (typeof styles[style] != 'string' && typeof styles[style] != 'number'))
                    continue;

                elem.style[style] = styles[style];
            }
        }

        var glass = document.createElement('DIV');
        css( glass, {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            zIndex: '100000000'
        } );


        var background = document.createElement('DIV');
        css( background, {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            zIndex: zIndex - 1,
            background: 'rgba(0,0,0,0.4)'
        });
        background.className = 'fading';
        
        modal_custom_init();




        function fadeAnimation(el,where){

            var className = el.className?.replaceAll(/(^|\s+)fadeIn\b/g, '').replaceAll(/(^|\s+)fadeOut\b/g, '') || '';

            if( where === 'in' ){
                className += ' fadeIn';
            }else if( where === 'out' ){
                className += ' fadeOut';
                el.addEventListener( 'transitionend' , ()=>{ if( !el.className.match(/\bfadeOut\b/) ){ return; } fadeAnimation(el) }, {once: true} );
            }else{
                el.parentNode?.removeChild(el);
                glass.parentNode?.removeChild(glass);
            }
            
            el.className = className;

        }

        function getCookie() {

            if( queueName ){
                cookie = JSON.parse( localStorage.getItem(queueName) || false );
            }else{
                
                for( let popup of popup_data ){
                    if( !popup.nameCookie )
                        continue;

                    let cookieItem = JSON.parse( localStorage.getItem(popup.nameCookie) || false );
                    //if( typeof cookieItem.date !== 'number' || typeof cookieItem.delayed !== 'number' ) continue;

                    if( !cookie )
                        cookie = {};

                    cookie[popup.nameCookie] = cookieItem;
                }
            }

        }

        function diffTime(date){
            return date - Date.now();
        }

        function showModal( popup ){
            var timeout;

            getPopupModal(popup)

            if( !cookie || (!queueName && (!popup.nameCookie || !cookie[ popup.nameCookie ])) || (queueName && !cookie.date) ){
                //показываю окно
                modal_fadein(popup);
            }else{
                //показываю если время пришло
                if( queueName ){
                    timeout = diffTime( cookie?.date ) + ( queueInterval && popup_data.indexOf( popup ) === 0 ? queueInterval : popup.cycle );
                }else{
                    timeout = diffTime( cookie[popup.nameCookie]?.date ) + popup.cycle;
                }
                
                ( !timeout || timeout < 0 ) && ( timeout = 0 );

                setTimeout(() => {
                    modal_fadein(popup)
                }, timeout);
            }

        }

        function checkArgs(popup){
            
            if( popup.cycle )
                popup.cycle *= 1000;
            
            if( popup.denied_cycle )
                popup.denied_cycle *= 1000;

            if( popup.delayed )
                popup.delayed *= 1000;


        }

        function modal_custom_init(){

            getCookie();

            for( let popup of popup_data ){
                checkArgs( popup );
            }

            if( queueName ){
                
                for( let popup of popup_data ){
                    if( cookie?.next && cookie?.next !== popup.nameCookie ) continue;
                    showModal( popup );
                    break;
                }    

            }else{

                for( let popup of popup_data ){
                    if( popup.once && cookie?.[popup.nameCookie]?.date ) continue;
                    showModal( popup );
                }

            }

        }

        function modal_fadeout(e) {

            if( !fadeModal || !e || !(e instanceof Event) || e.which !== 1 || !e.isTrusted )
                return;

            fadeModal.modal.appendChild(glass);

            if( queueName || fadeModal.nameCookie ){

                if( !cookie ) cookie = {};

                if( fadeModal.delayed_cycle ){
                    delete cookie.delayed;
                }
                
                let popup_next;

                if( queueName ){

                    popup_next = fadeModal

                    !cookie['names'] && ( cookie['names'] = {} );

                    for(let i = popup_data.indexOf( fadeModal ) + 1; popup_data[i] !== fadeModal ; i++ ){
                        
                        if( i > popup_data.length - 1 ){
                            i = -1;
                            continue;
                        }
                        
                        let popup = popup_data[i];

                        if( popup.once && cookie['names'][popup.nameCookie] ) continue;
                        popup_next = popup;
                        break;
                    }
                    
                    cookie['names'][fadeModal.nameCookie] = { date: Date.now() };
                    cookie.next = popup_next.nameCookie;
                    cookie.date = Date.now();

                    localStorage.setItem(queueName, JSON.stringify(cookie));

                }else if( queueInterval || fadeModal.cycle || fadeModal.once ){
                    if( !cookie[fadeModal.nameCookie] )
                        cookie[fadeModal.nameCookie] = {};

                    cookie[fadeModal.nameCookie].date = Date.now();

                    localStorage.setItem(fadeModal.nameCookie, JSON.stringify( cookie[fadeModal.nameCookie] ));
                }

                ( queueInterval || fadeModal.cycle ) /*&& (getCookie(),true)*/ && showModal( popup_next || fadeModal );

            }

            fadeAnimation( fadeModal.modal, 'out' );
            background && fadeAnimation( background, 'out' );

            fadeModal.lockScroll && (
                ( document.documentElement.style.overflow = '' )
            );

            fadeModal = undefined;
            
            if( showed.length ){
                modal_fadein( showed.shift() );
            }


        }


        function checkDelayed(popup, callback){

            if( popup.delayed ){

                let cookie_ = queueName ? cookie : cookie?.[popup.nameCookie];
                if( !cookie_?.delayed ){
                    if( !cookie_ ){
                        cookie_ = {};
                        if( queueName ){
                            cookie_ = {delayed: Date.now(), next: popup.nameCookie };
                        }else if( popup.nameCookie ){
                            cookie_ = {delayed: Date.now()};
                        }
                        
                        localStorage.setItem( queueName || popup.nameCookie , JSON.stringify(cookie_) );

                        getCookie();
                        
                    }else{
                        queueName ? ( cookie.delayed = Date.now() ) : ( cookie[popup.nameCookie].delayed =  Date.now() );
                        localStorage.setItem( queueName || popup.nameCookie , JSON.stringify( queueName ? cookie : cookie[popup.nameCookie] ) );
                    }

                    typeof callback === 'function' && setTimeout( callback, popup.delayed );


                }else{

                    if( cookie_.delayed + popup.delayed <= Date.now() ){
                        return false;
                    } else {
                        typeof callback === 'function' && setTimeout( callback, ((cookie_.delayed + popup.delayed) - Date.now()) );
                    }

                } 

            }else
                return false;


            return true;
        }


        function modal_fadein( popup ) {


            if ( popup.modal?.offsetWidth && ( !popup.background || background.offsetWidth ))
                return;

            if( fadeModal ){
                showed.push(popup);
                return;
            }

            if( checkDelayed(popup, modal_fadein.bind(null, popup)) ){
                return;
            }

            fadeModal = true;

            if( popup.modal instanceof HTMLElement ){
                popup.modal.parentNode !== document.body && document.body.appendChild( popup.modal );
                fadein();
            }else
                $.ajax({
                    url: popup.url,
                    method: 'POST',
                    data: {popup: true},
                    success: function(html){ 
                        var box = document.createElement('DIV');
                        box.innerHTML = html;
                        popup.selector && ( popup.modal = box.querySelector( popup.selector ) );
                        popup.denied_selector && ( popup.denied = box.querySelector(popup.denied_selector) );

                        if( !popup.modal && !popup.denied ){
                            console.log('load popup error', html, popup);
                            return;
                        }

                        var styles = box.querySelectorAll('link[rel="stylesheet"]');
                        var countSyles = styles.length;
                        var loads = [];

                        popup.modal && preinit(popup.modal)
                        popup.denied && preinit(popup.denied);

                        if( countSyles )
                            for( let i = 0; i < countSyles; i++ ){
                                styles[i].onload = prefadein;
                                document.head.appendChild( styles[i] ) ;
                            }
                        else
                            prefadein();
                            
                        function prefadein(){
                            if( countSyles )
                                loads.push(true);

                            if( loads.length !== countSyles ) return;

                            !modal_denied(popup) && fadein();
                        }

                        function preinit( element ){
                            window.addEventListener('resize', setPosition.bind( null, element ));
                            if( !element?.className.match(/\bfading\b/) ) element.className += ' fading';
                        }

                        push_popup_inited(popup);
                        
                    },
                    error: function(e){
                        console.log('load popup error', e);
                    }

                });

            function fadein(){
                fadeModal = popup;
                initModal(popup);

                fadeModal.lockScroll && ( 
                ( document.documentElement.style.overflow = 'hidden' )
                );
                

                fadeAnimation( fadeModal.modal , 'in' );
                setPosition(fadeModal.modal);
                background && fadeAnimation( background , 'in' );

                if (glass && glass.parentNode)
                    glass.parentNode.removeChild(glass);

            }

        }



        //background.addEventListener('click', modal_fadeout);


        function initModal(popup){

            popup.background && !background.parentNode && document.body.appendChild(background);
            background.removeEventListener('click', modal_fadeout)

            document.body.appendChild( popup.modal );


            if( popup.background_close )
                background.addEventListener('click', modal_fadeout)

            if( !popup.modal || !(popup.modal instanceof HTMLElement) || popup.inited )
                return;
                
            var closes = popup.modal.querySelectorAll('[close]');

            for( let i = 0; i < closes.length; i++){
                closes[i].addEventListener('click', modal_fadeout);
            }

            var deniedes = popup.modal.querySelectorAll('[denied]');
            for( let i = 0; i < deniedes.length; i++){
                deniedes[i].addEventListener('click', modal_denied.bind(null, popup));
            }

            popup.modal.addEventListener('selectstart', function(e) {
                e.preventDefault();
            });

            popup.inited = true;

        }


        function setPosition( el ) {
            if( !( el instanceof HTMLElement ) )
                return;
            
            var display;
            display = el.style.display;
            
            css( el, {
                display: 'initial',
                position: 'fixed',
                zIndex: zIndex,
                left: 'unset',
                top: 'unset'
            });

            css( el, {
                left: 'calc( 50% - '+ el.offsetWidth / 2 +'px )', //parseInt( ( window.innerWidth - ( document.body.clientHeight > window.innerWidth ? 16 : 0 )) / 2 - modal.offsetWidth / 2) + 'px',
                top: 'calc( 50% - '+ el.offsetHeight / 2 +'px )', //parseInt( ( window.innerHeight - ( document.body.clientWidth > window.innerHeight ? 16 : 0 )) / 2 - modal.offsetHeight / 2) + 'px',
                display: display
            });

        }

        function modal_denied(popup, e){
            if( !popup.denied_selector )
                return;
            
            var serverCookie = Number( parseServerCookie( 'denied_'+popup.nameCookie ) );
            
            if( popup.denied && ( e instanceof Event || serverCookie === undefined || (serverCookie + popup.denied_cycle > Date.now())) ) {

                popup.modal && fadeAnimation( popup.modal, 'out' );

                if( popup.lockScroll )
                    ( document.documentElement.style.overflow = 'hidden' );


                popup.background && !background.parentNode && document.body.appendChild(background);
                background.removeEventListener('click', modal_fadeout);

                ( popup.denied.parentNode !== document.body ) && ( document.body.appendChild( popup.denied ), setPosition( popup.denied ), fadeAnimation( popup.denied, 'in' ), fadeAnimation( background, 'in' ) );
                
                if( !serverCookie )
                    document.cookie = 'denied_'+popup.nameCookie + '=' + Date.now();

                return true;
            }else if( popup.denied_cycle && serverCookie + popup.denied_cycle < Date.now() ){
                document.cookie = 'denied_'+popup.nameCookie + '=0';
                
            }

            
            function parseServerCookie(nameCookie){
                var parse = document.cookie.split(';');
                var output = {}
                for( let item of parse){
                    let parseItem = item.split('=')
                    output[ parseItem[0].trim() ] = parseItem[1].trim();
                }
                return output[nameCookie];
            }
        }


        
    }

})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:101:"/local/templates/olympia/components/bitrix/menu/overtop_multilevel_custom/script.min.js?1728624305407";s:6:"source";s:83:"/local/templates/olympia/components/bitrix/menu/overtop_multilevel_custom/script.js";s:3:"min";s:87:"/local/templates/olympia/components/bitrix/menu/overtop_multilevel_custom/script.min.js";s:3:"map";s:87:"/local/templates/olympia/components/bitrix/menu/overtop_multilevel_custom/script.map.js";}"*/
var jshover=function(){var e=document.getElementById("horizontal-multilevel-menu");if(!e)return;var t=e.getElementsByTagName("li");for(var n=0;n<t.length;n++){t[n].onmouseover=function(){this.className+=" jshover"};t[n].onmouseout=function(){this.className=this.className.replace(new RegExp(" jshover\\b"),"")}}};if(window.attachEvent)window.attachEvent("onload",jshover);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:90:"/local/templates/olympia/components/bitrix/menu/top_multilevel/script.min.js?1697106348409";s:6:"source";s:72:"/local/templates/olympia/components/bitrix/menu/top_multilevel/script.js";s:3:"min";s:76:"/local/templates/olympia/components/bitrix/menu/top_multilevel/script.min.js";s:3:"map";s:76:"/local/templates/olympia/components/bitrix/menu/top_multilevel/script.map.js";}"*/
//var jshover=function(){var e=document.getElementById("horizontal-multilevel-menu");if(!e)return;var t=e.getElementsByTagName("li");for(var n=0;n<t.length;n++){t[n].onmouseover=function(){this.className+=" jshover"};t[n].onmouseout=function(){this.className=this.className.replace(new RegExp(" jshover\\b"),"")}}};if(window.attachEvent)window.attachEvent("onload",jshover);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:56:"/local/templates/olympia/js/libs.min.js?1673253106198511";s:6:"source";s:39:"/local/templates/olympia/js/libs.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t,e){"object"==typeof module&&"object"==typeof module.exports?module.exports=t.document?e(t,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(t)}("undefined"!=typeof window?window:this,function(t,e){function n(t){var e=t.length,n=ot.type(t);return"function"!==n&&!ot.isWindow(t)&&(!(1!==t.nodeType||!e)||("array"===n||0===e||"number"==typeof e&&e>0&&e-1 in t))}function i(t,e,n){if(ot.isFunction(e))return ot.grep(t,function(t,i){return!!e.call(t,i,t)!==n});if(e.nodeType)return ot.grep(t,function(t){return t===e!==n});if("string"==typeof e){if(ht.test(e))return ot.filter(e,t,n);e=ot.filter(e,t)}return ot.grep(t,function(t){return ot.inArray(t,e)>=0!==n})}function o(t,e){do{t=t[e]}while(t&&1!==t.nodeType);return t}function s(t){var e=bt[t]={};return ot.each(t.match(yt)||[],function(t,n){e[n]=!0}),e}function r(){ft.addEventListener?(ft.removeEventListener("DOMContentLoaded",a,!1),t.removeEventListener("load",a,!1)):(ft.detachEvent("onreadystatechange",a),t.detachEvent("onload",a))}function a(){(ft.addEventListener||"load"===event.type||"complete"===ft.readyState)&&(r(),ot.ready())}function l(t,e,n){if(void 0===n&&1===t.nodeType){var i="data-"+e.replace(Tt,"-$1").toLowerCase();if("string"==typeof(n=t.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Ct.test(n)?ot.parseJSON(n):n)}catch(t){}ot.data(t,e,n)}else n=void 0}return n}function c(t){var e;for(e in t)if(("data"!==e||!ot.isEmptyObject(t[e]))&&"toJSON"!==e)return!1;return!0}function u(t,e,n,i){if(ot.acceptData(t)){var o,s,r=ot.expando,a=t.nodeType,l=a?ot.cache:t,c=a?t[r]:t[r]&&r;if(c&&l[c]&&(i||l[c].data)||void 0!==n||"string"!=typeof e)return c||(c=a?t[r]=Q.pop()||ot.guid++:r),l[c]||(l[c]=a?{}:{toJSON:ot.noop}),("object"==typeof e||"function"==typeof e)&&(i?l[c]=ot.extend(l[c],e):l[c].data=ot.extend(l[c].data,e)),s=l[c],i||(s.data||(s.data={}),s=s.data),void 0!==n&&(s[ot.camelCase(e)]=n),"string"==typeof e?null==(o=s[e])&&(o=s[ot.camelCase(e)]):o=s,o}}function d(t,e,n){if(ot.acceptData(t)){var i,o,s=t.nodeType,r=s?ot.cache:t,a=s?t[ot.expando]:ot.expando;if(r[a]){if(e&&(i=n?r[a]:r[a].data)){ot.isArray(e)?e=e.concat(ot.map(e,ot.camelCase)):e in i?e=[e]:(e=ot.camelCase(e),e=e in i?[e]:e.split(" ")),o=e.length;for(;o--;)delete i[e[o]];if(n?!c(i):!ot.isEmptyObject(i))return}(n||(delete r[a].data,c(r[a])))&&(s?ot.cleanData([t],!0):nt.deleteExpando||r!=r.window?delete r[a]:r[a]=null)}}}function h(){return!0}function p(){return!1}function f(){try{return ft.activeElement}catch(t){}}function g(t){var e=jt.split("|"),n=t.createDocumentFragment();if(n.createElement)for(;e.length;)n.createElement(e.pop());return n}function m(t,e){var n,i,o=0,s=typeof t.getElementsByTagName!==_t?t.getElementsByTagName(e||"*"):typeof t.querySelectorAll!==_t?t.querySelectorAll(e||"*"):void 0;if(!s)for(s=[],n=t.childNodes||t;null!=(i=n[o]);o++)!e||ot.nodeName(i,e)?s.push(i):ot.merge(s,m(i,e));return void 0===e||e&&ot.nodeName(t,e)?ot.merge([t],s):s}function v(t){Pt.test(t.type)&&(t.defaultChecked=t.checked)}function y(t,e){return ot.nodeName(t,"table")&&ot.nodeName(11!==e.nodeType?e:e.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t.appendChild(t.ownerDocument.createElement("tbody")):t}function b(t){return t.type=(null!==ot.find.attr(t,"type"))+"/"+t.type,t}function x(t){var e=Yt.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function w(t,e){for(var n,i=0;null!=(n=t[i]);i++)ot._data(n,"globalEval",!e||ot._data(e[i],"globalEval"))}function _(t,e){if(1===e.nodeType&&ot.hasData(t)){var n,i,o,s=ot._data(t),r=ot._data(e,s),a=s.events;if(a){delete r.handle,r.events={};for(n in a)for(i=0,o=a[n].length;o>i;i++)ot.event.add(e,n,a[n][i])}r.data&&(r.data=ot.extend({},r.data))}}function C(t,e){var n,i,o;if(1===e.nodeType){if(n=e.nodeName.toLowerCase(),!nt.noCloneEvent&&e[ot.expando]){o=ot._data(e);for(i in o.events)ot.removeEvent(e,i,o.handle);e.removeAttribute(ot.expando)}"script"===n&&e.text!==t.text?(b(e).text=t.text,x(e)):"object"===n?(e.parentNode&&(e.outerHTML=t.outerHTML),nt.html5Clone&&t.innerHTML&&!ot.trim(e.innerHTML)&&(e.innerHTML=t.innerHTML)):"input"===n&&Pt.test(t.type)?(e.defaultChecked=e.checked=t.checked,e.value!==t.value&&(e.value=t.value)):"option"===n?e.defaultSelected=e.selected=t.defaultSelected:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}}function T(e,n){var i,o=ot(n.createElement(e)).appendTo(n.body),s=t.getDefaultComputedStyle&&(i=t.getDefaultComputedStyle(o[0]))?i.display:ot.css(o[0],"display");return o.detach(),s}function S(t){var e=ft,n=Jt[t];return n||(n=T(t,e),"none"!==n&&n||(Gt=(Gt||ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=(Gt[0].contentWindow||Gt[0].contentDocument).document,e.write(),e.close(),n=T(t,e),Gt.detach()),Jt[t]=n),n}function $(t,e){return{get:function(){var n=t();if(null!=n)return n?void delete this.get:(this.get=e).apply(this,arguments)}}}function E(t,e){if(e in t)return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),i=e,o=de.length;o--;)if((e=de[o]+n)in t)return e;return i}function k(t,e){for(var n,i,o,s=[],r=0,a=t.length;a>r;r++)i=t[r],i.style&&(s[r]=ot._data(i,"olddisplay"),n=i.style.display,e?(s[r]||"none"!==n||(i.style.display=""),""===i.style.display&&Et(i)&&(s[r]=ot._data(i,"olddisplay",S(i.nodeName)))):(o=Et(i),(n&&"none"!==n||!o)&&ot._data(i,"olddisplay",o?n:ot.css(i,"display"))));for(r=0;a>r;r++)i=t[r],i.style&&(e&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=e?s[r]||"":"none"));return t}function P(t,e,n){var i=ae.exec(e);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):e}function L(t,e,n,i,o){for(var s=n===(i?"border":"content")?4:"width"===e?1:0,r=0;4>s;s+=2)"margin"===n&&(r+=ot.css(t,n+$t[s],!0,o)),i?("content"===n&&(r-=ot.css(t,"padding"+$t[s],!0,o)),"margin"!==n&&(r-=ot.css(t,"border"+$t[s]+"Width",!0,o))):(r+=ot.css(t,"padding"+$t[s],!0,o),"padding"!==n&&(r+=ot.css(t,"border"+$t[s]+"Width",!0,o)));return r}function A(t,e,n){var i=!0,o="width"===e?t.offsetWidth:t.offsetHeight,s=Kt(t),r=nt.boxSizing&&"border-box"===ot.css(t,"boxSizing",!1,s);if(0>=o||null==o){if(o=te(t,e,s),(0>o||null==o)&&(o=t.style[e]),ne.test(o))return o;i=r&&(nt.boxSizingReliable()||o===t.style[e]),o=parseFloat(o)||0}return o+L(t,e,n||(r?"border":"content"),i,s)+"px"}function D(t,e,n,i,o){return new D.prototype.init(t,e,n,i,o)}function N(){return setTimeout(function(){he=void 0}),he=ot.now()}function M(t,e){var n,i={height:t},o=0;for(e=e?1:0;4>o;o+=2-e)n=$t[o],i["margin"+n]=i["padding"+n]=t;return e&&(i.opacity=i.width=t),i}function j(t,e,n){for(var i,o=(ye[e]||[]).concat(ye["*"]),s=0,r=o.length;r>s;s++)if(i=o[s].call(n,e,t))return i}function z(t,e,n){var i,o,s,r,a,l,c,u=this,d={},h=t.style,p=t.nodeType&&Et(t),f=ot._data(t,"fxshow");n.queue||(a=ot._queueHooks(t,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,u.always(function(){u.always(function(){a.unqueued--,ot.queue(t,"fx").length||a.empty.fire()})})),1===t.nodeType&&("height"in e||"width"in e)&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],c=ot.css(t,"display"),"inline"===("none"===c?ot._data(t,"olddisplay")||S(t.nodeName):c)&&"none"===ot.css(t,"float")&&(nt.inlineBlockNeedsLayout&&"inline"!==S(t.nodeName)?h.zoom=1:h.display="inline-block")),n.overflow&&(h.overflow="hidden",nt.shrinkWrapBlocks()||u.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]}));for(i in e)if(o=e[i],fe.exec(o)){if(delete e[i],s=s||"toggle"===o,o===(p?"hide":"show")){if("show"!==o||!f||void 0===f[i])continue;p=!0}d[i]=f&&f[i]||ot.style(t,i)}else c=void 0;if(ot.isEmptyObject(d))"inline"===("none"===c?S(t.nodeName):c)&&(h.display=c);else{f?"hidden"in f&&(p=f.hidden):f=ot._data(t,"fxshow",{}),s&&(f.hidden=!p),p?ot(t).show():u.done(function(){ot(t).hide()}),u.done(function(){var e;ot._removeData(t,"fxshow");for(e in d)ot.style(t,e,d[e])});for(i in d)r=j(p?f[i]:0,i,u),i in f||(f[i]=r.start,p&&(r.end=r.start,r.start="width"===i||"height"===i?1:0))}}function F(t,e){var n,i,o,s,r;for(n in t)if(i=ot.camelCase(n),o=e[i],s=t[n],ot.isArray(s)&&(o=s[1],s=t[n]=s[0]),n!==i&&(t[i]=s,delete t[n]),(r=ot.cssHooks[i])&&"expand"in r){s=r.expand(s),delete t[i];for(n in s)n in t||(t[n]=s[n],e[n]=o)}else e[i]=o}function H(t,e,n){var i,o,s=0,r=ve.length,a=ot.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var e=he||N(),n=Math.max(0,c.startTime+c.duration-e),i=n/c.duration||0,s=1-i,r=0,l=c.tweens.length;l>r;r++)c.tweens[r].run(s);return a.notifyWith(t,[c,s,n]),1>s&&l?n:(a.resolveWith(t,[c]),!1)},c=a.promise({elem:t,props:ot.extend({},e),opts:ot.extend(!0,{specialEasing:{}},n),originalProperties:e,originalOptions:n,startTime:he||N(),duration:n.duration,tweens:[],createTween:function(e,n){var i=ot.Tween(t,c.opts,e,n,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(i),i},stop:function(e){var n=0,i=e?c.tweens.length:0;if(o)return this;for(o=!0;i>n;n++)c.tweens[n].run(1);return e?a.resolveWith(t,[c,e]):a.rejectWith(t,[c,e]),this}}),u=c.props;for(F(u,c.opts.specialEasing);r>s;s++)if(i=ve[s].call(c,t,u,c.opts))return i;return ot.map(u,j,c),ot.isFunction(c.opts.start)&&c.opts.start.call(t,c),ot.fx.timer(ot.extend(l,{elem:t,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function O(t){return function(e,n){"string"!=typeof e&&(n=e,e="*");var i,o=0,s=e.toLowerCase().match(yt)||[];if(ot.isFunction(n))for(;i=s[o++];)"+"===i.charAt(0)?(i=i.slice(1)||"*",(t[i]=t[i]||[]).unshift(n)):(t[i]=t[i]||[]).push(n)}}function I(t,e,n,i){function o(a){var l;return s[a]=!0,ot.each(t[a]||[],function(t,a){var c=a(e,n,i);return"string"!=typeof c||r||s[c]?r?!(l=c):void 0:(e.dataTypes.unshift(c),o(c),!1)}),l}var s={},r=t===Re;return o(e.dataTypes[0])||!s["*"]&&o("*")}function q(t,e){var n,i,o=ot.ajaxSettings.flatOptions||{};for(i in e)void 0!==e[i]&&((o[i]?t:n||(n={}))[i]=e[i]);return n&&ot.extend(!0,t,n),t}function R(t,e,n){for(var i,o,s,r,a=t.contents,l=t.dataTypes;"*"===l[0];)l.shift(),void 0===o&&(o=t.mimeType||e.getResponseHeader("Content-Type"));if(o)for(r in a)if(a[r]&&a[r].test(o)){l.unshift(r);break}if(l[0]in n)s=l[0];else{for(r in n){if(!l[0]||t.converters[r+" "+l[0]]){s=r;break}i||(i=r)}s=s||i}return s?(s!==l[0]&&l.unshift(s),n[s]):void 0}function B(t,e,n,i){var o,s,r,a,l,c={},u=t.dataTypes.slice();if(u[1])for(r in t.converters)c[r.toLowerCase()]=t.converters[r];for(s=u.shift();s;)if(t.responseFields[s]&&(n[t.responseFields[s]]=e),!l&&i&&t.dataFilter&&(e=t.dataFilter(e,t.dataType)),l=s,s=u.shift())if("*"===s)s=l;else if("*"!==l&&l!==s){if(!(r=c[l+" "+s]||c["* "+s]))for(o in c)if(a=o.split(" "),a[1]===s&&(r=c[l+" "+a[0]]||c["* "+a[0]])){!0===r?r=c[o]:!0!==c[o]&&(s=a[0],u.unshift(a[1]));break}if(!0!==r)if(r&&t.throws)e=r(e);else try{e=r(e)}catch(t){return{state:"parsererror",error:r?t:"No conversion from "+l+" to "+s}}}return{state:"success",data:e}}function W(t,e,n,i){var o;if(ot.isArray(e))ot.each(e,function(e,o){n||Xe.test(t)?i(t,o):W(t+"["+("object"==typeof o?e:"")+"]",o,n,i)});else if(n||"object"!==ot.type(e))i(t,e);else for(o in e)W(t+"["+o+"]",e[o],n,i)}function X(){try{return new t.XMLHttpRequest}catch(t){}}function Y(){try{return new t.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function Z(t){return ot.isWindow(t)?t:9===t.nodeType&&(t.defaultView||t.parentWindow)}var Q=[],U=Q.slice,V=Q.concat,G=Q.push,J=Q.indexOf,K={},tt=K.toString,et=K.hasOwnProperty,nt={},it="1.11.2",ot=function(t,e){return new ot.fn.init(t,e)},st=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rt=/^-ms-/,at=/-([\da-z])/gi,lt=function(t,e){return e.toUpperCase()};ot.fn=ot.prototype={jquery:it,constructor:ot,selector:"",length:0,toArray:function(){return U.call(this)},get:function(t){return null!=t?0>t?this[t+this.length]:this[t]:U.call(this)},pushStack:function(t){var e=ot.merge(this.constructor(),t);return e.prevObject=this,e.context=this.context,e},each:function(t,e){return ot.each(this,t,e)},map:function(t){return this.pushStack(ot.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(t){var e=this.length,n=+t+(0>t?e:0);return this.pushStack(n>=0&&e>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:G,sort:Q.sort,splice:Q.splice},ot.extend=ot.fn.extend=function(){var t,e,n,i,o,s,r=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,r=arguments[a]||{},a++),"object"==typeof r||ot.isFunction(r)||(r={}),a===l&&(r=this,a--);l>a;a++)if(null!=(o=arguments[a]))for(i in o)t=r[i],n=o[i],r!==n&&(c&&n&&(ot.isPlainObject(n)||(e=ot.isArray(n)))?(e?(e=!1,s=t&&ot.isArray(t)?t:[]):s=t&&ot.isPlainObject(t)?t:{},r[i]=ot.extend(c,s,n)):void 0!==n&&(r[i]=n));return r},ot.extend({expando:"jQuery"+(it+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isFunction:function(t){return"function"===ot.type(t)},isArray:Array.isArray||function(t){return"array"===ot.type(t)},isWindow:function(t){return null!=t&&t==t.window},isNumeric:function(t){return!ot.isArray(t)&&t-parseFloat(t)+1>=0},isEmptyObject:function(t){var e;for(e in t)return!1;return!0},isPlainObject:function(t){var e;if(!t||"object"!==ot.type(t)||t.nodeType||ot.isWindow(t))return!1;try{if(t.constructor&&!et.call(t,"constructor")&&!et.call(t.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}if(nt.ownLast)for(e in t)return et.call(t,e);for(e in t);return void 0===e||et.call(t,e)},type:function(t){return null==t?t+"":"object"==typeof t||"function"==typeof t?K[tt.call(t)]||"object":typeof t},globalEval:function(e){e&&ot.trim(e)&&(t.execScript||function(e){t.eval.call(t,e)})(e)},camelCase:function(t){return t.replace(rt,"ms-").replace(at,lt)},nodeName:function(t,e){return t.nodeName&&t.nodeName.toLowerCase()===e.toLowerCase()},each:function(t,e,i){var o=0,s=t.length,r=n(t);if(i){if(r)for(;s>o&&!1!==e.apply(t[o],i);o++);else for(o in t)if(!1===e.apply(t[o],i))break}else if(r)for(;s>o&&!1!==e.call(t[o],o,t[o]);o++);else for(o in t)if(!1===e.call(t[o],o,t[o]))break;return t},trim:function(t){return null==t?"":(t+"").replace(st,"")},makeArray:function(t,e){var i=e||[];return null!=t&&(n(Object(t))?ot.merge(i,"string"==typeof t?[t]:t):G.call(i,t)),i},inArray:function(t,e,n){var i;if(e){if(J)return J.call(e,t,n);for(i=e.length,n=n?0>n?Math.max(0,i+n):n:0;i>n;n++)if(n in e&&e[n]===t)return n}return-1},merge:function(t,e){for(var n=+e.length,i=0,o=t.length;n>i;)t[o++]=e[i++];if(n!==n)for(;void 0!==e[i];)t[o++]=e[i++];return t.length=o,t},grep:function(t,e,n){for(var i=[],o=0,s=t.length,r=!n;s>o;o++)!e(t[o],o)!==r&&i.push(t[o]);return i},map:function(t,e,i){var o,s=0,r=t.length,a=n(t),l=[];if(a)for(;r>s;s++)null!=(o=e(t[s],s,i))&&l.push(o);else for(s in t)null!=(o=e(t[s],s,i))&&l.push(o);return V.apply([],l)},guid:1,proxy:function(t,e){var n,i,o;return"string"==typeof e&&(o=t[e],e=t,t=o),ot.isFunction(t)?(n=U.call(arguments,2),i=function(){return t.apply(e||this,n.concat(U.call(arguments)))},i.guid=t.guid=t.guid||ot.guid++,i):void 0},now:function(){return+new Date},support:nt}),ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){K["[object "+e+"]"]=e.toLowerCase()});var ct=function(t){function e(t,e,n,i){var o,s,r,a,l,c,d,p,f,g;if((e?e.ownerDocument||e:I)!==D&&A(e),e=e||D,n=n||[],a=e.nodeType,"string"!=typeof t||!t||1!==a&&9!==a&&11!==a)return n;if(!i&&M){if(11!==a&&(o=yt.exec(t)))if(r=o[1]){if(9===a){if(!(s=e.getElementById(r))||!s.parentNode)return n;if(s.id===r)return n.push(s),n}else if(e.ownerDocument&&(s=e.ownerDocument.getElementById(r))&&H(e,s)&&s.id===r)return n.push(s),n}else{if(o[2])return J.apply(n,e.getElementsByTagName(t)),n;if((r=o[3])&&w.getElementsByClassName)return J.apply(n,e.getElementsByClassName(r)),n}if(w.qsa&&(!j||!j.test(t))){if(p=d=O,f=e,g=1!==a&&t,1===a&&"object"!==e.nodeName.toLowerCase()){for(c=S(t),(d=e.getAttribute("id"))?p=d.replace(xt,"\\$&"):e.setAttribute("id",p),p="[id='"+p+"'] ",l=c.length;l--;)c[l]=p+h(c[l]);f=bt.test(t)&&u(e.parentNode)||e,g=c.join(",")}if(g)try{return J.apply(n,f.querySelectorAll(g)),n}catch(t){}finally{d||e.removeAttribute("id")}}}return E(t.replace(lt,"$1"),e,n,i)}function n(){function t(n,i){return e.push(n+" ")>_.cacheLength&&delete t[e.shift()],t[n+" "]=i}var e=[];return t}function i(t){return t[O]=!0,t}function o(t){var e=D.createElement("div");try{return!!t(e)}catch(t){return!1}finally{e.parentNode&&e.parentNode.removeChild(e),e=null}}function s(t,e){for(var n=t.split("|"),i=t.length;i--;)_.attrHandle[n[i]]=e}function r(t,e){var n=e&&t,i=n&&1===t.nodeType&&1===e.nodeType&&(~e.sourceIndex||Z)-(~t.sourceIndex||Z);if(i)return i;if(n)for(;n=n.nextSibling;)if(n===e)return-1;return t?1:-1}function a(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function l(t){return function(e){var n=e.nodeName.toLowerCase();return("input"===n||"button"===n)&&e.type===t}}function c(t){return i(function(e){return e=+e,i(function(n,i){for(var o,s=t([],n.length,e),r=s.length;r--;)n[o=s[r]]&&(n[o]=!(i[o]=n[o]))})})}function u(t){return t&&void 0!==t.getElementsByTagName&&t}function d(){}function h(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e].value;return i}function p(t,e,n){var i=e.dir,o=n&&"parentNode"===i,s=R++;return e.first?function(e,n,s){for(;e=e[i];)if(1===e.nodeType||o)return t(e,n,s)}:function(e,n,r){var a,l,c=[q,s];if(r){for(;e=e[i];)if((1===e.nodeType||o)&&t(e,n,r))return!0}else for(;e=e[i];)if(1===e.nodeType||o){if(l=e[O]||(e[O]={}),(a=l[i])&&a[0]===q&&a[1]===s)return c[2]=a[2];if(l[i]=c,c[2]=t(e,n,r))return!0}}}function f(t){return t.length>1?function(e,n,i){for(var o=t.length;o--;)if(!t[o](e,n,i))return!1;return!0}:t[0]}function g(t,n,i){for(var o=0,s=n.length;s>o;o++)e(t,n[o],i);return i}function m(t,e,n,i,o){for(var s,r=[],a=0,l=t.length,c=null!=e;l>a;a++)(s=t[a])&&(!n||n(s,i,o))&&(r.push(s),c&&e.push(a));return r}function v(t,e,n,o,s,r){return o&&!o[O]&&(o=v(o)),s&&!s[O]&&(s=v(s,r)),i(function(i,r,a,l){var c,u,d,h=[],p=[],f=r.length,v=i||g(e||"*",a.nodeType?[a]:a,[]),y=!t||!i&&e?v:m(v,h,t,a,l),b=n?s||(i?t:f||o)?[]:r:y;if(n&&n(y,b,a,l),o)for(c=m(b,p),o(c,[],a,l),u=c.length;u--;)(d=c[u])&&(b[p[u]]=!(y[p[u]]=d));if(i){if(s||t){if(s){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d);s(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=s?tt(i,d):h[u])>-1&&(i[c]=!(r[c]=d))}}else b=m(b===r?b.splice(f,b.length):b),s?s(null,r,b,l):J.apply(r,b)})}function y(t){for(var e,n,i,o=t.length,s=_.relative[t[0].type],r=s||_.relative[" "],a=s?1:0,l=p(function(t){return t===e},r,!0),c=p(function(t){return tt(e,t)>-1},r,!0),u=[function(t,n,i){var o=!s&&(i||n!==k)||((e=n).nodeType?l(t,n,i):c(t,n,i));return e=null,o}];o>a;a++)if(n=_.relative[t[a].type])u=[p(f(u),n)];else{if(n=_.filter[t[a].type].apply(null,t[a].matches),n[O]){for(i=++a;o>i&&!_.relative[t[i].type];i++);return v(a>1&&f(u),a>1&&h(t.slice(0,a-1).concat({value:" "===t[a-2].type?"*":""})).replace(lt,"$1"),n,i>a&&y(t.slice(a,i)),o>i&&y(t=t.slice(i)),o>i&&h(t))}u.push(n)}return f(u)}function b(t,n){var o=n.length>0,s=t.length>0,r=function(i,r,a,l,c){var u,d,h,p=0,f="0",g=i&&[],v=[],y=k,b=i||s&&_.find.TAG("*",c),x=q+=null==y?1:Math.random()||.1,w=b.length;for(c&&(k=r!==D&&r);f!==w&&null!=(u=b[f]);f++){if(s&&u){for(d=0;h=t[d++];)if(h(u,r,a)){l.push(u);break}c&&(q=x)}o&&((u=!h&&u)&&p--,i&&g.push(u))}if(p+=f,o&&f!==p){for(d=0;h=n[d++];)h(g,v,r,a);if(i){if(p>0)for(;f--;)g[f]||v[f]||(v[f]=V.call(l));v=m(v)}J.apply(l,v),c&&!i&&v.length>0&&p+n.length>1&&e.uniqueSort(l)}return c&&(q=x,k=y),g};return o?i(r):r}var x,w,_,C,T,S,$,E,k,P,L,A,D,N,M,j,z,F,H,O="sizzle"+1*new Date,I=t.document,q=0,R=0,B=n(),W=n(),X=n(),Y=function(t,e){return t===e&&(L=!0),0},Z=1<<31,Q={}.hasOwnProperty,U=[],V=U.pop,G=U.push,J=U.push,K=U.slice,tt=function(t,e){for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n;return-1},et="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),st="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+nt+"*\\]",rt=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),lt=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ct=new RegExp("^"+nt+"*,"+nt+"*"),ut=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),dt=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),ht=new RegExp(rt),pt=new RegExp("^"+ot+"$"),ft={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+rt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+et+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,xt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),_t=function(t,e,n){var i="0x"+e-65536;return i!==i||n?e:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Ct=function(){A()};try{J.apply(U=K.call(I.childNodes),I.childNodes),U[I.childNodes.length].nodeType}catch(t){J={apply:U.length?function(t,e){G.apply(t,K.call(e))}:function(t,e){for(var n=t.length,i=0;t[n++]=e[i++];);t.length=n-1}}}w=e.support={},T=e.isXML=function(t){var e=t&&(t.ownerDocument||t).documentElement;return!!e&&"HTML"!==e.nodeName},A=e.setDocument=function(t){var e,n,i=t?t.ownerDocument||t:I;return i!==D&&9===i.nodeType&&i.documentElement?(D=i,N=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ct,!1):n.attachEvent&&n.attachEvent("onunload",Ct)),M=!T(i),w.attributes=o(function(t){return t.className="i",!t.getAttribute("className")}),w.getElementsByTagName=o(function(t){return t.appendChild(i.createComment("")),!t.getElementsByTagName("*").length}),w.getElementsByClassName=vt.test(i.getElementsByClassName),w.getById=o(function(t){return N.appendChild(t).id=O,!i.getElementsByName||!i.getElementsByName(O).length}),w.getById?(_.find.ID=function(t,e){if(void 0!==e.getElementById&&M){var n=e.getElementById(t);return n&&n.parentNode?[n]:[]}},_.filter.ID=function(t){var e=t.replace(wt,_t);return function(t){return t.getAttribute("id")===e}}):(delete _.find.ID,_.filter.ID=function(t){var e=t.replace(wt,_t);return function(t){var n=void 0!==t.getAttributeNode&&t.getAttributeNode("id");return n&&n.value===e}}),_.find.TAG=w.getElementsByTagName?function(t,e){return void 0!==e.getElementsByTagName?e.getElementsByTagName(t):w.qsa?e.querySelectorAll(t):void 0}:function(t,e){var n,i=[],o=0,s=e.getElementsByTagName(t);if("*"===t){for(;n=s[o++];)1===n.nodeType&&i.push(n);return i}return s},_.find.CLASS=w.getElementsByClassName&&function(t,e){return M?e.getElementsByClassName(t):void 0},z=[],j=[],(w.qsa=vt.test(i.querySelectorAll))&&(o(function(t){N.appendChild(t).innerHTML="<a id='"+O+"'></a><select id='"+O+"-\f]' msallowcapture=''><option selected=''></option></select>",t.querySelectorAll("[msallowcapture^='']").length&&j.push("[*^$]="+nt+"*(?:''|\"\")"),t.querySelectorAll("[selected]").length||j.push("\\["+nt+"*(?:value|"+et+")"),t.querySelectorAll("[id~="+O+"-]").length||j.push("~="),t.querySelectorAll(":checked").length||j.push(":checked"),t.querySelectorAll("a#"+O+"+*").length||j.push(".#.+[+~]")}),o(function(t){var e=i.createElement("input");e.setAttribute("type","hidden"),t.appendChild(e).setAttribute("name","D"),t.querySelectorAll("[name=d]").length&&j.push("name"+nt+"*[*^$|!~]?="),t.querySelectorAll(":enabled").length||j.push(":enabled",":disabled"),t.querySelectorAll("*,:x"),j.push(",.*:")})),(w.matchesSelector=vt.test(F=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&o(function(t){w.disconnectedMatch=F.call(t,"div"),F.call(t,"[s!='']:x"),z.push("!=",rt)}),j=j.length&&new RegExp(j.join("|")),z=z.length&&new RegExp(z.join("|")),e=vt.test(N.compareDocumentPosition),H=e||vt.test(N.contains)?function(t,e){var n=9===t.nodeType?t.documentElement:t,i=e&&e.parentNode;return t===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):t.compareDocumentPosition&&16&t.compareDocumentPosition(i)))}:function(t,e){if(e)for(;e=e.parentNode;)if(e===t)return!0;return!1},Y=e?function(t,e){if(t===e)return L=!0,0;var n=!t.compareDocumentPosition-!e.compareDocumentPosition;return n||(n=(t.ownerDocument||t)===(e.ownerDocument||e)?t.compareDocumentPosition(e):1,1&n||!w.sortDetached&&e.compareDocumentPosition(t)===n?t===i||t.ownerDocument===I&&H(I,t)?-1:e===i||e.ownerDocument===I&&H(I,e)?1:P?tt(P,t)-tt(P,e):0:4&n?-1:1)}:function(t,e){if(t===e)return L=!0,0;var n,o=0,s=t.parentNode,a=e.parentNode,l=[t],c=[e];if(!s||!a)return t===i?-1:e===i?1:s?-1:a?1:P?tt(P,t)-tt(P,e):0;if(s===a)return r(t,e);for(n=t;n=n.parentNode;)l.unshift(n);for(n=e;n=n.parentNode;)c.unshift(n);for(;l[o]===c[o];)o++;return o?r(l[o],c[o]):l[o]===I?-1:c[o]===I?1:0},i):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&A(t),n=n.replace(dt,"='$1']"),!(!w.matchesSelector||!M||z&&z.test(n)||j&&j.test(n)))try{var i=F.call(t,n);if(i||w.disconnectedMatch||t.document&&11!==t.document.nodeType)return i}catch(t){}return e(n,D,null,[t]).length>0},e.contains=function(t,e){return(t.ownerDocument||t)!==D&&A(t),H(t,e)},e.attr=function(t,e){(t.ownerDocument||t)!==D&&A(t);var n=_.attrHandle[e.toLowerCase()],i=n&&Q.call(_.attrHandle,e.toLowerCase())?n(t,e,!M):void 0;return void 0!==i?i:w.attributes||!M?t.getAttribute(e):(i=t.getAttributeNode(e))&&i.specified?i.value:null},e.error=function(t){throw new Error("Syntax error, unrecognized expression: "+t)},e.uniqueSort=function(t){var e,n=[],i=0,o=0;if(L=!w.detectDuplicates,P=!w.sortStable&&t.slice(0),t.sort(Y),L){for(;e=t[o++];)e===t[o]&&(i=n.push(o));for(;i--;)t.splice(n[i],1)}return P=null,t},C=e.getText=function(t){var e,n="",i=0,o=t.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)n+=C(t)}else if(3===o||4===o)return t.nodeValue}else for(;e=t[i++];)n+=C(e);return n},_=e.selectors={cacheLength:50,createPseudo:i,match:ft,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(t){return t[1]=t[1].replace(wt,_t),t[3]=(t[3]||t[4]||t[5]||"").replace(wt,_t),"~="===t[2]&&(t[3]=" "+t[3]+" "),t.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(t){var e,n=!t[6]&&t[2];return ft.CHILD.test(t[0])?null:(t[3]?t[2]=t[4]||t[5]||"":n&&ht.test(n)&&(e=S(n,!0))&&(e=n.indexOf(")",n.length-e)-n.length)&&(t[0]=t[0].slice(0,e),t[2]=n.slice(0,e)),t.slice(0,3))}},filter:{TAG:function(t){var e=t.replace(wt,_t).toLowerCase();return"*"===t?function(){return!0}:function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(t){var e=B[t+" "];return e||(e=new RegExp("(^|"+nt+")"+t+"("+nt+"|$)"))&&B(t,function(t){return e.test("string"==typeof t.className&&t.className||void 0!==t.getAttribute&&t.getAttribute("class")||"")})},ATTR:function(t,n,i){return function(o){var s=e.attr(o,t);return null==s?"!="===n:!n||(s+="","="===n?s===i:"!="===n?s!==i:"^="===n?i&&0===s.indexOf(i):"*="===n?i&&s.indexOf(i)>-1:"$="===n?i&&s.slice(-i.length)===i:"~="===n?(" "+s.replace(at," ")+" ").indexOf(i)>-1:"|="===n&&(s===i||s.slice(0,i.length+1)===i+"-"))}},CHILD:function(t,e,n,i,o){var s="nth"!==t.slice(0,3),r="last"!==t.slice(-4),a="of-type"===e;return 1===i&&0===o?function(t){return!!t.parentNode}:function(e,n,l){var c,u,d,h,p,f,g=s!==r?"nextSibling":"previousSibling",m=e.parentNode,v=a&&e.nodeName.toLowerCase(),y=!l&&!a;if(m){if(s){for(;g;){for(d=e;d=d[g];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;f=g="only"===t&&!f&&"nextSibling"}return!0}if(f=[r?m.firstChild:m.lastChild],r&&y){for(u=m[O]||(m[O]={}),c=u[t]||[],p=c[0]===q&&c[1],h=c[0]===q&&c[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(h=p=0)||f.pop();)if(1===d.nodeType&&++h&&d===e){u[t]=[q,p,h];break}}else if(y&&(c=(e[O]||(e[O]={}))[t])&&c[0]===q)h=c[1];else for(;(d=++p&&d&&d[g]||(h=p=0)||f.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++h||(y&&((d[O]||(d[O]={}))[t]=[q,h]),d!==e)););return(h-=o)===i||h%i==0&&h/i>=0}}},PSEUDO:function(t,n){var o,s=_.pseudos[t]||_.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return s[O]?s(n):s.length>1?(o=[t,t,"",n],_.setFilters.hasOwnProperty(t.toLowerCase())?i(function(t,e){for(var i,o=s(t,n),r=o.length;r--;)i=tt(t,o[r]),t[i]=!(e[i]=o[r])}):function(t){return s(t,0,o)}):s}},pseudos:{not:i(function(t){var e=[],n=[],o=$(t.replace(lt,"$1"));return o[O]?i(function(t,e,n,i){for(var s,r=o(t,null,i,[]),a=t.length;a--;)(s=r[a])&&(t[a]=!(e[a]=s))}):function(t,i,s){return e[0]=t,o(e,null,s,n),e[0]=null,!n.pop()}}),has:i(function(t){return function(n){return e(t,n).length>0}}),contains:i(function(t){return t=t.replace(wt,_t),function(e){return(e.textContent||e.innerText||C(e)).indexOf(t)>-1}}),lang:i(function(t){return pt.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(wt,_t).toLowerCase(),function(e){var n;do{if(n=M?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(n=n.toLowerCase())===t||0===n.indexOf(t+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var n=t.location&&t.location.hash;return n&&n.slice(1)===e.id},root:function(t){return t===N},focus:function(t){return t===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(t.type||t.href||~t.tabIndex)},enabled:function(t){return!1===t.disabled},disabled:function(t){return!0===t.disabled},checked:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&!!t.checked||"option"===e&&!!t.selected},selected:function(t){return t.parentNode&&t.parentNode.selectedIndex,!0===t.selected},empty:function(t){for(t=t.firstChild;t;t=t.nextSibling)if(t.nodeType<6)return!1;return!0},parent:function(t){return!_.pseudos.empty(t)},header:function(t){return mt.test(t.nodeName)},input:function(t){return gt.test(t.nodeName)},button:function(t){var e=t.nodeName.toLowerCase();return"input"===e&&"button"===t.type||"button"===e},text:function(t){var e;return"input"===t.nodeName.toLowerCase()&&"text"===t.type&&(null==(e=t.getAttribute("type"))||"text"===e.toLowerCase())},first:c(function(){return[0]}),last:c(function(t,e){return[e-1]}),eq:c(function(t,e,n){return[0>n?n+e:n]}),even:c(function(t,e){for(var n=0;e>n;n+=2)t.push(n);return t}),odd:c(function(t,e){for(var n=1;e>n;n+=2)t.push(n);return t}),lt:c(function(t,e,n){for(var i=0>n?n+e:n;--i>=0;)t.push(i);return t}),gt:c(function(t,e,n){for(var i=0>n?n+e:n;++i<e;)t.push(i);return t})}},_.pseudos.nth=_.pseudos.eq;for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})_.pseudos[x]=a(x);for(x in{submit:!0,reset:!0})_.pseudos[x]=l(x);return d.prototype=_.filters=_.pseudos,_.setFilters=new d,S=e.tokenize=function(t,n){var i,o,s,r,a,l,c,u=W[t+" "];if(u)return n?0:u.slice(0);for(a=t,l=[],c=_.preFilter;a;){(!i||(o=ct.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(s=[])),i=!1,(o=ut.exec(a))&&(i=o.shift(),s.push({value:i,type:o[0].replace(lt," ")}),a=a.slice(i.length));for(r in _.filter)!(o=ft[r].exec(a))||c[r]&&!(o=c[r](o))||(i=o.shift(),s.push({value:i,type:r,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?e.error(t):W(t,l).slice(0)},$=e.compile=function(t,e){var n,i=[],o=[],s=X[t+" "];if(!s){for(e||(e=S(t)),n=e.length;n--;)s=y(e[n]),s[O]?i.push(s):o.push(s);s=X(t,b(o,i)),s.selector=t}return s},E=e.select=function(t,e,n,i){var o,s,r,a,l,c="function"==typeof t&&t,d=!i&&S(t=c.selector||t);if(n=n||[],1===d.length){if(s=d[0]=d[0].slice(0),s.length>2&&"ID"===(r=s[0]).type&&w.getById&&9===e.nodeType&&M&&_.relative[s[1].type]){if(!(e=(_.find.ID(r.matches[0].replace(wt,_t),e)||[])[0]))return n;c&&(e=e.parentNode),t=t.slice(s.shift().value.length)}for(o=ft.needsContext.test(t)?0:s.length;o--&&(r=s[o],!_.relative[a=r.type]);)if((l=_.find[a])&&(i=l(r.matches[0].replace(wt,_t),bt.test(s[0].type)&&u(e.parentNode)||e))){if(s.splice(o,1),!(t=i.length&&h(s)))return J.apply(n,i),n;break}}return(c||$(t,d))(i,e,!M,n,bt.test(t)&&u(e.parentNode)||e),n},w.sortStable=O.split("").sort(Y).join("")===O,w.detectDuplicates=!!L,A(),w.sortDetached=o(function(t){return 1&t.compareDocumentPosition(D.createElement("div"))}),o(function(t){return t.innerHTML="<a href='#'></a>","#"===t.firstChild.getAttribute("href")})||s("type|href|height|width",function(t,e,n){return n?void 0:t.getAttribute(e,"type"===e.toLowerCase()?1:2)}),w.attributes&&o(function(t){return t.innerHTML="<input/>",t.firstChild.setAttribute("value",""),""===t.firstChild.getAttribute("value")})||s("value",function(t,e,n){return n||"input"!==t.nodeName.toLowerCase()?void 0:t.defaultValue}),o(function(t){return null==t.getAttribute("disabled")})||s(et,function(t,e,n){var i;return n?void 0:!0===t[e]?e.toLowerCase():(i=t.getAttributeNode(e))&&i.specified?i.value:null}),e}(t);ot.find=ct,ot.expr=ct.selectors,ot.expr[":"]=ot.expr.pseudos,ot.unique=ct.uniqueSort,ot.text=ct.getText,ot.isXMLDoc=ct.isXML,ot.contains=ct.contains;var ut=ot.expr.match.needsContext,dt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ht=/^.[^:#\[\.,]*$/;ot.filter=function(t,e,n){var i=e[0];return n&&(t=":not("+t+")"),1===e.length&&1===i.nodeType?ot.find.matchesSelector(i,t)?[i]:[]:ot.find.matches(t,ot.grep(e,function(t){return 1===t.nodeType}))},ot.fn.extend({find:function(t){var e,n=[],i=this,o=i.length;if("string"!=typeof t)return this.pushStack(ot(t).filter(function(){for(e=0;o>e;e++)if(ot.contains(i[e],this))return!0}));for(e=0;o>e;e++)ot.find(t,i[e],n);return n=this.pushStack(o>1?ot.unique(n):n),n.selector=this.selector?this.selector+" "+t:t,n},filter:function(t){return this.pushStack(i(this,t||[],!1))},not:function(t){return this.pushStack(i(this,t||[],!0))},is:function(t){return!!i(this,"string"==typeof t&&ut.test(t)?ot(t):t||[],!1).length}});var pt,ft=t.document,gt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(ot.fn.init=function(t,e){var n,i;if(!t)return this;if("string"==typeof t){if(!(n="<"===t.charAt(0)&&">"===t.charAt(t.length-1)&&t.length>=3?[null,t,null]:gt.exec(t))||!n[1]&&e)return!e||e.jquery?(e||pt).find(t):this.constructor(e).find(t);if(n[1]){if(e=e instanceof ot?e[0]:e,ot.merge(this,ot.parseHTML(n[1],e&&e.nodeType?e.ownerDocument||e:ft,!0)),dt.test(n[1])&&ot.isPlainObject(e))for(n in e)ot.isFunction(this[n])?this[n](e[n]):this.attr(n,e[n]);return this}if((i=ft.getElementById(n[2]))&&i.parentNode){if(i.id!==n[2])return pt.find(t);this.length=1,this[0]=i}return this.context=ft,this.selector=t,this}return t.nodeType?(this.context=this[0]=t,this.length=1,this):ot.isFunction(t)?void 0!==pt.ready?pt.ready(t):t(ot):(void 0!==t.selector&&(this.selector=t.selector,this.context=t.context),ot.makeArray(t,this))}).prototype=ot.fn,pt=ot(ft);var mt=/^(?:parents|prev(?:Until|All))/,vt={children:!0,contents:!0,next:!0,prev:!0};ot.extend({dir:function(t,e,n){for(var i=[],o=t[e];o&&9!==o.nodeType&&(void 0===n||1!==o.nodeType||!ot(o).is(n));)1===o.nodeType&&i.push(o),o=o[e];return i},sibling:function(t,e){for(var n=[];t;t=t.nextSibling)1===t.nodeType&&t!==e&&n.push(t);return n}}),ot.fn.extend({has:function(t){var e,n=ot(t,this),i=n.length;return this.filter(function(){for(e=0;i>e;e++)if(ot.contains(this,n[e]))return!0})},closest:function(t,e){for(var n,i=0,o=this.length,s=[],r=ut.test(t)||"string"!=typeof t?ot(t,e||this.context):0;o>i;i++)for(n=this[i];n&&n!==e;n=n.parentNode)if(n.nodeType<11&&(r?r.index(n)>-1:1===n.nodeType&&ot.find.matchesSelector(n,t))){s.push(n);break}return this.pushStack(s.length>1?ot.unique(s):s)},index:function(t){return t?"string"==typeof t?ot.inArray(this[0],ot(t)):ot.inArray(t.jquery?t[0]:t,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,e){return this.pushStack(ot.unique(ot.merge(this.get(),ot(t,e))))},addBack:function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}}),ot.each({parent:function(t){var e=t.parentNode;return e&&11!==e.nodeType?e:null},parents:function(t){return ot.dir(t,"parentNode")},parentsUntil:function(t,e,n){return ot.dir(t,"parentNode",n)},next:function(t){return o(t,"nextSibling")},prev:function(t){return o(t,"previousSibling")},nextAll:function(t){return ot.dir(t,"nextSibling")},prevAll:function(t){return ot.dir(t,"previousSibling")},nextUntil:function(t,e,n){return ot.dir(t,"nextSibling",n)},prevUntil:function(t,e,n){return ot.dir(t,"previousSibling",n)},siblings:function(t){return ot.sibling((t.parentNode||{}).firstChild,t)},children:function(t){return ot.sibling(t.firstChild)},contents:function(t){return ot.nodeName(t,"iframe")?t.contentDocument||t.contentWindow.document:ot.merge([],t.childNodes)}},function(t,e){ot.fn[t]=function(n,i){var o=ot.map(this,e,n);return"Until"!==t.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=ot.filter(i,o)),this.length>1&&(vt[t]||(o=ot.unique(o)),mt.test(t)&&(o=o.reverse())),this.pushStack(o)}});var yt=/\S+/g,bt={};ot.Callbacks=function(t){t="string"==typeof t?bt[t]||s(t):ot.extend({},t);var e,n,i,o,r,a,l=[],c=!t.once&&[],u=function(s){for(n=t.memory&&s,i=!0,r=a||0,a=0,o=l.length,e=!0;l&&o>r;r++)if(!1===l[r].apply(s[0],s[1])&&t.stopOnFalse){n=!1;break}e=!1,l&&(c?c.length&&u(c.shift()):n?l=[]:d.disable())},d={add:function(){if(l){var i=l.length;!function e(n){ot.each(n,function(n,i){var o=ot.type(i);"function"===o?t.unique&&d.has(i)||l.push(i):i&&i.length&&"string"!==o&&e(i)})}(arguments),e?o=l.length:n&&(a=i,u(n))}return this},remove:function(){return l&&ot.each(arguments,function(t,n){for(var i;(i=ot.inArray(n,l,i))>-1;)l.splice(i,1),e&&(o>=i&&o--,r>=i&&r--)}),this},has:function(t){return t?ot.inArray(t,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=c=n=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,n||d.disable(),this},locked:function(){return!c},fireWith:function(t,n){return!l||i&&!c||(n=n||[],n=[t,n.slice?n.slice():n],e?c.push(n):u(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},ot.extend({Deferred:function(t){var e=[["resolve","done",ot.Callbacks("once memory"),"resolved"],["reject","fail",ot.Callbacks("once memory"),"rejected"],["notify","progress",ot.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var t=arguments;return ot.Deferred(function(n){ot.each(e,function(e,s){var r=ot.isFunction(t[e])&&t[e];o[s[1]](function(){var t=r&&r.apply(this,arguments);t&&ot.isFunction(t.promise)?t.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s[0]+"With"](this===i?n.promise():this,r?[t]:arguments)})}),t=null}).promise()},promise:function(t){return null!=t?ot.extend(t,i):i}},o={};return i.pipe=i.then,ot.each(e,function(t,s){var r=s[2],a=s[3];i[s[1]]=r.add,a&&r.add(function(){n=a},e[1^t][2].disable,e[2][2].lock),o[s[0]]=function(){return o[s[0]+"With"](this===o?i:this,arguments),this},o[s[0]+"With"]=r.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(t){var e,n,i,o=0,s=U.call(arguments),r=s.length,a=1!==r||t&&ot.isFunction(t.promise)?r:0,l=1===a?t:ot.Deferred(),c=function(t,n,i){return function(o){n[t]=this,i[t]=arguments.length>1?U.call(arguments):o,i===e?l.notifyWith(n,i):--a||l.resolveWith(n,i)}};if(r>1)for(e=new Array(r),n=new Array(r),i=new Array(r);r>o;o++)s[o]&&ot.isFunction(s[o].promise)?s[o].promise().done(c(o,i,s)).fail(l.reject).progress(c(o,n,e)):--a;return a||l.resolveWith(i,s),l.promise()}});var xt;ot.fn.ready=function(t){return ot.ready.promise().done(t),this},ot.extend({isReady:!1,readyWait:1,holdReady:function(t){t?ot.readyWait++:ot.ready(!0)},ready:function(t){if(!0===t?!--ot.readyWait:!ot.isReady){if(!ft.body)return setTimeout(ot.ready);ot.isReady=!0,!0!==t&&--ot.readyWait>0||(xt.resolveWith(ft,[ot]),ot.fn.triggerHandler&&(ot(ft).triggerHandler("ready"),ot(ft).off("ready")))}}}),ot.ready.promise=function(e){if(!xt)if(xt=ot.Deferred(),"complete"===ft.readyState)setTimeout(ot.ready);else if(ft.addEventListener)ft.addEventListener("DOMContentLoaded",a,!1),t.addEventListener("load",a,!1);else{ft.attachEvent("onreadystatechange",a),t.attachEvent("onload",a);var n=!1;try{n=null==t.frameElement&&ft.documentElement}catch(t){}n&&n.doScroll&&function t(){if(!ot.isReady){try{n.doScroll("left")}catch(e){return setTimeout(t,50)}r(),ot.ready()}}()}return xt.promise(e)};var wt,_t="undefined";for(wt in ot(nt))break;nt.ownLast="0"!==wt,nt.inlineBlockNeedsLayout=!1,ot(function(){var t,e,n,i;(n=ft.getElementsByTagName("body")[0])&&n.style&&(e=ft.createElement("div"),i=ft.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),typeof e.style.zoom!==_t&&(e.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",nt.inlineBlockNeedsLayout=t=3===e.offsetWidth,t&&(n.style.zoom=1)),n.removeChild(i))}),function(){var t=ft.createElement("div");if(null==nt.deleteExpando){nt.deleteExpando=!0;try{delete t.test}catch(t){nt.deleteExpando=!1}}t=null}(),ot.acceptData=function(t){var e=ot.noData[(t.nodeName+" ").toLowerCase()],n=+t.nodeType||1;return(1===n||9===n)&&(!e||!0!==e&&t.getAttribute("classid")===e)};var Ct=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Tt=/([A-Z])/g;ot.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(t){return!!(t=t.nodeType?ot.cache[t[ot.expando]]:t[ot.expando])&&!c(t)},data:function(t,e,n){return u(t,e,n)},removeData:function(t,e){return d(t,e)},_data:function(t,e,n){return u(t,e,n,!0)},_removeData:function(t,e){return d(t,e,!0)}}),ot.fn.extend({data:function(t,e){var n,i,o,s=this[0],r=s&&s.attributes;if(void 0===t){if(this.length&&(o=ot.data(s),1===s.nodeType&&!ot._data(s,"parsedAttrs"))){for(n=r.length;n--;)r[n]&&(i=r[n].name,0===i.indexOf("data-")&&(i=ot.camelCase(i.slice(5)),l(s,i,o[i])));ot._data(s,"parsedAttrs",!0)}return o}return"object"==typeof t?this.each(function(){ot.data(this,t)}):arguments.length>1?this.each(function(){ot.data(this,t,e)}):s?l(s,t,ot.data(s,t)):void 0},removeData:function(t){return this.each(function(){ot.removeData(this,t)})}}),ot.extend({queue:function(t,e,n){var i;return t?(e=(e||"fx")+"queue",i=ot._data(t,e),n&&(!i||ot.isArray(n)?i=ot._data(t,e,ot.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(t,e){e=e||"fx";var n=ot.queue(t,e),i=n.length,o=n.shift(),s=ot._queueHooks(t,e),r=function(){ot.dequeue(t,e)};"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===e&&n.unshift("inprogress"),delete s.stop,o.call(t,r,s)),!i&&s&&s.empty.fire()},_queueHooks:function(t,e){var n=e+"queueHooks";return ot._data(t,n)||ot._data(t,n,{empty:ot.Callbacks("once memory").add(function(){ot._removeData(t,e+"queue"),ot._removeData(t,n)})})}}),ot.fn.extend({queue:function(t,e){var n=2;return"string"!=typeof t&&(e=t,t="fx",n--),arguments.length<n?ot.queue(this[0],t):void 0===e?this:this.each(function(){var n=ot.queue(this,t,e);ot._queueHooks(this,t),"fx"===t&&"inprogress"!==n[0]&&ot.dequeue(this,t)})},dequeue:function(t){return this.each(function(){ot.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,e){var n,i=1,o=ot.Deferred(),s=this,r=this.length,a=function(){--i||o.resolveWith(s,[s])};for("string"!=typeof t&&(e=t,t=void 0),t=t||"fx";r--;)(n=ot._data(s[r],t+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(e)}});var St=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$t=["Top","Right","Bottom","Left"],Et=function(t,e){return t=e||t,"none"===ot.css(t,"display")||!ot.contains(t.ownerDocument,t)},kt=ot.access=function(t,e,n,i,o,s,r){var a=0,l=t.length,c=null==n;if("object"===ot.type(n)){o=!0;for(a in n)ot.access(t,e,a,n[a],!0,s,r)}else if(void 0!==i&&(o=!0,ot.isFunction(i)||(r=!0),c&&(r?(e.call(t,i),e=null):(c=e,e=function(t,e,n){return c.call(ot(t),n)})),e))for(;l>a;a++)e(t[a],n,r?i:i.call(t[a],a,e(t[a],n)));return o?t:c?e.call(t):l?e(t[0],n):s},Pt=/^(?:checkbox|radio)$/i;!function(){var t=ft.createElement("input"),e=ft.createElement("div"),n=ft.createDocumentFragment();if(e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",nt.leadingWhitespace=3===e.firstChild.nodeType,nt.tbody=!e.getElementsByTagName("tbody").length,nt.htmlSerialize=!!e.getElementsByTagName("link").length,nt.html5Clone="<:nav></:nav>"!==ft.createElement("nav").cloneNode(!0).outerHTML,t.type="checkbox",t.checked=!0,n.appendChild(t),nt.appendChecked=t.checked,e.innerHTML="<textarea>x</textarea>",nt.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue,n.appendChild(e),e.innerHTML="<input type='radio' checked='checked' name='t'/>",nt.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,nt.noCloneEvent=!0,e.attachEvent&&(e.attachEvent("onclick",function(){nt.noCloneEvent=!1}),e.cloneNode(!0).click()),null==nt.deleteExpando){nt.deleteExpando=!0;try{delete e.test}catch(t){nt.deleteExpando=!1}}}(),function(){var e,n,i=ft.createElement("div");for(e in{submit:!0,change:!0,focusin:!0})n="on"+e,(nt[e+"Bubbles"]=n in t)||(i.setAttribute(n,"t"),nt[e+"Bubbles"]=!1===i.attributes[n].expando);i=null}();var Lt=/^(?:input|select|textarea)$/i,At=/^key/,Dt=/^(?:mouse|pointer|contextmenu)|click/,Nt=/^(?:focusinfocus|focusoutblur)$/,Mt=/^([^.]*)(?:\.(.+)|)$/;ot.event={global:{},add:function(t,e,n,i,o){var s,r,a,l,c,u,d,h,p,f,g,m=ot._data(t);if(m){for(n.handler&&(l=n,n=l.handler,o=l.selector),n.guid||(n.guid=ot.guid++),(r=m.events)||(r=m.events={}),(u=m.handle)||(u=m.handle=function(t){return typeof ot===_t||t&&ot.event.triggered===t.type?void 0:ot.event.dispatch.apply(u.elem,arguments)},u.elem=t),e=(e||"").match(yt)||[""],a=e.length;a--;)s=Mt.exec(e[a])||[],p=g=s[1],f=(s[2]||"").split(".").sort(),p&&(c=ot.event.special[p]||{},p=(o?c.delegateType:c.bindType)||p,c=ot.event.special[p]||{},d=ot.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&ot.expr.match.needsContext.test(o),namespace:f.join(".")},l),(h=r[p])||(h=r[p]=[],h.delegateCount=0,c.setup&&!1!==c.setup.call(t,i,f,u)||(t.addEventListener?t.addEventListener(p,u,!1):t.attachEvent&&t.attachEvent("on"+p,u))),c.add&&(c.add.call(t,d),d.handler.guid||(d.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,d):h.push(d),ot.event.global[p]=!0);t=null}},remove:function(t,e,n,i,o){var s,r,a,l,c,u,d,h,p,f,g,m=ot.hasData(t)&&ot._data(t);if(m&&(u=m.events)){for(e=(e||"").match(yt)||[""],c=e.length;c--;)if(a=Mt.exec(e[c])||[],p=g=a[1],f=(a[2]||"").split(".").sort(),p){for(d=ot.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,h=u[p]||[],a=a[2]&&new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=s=h.length;s--;)r=h[s],!o&&g!==r.origType||n&&n.guid!==r.guid||a&&!a.test(r.namespace)||i&&i!==r.selector&&("**"!==i||!r.selector)||(h.splice(s,1),r.selector&&h.delegateCount--,d.remove&&d.remove.call(t,r));l&&!h.length&&(d.teardown&&!1!==d.teardown.call(t,f,m.handle)||ot.removeEvent(t,p,m.handle),delete u[p])}else for(p in u)ot.event.remove(t,p+e[c],n,i,!0);ot.isEmptyObject(u)&&(delete m.handle,ot._removeData(t,"events"))}},trigger:function(e,n,i,o){var s,r,a,l,c,u,d,h=[i||ft],p=et.call(e,"type")?e.type:e,f=et.call(e,"namespace")?e.namespace.split("."):[];if(a=u=i=i||ft,3!==i.nodeType&&8!==i.nodeType&&!Nt.test(p+ot.event.triggered)&&(p.indexOf(".")>=0&&(f=p.split("."),p=f.shift(),f.sort()),r=p.indexOf(":")<0&&"on"+p,e=e[ot.expando]?e:new ot.Event(p,"object"==typeof e&&e),e.isTrigger=o?2:3,e.namespace=f.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),n=null==n?[e]:ot.makeArray(n,[e]),c=ot.event.special[p]||{},o||!c.trigger||!1!==c.trigger.apply(i,n))){if(!o&&!c.noBubble&&!ot.isWindow(i)){for(l=c.delegateType||p,Nt.test(l+p)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(i.ownerDocument||ft)&&h.push(u.defaultView||u.parentWindow||t)}for(d=0;(a=h[d++])&&!e.isPropagationStopped();)e.type=d>1?l:c.bindType||p,s=(ot._data(a,"events")||{})[e.type]&&ot._data(a,"handle"),s&&s.apply(a,n),(s=r&&a[r])&&s.apply&&ot.acceptData(a)&&(e.result=s.apply(a,n),!1===e.result&&e.preventDefault());if(e.type=p,!o&&!e.isDefaultPrevented()&&(!c._default||!1===c._default.apply(h.pop(),n))&&ot.acceptData(i)&&r&&i[p]&&!ot.isWindow(i)){u=i[r],u&&(i[r]=null),ot.event.triggered=p;try{i[p]()}catch(t){}ot.event.triggered=void 0,u&&(i[r]=u)}return e.result}},dispatch:function(t){t=ot.event.fix(t);var e,n,i,o,s,r=[],a=U.call(arguments),l=(ot._data(this,"events")||{})[t.type]||[],c=ot.event.special[t.type]||{};if(a[0]=t,t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){for(r=ot.event.handlers.call(this,t,l),e=0;(o=r[e++])&&!t.isPropagationStopped();)for(t.currentTarget=o.elem,s=0;(i=o.handlers[s++])&&!t.isImmediatePropagationStopped();)(!t.namespace_re||t.namespace_re.test(i.namespace))&&(t.handleObj=i,t.data=i.data,void 0!==(n=((ot.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,a))&&!1===(t.result=n)&&(t.preventDefault(),t.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(t,e){var n,i,o,s,r=[],a=e.delegateCount,l=t.target;if(a&&l.nodeType&&(!t.button||"click"!==t.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(!0!==l.disabled||"click"!==t.type)){for(o=[],s=0;a>s;s++)i=e[s],n=i.selector+" ",void 0===o[n]&&(o[n]=i.needsContext?ot(n,this).index(l)>=0:ot.find(n,this,null,[l]).length),o[n]&&o.push(i);o.length&&r.push({elem:l,handlers:o})}return a<e.length&&r.push({elem:this,handlers:e.slice(a)}),r},fix:function(t){if(t[ot.expando])return t;var e,n,i,o=t.type,s=t,r=this.fixHooks[o];for(r||(this.fixHooks[o]=r=Dt.test(o)?this.mouseHooks:At.test(o)?this.keyHooks:{}),i=r.props?this.props.concat(r.props):this.props,t=new ot.Event(s),e=i.length;e--;)n=i[e],t[n]=s[n];return t.target||(t.target=s.srcElement||ft),3===t.target.nodeType&&(t.target=t.target.parentNode),t.metaKey=!!t.metaKey,r.filter?r.filter(t,s):t},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(t,e){return null==t.which&&(t.which=null!=e.charCode?e.charCode:e.keyCode),t}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(t,e){var n,i,o,s=e.button,r=e.fromElement;return null==t.pageX&&null!=e.clientX&&(i=t.target.ownerDocument||ft,o=i.documentElement,n=i.body,t.pageX=e.clientX+(o&&o.scrollLeft||n&&n.scrollLeft||0)-(o&&o.clientLeft||n&&n.clientLeft||0),t.pageY=e.clientY+(o&&o.scrollTop||n&&n.scrollTop||0)-(o&&o.clientTop||n&&n.clientTop||0)),!t.relatedTarget&&r&&(t.relatedTarget=r===t.target?e.toElement:r),t.which||void 0===s||(t.which=1&s?1:2&s?3:4&s?2:0),t}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==f()&&this.focus)try{return this.focus(),!1}catch(t){}},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ot.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(t){return ot.nodeName(t.target,"a")}},beforeunload:{postDispatch:function(t){void 0!==t.result&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}},simulate:function(t,e,n,i){var o=ot.extend(new ot.Event,n,{type:t,isSimulated:!0,originalEvent:{}});i?ot.event.trigger(o,null,e):ot.event.dispatch.call(e,o),o.isDefaultPrevented()&&n.preventDefault()}},ot.removeEvent=ft.removeEventListener?function(t,e,n){t.removeEventListener&&t.removeEventListener(e,n,!1)}:function(t,e,n){var i="on"+e;t.detachEvent&&(typeof t[i]===_t&&(t[i]=null),t.detachEvent(i,n))},ot.Event=function(t,e){return this instanceof ot.Event?(t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||void 0===t.defaultPrevented&&!1===t.returnValue?h:p):this.type=t,e&&ot.extend(this,e),this.timeStamp=t&&t.timeStamp||ot.now(),void(this[ot.expando]=!0)):new ot.Event(t,e)},ot.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=h,t&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=h,t&&(t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0)},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=h,t&&t.stopImmediatePropagation&&t.stopImmediatePropagation(),this.stopPropagation()}},ot.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,e){ot.event.special[t]={delegateType:e,bindType:e,handle:function(t){var n,i=this,o=t.relatedTarget,s=t.handleObj;return(!o||o!==i&&!ot.contains(i,o))&&(t.type=s.origType,n=s.handler.apply(this,arguments),t.type=e),n}}}),nt.submitBubbles||(ot.event.special.submit={setup:function(){return!ot.nodeName(this,"form")&&void ot.event.add(this,"click._submit keypress._submit",function(t){var e=t.target,n=ot.nodeName(e,"input")||ot.nodeName(e,"button")?e.form:void 0;n&&!ot._data(n,"submitBubbles")&&(ot.event.add(n,"submit._submit",function(t){t._submit_bubble=!0}),ot._data(n,"submitBubbles",!0))})},postDispatch:function(t){t._submit_bubble&&(delete t._submit_bubble,this.parentNode&&!t.isTrigger&&ot.event.simulate("submit",this.parentNode,t,!0))},teardown:function(){return!ot.nodeName(this,"form")&&void ot.event.remove(this,"._submit")}}),nt.changeBubbles||(ot.event.special.change={setup:function(){return Lt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ot.event.add(this,"propertychange._change",function(t){"checked"===t.originalEvent.propertyName&&(this._just_changed=!0)}),ot.event.add(this,"click._change",function(t){this._just_changed&&!t.isTrigger&&(this._just_changed=!1),ot.event.simulate("change",this,t,!0)})),!1):void ot.event.add(this,"beforeactivate._change",function(t){var e=t.target;Lt.test(e.nodeName)&&!ot._data(e,"changeBubbles")&&(ot.event.add(e,"change._change",function(t){!this.parentNode||t.isSimulated||t.isTrigger||ot.event.simulate("change",this.parentNode,t,!0)}),ot._data(e,"changeBubbles",!0))})},handle:function(t){var e=t.target;return this!==e||t.isSimulated||t.isTrigger||"radio"!==e.type&&"checkbox"!==e.type?t.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ot.event.remove(this,"._change"),!Lt.test(this.nodeName)}}),nt.focusinBubbles||ot.each({focus:"focusin",blur:"focusout"},function(t,e){var n=function(t){ot.event.simulate(e,t.target,ot.event.fix(t),!0)};ot.event.special[e]={setup:function(){var i=this.ownerDocument||this,o=ot._data(i,e);o||i.addEventListener(t,n,!0),ot._data(i,e,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ot._data(i,e)-1;o?ot._data(i,e,o):(i.removeEventListener(t,n,!0),ot._removeData(i,e))}}}),ot.fn.extend({on:function(t,e,n,i,o){var s,r;if("object"==typeof t){"string"!=typeof e&&(n=n||e,e=void 0);for(s in t)this.on(s,e,n,t[s],o);return this}if(null==n&&null==i?(i=e,n=e=void 0):null==i&&("string"==typeof e?(i=n,n=void 0):(i=n,n=e,e=void 0)),!1===i)i=p;else if(!i)return this;return 1===o&&(r=i,i=function(t){return ot().off(t),r.apply(this,arguments)},i.guid=r.guid||(r.guid=ot.guid++)),this.each(function(){ot.event.add(this,t,i,n,e)})},one:function(t,e,n,i){return this.on(t,e,n,i,1)},off:function(t,e,n){var i,o;if(t&&t.preventDefault&&t.handleObj)return i=t.handleObj,ot(t.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof t){for(o in t)this.off(o,e,t[o]);return this}return(!1===e||"function"==typeof e)&&(n=e,e=void 0),!1===n&&(n=p),this.each(function(){ot.event.remove(this,t,n,e)})},trigger:function(t,e){return this.each(function(){ot.event.trigger(t,e,this)})},triggerHandler:function(t,e){var n=this[0];return n?ot.event.trigger(t,e,n,!0):void 0}});var jt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",zt=/ jQuery\d+="(?:null|\d+)"/g,Ft=new RegExp("<(?:"+jt+")[\\s/>]","i"),Ht=/^\s+/,Ot=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,It=/<([\w:]+)/,qt=/<tbody/i,Rt=/<|&#?\w+;/,Bt=/<(?:script|style|link)/i,Wt=/checked\s*(?:[^=]|=\s*.checked.)/i,Xt=/^$|\/(?:java|ecma)script/i,Yt=/^true\/(.*)/,Zt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Qt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:nt.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Ut=g(ft),Vt=Ut.appendChild(ft.createElement("div"));Qt.optgroup=Qt.option,Qt.tbody=Qt.tfoot=Qt.colgroup=Qt.caption=Qt.thead,Qt.th=Qt.td,ot.extend({clone:function(t,e,n){var i,o,s,r,a,l=ot.contains(t.ownerDocument,t);if(nt.html5Clone||ot.isXMLDoc(t)||!Ft.test("<"+t.nodeName+">")?s=t.cloneNode(!0):(Vt.innerHTML=t.outerHTML,Vt.removeChild(s=Vt.firstChild)),!(nt.noCloneEvent&&nt.noCloneChecked||1!==t.nodeType&&11!==t.nodeType||ot.isXMLDoc(t)))for(i=m(s),a=m(t),r=0;null!=(o=a[r]);++r)i[r]&&C(o,i[r]);if(e)if(n)for(a=a||m(t),i=i||m(s),r=0;null!=(o=a[r]);r++)_(o,i[r]);else _(t,s);return i=m(s,"script"),i.length>0&&w(i,!l&&m(t,"script")),i=a=o=null,s},buildFragment:function(t,e,n,i){for(var o,s,r,a,l,c,u,d=t.length,h=g(e),p=[],f=0;d>f;f++)if((s=t[f])||0===s)if("object"===ot.type(s))ot.merge(p,s.nodeType?[s]:s);else if(Rt.test(s)){for(a=a||h.appendChild(e.createElement("div")),l=(It.exec(s)||["",""])[1].toLowerCase(),u=Qt[l]||Qt._default,a.innerHTML=u[1]+s.replace(Ot,"<$1></$2>")+u[2],o=u[0];o--;)a=a.lastChild;if(!nt.leadingWhitespace&&Ht.test(s)&&p.push(e.createTextNode(Ht.exec(s)[0])),!nt.tbody)for(s="table"!==l||qt.test(s)?"<table>"!==u[1]||qt.test(s)?0:a:a.firstChild,o=s&&s.childNodes.length;o--;)ot.nodeName(c=s.childNodes[o],"tbody")&&!c.childNodes.length&&s.removeChild(c);for(ot.merge(p,a.childNodes),a.textContent="";a.firstChild;)a.removeChild(a.firstChild);a=h.lastChild}else p.push(e.createTextNode(s));for(a&&h.removeChild(a),nt.appendChecked||ot.grep(m(p,"input"),v),f=0;s=p[f++];)if((!i||-1===ot.inArray(s,i))&&(r=ot.contains(s.ownerDocument,s),a=m(h.appendChild(s),"script"),r&&w(a),n))for(o=0;s=a[o++];)Xt.test(s.type||"")&&n.push(s);return a=null,h},cleanData:function(t,e){for(var n,i,o,s,r=0,a=ot.expando,l=ot.cache,c=nt.deleteExpando,u=ot.event.special;null!=(n=t[r]);r++)if((e||ot.acceptData(n))&&(o=n[a],s=o&&l[o])){if(s.events)for(i in s.events)u[i]?ot.event.remove(n,i):ot.removeEvent(n,i,s.handle);l[o]&&(delete l[o],c?delete n[a]:typeof n.removeAttribute!==_t?n.removeAttribute(a):n[a]=null,Q.push(o))}}}),ot.fn.extend({text:function(t){return kt(this,function(t){return void 0===t?ot.text(this):this.empty().append((this[0]&&this[0].ownerDocument||ft).createTextNode(t))},null,t,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){y(this,t).appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=y(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(t,e){for(var n,i=t?ot.filter(t,this):this,o=0;null!=(n=i[o]);o++)e||1!==n.nodeType||ot.cleanData(m(n)),n.parentNode&&(e&&ot.contains(n.ownerDocument,n)&&w(m(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var t,e=0;null!=(t=this[e]);e++){for(1===t.nodeType&&ot.cleanData(m(t,!1));t.firstChild;)t.removeChild(t.firstChild);t.options&&ot.nodeName(t,"select")&&(t.options.length=0)}return this},clone:function(t,e){return t=null!=t&&t,e=null==e?t:e,this.map(function(){return ot.clone(this,t,e)})},html:function(t){return kt(this,function(t){var e=this[0]||{},n=0,i=this.length;if(void 0===t)return 1===e.nodeType?e.innerHTML.replace(zt,""):void 0;if(!("string"!=typeof t||Bt.test(t)||!nt.htmlSerialize&&Ft.test(t)||!nt.leadingWhitespace&&Ht.test(t)||Qt[(It.exec(t)||["",""])[1].toLowerCase()])){t=t.replace(Ot,"<$1></$2>");try{for(;i>n;n++)e=this[n]||{},1===e.nodeType&&(ot.cleanData(m(e,!1)),e.innerHTML=t);e=0}catch(t){}}e&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=arguments[0];return this.domManip(arguments,function(e){t=this.parentNode,ot.cleanData(m(this)),t&&t.replaceChild(e,this)}),t&&(t.length||t.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(t,e){t=V.apply([],t);var n,i,o,s,r,a,l=0,c=this.length,u=this,d=c-1,h=t[0],p=ot.isFunction(h);if(p||c>1&&"string"==typeof h&&!nt.checkClone&&Wt.test(h))return this.each(function(n){var i=u.eq(n);p&&(t[0]=h.call(this,n,i.html())),i.domManip(t,e)});if(c&&(a=ot.buildFragment(t,this[0].ownerDocument,!1,this),n=a.firstChild,1===a.childNodes.length&&(a=n),n)){for(s=ot.map(m(a,"script"),b),o=s.length;c>l;l++)i=a,l!==d&&(i=ot.clone(i,!0,!0),o&&ot.merge(s,m(i,"script"))),e.call(this[l],i,l);if(o)for(r=s[s.length-1].ownerDocument,ot.map(s,x),l=0;o>l;l++)i=s[l],Xt.test(i.type||"")&&!ot._data(i,"globalEval")&&ot.contains(r,i)&&(i.src?ot._evalUrl&&ot._evalUrl(i.src):ot.globalEval((i.text||i.textContent||i.innerHTML||"").replace(Zt,"")));a=n=null}return this}}),ot.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,e){ot.fn[t]=function(t){for(var n,i=0,o=[],s=ot(t),r=s.length-1;r>=i;i++)n=i===r?this:this.clone(!0),ot(s[i])[e](n),G.apply(o,n.get());return this.pushStack(o)}});var Gt,Jt={};!function(){var t;nt.shrinkWrapBlocks=function(){if(null!=t)return t;t=!1;var e,n,i;return n=ft.getElementsByTagName("body")[0],n&&n.style?(e=ft.createElement("div"),i=ft.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),typeof e.style.zoom!==_t&&(e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",e.appendChild(ft.createElement("div")).style.width="5px",t=3!==e.offsetWidth),n.removeChild(i),t):void 0}}();var Kt,te,ee=/^margin/,ne=new RegExp("^("+St+")(?!px)[a-z%]+$","i"),ie=/^(top|right|bottom|left)$/;t.getComputedStyle?(Kt=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):t.getComputedStyle(e,null)},te=function(t,e,n){var i,o,s,r,a=t.style;return n=n||Kt(t),r=n?n.getPropertyValue(e)||n[e]:void 0,n&&(""!==r||ot.contains(t.ownerDocument,t)||(r=ot.style(t,e)),ne.test(r)&&ee.test(e)&&(i=a.width,o=a.minWidth,s=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=n.width,a.width=i,a.minWidth=o,a.maxWidth=s)),void 0===r?r:r+""}):ft.documentElement.currentStyle&&(Kt=function(t){return t.currentStyle},te=function(t,e,n){var i,o,s,r,a=t.style;return n=n||Kt(t),r=n?n[e]:void 0,null==r&&a&&a[e]&&(r=a[e]),ne.test(r)&&!ie.test(e)&&(i=a.left,o=t.runtimeStyle,s=o&&o.left,s&&(o.left=t.currentStyle.left),a.left="fontSize"===e?"1em":r,r=a.pixelLeft+"px",a.left=i,s&&(o.left=s)),void 0===r?r:r+""||"auto"}),!function(){function e(){var e,n,i,o;(n=ft.getElementsByTagName("body")[0])&&n.style&&(e=ft.createElement("div"),i=ft.createElement("div"),i.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",n.appendChild(i).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s=r=!1,l=!0,t.getComputedStyle&&(s="1%"!==(t.getComputedStyle(e,null)||{}).top,r="4px"===(t.getComputedStyle(e,null)||{width:"4px"}).width,o=e.appendChild(ft.createElement("div")),o.style.cssText=e.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",o.style.marginRight=o.style.width="0",e.style.width="1px",l=!parseFloat((t.getComputedStyle(o,null)||{}).marginRight),e.removeChild(o)),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=e.getElementsByTagName("td"),o[0].style.cssText="margin:0;border:0;padding:0;display:none",a=0===o[0].offsetHeight,a&&(o[0].style.display="",o[1].style.display="none",a=0===o[0].offsetHeight),n.removeChild(i))}var n,i,o,s,r,a,l;n=ft.createElement("div"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",o=n.getElementsByTagName("a")[0],(i=o&&o.style)&&(i.cssText="float:left;opacity:.5",nt.opacity="0.5"===i.opacity,nt.cssFloat=!!i.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",nt.clearCloneStyle="content-box"===n.style.backgroundClip,nt.boxSizing=""===i.boxSizing||""===i.MozBoxSizing||""===i.WebkitBoxSizing,ot.extend(nt,{reliableHiddenOffsets:function(){return null==a&&e(),a},boxSizingReliable:function(){return null==r&&e(),r},pixelPosition:function(){return null==s&&e(),s},reliableMarginRight:function(){return null==l&&e(),l}}))}(),ot.swap=function(t,e,n,i){var o,s,r={};for(s in e)r[s]=t.style[s],t.style[s]=e[s];o=n.apply(t,i||[]);for(s in e)t.style[s]=r[s];return o};var oe=/alpha\([^)]*\)/i,se=/opacity\s*=\s*([^)]*)/,re=/^(none|table(?!-c[ea]).+)/,ae=new RegExp("^("+St+")(.*)$","i"),le=new RegExp("^([+-])=("+St+")","i"),ce={position:"absolute",visibility:"hidden",display:"block"},ue={letterSpacing:"0",fontWeight:"400"},de=["Webkit","O","Moz","ms"];ot.extend({cssHooks:{opacity:{get:function(t,e){if(e){var n=te(t,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:nt.cssFloat?"cssFloat":"styleFloat"},style:function(t,e,n,i){if(t&&3!==t.nodeType&&8!==t.nodeType&&t.style){var o,s,r,a=ot.camelCase(e),l=t.style;if(e=ot.cssProps[a]||(ot.cssProps[a]=E(l,a)),r=ot.cssHooks[e]||ot.cssHooks[a],void 0===n)return r&&"get"in r&&void 0!==(o=r.get(t,!1,i))?o:l[e];if(s=typeof n,"string"===s&&(o=le.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(ot.css(t,e)),s="number"),null!=n&&n===n&&("number"!==s||ot.cssNumber[a]||(n+="px"),nt.clearCloneStyle||""!==n||0!==e.indexOf("background")||(l[e]="inherit"),!(r&&"set"in r&&void 0===(n=r.set(t,n,i)))))try{l[e]=n}catch(t){}}},css:function(t,e,n,i){var o,s,r,a=ot.camelCase(e);return e=ot.cssProps[a]||(ot.cssProps[a]=E(t.style,a)),r=ot.cssHooks[e]||ot.cssHooks[a],r&&"get"in r&&(s=r.get(t,!0,n)),void 0===s&&(s=te(t,e,i)),"normal"===s&&e in ue&&(s=ue[e]),""===n||n?(o=parseFloat(s),!0===n||ot.isNumeric(o)?o||0:s):s}}),ot.each(["height","width"],function(t,e){ot.cssHooks[e]={get:function(t,n,i){return n?re.test(ot.css(t,"display"))&&0===t.offsetWidth?ot.swap(t,ce,function(){return A(t,e,i)}):A(t,e,i):void 0},set:function(t,n,i){var o=i&&Kt(t);return P(t,n,i?L(t,e,i,nt.boxSizing&&"border-box"===ot.css(t,"boxSizing",!1,o),o):0)}}}),nt.opacity||(ot.cssHooks.opacity={get:function(t,e){return se.test((e&&t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":e?"1":""},set:function(t,e){var n=t.style,i=t.currentStyle,o=ot.isNumeric(e)?"alpha(opacity="+100*e+")":"",s=i&&i.filter||n.filter||"";n.zoom=1,(e>=1||""===e)&&""===ot.trim(s.replace(oe,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===e||i&&!i.filter)||(n.filter=oe.test(s)?s.replace(oe,o):s+" "+o)}}),ot.cssHooks.marginRight=$(nt.reliableMarginRight,function(t,e){return e?ot.swap(t,{display:"inline-block"},te,[t,"marginRight"]):void 0}),ot.each({margin:"",padding:"",border:"Width"},function(t,e){ot.cssHooks[t+e]={expand:function(n){for(var i=0,o={},s="string"==typeof n?n.split(" "):[n];4>i;i++)o[t+$t[i]+e]=s[i]||s[i-2]||s[0];return o}},ee.test(t)||(ot.cssHooks[t+e].set=P)}),ot.fn.extend({css:function(t,e){return kt(this,function(t,e,n){var i,o,s={},r=0;if(ot.isArray(e)){for(i=Kt(t),o=e.length;o>r;r++)s[e[r]]=ot.css(t,e[r],!1,i);return s}return void 0!==n?ot.style(t,e,n):ot.css(t,e)},t,e,arguments.length>1)},show:function(){return k(this,!0)},hide:function(){return k(this)},toggle:function(t){return"boolean"==typeof t?t?this.show():this.hide():this.each(function(){Et(this)?ot(this).show():ot(this).hide()})}}),ot.Tween=D,D.prototype={constructor:D,init:function(t,e,n,i,o,s){this.elem=t,this.prop=n,this.easing=o||"swing",this.options=e,this.start=this.now=this.cur(),this.end=i,this.unit=s||(ot.cssNumber[n]?"":"px")},cur:function(){var t=D.propHooks[this.prop];return t&&t.get?t.get(this):D.propHooks._default.get(this)},run:function(t){var e,n=D.propHooks[this.prop];return this.pos=e=this.options.duration?ot.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):t,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(t){var e;return null==t.elem[t.prop]||t.elem.style&&null!=t.elem.style[t.prop]?(e=ot.css(t.elem,t.prop,""),e&&"auto"!==e?e:0):t.elem[t.prop]},set:function(t){ot.fx.step[t.prop]?ot.fx.step[t.prop](t):t.elem.style&&(null!=t.elem.style[ot.cssProps[t.prop]]||ot.cssHooks[t.prop])?ot.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},ot.easing={linear:function(t){return t},swing:function(t){return.5-Math.cos(t*Math.PI)/2}},ot.fx=D.prototype.init,ot.fx.step={};var he,pe,fe=/^(?:toggle|show|hide)$/,ge=new RegExp("^(?:([+-])=|)("+St+")([a-z%]*)$","i"),me=/queueHooks$/,ve=[z],ye={"*":[function(t,e){var n=this.createTween(t,e),i=n.cur(),o=ge.exec(e),s=o&&o[3]||(ot.cssNumber[t]?"":"px"),r=(ot.cssNumber[t]||"px"!==s&&+i)&&ge.exec(ot.css(n.elem,t)),a=1,l=20;if(r&&r[3]!==s){s=s||r[3],o=o||[],r=+i||1;do{a=a||".5",r/=a,ot.style(n.elem,t,r+s)}while(a!==(a=n.cur()/i)&&1!==a&&--l)}return o&&(r=n.start=+r||+i||0,n.unit=s,n.end=o[1]?r+(o[1]+1)*o[2]:+o[2]),n}]};ot.Animation=ot.extend(H,{tweener:function(t,e){ot.isFunction(t)?(e=t,t=["*"]):t=t.split(" ");for(var n,i=0,o=t.length;o>i;i++)n=t[i],ye[n]=ye[n]||[],ye[n].unshift(e)},prefilter:function(t,e){e?ve.unshift(t):ve.push(t)}}),ot.speed=function(t,e,n){var i=t&&"object"==typeof t?ot.extend({},t):{complete:n||!n&&e||ot.isFunction(t)&&t,duration:t,easing:n&&e||e&&!ot.isFunction(e)&&e};return i.duration=ot.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ot.fx.speeds?ot.fx.speeds[i.duration]:ot.fx.speeds._default,(null==i.queue||!0===i.queue)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){ot.isFunction(i.old)&&i.old.call(this),i.queue&&ot.dequeue(this,i.queue)},i},ot.fn.extend({fadeTo:function(t,e,n,i){return this.filter(Et).css("opacity",0).show().end().animate({opacity:e},t,n,i)},animate:function(t,e,n,i){var o=ot.isEmptyObject(t),s=ot.speed(e,n,i),r=function(){var e=H(this,ot.extend({},t),s);(o||ot._data(this,"finish"))&&e.stop(!0)};return r.finish=r,o||!1===s.queue?this.each(r):this.queue(s.queue,r)},stop:function(t,e,n){var i=function(t){var e=t.stop;delete t.stop,e(n)};return"string"!=typeof t&&(n=e,e=t,t=void 0),e&&!1!==t&&this.queue(t||"fx",[]),this.each(function(){var e=!0,o=null!=t&&t+"queueHooks",s=ot.timers,r=ot._data(this);if(o)r[o]&&r[o].stop&&i(r[o]);else for(o in r)r[o]&&r[o].stop&&me.test(o)&&i(r[o]);for(o=s.length;o--;)s[o].elem!==this||null!=t&&s[o].queue!==t||(s[o].anim.stop(n),e=!1,s.splice(o,1));(e||!n)&&ot.dequeue(this,t)})},finish:function(t){return!1!==t&&(t=t||"fx"),this.each(function(){var e,n=ot._data(this),i=n[t+"queue"],o=n[t+"queueHooks"],s=ot.timers,r=i?i.length:0;for(n.finish=!0,ot.queue(this,t,[]),o&&o.stop&&o.stop.call(this,!0),e=s.length;e--;)s[e].elem===this&&s[e].queue===t&&(s[e].anim.stop(!0),s.splice(e,1));for(e=0;r>e;e++)i[e]&&i[e].finish&&i[e].finish.call(this);delete n.finish})}}),ot.each(["toggle","show","hide"],function(t,e){var n=ot.fn[e];ot.fn[e]=function(t,i,o){return null==t||"boolean"==typeof t?n.apply(this,arguments):this.animate(M(e,!0),t,i,o)}}),ot.each({slideDown:M("show"),slideUp:M("hide"),slideToggle:M("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,e){ot.fn[t]=function(t,n,i){return this.animate(e,t,n,i)}}),ot.timers=[],ot.fx.tick=function(){var t,e=ot.timers,n=0;for(he=ot.now();n<e.length;n++)(t=e[n])()||e[n]!==t||e.splice(n--,1);e.length||ot.fx.stop(),he=void 0},ot.fx.timer=function(t){ot.timers.push(t),t()?ot.fx.start():ot.timers.pop()},ot.fx.interval=13,ot.fx.start=function(){pe||(pe=setInterval(ot.fx.tick,ot.fx.interval))},ot.fx.stop=function(){clearInterval(pe),pe=null},ot.fx.speeds={slow:600,fast:200,_default:400},ot.fn.delay=function(t,e){return t=ot.fx?ot.fx.speeds[t]||t:t,e=e||"fx",this.queue(e,function(e,n){var i=setTimeout(e,t);n.stop=function(){clearTimeout(i)}})},function(){var t,e,n,i,o;e=ft.createElement("div"),e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",i=e.getElementsByTagName("a")[0],n=ft.createElement("select"),o=n.appendChild(ft.createElement("option")),t=e.getElementsByTagName("input")[0],i.style.cssText="top:1px",nt.getSetAttribute="t"!==e.className,nt.style=/top/.test(i.getAttribute("style")),nt.hrefNormalized="/a"===i.getAttribute("href"),nt.checkOn=!!t.value,nt.optSelected=o.selected,nt.enctype=!!ft.createElement("form").enctype,n.disabled=!0,nt.optDisabled=!o.disabled,t=ft.createElement("input"),t.setAttribute("value",""),nt.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),nt.radioValue="t"===t.value}();var be=/\r/g;ot.fn.extend({val:function(t){var e,n,i,o=this[0];return arguments.length?(i=ot.isFunction(t),this.each(function(n){var o;1===this.nodeType&&(o=i?t.call(this,n,ot(this).val()):t,null==o?o="":"number"==typeof o?o+="":ot.isArray(o)&&(o=ot.map(o,function(t){return null==t?"":t+""})),(e=ot.valHooks[this.type]||ot.valHooks[this.nodeName.toLowerCase()])&&"set"in e&&void 0!==e.set(this,o,"value")||(this.value=o))})):o?(e=ot.valHooks[o.type]||ot.valHooks[o.nodeName.toLowerCase()],e&&"get"in e&&void 0!==(n=e.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(be,""):null==n?"":n)):void 0}}),ot.extend({valHooks:{option:{get:function(t){var e=ot.find.attr(t,"value");return null!=e?e:ot.trim(ot.text(t))}},select:{get:function(t){for(var e,n,i=t.options,o=t.selectedIndex,s="select-one"===t.type||0>o,r=s?null:[],a=s?o+1:i.length,l=0>o?a:s?o:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==o||(nt.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ot.nodeName(n.parentNode,"optgroup"))){if(e=ot(n).val(),s)return e;r.push(e)}return r},set:function(t,e){for(var n,i,o=t.options,s=ot.makeArray(e),r=o.length;r--;)if(i=o[r],ot.inArray(ot.valHooks.option.get(i),s)>=0)try{i.selected=n=!0}catch(t){i.scrollHeight}else i.selected=!1;return n||(t.selectedIndex=-1),o}}}}),ot.each(["radio","checkbox"],function(){ot.valHooks[this]={set:function(t,e){return ot.isArray(e)?t.checked=ot.inArray(ot(t).val(),e)>=0:void 0}},nt.checkOn||(ot.valHooks[this].get=function(t){return null===t.getAttribute("value")?"on":t.value})});var xe,we,_e=ot.expr.attrHandle,Ce=/^(?:checked|selected)$/i,Te=nt.getSetAttribute,Se=nt.input;ot.fn.extend({attr:function(t,e){return kt(this,ot.attr,t,e,arguments.length>1)},removeAttr:function(t){return this.each(function(){ot.removeAttr(this,t)})}}),ot.extend({attr:function(t,e,n){var i,o,s=t.nodeType;if(t&&3!==s&&8!==s&&2!==s)return typeof t.getAttribute===_t?ot.prop(t,e,n):(1===s&&ot.isXMLDoc(t)||(e=e.toLowerCase(),i=ot.attrHooks[e]||(ot.expr.match.bool.test(e)?we:xe)),void 0===n?i&&"get"in i&&null!==(o=i.get(t,e))?o:(o=ot.find.attr(t,e),null==o?void 0:o):null!==n?i&&"set"in i&&void 0!==(o=i.set(t,n,e))?o:(t.setAttribute(e,n+""),n):void ot.removeAttr(t,e))},removeAttr:function(t,e){var n,i,o=0,s=e&&e.match(yt);if(s&&1===t.nodeType)for(;n=s[o++];)i=ot.propFix[n]||n,ot.expr.match.bool.test(n)?Se&&Te||!Ce.test(n)?t[i]=!1:t[ot.camelCase("default-"+n)]=t[i]=!1:ot.attr(t,n,""),t.removeAttribute(Te?n:i)},attrHooks:{type:{set:function(t,e){if(!nt.radioValue&&"radio"===e&&ot.nodeName(t,"input")){var n=t.value;return t.setAttribute("type",e),n&&(t.value=n),e}}}}}),we={set:function(t,e,n){return!1===e?ot.removeAttr(t,n):Se&&Te||!Ce.test(n)?t.setAttribute(!Te&&ot.propFix[n]||n,n):t[ot.camelCase("default-"+n)]=t[n]=!0,n}},ot.each(ot.expr.match.bool.source.match(/\w+/g),function(t,e){var n=_e[e]||ot.find.attr;_e[e]=Se&&Te||!Ce.test(e)?function(t,e,i){var o,s;return i||(s=_e[e],_e[e]=o,o=null!=n(t,e,i)?e.toLowerCase():null,_e[e]=s),o}:function(t,e,n){return n?void 0:t[ot.camelCase("default-"+e)]?e.toLowerCase():null}}),Se&&Te||(ot.attrHooks.value={set:function(t,e,n){return ot.nodeName(t,"input")?void(t.defaultValue=e):xe&&xe.set(t,e,n)}}),Te||(xe={set:function(t,e,n){var i=t.getAttributeNode(n);return i||t.setAttributeNode(i=t.ownerDocument.createAttribute(n)),i.value=e+="","value"===n||e===t.getAttribute(n)?e:void 0}},_e.id=_e.name=_e.coords=function(t,e,n){var i;return n?void 0:(i=t.getAttributeNode(e))&&""!==i.value?i.value:null},ot.valHooks.button={get:function(t,e){var n=t.getAttributeNode(e);return n&&n.specified?n.value:void 0},set:xe.set},ot.attrHooks.contenteditable={set:function(t,e,n){xe.set(t,""!==e&&e,n)}},ot.each(["width","height"],function(t,e){ot.attrHooks[e]={set:function(t,n){return""===n?(t.setAttribute(e,"auto"),n):void 0}}})),nt.style||(ot.attrHooks.style={get:function(t){return t.style.cssText||void 0},set:function(t,e){return t.style.cssText=e+""}});var $e=/^(?:input|select|textarea|button|object)$/i,Ee=/^(?:a|area)$/i;ot.fn.extend({prop:function(t,e){return kt(this,ot.prop,t,e,arguments.length>1)},removeProp:function(t){return t=ot.propFix[t]||t,this.each(function(){try{this[t]=void 0,delete this[t]}catch(t){}})}}),ot.extend({propFix:{for:"htmlFor",class:"className"},prop:function(t,e,n){var i,o,s,r=t.nodeType;if(t&&3!==r&&8!==r&&2!==r)return s=1!==r||!ot.isXMLDoc(t),s&&(e=ot.propFix[e]||e,o=ot.propHooks[e]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(t,n,e))?i:t[e]=n:o&&"get"in o&&null!==(i=o.get(t,e))?i:t[e]},propHooks:{tabIndex:{get:function(t){var e=ot.find.attr(t,"tabindex");return e?parseInt(e,10):$e.test(t.nodeName)||Ee.test(t.nodeName)&&t.href?0:-1}}}}),nt.hrefNormalized||ot.each(["href","src"],function(t,e){ot.propHooks[e]={get:function(t){return t.getAttribute(e,4)}}}),nt.optSelected||(ot.propHooks.selected={get:function(t){var e=t.parentNode;return e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex),null}}),ot.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ot.propFix[this.toLowerCase()]=this}),nt.enctype||(ot.propFix.enctype="encoding");var ke=/[\t\r\n\f]/g;ot.fn.extend({addClass:function(t){var e,n,i,o,s,r,a=0,l=this.length,c="string"==typeof t&&t;if(ot.isFunction(t))return this.each(function(e){ot(this).addClass(t.call(this,e,this.className))});if(c)for(e=(t||"").match(yt)||[];l>a;a++)if(n=this[a],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ke," "):" ")){for(s=0;o=e[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r=ot.trim(i),n.className!==r&&(n.className=r)}return this},removeClass:function(t){var e,n,i,o,s,r,a=0,l=this.length,c=0===arguments.length||"string"==typeof t&&t;if(ot.isFunction(t))return this.each(function(e){ot(this).removeClass(t.call(this,e,this.className))});if(c)for(e=(t||"").match(yt)||[];l>a;a++)if(n=this[a],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(ke," "):"")){for(s=0;o=e[s++];)for(;i.indexOf(" "+o+" ")>=0;)i=i.replace(" "+o+" "," ");r=t?ot.trim(i):"",n.className!==r&&(n.className=r)}return this},toggleClass:function(t,e){var n=typeof t;return"boolean"==typeof e&&"string"===n?e?this.addClass(t):this.removeClass(t):this.each(ot.isFunction(t)?function(n){ot(this).toggleClass(t.call(this,n,this.className,e),e)}:function(){if("string"===n)for(var e,i=0,o=ot(this),s=t.match(yt)||[];e=s[i++];)o.hasClass(e)?o.removeClass(e):o.addClass(e);else(n===_t||"boolean"===n)&&(this.className&&ot._data(this,"__className__",this.className),this.className=this.className||!1===t?"":ot._data(this,"__className__")||"")})},hasClass:function(t){for(var e=" "+t+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(ke," ").indexOf(e)>=0)return!0;return!1}}),ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(t,e){ot.fn[e]=function(t,n){return arguments.length>0?this.on(e,null,t,n):this.trigger(e)}}),ot.fn.extend({hover:function(t,e){return this.mouseenter(t).mouseleave(e||t)},bind:function(t,e,n){return this.on(t,null,e,n)},unbind:function(t,e){return this.off(t,null,e)},delegate:function(t,e,n,i){return this.on(e,t,n,i)},undelegate:function(t,e,n){return 1===arguments.length?this.off(t,"**"):this.off(e,t||"**",n)}});var Pe=ot.now(),Le=/\?/,Ae=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ot.parseJSON=function(e){if(t.JSON&&t.JSON.parse)return t.JSON.parse(e+"");var n,i=null,o=ot.trim(e+"");return o&&!ot.trim(o.replace(Ae,function(t,e,o,s){return n&&e&&(i=0),0===i?t:(n=o||e,i+=!s-!o,"")}))?Function("return "+o)():ot.error("Invalid JSON: "+e)},ot.parseXML=function(e){var n,i;if(!e||"string"!=typeof e)return null;try{t.DOMParser?(i=new DOMParser,n=i.parseFromString(e,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(e))}catch(t){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||ot.error("Invalid XML: "+e),n};var De,Ne,Me=/#.*$/,je=/([?&])_=[^&]*/,ze=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Fe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,He=/^(?:GET|HEAD)$/,Oe=/^\/\//,Ie=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,qe={},Re={},Be="*/".concat("*");try{Ne=location.href}catch(t){Ne=ft.createElement("a"),Ne.href="",Ne=Ne.href}De=Ie.exec(Ne.toLowerCase())||[],ot.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ne,type:"GET",isLocal:Fe.test(De[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Be,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ot.parseJSON,"text xml":ot.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,e){return e?q(q(t,ot.ajaxSettings),e):q(ot.ajaxSettings,t)},ajaxPrefilter:O(qe),ajaxTransport:O(Re),ajax:function(t,e){function n(t,e,n,i){var o,u,v,y,x,_=e;2!==b&&(b=2,a&&clearTimeout(a),c=void 0,r=i||"",w.readyState=t>0?4:0,o=t>=200&&300>t||304===t,n&&(y=R(d,w,n)),y=B(d,y,w,o),o?(d.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(ot.lastModified[s]=x),(x=w.getResponseHeader("etag"))&&(ot.etag[s]=x)),204===t||"HEAD"===d.type?_="nocontent":304===t?_="notmodified":(_=y.state,u=y.data,v=y.error,o=!v)):(v=_,(t||!_)&&(_="error",0>t&&(t=0))),w.status=t,w.statusText=(e||_)+"",o?f.resolveWith(h,[u,_,w]):f.rejectWith(h,[w,_,v]),w.statusCode(m),m=void 0,l&&p.trigger(o?"ajaxSuccess":"ajaxError",[w,d,o?u:v]),g.fireWith(h,[w,_]),l&&(p.trigger("ajaxComplete",[w,d]),--ot.active||ot.event.trigger("ajaxStop")))}"object"==typeof t&&(e=t,t=void 0),e=e||{};var i,o,s,r,a,l,c,u,d=ot.ajaxSetup({},e),h=d.context||d,p=d.context&&(h.nodeType||h.jquery)?ot(h):ot.event,f=ot.Deferred(),g=ot.Callbacks("once memory"),m=d.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(t){var e;if(2===b){if(!u)for(u={};e=ze.exec(r);)u[e[1].toLowerCase()]=e[2];e=u[t.toLowerCase()]}return null==e?null:e},getAllResponseHeaders:function(){return 2===b?r:null},setRequestHeader:function(t,e){var n=t.toLowerCase();return b||(t=y[n]=y[n]||t,v[t]=e),this},overrideMimeType:function(t){return b||(d.mimeType=t),this},statusCode:function(t){var e;if(t)if(2>b)for(e in t)m[e]=[m[e],t[e]];else w.always(t[w.status]);return this},abort:function(t){var e=t||x;return c&&c.abort(e),n(0,e),this}};if(f.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,d.url=((t||d.url||Ne)+"").replace(Me,"").replace(Oe,De[1]+"//"),d.type=e.method||e.type||d.method||d.type,d.dataTypes=ot.trim(d.dataType||"*").toLowerCase().match(yt)||[""],null==d.crossDomain&&(i=Ie.exec(d.url.toLowerCase()),d.crossDomain=!(!i||i[1]===De[1]&&i[2]===De[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(De[3]||("http:"===De[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=ot.param(d.data,d.traditional)),I(qe,d,e,w),2===b)return w;l=ot.event&&d.global,l&&0==ot.active++&&ot.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!He.test(d.type),s=d.url,d.hasContent||(d.data&&(s=d.url+=(Le.test(s)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=je.test(s)?s.replace(je,"$1_="+Pe++):s+(Le.test(s)?"&":"?")+"_="+Pe++)),d.ifModified&&(ot.lastModified[s]&&w.setRequestHeader("If-Modified-Since",ot.lastModified[s]),ot.etag[s]&&w.setRequestHeader("If-None-Match",ot.etag[s])),(d.data&&d.hasContent&&!1!==d.contentType||e.contentType)&&w.setRequestHeader("Content-Type",d.contentType),w.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Be+"; q=0.01":""):d.accepts["*"]);for(o in d.headers)w.setRequestHeader(o,d.headers[o]);if(d.beforeSend&&(!1===d.beforeSend.call(h,w,d)||2===b))return w.abort();x="abort";for(o in{success:1,error:1,complete:1})w[o](d[o]);if(c=I(Re,d,e,w)){w.readyState=1,l&&p.trigger("ajaxSend",[w,d]),d.async&&d.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},d.timeout));try{b=1,c.send(v,n)}catch(t){if(!(2>b))throw t;n(-1,t)}}else n(-1,"No Transport");return w},getJSON:function(t,e,n){return ot.get(t,e,n,"json")},getScript:function(t,e){return ot.get(t,void 0,e,"script")}}),ot.each(["get","post"],function(t,e){ot[e]=function(t,n,i,o){return ot.isFunction(n)&&(o=o||i,i=n,n=void 0),ot.ajax({url:t,type:e,dataType:o,data:n,success:i})}}),ot._evalUrl=function(t){return ot.ajax({url:t,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},ot.fn.extend({wrapAll:function(t){if(ot.isFunction(t))return this.each(function(e){ot(this).wrapAll(t.call(this,e))});if(this[0]){var e=ot(t,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var t=this;t.firstChild&&1===t.firstChild.nodeType;)t=t.firstChild;return t}).append(this)}return this},wrapInner:function(t){return this.each(ot.isFunction(t)?function(e){ot(this).wrapInner(t.call(this,e))}:function(){var e=ot(this),n=e.contents();n.length?n.wrapAll(t):e.append(t)})},wrap:function(t){var e=ot.isFunction(t);return this.each(function(n){ot(this).wrapAll(e?t.call(this,n):t)})},unwrap:function(){return this.parent().each(function(){ot.nodeName(this,"body")||ot(this).replaceWith(this.childNodes)}).end()}}),ot.expr.filters.hidden=function(t){return t.offsetWidth<=0&&t.offsetHeight<=0||!nt.reliableHiddenOffsets()&&"none"===(t.style&&t.style.display||ot.css(t,"display"))},ot.expr.filters.visible=function(t){return!ot.expr.filters.hidden(t)};var We=/%20/g,Xe=/\[\]$/,Ye=/\r?\n/g,Ze=/^(?:submit|button|image|reset|file)$/i,Qe=/^(?:input|select|textarea|keygen)/i;ot.param=function(t,e){var n,i=[],o=function(t,e){e=ot.isFunction(e)?e():null==e?"":e,i[i.length]=encodeURIComponent(t)+"="+encodeURIComponent(e)};if(void 0===e&&(e=ot.ajaxSettings&&ot.ajaxSettings.traditional),ot.isArray(t)||t.jquery&&!ot.isPlainObject(t))ot.each(t,function(){o(this.name,this.value)});else for(n in t)W(n,t[n],e,o);return i.join("&").replace(We,"+")},ot.fn.extend({serialize:function(){return ot.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=ot.prop(this,"elements");return t?ot.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!ot(this).is(":disabled")&&Qe.test(this.nodeName)&&!Ze.test(t)&&(this.checked||!Pt.test(t))}).map(function(t,e){var n=ot(this).val();return null==n?null:ot.isArray(n)?ot.map(n,function(t){return{name:e.name,value:t.replace(Ye,"\r\n")}}):{name:e.name,value:n.replace(Ye,"\r\n")}}).get()}}),ot.ajaxSettings.xhr=void 0!==t.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||Y()}:X;var Ue=0,Ve={},Ge=ot.ajaxSettings.xhr();t.attachEvent&&t.attachEvent("onunload",function(){for(var t in Ve)Ve[t](void 0,!0)}),nt.cors=!!Ge&&"withCredentials"in Ge,(Ge=nt.ajax=!!Ge)&&ot.ajaxTransport(function(t){if(!t.crossDomain||nt.cors){var e;return{send:function(n,i){var o,s=t.xhr(),r=++Ue;if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)s[o]=t.xhrFields[o];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(o in n)void 0!==n[o]&&s.setRequestHeader(o,n[o]+"");s.send(t.hasContent&&t.data||null),e=function(n,o){var a,l,c;if(e&&(o||4===s.readyState))if(delete Ve[r],e=void 0,s.onreadystatechange=ot.noop,o)4!==s.readyState&&s.abort();else{c={},a=s.status,"string"==typeof s.responseText&&(c.text=s.responseText);try{l=s.statusText}catch(t){l=""}a||!t.isLocal||t.crossDomain?1223===a&&(a=204):a=c.text?200:404}c&&i(a,l,c,s.getAllResponseHeaders())},t.async?4===s.readyState?setTimeout(e):s.onreadystatechange=Ve[r]=e:e()},abort:function(){e&&e(void 0,!0)}}}}),ot.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(t){return ot.globalEval(t),t}}}),ot.ajaxPrefilter("script",function(t){void 0===t.cache&&(t.cache=!1),t.crossDomain&&(t.type="GET",t.global=!1)}),ot.ajaxTransport("script",function(t){if(t.crossDomain){var e,n=ft.head||ot("head")[0]||ft.documentElement;return{send:function(i,o){e=ft.createElement("script"),e.async=!0,t.scriptCharset&&(e.charset=t.scriptCharset),e.src=t.url,e.onload=e.onreadystatechange=function(t,n){(n||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,n||o(200,"success"))},n.insertBefore(e,n.firstChild)},abort:function(){e&&e.onload(void 0,!0)}}}});var Je=[],Ke=/(=)\?(?=&|$)|\?\?/;ot.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=Je.pop()||ot.expando+"_"+Pe++;return this[t]=!0,t}}),ot.ajaxPrefilter("json jsonp",function(e,n,i){var o,s,r,a=!1!==e.jsonp&&(Ke.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ke.test(e.data)&&"data");return a||"jsonp"===e.dataTypes[0]?(o=e.jsonpCallback=ot.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ke,"$1"+o):!1!==e.jsonp&&(e.url+=(Le.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return r||ot.error(o+" was not called"),r[0]},e.dataTypes[0]="json",s=t[o],t[o]=function(){r=arguments},i.always(function(){t[o]=s,e[o]&&(e.jsonpCallback=n.jsonpCallback,Je.push(o)),r&&ot.isFunction(s)&&s(r[0]),r=s=void 0}),"script"):void 0}),ot.parseHTML=function(t,e,n){if(!t||"string"!=typeof t)return null;"boolean"==typeof e&&(n=e,e=!1),e=e||ft;var i=dt.exec(t),o=!n&&[];return i?[e.createElement(i[1])]:(i=ot.buildFragment([t],e,o),o&&o.length&&ot(o).remove(),ot.merge([],i.childNodes))};var tn=ot.fn.load;ot.fn.load=function(t,e,n){if("string"!=typeof t&&tn)return tn.apply(this,arguments);var i,o,s,r=this,a=t.indexOf(" ");return a>=0&&(i=ot.trim(t.slice(a,t.length)),t=t.slice(0,a)),ot.isFunction(e)?(n=e,e=void 0):e&&"object"==typeof e&&(s="POST"),r.length>0&&ot.ajax({url:t,type:s,dataType:"html",data:e}).done(function(t){o=arguments,r.html(i?ot("<div>").append(ot.parseHTML(t)).find(i):t)}).complete(n&&function(t,e){r.each(n,o||[t.responseText,e,t])}),this},ot.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,e){ot.fn[e]=function(t){return this.on(e,t)}}),ot.expr.filters.animated=function(t){return ot.grep(ot.timers,function(e){return t===e.elem}).length};var en=t.document.documentElement;ot.offset={setOffset:function(t,e,n){var i,o,s,r,a,l,c,u=ot.css(t,"position"),d=ot(t),h={};"static"===u&&(t.style.position="relative"),a=d.offset(),s=ot.css(t,"top"),l=ot.css(t,"left"),c=("absolute"===u||"fixed"===u)&&ot.inArray("auto",[s,l])>-1,c?(i=d.position(),r=i.top,o=i.left):(r=parseFloat(s)||0,o=parseFloat(l)||0),ot.isFunction(e)&&(e=e.call(t,n,a)),null!=e.top&&(h.top=e.top-a.top+r),null!=e.left&&(h.left=e.left-a.left+o),"using"in e?e.using.call(t,h):d.css(h)}},ot.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){ot.offset.setOffset(this,t,e)});var e,n,i={top:0,left:0},o=this[0],s=o&&o.ownerDocument;return s?(e=s.documentElement,ot.contains(e,o)?(typeof o.getBoundingClientRect!==_t&&(i=o.getBoundingClientRect()),n=Z(s),{top:i.top+(n.pageYOffset||e.scrollTop)-(e.clientTop||0),left:i.left+(n.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}):i):void 0},position:function(){if(this[0]){var t,e,n={top:0,left:0},i=this[0];return"fixed"===ot.css(i,"position")?e=i.getBoundingClientRect():(t=this.offsetParent(),e=this.offset(),ot.nodeName(t[0],"html")||(n=t.offset()),n.top+=ot.css(t[0],"borderTopWidth",!0),n.left+=ot.css(t[0],"borderLeftWidth",!0)),{top:e.top-n.top-ot.css(i,"marginTop",!0),left:e.left-n.left-ot.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||en;t&&!ot.nodeName(t,"html")&&"static"===ot.css(t,"position");)t=t.offsetParent;return t||en})}}),ot.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,e){var n=/Y/.test(e);ot.fn[t]=function(i){return kt(this,function(t,i,o){var s=Z(t);return void 0===o?s?e in s?s[e]:s.document.documentElement[i]:t[i]:void(s?s.scrollTo(n?ot(s).scrollLeft():o,n?o:ot(s).scrollTop()):t[i]=o)},t,i,arguments.length,null)}}),ot.each(["top","left"],function(t,e){ot.cssHooks[e]=$(nt.pixelPosition,function(t,n){return n?(n=te(t,e),ne.test(n)?ot(t).position()[e]+"px":n):void 0})}),ot.each({Height:"height",Width:"width"},function(t,e){ot.each({padding:"inner"+t,content:e,"":"outer"+t},function(n,i){ot.fn[i]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),r=n||(!0===i||!0===o?"margin":"border");return kt(this,function(e,n,i){var o;return ot.isWindow(e)?e.document.documentElement["client"+t]:9===e.nodeType?(o=e.documentElement,Math.max(e.body["scroll"+t],o["scroll"+t],e.body["offset"+t],o["offset"+t],o["client"+t])):void 0===i?ot.css(e,n,r):ot.style(e,n,i,r)},e,s?i:void 0,s,null)}})}),ot.fn.size=function(){return this.length},ot.fn.andSelf=ot.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ot});var nn=t.jQuery,on=t.$;return ot.noConflict=function(e){return t.$===ot&&(t.$=on),e&&t.jQuery===ot&&(t.jQuery=nn),ot},typeof e===_t&&(t.jQuery=t.$=ot),ot}),function(t,e,n,i){function o(e,n){this.settings=null,this.options=t.extend({},o.Defaults,n),this.$element=t(e),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},t.each(["onResize","onThrottledResize"],t.proxy(function(e,n){this._handlers[n]=t.proxy(this[n],this)},this)),t.each(o.Plugins,t.proxy(function(t,e){this._plugins[t.charAt(0).toLowerCase()+t.slice(1)]=new e(this)},this)),t.each(o.Workers,t.proxy(function(e,n){this._pipe.push({filter:n.filter,run:t.proxy(n.run,this)})},this)),this.setup(),this.initialize()}o.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:e,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},o.Width={Default:"default",Inner:"inner",Outer:"outer"},o.Type={Event:"event",State:"state"},o.Plugins={},o.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(t){t.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(t){var e=this.settings.margin||"",n=!this.settings.autoWidth,i=this.settings.rtl,o={width:"auto","margin-left":i?e:"","margin-right":i?"":e};!n&&this.$stage.children().css(o),t.css=o}},{filter:["width","items","settings"],run:function(t){var e=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,n=null,i=this._items.length,o=!this.settings.autoWidth,s=[];for(t.items={merge:!1,width:e};i--;)n=this._mergers[i],n=this.settings.mergeFit&&Math.min(n,this.settings.items)||n,t.items.merge=n>1||t.items.merge,s[i]=o?e*n:this._items[i].width();this._widths=s}},{filter:["items","settings"],run:function(){var e=[],n=this._items,i=this.settings,o=Math.max(2*i.items,4),s=2*Math.ceil(n.length/2),r=i.loop&&n.length?i.rewind?o:Math.max(o,s):0,a="",l="";for(r/=2;r--;)e.push(this.normalize(e.length/2,!0)),a+=n[e[e.length-1]][0].outerHTML,e.push(this.normalize(n.length-1-(e.length-1)/2,!0)),l=n[e[e.length-1]][0].outerHTML+l;this._clones=e,t(a).addClass("cloned").appendTo(this.$stage),t(l).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var t=this.settings.rtl?1:-1,e=this._clones.length+this._items.length,n=-1,i=0,o=0,s=[];++n<e;)i=s[n-1]||0,o=this._widths[this.relative(n)]+this.settings.margin,s.push(i+o*t);this._coordinates=s}},{filter:["width","items","settings"],run:function(){var t=this.settings.stagePadding,e=this._coordinates,n={width:Math.ceil(Math.abs(e[e.length-1]))+2*t,"padding-left":t||"","padding-right":t||""};this.$stage.css(n)}},{filter:["width","items","settings"],run:function(t){var e=this._coordinates.length,n=!this.settings.autoWidth,i=this.$stage.children();if(n&&t.items.merge)for(;e--;)t.css.width=this._widths[this.relative(e)],i.eq(e).css(t.css);else n&&(t.css.width=t.items.width,i.css(t.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(t){t.current=t.current?this.$stage.children().index(t.current):0,t.current=Math.max(this.minimum(),Math.min(this.maximum(),t.current)),this.reset(t.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var t,e,n,i,o=this.settings.rtl?1:-1,s=2*this.settings.stagePadding,r=this.coordinates(this.current())+s,a=r+this.width()*o,l=[];for(n=0,i=this._coordinates.length;i>n;n++)t=this._coordinates[n-1]||0,e=Math.abs(this._coordinates[n])+s*o,(this.op(t,"<=",r)&&this.op(t,">",a)||this.op(e,"<",r)&&this.op(e,">",a))&&l.push(n);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+l.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],o.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var e,n,o;e=this.$element.find("img"),n=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:i,o=this.$element.children(n).width(),e.length&&0>=o&&this.preloadAutoWidthImages(e)}this.$element.addClass(this.options.loadingClass),this.$stage=t("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},o.prototype.setup=function(){var e=this.viewport(),n=this.options.responsive,i=-1,o=null;n?(t.each(n,function(t){e>=t&&t>i&&(i=Number(t))}),o=t.extend({},this.options,n[i]),"function"==typeof o.stagePadding&&(o.stagePadding=o.stagePadding()),delete o.responsive,o.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+i))):o=t.extend({},this.options),this.trigger("change",{property:{name:"settings",value:o}}),this._breakpoint=i,this.settings=o,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},o.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},o.prototype.prepare=function(e){var n=this.trigger("prepare",{content:e});return n.data||(n.data=t("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(e)),this.trigger("prepared",{content:n.data}),n.data},o.prototype.update=function(){for(var e=0,n=this._pipe.length,i=t.proxy(function(t){return this[t]},this._invalidated),o={};n>e;)(this._invalidated.all||t.grep(this._pipe[e].filter,i).length>0)&&this._pipe[e].run(o),e++;this._invalidated={},!this.is("valid")&&this.enter("valid")},o.prototype.width=function(t){switch(t=t||o.Width.Default){case o.Width.Inner:case o.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},o.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},o.prototype.onThrottledResize=function(){e.clearTimeout(this.resizeTimer),this.resizeTimer=e.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},o.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},o.prototype.registerEventHandlers=function(){t.support.transition&&this.$stage.on(t.support.transition.end+".owl.core",t.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(e,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",t.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",t.proxy(this.onDragEnd,this)))},o.prototype.onDragStart=function(e){var i=null;3!==e.which&&(t.support.transform?(i=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),i={x:i[16===i.length?12:4],y:i[16===i.length?13:5]}):(i=this.$stage.position(),i={x:this.settings.rtl?i.left+this.$stage.width()-this.width()+this.settings.margin:i.left,y:i.top}),this.is("animating")&&(t.support.transform?this.animate(i.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===e.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=t(e.target),this._drag.stage.start=i,this._drag.stage.current=i,this._drag.pointer=this.pointer(e),t(n).on("mouseup.owl.core touchend.owl.core",t.proxy(this.onDragEnd,this)),t(n).one("mousemove.owl.core touchmove.owl.core",t.proxy(function(e){var i=this.difference(this._drag.pointer,this.pointer(e));t(n).on("mousemove.owl.core touchmove.owl.core",t.proxy(this.onDragMove,this)),Math.abs(i.x)<Math.abs(i.y)&&this.is("valid")||(e.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},o.prototype.onDragMove=function(t){var e=null,n=null,i=null,o=this.difference(this._drag.pointer,this.pointer(t)),s=this.difference(this._drag.stage.start,o);this.is("dragging")&&(t.preventDefault(),this.settings.loop?(e=this.coordinates(this.minimum()),n=this.coordinates(this.maximum()+1)-e,s.x=((s.x-e)%n+n)%n+e):(e=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),n=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),i=this.settings.pullDrag?-1*o.x/5:0,s.x=Math.max(Math.min(s.x,e+i),n+i)),this._drag.stage.current=s,this.animate(s.x))},o.prototype.onDragEnd=function(e){var i=this.difference(this._drag.pointer,this.pointer(e)),o=this._drag.stage.current,s=i.x>0^this.settings.rtl?"left":"right";t(n).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==i.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(o.x,0!==i.x?s:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=s,(Math.abs(i.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},o.prototype.closest=function(e,n){var i=-1,o=30,s=this.width(),r=this.coordinates();return this.settings.freeDrag||t.each(r,t.proxy(function(t,a){return"left"===n&&e>a-o&&a+o>e?i=t:"right"===n&&e>a-s-o&&a-s+o>e?i=t+1:this.op(e,"<",a)&&this.op(e,">",r[t+1]||a-s)&&(i="left"===n?t+1:t),-1===i},this)),this.settings.loop||(this.op(e,">",r[this.minimum()])?i=e=this.minimum():this.op(e,"<",r[this.maximum()])&&(i=e=this.maximum())),i},o.prototype.animate=function(e){var n=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),n&&(this.enter("animating"),this.trigger("translate")),t.support.transform3d&&t.support.transition?this.$stage.css({transform:"translate3d("+e+"px,0px,0px)",transition:this.speed()/1e3+"s"}):n?this.$stage.animate({left:e+"px"},this.speed(),this.settings.fallbackEasing,t.proxy(this.onTransitionEnd,this)):this.$stage.css({left:e+"px"})},o.prototype.is=function(t){return this._states.current[t]&&this._states.current[t]>0},o.prototype.current=function(t){if(t===i)return this._current;if(0===this._items.length)return i;if(t=this.normalize(t),this._current!==t){var e=this.trigger("change",{property:{name:"position",value:t}});e.data!==i&&(t=this.normalize(e.data)),this._current=t,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},o.prototype.invalidate=function(e){return"string"===t.type(e)&&(this._invalidated[e]=!0,this.is("valid")&&this.leave("valid")),t.map(this._invalidated,function(t,e){return e})},o.prototype.reset=function(t){(t=this.normalize(t))!==i&&(this._speed=0,this._current=t,this.suppress(["translate","translated"]),this.animate(this.coordinates(t)),this.release(["translate","translated"]))},o.prototype.normalize=function(t,e){var n=this._items.length,o=e?0:this._clones.length;return!this.isNumeric(t)||1>n?t=i:(0>t||t>=n+o)&&(t=((t-o/2)%n+n)%n+o/2),t},o.prototype.relative=function(t){return t-=this._clones.length/2,this.normalize(t,!0)},o.prototype.maximum=function(t){var e,n,i,o=this.settings,s=this._coordinates.length;if(o.loop)s=this._clones.length/2+this._items.length-1;else if(o.autoWidth||o.merge){for(e=this._items.length,n=this._items[--e].width(),i=this.$element.width();e--&&!((n+=this._items[e].width()+this.settings.margin)>i););s=e+1}else s=o.center?this._items.length-1:this._items.length-o.items;return t&&(s-=this._clones.length/2),Math.max(s,0)},o.prototype.minimum=function(t){return t?0:this._clones.length/2},o.prototype.items=function(t){return t===i?this._items.slice():(t=this.normalize(t,!0),this._items[t])},o.prototype.mergers=function(t){return t===i?this._mergers.slice():(t=this.normalize(t,!0),this._mergers[t])},o.prototype.clones=function(e){var n=this._clones.length/2,o=n+this._items.length,s=function(t){return t%2==0?o+t/2:n-(t+1)/2};return e===i?t.map(this._clones,function(t,e){return s(e)}):t.map(this._clones,function(t,n){return t===e?s(n):null})},o.prototype.speed=function(t){return t!==i&&(this._speed=t),this._speed},o.prototype.coordinates=function(e){var n,o=1,s=e-1;return e===i?t.map(this._coordinates,t.proxy(function(t,e){return this.coordinates(e)},this)):(this.settings.center?(this.settings.rtl&&(o=-1,s=e+1),n=this._coordinates[e],n+=(this.width()-n+(this._coordinates[s]||0))/2*o):n=this._coordinates[s]||0,n=Math.ceil(n))},o.prototype.duration=function(t,e,n){return 0===n?0:Math.min(Math.max(Math.abs(e-t),1),6)*Math.abs(n||this.settings.smartSpeed)},o.prototype.to=function(t,e){var n=this.current(),i=null,o=t-this.relative(n),s=(o>0)-(0>o),r=this._items.length,a=this.minimum(),l=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(o)>r/2&&(o+=-1*s*r),t=n+o,(i=((t-a)%r+r)%r+a)!==t&&l>=i-o&&i-o>0&&(n=i-o,t=i,this.reset(n))):this.settings.rewind?(l+=1,t=(t%l+l)%l):t=Math.max(a,Math.min(l,t)),this.speed(this.duration(n,t,e)),this.current(t),this.$element.is(":visible")&&this.update()},o.prototype.next=function(t){t=t||!1,this.to(this.relative(this.current())+1,t)},o.prototype.prev=function(t){t=t||!1,this.to(this.relative(this.current())-1,t)},o.prototype.onTransitionEnd=function(t){return(t===i||(t.stopPropagation(),(t.target||t.srcElement||t.originalTarget)===this.$stage.get(0)))&&(this.leave("animating"),void this.trigger("translated"))},o.prototype.viewport=function(){var i;if(this.options.responsiveBaseElement!==e)i=t(this.options.responsiveBaseElement).width();else if(e.innerWidth)i=e.innerWidth;else{if(!n.documentElement||!n.documentElement.clientWidth)throw"Can not detect viewport width.";i=n.documentElement.clientWidth}return i},o.prototype.replace=function(e){this.$stage.empty(),this._items=[],e&&(e=e instanceof jQuery?e:t(e)),this.settings.nestedItemSelector&&(e=e.find("."+this.settings.nestedItemSelector)),e.filter(function(){return 1===this.nodeType}).each(t.proxy(function(t,e){e=this.prepare(e),this.$stage.append(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},o.prototype.add=function(e,n){var o=this.relative(this._current);n=n===i?this._items.length:this.normalize(n,!0),e=e instanceof jQuery?e:t(e),this.trigger("add",{content:e,position:n}),e=this.prepare(e),0===this._items.length||n===this._items.length?(0===this._items.length&&this.$stage.append(e),0!==this._items.length&&this._items[n-1].after(e),this._items.push(e),this._mergers.push(1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[n].before(e),this._items.splice(n,0,e),this._mergers.splice(n,0,1*e.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[o]&&this.reset(this._items[o].index()),this.invalidate("items"),this.trigger("added",{content:e,position:n})},o.prototype.remove=function(t){(t=this.normalize(t,!0))!==i&&(this.trigger("remove",{content:this._items[t],position:t}),this._items[t].remove(),this._items.splice(t,1),this._mergers.splice(t,1),this.invalidate("items"),this.trigger("removed",{content:null,position:t}))},o.prototype.preloadAutoWidthImages=function(e){e.each(t.proxy(function(e,n){this.enter("pre-loading"),n=t(n),t(new Image).one("load",t.proxy(function(t){n.attr("src",t.target.src),n.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",n.attr("src")||n.attr("data-src")||n.attr("data-src-retina"))},this))},o.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),t(n).off(".owl.core"),!1!==this.settings.responsive&&(e.clearTimeout(this.resizeTimer),this.off(e,"resize",this._handlers.onThrottledResize));for(var i in this._plugins)this._plugins[i].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},o.prototype.op=function(t,e,n){var i=this.settings.rtl;switch(e){case"<":return i?t>n:n>t;case">":return i?n>t:t>n;case">=":return i?n>=t:t>=n;case"<=":return i?t>=n:n>=t}},o.prototype.on=function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,i):t.attachEvent&&t.attachEvent("on"+e,n)},o.prototype.off=function(t,e,n,i){t.removeEventListener?t.removeEventListener(e,n,i):t.detachEvent&&t.detachEvent("on"+e,n)},o.prototype.trigger=function(e,n,i,s,r){var a={item:{count:this._items.length,index:this.current()}},l=t.camelCase(t.grep(["on",e,i],function(t){return t}).join("-").toLowerCase()),c=t.Event([e,"owl",i||"carousel"].join(".").toLowerCase(),t.extend({relatedTarget:this},a,n));return this._supress[e]||(t.each(this._plugins,function(t,e){e.onTrigger&&e.onTrigger(c)}),this.register({type:o.Type.Event,name:e}),this.$element.trigger(c),this.settings&&"function"==typeof this.settings[l]&&this.settings[l].call(this,c)),c},o.prototype.enter=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]===i&&(this._states.current[e]=0),this._states.current[e]++},this))},o.prototype.leave=function(e){t.each([e].concat(this._states.tags[e]||[]),t.proxy(function(t,e){this._states.current[e]--},this))},o.prototype.register=function(e){if(e.type===o.Type.Event){if(t.event.special[e.name]||(t.event.special[e.name]={}),!t.event.special[e.name].owl){var n=t.event.special[e.name]._default;t.event.special[e.name]._default=function(t){return!n||!n.apply||t.namespace&&-1!==t.namespace.indexOf("owl")?t.namespace&&t.namespace.indexOf("owl")>-1:n.apply(this,arguments)},t.event.special[e.name].owl=!0}}else e.type===o.Type.State&&(this._states.tags[e.name]?this._states.tags[e.name]=this._states.tags[e.name].concat(e.tags):this._states.tags[e.name]=e.tags,this._states.tags[e.name]=t.grep(this._states.tags[e.name],t.proxy(function(n,i){return t.inArray(n,this._states.tags[e.name])===i},this)))},o.prototype.suppress=function(e){t.each(e,t.proxy(function(t,e){this._supress[e]=!0},this))},o.prototype.release=function(e){t.each(e,t.proxy(function(t,e){delete this._supress[e]},this))},o.prototype.pointer=function(t){var n={x:null,y:null};return t=t.originalEvent||t||e.event,t=t.touches&&t.touches.length?t.touches[0]:t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,t.pageX?(n.x=t.pageX,n.y=t.pageY):(n.x=t.clientX,n.y=t.clientY),n},o.prototype.isNumeric=function(t){return!isNaN(parseFloat(t))},o.prototype.difference=function(t,e){return{x:t.x-e.x,y:t.y-e.y}},t.fn.owlCarousel=function(e){var n=Array.prototype.slice.call(arguments,1);return this.each(function(){var i=t(this),s=i.data("owl.carousel");s||(s=new o(this,"object"==typeof e&&e),i.data("owl.carousel",s),t.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(e,n){s.register({type:o.Type.Event,name:n}),s.$element.on(n+".owl.carousel.core",t.proxy(function(t){t.namespace&&t.relatedTarget!==this&&(this.suppress([n]),s[n].apply(this,[].slice.call(arguments,1)),this.release([n]))},s))})),"string"==typeof e&&"_"!==e.charAt(0)&&s[e].apply(s,n)})},t.fn.owlCarousel.Constructor=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){var o=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers)};o.Defaults={autoRefresh:!0,autoRefreshInterval:500},o.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=e.setInterval(t.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},o.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},o.prototype.destroy=function(){var t,n;e.clearInterval(this._interval);for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoRefresh=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){var o=function(e){this._core=e,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":t.proxy(function(e){if(e.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(e.property&&"position"==e.property.name||"initialized"==e.type))for(var n=this._core.settings,o=n.center&&Math.ceil(n.items/2)||n.items,s=n.center&&-1*o||0,r=(e.property&&e.property.value!==i?e.property.value:this._core.current())+s,a=this._core.clones().length,l=t.proxy(function(t,e){this.load(e)},this);s++<o;)this.load(a/2+this._core.relative(r)),a&&t.each(this._core.clones(this._core.relative(r)),l),r++},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers)};o.Defaults={lazyLoad:!1},o.prototype.load=function(n){var i=this._core.$stage.children().eq(n),o=i&&i.find(".owl-lazy");!o||t.inArray(i.get(0),this._loaded)>-1||(o.each(t.proxy(function(n,i){var o,s=t(i),r=e.devicePixelRatio>1&&s.attr("data-src-retina")||s.attr("data-src");this._core.trigger("load",{element:s,url:r},"lazy"),s.is("img")?s.one("load.owl.lazy",t.proxy(function(){s.css("opacity",1),this._core.trigger("loaded",{element:s,url:r},"lazy")},this)).attr("src",r):(o=new Image,o.onload=t.proxy(function(){s.css({"background-image":"url("+r+")",opacity:"1"}),this._core.trigger("loaded",{element:s,url:r},"lazy")},this),o.src=r)},this)),this._loaded.push(i.get(0)))},o.prototype.destroy=function(){var t,e;for(t in this.handlers)this._core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Lazy=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){var o=function(e){this._core=e,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&"position"==t.property.name&&this.update()},this),"loaded.owl.lazy":t.proxy(function(t){t.namespace&&this._core.settings.autoHeight&&t.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers)};o.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},o.prototype.update=function(){var e=this._core._current,n=e+this._core.settings.items,i=this._core.$stage.children().toArray().slice(e,n),o=[],s=0;t.each(i,function(e,n){o.push(t(n).height())}),s=Math.max.apply(null,o),this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)},o.prototype.destroy=function(){var t,e;for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.AutoHeight=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){var o=function(e){this._core=e,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.video&&this.isInFullScreen()&&t.preventDefault()},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"===t.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var n=t(e.content).find(".owl-video");n.length&&(n.css("display","none"),this.fetch(n,t(e.content)))}},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",t.proxy(function(t){this.play(t)},this))};o.Defaults={video:!1,videoHeight:!1,videoWidth:!1},o.prototype.fetch=function(t,e){var n=function(){return t.attr("data-vimeo-id")?"vimeo":t.attr("data-vzaar-id")?"vzaar":"youtube"}(),i=t.attr("data-vimeo-id")||t.attr("data-youtube-id")||t.attr("data-vzaar-id"),o=t.attr("data-width")||this._core.settings.videoWidth,s=t.attr("data-height")||this._core.settings.videoHeight,r=t.attr("href");if(!r)throw new Error("Missing video URL.");if(i=r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),i[3].indexOf("youtu")>-1)n="youtube";else if(i[3].indexOf("vimeo")>-1)n="vimeo";else{if(!(i[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");n="vzaar"}i=i[6],this._videos[r]={type:n,id:i,width:o,height:s},e.attr("data-video",r),this.thumbnail(t,this._videos[r])},o.prototype.thumbnail=function(e,n){var i,o,s,r=n.width&&n.height?'style="width:'+n.width+"px;height:"+n.height+'px;"':"",a=e.find("img"),l="src",c="",u=this._core.settings,d=function(t){o='<div class="owl-video-play-icon"></div>',i=u.lazyLoad?'<div class="owl-video-tn '+c+'" '+l+'="'+t+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+t+')"></div>',e.after(i),e.after(o)};return e.wrap('<div class="owl-video-wrapper"'+r+"></div>"),this._core.settings.lazyLoad&&(l="data-src",c="owl-lazy"),a.length?(d(a.attr(l)),a.remove(),!1):void("youtube"===n.type?(s="//img.youtube.com/vi/"+n.id+"/hqdefault.jpg",d(s)):"vimeo"===n.type?t.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){s=t[0].thumbnail_large,d(s)}}):"vzaar"===n.type&&t.ajax({type:"GET",url:"//vzaar.com/api/videos/"+n.id+".json",jsonp:"callback",dataType:"jsonp",success:function(t){s=t.framegrab_url,d(s)}}))},o.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},o.prototype.play=function(e){var n,i=t(e.target),o=i.closest("."+this._core.settings.itemClass),s=this._videos[o.attr("data-video")],r=s.width||"100%",a=s.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),o=this._core.items(this._core.relative(o.index())),this._core.reset(o.index()),"youtube"===s.type?n='<iframe width="'+r+'" height="'+a+'" src="//www.youtube.com/embed/'+s.id+"?autoplay=1&v="+s.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===s.type?n='<iframe src="//player.vimeo.com/video/'+s.id+'?autoplay=1" width="'+r+'" height="'+a+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===s.type&&(n='<iframe frameborder="0"height="'+a+'"width="'+r+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+s.id+'/player?autoplay=true"></iframe>'),t('<div class="owl-video-frame">'+n+"</div>").insertAfter(o.find(".owl-video")),this._playing=o.addClass("owl-video-playing"))},o.prototype.isInFullScreen=function(){var e=n.fullscreenElement||n.mozFullScreenElement||n.webkitFullscreenElement;return e&&t(e).parent().hasClass("owl-video-frame")},o.prototype.destroy=function(){var t,e;this._core.$element.off("click.owl.video");for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Video=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){var o=function(e){this.core=e,this.core.options=t.extend({},o.Defaults,this.core.options),this.swapping=!0,this.previous=i,this.next=i,this.handlers={"change.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&(this.previous=this.core.current(),this.next=t.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":t.proxy(function(t){t.namespace&&(this.swapping="translated"==t.type)},this),"translate.owl.carousel":t.proxy(function(t){t.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};o.Defaults={animateOut:!1,animateIn:!1},o.prototype.swap=function(){if(1===this.core.settings.items&&t.support.animation&&t.support.transition){this.core.speed(0);var e,n=t.proxy(this.clear,this),i=this.core.$stage.children().eq(this.previous),o=this.core.$stage.children().eq(this.next),s=this.core.settings.animateIn,r=this.core.settings.animateOut;this.core.current()!==this.previous&&(r&&(e=this.core.coordinates(this.previous)-this.core.coordinates(this.next),i.one(t.support.animation.end,n).css({left:e+"px"}).addClass("animated owl-animated-out").addClass(r)),s&&o.one(t.support.animation.end,n).addClass("animated owl-animated-in").addClass(s))}},o.prototype.clear=function(e){t(e.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},o.prototype.destroy=function(){var t,e;for(t in this.handlers)this.core.$element.off(t,this.handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.Animate=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){var o=function(e){this._core=e,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":t.proxy(function(t){t.namespace&&"settings"===t.property.name?this._core.settings.autoplay?this.play():this.stop():t.namespace&&"position"===t.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":t.proxy(function(t,e,n){t.namespace&&this.play(e,n)},this),"stop.owl.autoplay":t.proxy(function(t){t.namespace&&this.stop()},this),"mouseover.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":t.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=t.extend({},o.Defaults,this._core.options)};o.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},o.prototype.play=function(t,e){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},o.prototype._getNextTimeout=function(i,o){return this._timeout&&e.clearTimeout(this._timeout),e.setTimeout(t.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||n.hidden||this._core.next(o||this._core.settings.autoplaySpeed)},this),i||this._core.settings.autoplayTimeout)},o.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},o.prototype.stop=function(){this._core.is("rotating")&&(e.clearTimeout(this._timeout),this._core.leave("rotating"))},o.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},o.prototype.destroy=function(){var t,e;this.stop();for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(e in Object.getOwnPropertyNames(this))"function"!=typeof this[e]&&(this[e]=null)},t.fn.owlCarousel.Constructor.Plugins.autoplay=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){"use strict";var o=function(e){this._core=e,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":t.proxy(function(e){e.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":t.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":t.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":t.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":t.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this.$element.on(this._handlers)};o.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},o.prototype.initialize=function(){var e,n=this._core.settings;this._controls.$relative=(n.navContainer?t(n.navContainer):t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=t("<"+n.navElement+">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click",t.proxy(function(t){this.prev(n.navSpeed)},this)),this._controls.$next=t("<"+n.navElement+">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click",t.proxy(function(t){this.next(n.navSpeed)},this)),n.dotsData||(this._templates=[t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]),this._controls.$absolute=(n.dotsContainer?t(n.dotsContainer):t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",t.proxy(function(e){var i=t(e.target).parent().is(this._controls.$absolute)?t(e.target).index():t(e.target).parent().index();e.preventDefault(),this.to(i,n.dotsSpeed)},this));for(e in this._overrides)this._core[e]=t.proxy(this[e],this)},o.prototype.destroy=function(){var t,e,n,i;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(n in Object.getOwnPropertyNames(this))"function"!=typeof this[n]&&(this[n]=null)},o.prototype.update=function(){var t,e,n,i=this._core.clones().length/2,o=i+this._core.items().length,s=this._core.maximum(!0),r=this._core.settings,a=r.center||r.autoWidth||r.dotsData?1:r.dotsEach||r.items;if("page"!==r.slideBy&&(r.slideBy=Math.min(r.slideBy,r.items)),r.dots||"page"==r.slideBy)for(this._pages=[],t=i,e=0,n=0;o>t;t++){if(e>=a||0===e){if(this._pages.push({start:Math.min(s,t-i),end:t-i+a-1}),Math.min(s,t-i)===s)break;e=0,++n}e+=this._core.mergers(this._core.relative(t))}},o.prototype.draw=function(){var e,n=this._core.settings,i=this._core.items().length<=n.items,o=this._core.relative(this._core.current()),s=n.loop||n.rewind;this._controls.$relative.toggleClass("disabled",!n.nav||i),n.nav&&(this._controls.$previous.toggleClass("disabled",!s&&o<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!s&&o>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!n.dots||i),n.dots&&(e=this._pages.length-this._controls.$absolute.children().length,n.dotsData&&0!==e?this._controls.$absolute.html(this._templates.join("")):e>0?this._controls.$absolute.append(new Array(e+1).join(this._templates[0])):0>e&&this._controls.$absolute.children().slice(e).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(t.inArray(this.current(),this._pages)).addClass("active"))},o.prototype.onTrigger=function(e){var n=this._core.settings;e.page={index:t.inArray(this.current(),this._pages),count:this._pages.length,size:n&&(n.center||n.autoWidth||n.dotsData?1:n.dotsEach||n.items)}},o.prototype.current=function(){var e=this._core.relative(this._core.current());return t.grep(this._pages,t.proxy(function(t,n){return t.start<=e&&t.end>=e},this)).pop()},o.prototype.getPosition=function(e){var n,i,o=this._core.settings;return"page"==o.slideBy?(n=t.inArray(this.current(),this._pages),i=this._pages.length,e?++n:--n,n=this._pages[(n%i+i)%i].start):(n=this._core.relative(this._core.current()),i=this._core.items().length,e?n+=o.slideBy:n-=o.slideBy),n},o.prototype.next=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!0),e)},o.prototype.prev=function(e){t.proxy(this._overrides.to,this._core)(this.getPosition(!1),e)},o.prototype.to=function(e,n,i){var o;!i&&this._pages.length?(o=this._pages.length,t.proxy(this._overrides.to,this._core)(this._pages[(e%o+o)%o].start,n)):t.proxy(this._overrides.to,this._core)(e,n)},t.fn.owlCarousel.Constructor.Plugins.Navigation=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){"use strict";var o=function(n){this._core=n,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":t.proxy(function(n){n.namespace&&"URLHash"===this._core.settings.startPosition&&t(e).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":t.proxy(function(e){if(e.namespace){var n=t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!n)return;this._hashes[n]=e.content}},this),"changed.owl.carousel":t.proxy(function(n){if(n.namespace&&"position"===n.property.name){var i=this._core.items(this._core.relative(this._core.current())),o=t.map(this._hashes,function(t,e){return t===i?e:null}).join();if(!o||e.location.hash.slice(1)===o)return;e.location.hash=o}},this)},this._core.options=t.extend({},o.Defaults,this._core.options),this.$element.on(this._handlers),t(e).on("hashchange.owl.navigation",t.proxy(function(t){var n=e.location.hash.substring(1),o=this._core.$stage.children(),s=this._hashes[n]&&o.index(this._hashes[n]);s!==i&&s!==this._core.current()&&this._core.to(this._core.relative(s),!1,!0)},this))};o.Defaults={URLhashListener:!1},o.prototype.destroy=function(){var n,i;t(e).off("hashchange.owl.navigation");for(n in this._handlers)this._core.$element.off(n,this._handlers[n]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},t.fn.owlCarousel.Constructor.Plugins.Hash=o}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){function o(e,n){var o=!1,s=e.charAt(0).toUpperCase()+e.slice(1);return t.each((e+" "+a.join(s+" ")+s).split(" "),function(t,e){return r[e]!==i?(o=!n||e,!1):void 0}),o}function s(t){return o(t,!0)}var r=t("<support>").get(0).style,a="Webkit Moz O ms".split(" "),l={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},c={csstransforms:function(){return!!o("transform")},csstransforms3d:function(){return!!o("perspective")},csstransitions:function(){return!!o("transition")},cssanimations:function(){return!!o("animation")}};c.csstransitions()&&(t.support.transition=new String(s("transition")),t.support.transition.end=l.transition.end[t.support.transition]),c.cssanimations()&&(t.support.animation=new String(s("animation")),t.support.animation.end=l.animation.end[t.support.animation]),c.csstransforms()&&(t.support.transform=new String(s("transform")),t.support.transform3d=c.csstransforms3d())}(window.Zepto||window.jQuery,window,document),function(t,e,n,i){"use strict";function o(t){var e=n(t.currentTarget),i=t.data?t.data.options:{},o=e.attr("data-fancybox")||"",s=0,r=[];t.isDefaultPrevented()||(t.preventDefault(),o?(r=i.selector?n(i.selector):t.data?t.data.items:[],r=r.length?r.filter('[data-fancybox="'+o+'"]'):n('[data-fancybox="'+o+'"]'),(s=r.index(e))<0&&(s=0)):r=[e],n.fancybox.open(r,i,s))}if(n){if(n.fn.fancybox)return void("console"in t&&console.log("fancyBox already initialized"));var s={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!0,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","share","close"],idleTime:3,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},defaultType:"image",animationEffect:"zoom",animationDuration:500,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}"><svg viewBox="0 0 40 40"><path d="M20,23 L20,8 L20,23 L13,16 L20,23 L27,16 L20,23 M26,28 L13,28 L27,28 L14,28" /></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg viewBox="0 0 40 40"><path d="M 18,17 m-8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0 M25,23 L31,29 L25,23" /></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30" /></svg></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><svg viewBox="0 0 40 40"><path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20"></path></svg></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><svg viewBox="0 0 40 40"><path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20"></path></svg></button>'},parentEl:"body",autoFocus:!1,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{idleTime:!1,margin:0,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Maßstab"}}},r=n(t),a=n(e),l=0,c=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(n.style[t]!==i)return o[t];return"transitionend"}(),h=function(t){return t&&t.length&&t[0].offsetHeight},p=function(t,i,o){var s=this;s.opts=n.extend(!0,{index:o},n.fancybox.defaults,i||{}),n.fancybox.isMobile&&(s.opts=n.extend(!0,{},s.opts,s.opts.mobile)),i&&n.isArray(i.buttons)&&(s.opts.buttons=i.buttons),s.id=s.opts.id||++l,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init())};n.extend(p.prototype,{init:function(){var o,s,r,l=this,c=l.group[l.currIndex],u=c.opts,d=n.fancybox.scrollbarWidth;l.scrollTop=a.scrollTop(),l.scrollLeft=a.scrollLeft(),n.fancybox.getInstance()||(n("body").addClass("fancybox-active"),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!t.MSStream?"image"!==c.type&&n("body").css("top",-1*n("body").scrollTop()).addClass("fancybox-iosfix"):!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(d===i&&(o=n('<div style="width:50px;height:50px;overflow:scroll;" />').appendTo("body"),d=n.fancybox.scrollbarWidth=o[0].offsetWidth-o[0].clientWidth,o.remove()),n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar { margin-right: '+d+"px; }</style>"),n("body").addClass("compensate-for-scrollbar"))),r="",n.each(u.buttons,function(t,e){r+=u.btnTpl[e]||""}),s=n(l.translate(l,u.baseTpl.replace("{{buttons}}",r).replace("{{arrows}}",u.btnTpl.arrowLeft+u.btnTpl.arrowRight))).attr("id","fancybox-container-"+l.id).addClass("fancybox-is-hidden").addClass(u.baseClass).data("FancyBox",l).appendTo(u.parentEl),l.$refs={container:s},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){l.$refs[t]=s.find(".fancybox-"+t)}),l.trigger("onInit"),l.activate(),l.jumpTo(l.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var o=n[e];return o===i?t:o})},createGroup:function(t){var e=this,o=n.makeArray(t);n.each(o,function(t,o){var s,r,a,l,c,u={},d={};n.isPlainObject(o)?(u=o,d=o.opts||o):"object"===n.type(o)&&n(o).length?(s=n(o),d=s.data(),d=n.extend({},d,d.options||{}),d.$orig=s,u.src=d.src||s.attr("href"),u.type||u.src||(u.type="inline",u.src=o)):u={type:"html",src:o+""},u.opts=n.extend(!0,{},e.opts,d),n.isArray(d.buttons)&&(u.opts.buttons=d.buttons),r=u.type||u.opts.type,l=u.src||"",!r&&l&&(l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?r="image":l.match(/\.(pdf)((\?|#).*)?$/i)?r="pdf":(a=l.match(/\.(mp4|mov|ogv)((\?|#).*)?$/i))?(r="video",u.opts.videoFormat||(u.opts.videoFormat="video/"+("ogv"===a[1]?"ogg":a[1]))):"#"===l.charAt(0)&&(r="inline")),r?u.type=r:e.trigger("objectNeedsType",u),u.index=e.group.length,u.opts.$orig&&!u.opts.$orig.length&&delete u.opts.$orig,!u.opts.$thumb&&u.opts.$orig&&(u.opts.$thumb=u.opts.$orig.find("img:first")),u.opts.$thumb&&!u.opts.$thumb.length&&delete u.opts.$thumb,"function"===n.type(u.opts.caption)&&(u.opts.caption=u.opts.caption.apply(o,[e,u])),"function"===n.type(e.opts.caption)&&(u.opts.caption=e.opts.caption.apply(o,[e,u])),u.opts.caption instanceof n||(u.opts.caption=u.opts.caption===i?"":u.opts.caption+""),"ajax"===r&&(c=l.split(/\s+/,2),c.length>1&&(u.src=c.shift(),u.opts.filter=c.shift())),"auto"==u.opts.smallBtn&&(n.inArray(r,["html","inline","ajax"])>-1?(u.opts.toolbar=!1,u.opts.smallBtn=!0):u.opts.smallBtn=!1),"pdf"===r&&(u.type="iframe",u.opts.iframe.preload=!1),u.opts.modal&&(u.opts=n.extend(!0,u.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(u)})},addEvents:function(){var i=this;i.removeEvents(),i.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),i.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),i.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),i.next()}).on("click.fb","[data-fancybox-zoom]",function(t){i[i.isScaledDown()?"scaleToActual":"scaleToFit"]()}),r.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){i.update()}):(i.$refs.stage.hide(),setTimeout(function(){i.$refs.stage.show(),i.update()},600))}),a.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;o.isClosing||!o.current||!o.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||o&&"fixed"!==n(t.target).css("position")&&!o.$refs.container.has(t.target).length&&(t.stopPropagation(),o.focus(),r.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))}),a.on("keydown.fb",function(t){var e=i.current,o=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===o||27===o?(t.preventDefault(),void i.close(t)):37===o||38===o?(t.preventDefault(),void i.previous()):39===o||40===o?(t.preventDefault(),void i.next()):void i.trigger("afterKeydown",t,o)}),i.group[i.currIndex].opts.idleTime&&(i.idleSecondsCounter=0,a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){i.idleSecondsCounter=0,i.isIdle&&i.showControls(),i.isIdle=!1}),i.idleInterval=t.setInterval(function(){++i.idleSecondsCounter>=i.group[i.currIndex].opts.idleTime&&!i.isDragging&&(i.isIdle=!0,i.idleSecondsCounter=0,i.hideControls())},1e3))},removeEvents:function(){var e=this;r.off("orientationchange.fb resize.fb"),a.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,o){var s,r,a,l,c,u,d,p=this,f=p.group.length;if(!(p.isDragging||p.isClosing||p.isAnimating&&p.firstRun)){if(t=parseInt(t,10),!(r=p.current?p.current.opts.loop:p.opts.loop)&&(t<0||t>=f))return!1;if(s=p.firstRun=null===p.firstRun,!(f<2&&!s&&p.isDragging)){if(l=p.current,p.prevIndex=p.currIndex,p.prevPos=p.currPos,a=p.createSlide(t),f>1&&((r||a.index>0)&&p.createSlide(t-1),(r||a.index<f-1)&&p.createSlide(t+1)),p.current=a,p.currIndex=a.index,p.currPos=a.pos,p.trigger("beforeShow",s),p.updateControls(),u=n.fancybox.getTranslate(a.$slide),a.isMoved=(0!==u.left||0!==u.top)&&!a.$slide.hasClass("fancybox-animated"),a.forcedDuration=i,n.isNumeric(e)?a.forcedDuration=e:e=a.opts[s?"animationDuration":"transitionDuration"],e=parseInt(e,10),s)return a.opts.animationEffect&&e&&p.$refs.container.css("transition-duration",e+"ms"),p.$refs.container.removeClass("fancybox-is-hidden"),h(p.$refs.container),p.$refs.container.addClass("fancybox-is-open"),a.$slide.addClass("fancybox-slide--current"),p.loadSlide(a),void p.preload("image");n.each(p.slides,function(t,e){n.fancybox.stop(e.$slide)}),a.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),a.isMoved?(c=Math.round(a.$slide.width()),n.each(p.slides,function(t,i){var o=i.pos-a.pos;n.fancybox.animate(i.$slide,{top:0,left:o*c+o*i.opts.gutter},e,function(){i.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),i.pos===p.currPos&&(a.isMoved=!1,p.complete())})})):p.$refs.stage.children().removeAttr("style"),a.isLoaded?p.revealContent(a):p.loadSlide(a),p.preload("image"),l.pos!==a.pos&&(d="fancybox-slide--"+(l.pos>a.pos?"next":"previous"),l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),l.isComplete=!1,e&&(a.isMoved||a.opts.transitionEffect)&&(a.isMoved?l.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+a.opts.transitionEffect,n.fancybox.animate(l.$slide,d,e,function(){l.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,i,o=this;return i=t%o.group.length,i=i<0?o.group.length+i:i,!o.slides[t]&&o.group[i]&&(e=n('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage),o.slides[t]=n.extend(!0,{},o.group[i],{pos:t,$slide:e,isLoaded:!1}),o.updateSlide(o.slides[t])),o.slides[t]},scaleToActual:function(t,e,o){var s,r,a,l,c,u=this,d=u.current,h=d.$content,p=parseInt(d.$slide.width(),10),f=parseInt(d.$slide.height(),10),g=d.width,m=d.height;"image"!=d.type||d.hasError||!h||u.isAnimating||(n.fancybox.stop(h),u.isAnimating=!0,t=t===i?.5*p:t,e=e===i?.5*f:e,s=n.fancybox.getTranslate(h),l=g/s.width,c=m/s.height,r=.5*p-.5*g,a=.5*f-.5*m,g>p&&(r=s.left*l-(t*l-t),r>0&&(r=0),r<p-g&&(r=p-g)),m>f&&(a=s.top*c-(e*c-e),a>0&&(a=0),a<f-m&&(a=f-m)),u.updateCursor(g,m),n.fancybox.animate(h,{top:a,left:r,scaleX:l,scaleY:c},o||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,i=this,o=i.current,s=o.$content;"image"!=o.type||o.hasError||!s||i.isAnimating||(n.fancybox.stop(s),i.isAnimating=!0,e=i.getFitPos(o),i.updateCursor(e.width,e.height),n.fancybox.animate(s,{top:e.top,left:e.left,scaleX:e.width/s.width(),scaleY:e.height/s.height()},t||330,function(){i.isAnimating=!1}))},getFitPos:function(t){var e,i,o,s,r,a=this,l=t.$content,c=t.width,u=t.height,d=t.opts.margin;return!(!l||!l.length||!c&&!u)&&("number"===n.type(d)&&(d=[d,d]),2==d.length&&(d=[d[0],d[1],d[0],d[1]]),e=parseInt(a.$refs.stage.width(),10)-(d[1]+d[3]),i=parseInt(a.$refs.stage.height(),10)-(d[0]+d[2]),o=Math.min(1,e/c,i/u),s=Math.floor(o*c),r=Math.floor(o*u),{top:Math.floor(.5*(i-r))+d[0],left:Math.floor(.5*(e-s))+d[3],width:s,height:r})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t,e){var i=this,o=t&&t.$content;o&&(t.width||t.height)&&(i.isAnimating=!1,n.fancybox.stop(o),n.fancybox.setTranslate(o,i.getFitPos(t)),t.pos===i.currPos&&i.updateCursor()),t.$slide.trigger("refresh"),i.trigger("onUpdate",t)},centerSlide:function(t,e){var o,s,r=this;r.current&&(o=Math.round(t.$slide.width()),s=t.pos-r.current.pos,n.fancybox.animate(t.$slide,{top:0,left:s*o+s*t.opts.gutter,opacity:1},e===i?0:e,null,!1))},updateCursor:function(t,e){var n,o=this,s=o.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");o.current&&!o.isClosing&&(o.isZoomable()?(s.addClass("fancybox-is-zoomable"),n=t!==i&&e!==i?t<o.current.width&&e<o.current.height:o.isScaledDown(),n?s.addClass("fancybox-can-zoomIn"):o.current.opts.touch?s.addClass("fancybox-can-drag"):s.addClass("fancybox-can-zoomOut")):o.current.opts.touch&&s.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,i=e.current;if(i&&!e.isClosing)return!!("image"===i.type&&i.isLoaded&&!i.hasError&&("zoom"===i.opts.clickContent||n.isFunction(i.opts.clickContent)&&"zoom"===i.opts.clickContent(i))&&(t=e.getFitPos(i),i.width>t.width||i.height>t.height))},isScaledDown:function(){var t=this,e=t.current,i=e.$content,o=!1;return i&&(o=n.fancybox.getTranslate(i),o=o.width<e.width||o.height<e.height),o},canPan:function(){var t=this,e=t.current,n=e.$content,i=!1;return n&&(i=t.getFitPos(e),i=Math.abs(n.width()-i.width)>1||Math.abs(n.height()-i.height)>1),i},loadSlide:function(t){var e,i,o,s=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,s.trigger("beforeLoad",t),e=t.type,i=t.$slide,i.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":s.setImage(t);break;case"iframe":s.setIframe(t);break;case"html":s.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?s.setContent(t,n(t.src)):s.setError(t);break;case"ajax":s.showLoading(t),o=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&s.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&s.setError(t)}})),i.one("onReset",function(){o.abort()});break;case"video":s.setContent(t,'<video controls><source src="'+t.src+'" type="'+t.opts.videoFormat+"\">Your browser doesn't support HTML5 video</video>");break;default:s.setError(t)}return!0}},setImage:function(e){var i,o,s,r,a=this,l=e.opts.srcset||e.opts.image.srcset;if(l){s=t.devicePixelRatio||1,r=t.innerWidth*s,o=l.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var i=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(i&&(e.value=i,e.postfix=t[t.length-1]))}),e}),o.sort(function(t,e){return t.value-e.value});for(var c=0;c<o.length;c++){var u=o[c];if("w"===u.postfix&&u.value>=r||"x"===u.postfix&&u.value>=s){i=u;break}}!i&&o.length&&(i=o[o.length-1]),i&&(e.src=i.url,e.width&&e.height&&"w"==i.postfix&&(e.height=e.width/e.height*i.value,e.width=i.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),!1!==e.opts.preload&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,a.setBigImage(e)}).one("load",function(){a.afterLoad(e),a.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):a.setBigImage(e)},setBigImage:function(t){var e=this,i=n("<img />");t.$image=i.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=t.opts.width||this.naturalWidth,t.height=t.opts.height||this.naturalHeight,t.opts.image.srcset&&i.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i[0].complete||"complete"==i[0].readyState)&&i[0].naturalWidth&&i[0].naturalHeight?i.trigger("load"):i[0].error?i.trigger("error"):t.timouts=setTimeout(function(){i[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,o=this,s=t.opts.iframe,r=t.$slide;t.$content=n('<div class="fancybox-content'+(s.preload?" fancybox-is-hidden":"")+'"></div>').css(s.css).appendTo(r),e=n(s.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(s.attr).appendTo(t.$content),s.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),r.on("refresh.fb",function(){var n,o,r,a=t.$content,l=s.css.width,c=s.css.height;if(1===e[0].isReady){try{o=e.contents(),r=o.find("body")}catch(t){}r&&r.length&&(l===i&&(n=e[0].contentWindow.document.documentElement.scrollWidth,l=Math.ceil(r.outerWidth(!0)+(a.width()-n)),l+=a.outerWidth()-a.innerWidth()),c===i&&(c=Math.ceil(r.outerHeight(!0)),c+=a.outerHeight()-a.innerHeight()),l&&a.width(l),c&&a.height(c)),a.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),!0===t.opts.smallBtn&&t.$content.prepend(o.translate(t,t.opts.btnTpl.smallBtn)),r.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var i=this;i.isClosing||(i.hideLoading(t),t.$slide.empty(),c(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content.filter("div,form").first())),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,o,s,r,a,l=this,c=t.$slide,u=!1;return e=t.opts[l.firstRun?"animationEffect":"transitionEffect"],s=t.opts[l.firstRun?"animationDuration":"transitionDuration"],s=parseInt(t.forcedDuration===i?s:t.forcedDuration,10),!t.isMoved&&t.pos===l.currPos&&s||(e=!1),"zoom"!==e||t.pos===l.currPos&&s&&"image"===t.type&&!t.hasError&&(u=l.getThumbPos(t))||(e="fade"),"zoom"===e?(a=l.getFitPos(t),a.scaleX=a.width/u.width,a.scaleY=a.height/u.height,delete a.width,delete a.height,r=t.opts.zoomOpacity,"auto"==r&&(r=Math.abs(t.width/t.height-u.width/u.height)>.1),r&&(u.opacity=.1,a.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),h(t.$content),void n.fancybox.animate(t.$content,a,s,function(){l.complete()})):(l.updateSlide(t),e?(n.fancybox.stop(c),o="fancybox-animated fancybox-slide--"+(t.pos>=l.prevPos?"next":"previous")+" fancybox-fx-"+e,c.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(o),t.$content.removeClass("fancybox-is-hidden"),h(c),void n.fancybox.animate(c,"fancybox-slide--current",s,function(e){c.removeClass(o).removeAttr("style"),t.pos===l.currPos&&l.complete()},!0)):(h(c),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===l.currPos&&l.complete())))},getThumbPos:function(i){var o,s=this,r=!1,a=function(e){for(var i=e[0],o=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return s.every(function(t){var e=Math.min(o.right,t.right)-Math.max(o.left,t.left),n=Math.min(o.bottom,t.bottom)-Math.max(o.top,t.top);return e>0&&n>0})&&o.bottom>0&&o.right>0&&o.left<n(t).width()&&o.top<n(t).height()},l=i.opts.$thumb,c=l?l.offset():0;return c&&l[0].ownerDocument===e&&a(l)&&(o=s.$refs.stage.offset(),r={top:c.top-o.top+parseFloat(l.css("border-top-width")||0),left:c.left-o.left+parseFloat(l.css("border-left-width")||0),width:l.width(),height:l.height(),scaleX:1,scaleY:1}),r},complete:function(){var t=this,i=t.current,o={};i.isMoved||!i.isLoaded||i.isComplete||(i.isComplete=!0,i.$slide.siblings().trigger("onReset"),t.preload("inline"),h(i.$slide),i.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,i){i.pos>=t.currPos-1&&i.pos<=t.currPos+1?o[i.pos]=i:i&&(n.fancybox.stop(i.$slide),i.$slide.off().remove())}),t.slides=o,t.updateCursor(),t.trigger("afterShow"),i.$slide.find("video,audio").first().trigger("play"),(n(e.activeElement).is("[disabled]")||i.opts.autoFocus&&"image"!=i.type&&"iframe"!==i.type)&&t.focus())},preload:function(t){var e=this,n=e.slides[e.currPos+1],i=e.slides[e.currPos-1];n&&n.type===t&&e.loadSlide(n),i&&i.type===t&&e.loadSlide(i)},focus:function(){var t,e=this.current;this.isClosing||(e&&e.isComplete&&(t=e.$slide.find("input[autofocus]:enabled:visible:first"),t.length||(t=e.$slide.find("button,:input,[tabindex],a").filter(":enabled:visible:first"))),t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var i,o,s,r,a,l,c=this,p=c.current,f=function(){c.cleanUp(t)};return!(c.isClosing||(c.isClosing=!0,!1===c.trigger("beforeClose",t)?(c.isClosing=!1,u(function(){c.update()}),1):(c.removeEvents(),p.timouts&&clearTimeout(p.timouts),s=p.$content,i=p.opts.animationEffect,o=n.isNumeric(e)?e:i?p.opts.animationDuration:0,p.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),p.$slide.siblings().trigger("onReset").remove(),o&&c.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),c.hideLoading(p),c.hideControls(),c.updateCursor(),"zoom"!==i||!0!==t&&s&&o&&"image"===p.type&&!p.hasError&&(l=c.getThumbPos(p))||(i="fade"),"zoom"===i?(n.fancybox.stop(s),a=n.fancybox.getTranslate(s),a.width=a.width*a.scaleX,a.height=a.height*a.scaleY,r=p.opts.zoomOpacity,"auto"==r&&(r=Math.abs(p.width/p.height-l.width/l.height)>.1),r&&(l.opacity=0),a.scaleX=a.width/l.width,a.scaleY=a.height/l.height,a.width=l.width,a.height=l.height,n.fancybox.setTranslate(p.$content,a),h(p.$content),n.fancybox.animate(p.$content,l,o,f),0):(i&&o?!0===t?setTimeout(f,o):n.fancybox.animate(p.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+i,o,f):f(),0))))},cleanUp:function(t){var i,o,s=this,a=n("body");s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",t),s.$lastFocus&&s.current.opts.backFocus&&s.$lastFocus.focus(),s.current=null,i=n.fancybox.getInstance(),i?i.activate():(r.scrollTop(s.scrollTop).scrollLeft(s.scrollLeft),a.removeClass("fancybox-active compensate-for-scrollbar"),a.hasClass("fancybox-iosfix")&&(o=parseInt(e.body.style.top,10),a.removeClass("fancybox-iosfix").css("top","").scrollTop(-1*o)),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var i,o=Array.prototype.slice.call(arguments,1),s=this,r=e&&e.opts?e:s.current;return r?o.unshift(r):r=s,o.unshift(s),n.isFunction(r.opts[t])&&(i=r.opts[t].apply(r,o)),!1===i?i:void("afterClose"!==t&&s.$refs?s.$refs.container.trigger(t+".fb",o):a.trigger(t+".fb",o))},updateControls:function(t){var e=this,n=e.current,i=n.index,o=n.opts.caption,s=e.$refs.container,r=e.$refs.caption;n.$slide.trigger("refresh"),e.$caption=o&&o.length?r.html(o):null,e.isHiddenControls||e.isIdle||e.showControls(),s.find("[data-fancybox-count]").html(e.group.length),s.find("[data-fancybox-index]").html(i+1),s.find("[data-fancybox-prev]").prop("disabled",!n.opts.loop&&i<=0),s.find("[data-fancybox-next]").prop("disabled",!n.opts.loop&&i>=e.group.length-1),"image"===n.type?s.find("[data-fancybox-download]").attr("href",n.opts.image.src||n.src).show():s.find("[data-fancybox-download],[data-fancybox-zoom]").hide()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.2.10",defaults:s,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),i=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,i):"function"===n.type(t)&&t.apply(e,i),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close())},destroy:function(){this.close(!0),a.off("click.fb-start")},isMobile:e.createTouch!==i&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&-1!==e.indexOf("matrix")?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,i=n.exec(t.eq(0).attr("style"));i&&(e[0]=parseFloat(i[2]),e[1]=parseFloat(i[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",o={};if(t&&e)return e.left===i&&e.top===i||(n=(e.left===i?t.position().left:e.left)+"px, "+(e.top===i?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==i&&e.scaleY!==i&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(o.transform=n),e.opacity!==i&&(o.opacity=e.opacity),e.width!==i&&(o.width=e.width),e.height!==i&&(o.height=e.height),t.css(o)},animate:function(t,e,o,s,r){n.isFunction(o)&&(s=o,o=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(d,function(o){(!o||!o.originalEvent||t.is(o.originalEvent.target)&&"z-index"!=o.originalEvent.propertyName)&&(n.fancybox.stop(t),n.isPlainObject(e)?(e.scaleX!==i&&e.scaleY!==i&&(t.css("transition-duration",""),e.width=Math.round(t.width()*e.scaleX),e.height=Math.round(t.height()*e.scaleY),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)),!1===r&&t.removeAttr("style")):!0!==r&&t.removeClass(e),n.isFunction(s)&&s(o))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),e.scaleX&&t.hasClass("fancybox-image-wrap")&&t.parent().addClass("fancybox-is-scaling"),t.data("timer",setTimeout(function(){t.trigger("transitionend")},o+16))},stop:function(t){clearTimeout(t.data("timer")),t.off("transitionend").css("transition-duration",""),t.hasClass("fancybox-image-wrap")&&t.parent().removeClass("fancybox-is-scaling")}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},o):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},o),this},a.on("click.fb-start","[data-fancybox]",o)}}(window,document,window.jQuery||jQuery),function(t){"use strict";var e=function(e,n,i){if(e)return i=i||"","object"===t.type(i)&&(i=t.param(i,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),i.length&&(e+=(e.indexOf("?")>0?"&":"?")+i),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}};t(document).on("objectNeedsType.fb",function(i,o,s){var r,a,l,c,u,d,h,p=s.src||"",f=!1;r=t.extend(!0,{},n,s.opts.media),t.each(r,function(n,i){if(l=p.match(i.matcher)){if(f=i.type,d={},i.paramPlace&&l[i.paramPlace]){u=l[i.paramPlace],"?"==u[0]&&(u=u.substring(1)),u=u.split("&");for(var o=0;o<u.length;++o){var r=u[o].split("=",2);2==r.length&&(d[r[0]]=decodeURIComponent(r[1].replace(/\+/g," ")))}}return c=t.extend(!0,{},i.params,s.opts[n],d),p="function"===t.type(i.url)?i.url.call(this,l,c,s):e(i.url,l,c),a="function"===t.type(i.thumb)?i.thumb.call(this,l,c,s):e(i.thumb,l),"vimeo"===n&&(p=p.replace("&%23","#")),!1}}),f?(s.src=p,s.type=f,s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=a),"iframe"===f&&(t.extend(!0,s.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),s.contentProvider=h,s.opts.slideClass+=" fancybox-slide--"+("gmap_place"==h||"gmap_search"==h?"map":"video"))):p&&(s.type=s.opts.defaultType)})}(window.jQuery||jQuery),function(t,e,n){"use strict";var i=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),o=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),s=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var i in e)e[i].pageX?n.push({x:e[i].pageX,y:e[i].pageY}):e[i].clientX&&n.push({x:e[i].clientX,y:e[i].clientY});return n},r=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,i=t[0].attributes,o=i.length;e<o;e++)if("data-fancybox-"===i[e].nodeName.substr(0,14))return!0;return!1},l=function(e){var n=t.getComputedStyle(e)["overflow-y"],i=t.getComputedStyle(e)["overflow-x"],o=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,s=("scroll"===i||"auto"===i)&&e.scrollWidth>e.clientWidth;return o||s},c=function(t){for(var e=!1;!(e=l(t.get(0)))&&(t=t.parent(),t.length&&!t.hasClass("fancybox-stage")&&!t.is("body")););return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(i){var o=this,l=n(i.target),u=o.instance,d=u.current,h=d.$content,p="touchstart"==i.type;if(p&&o.$container.off("mousedown.fb.touch"),(!i.originalEvent||2!=i.originalEvent.button)&&l.length&&!a(l)&&!a(l.parent())&&(l.is("img")||!(i.originalEvent.clientX>l[0].clientWidth+l.offset().left))){if(!d||o.instance.isAnimating||o.instance.isClosing)return i.stopPropagation(),void i.preventDefault();if(o.realPoints=o.startPoints=s(i),o.startPoints){if(i.stopPropagation(),o.startEvent=i,o.canTap=!0,o.$target=l,o.$content=h,o.opts=d.opts.touch,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.isScrolling=!1,o.sliderStartPos=o.sliderLastPos||{top:0,left:0},o.contentStartPos=n.fancybox.getTranslate(o.$content),o.contentLastPos=null,o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.canvasWidth=Math.round(d.$slide[0].clientWidth),o.canvasHeight=Math.round(d.$slide[0].clientHeight),n(e).off(".fb.touch").on(p?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(o,"ontouchend")).on(p?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(o,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",o.onscroll,!0),!o.opts&&!u.canPan()||!l.is(o.$stage)&&!o.$stage.find(l).length)return void(l.is("img")&&i.preventDefault());n.fancybox.isMobile&&(c(l)||c(l.parent()))||i.preventDefault(),1===o.startPoints.length&&("image"===d.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?(n.fancybox.stop(o.$content),o.$content.css("transition-duration",""),o.isPanning=!0):o.isSwiping=!0,o.$container.addClass("fancybox-controls--isGrabbing")),2!==o.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(o.canTap=!1,o.isSwiping=!1,o.isPanning=!1,o.isZooming=!0,n.fancybox.stop(o.$content),o.$content.css("transition-duration",""),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=r(o.startPoints[0],o.startPoints[1]))}}},u.prototype.onscroll=function(t){self.isScrolling=!0},u.prototype.ontouchmove=function(t){var e=this,i=n(t.target);return e.isScrolling||!i.is(e.$stage)&&!e.$stage.find(i).length?void(e.canTap=!1):(e.newPoints=s(t),void((e.opts||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=r(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=r(e.newPoints[0],e.startPoints[0],"y"),e.distance=r(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},u.prototype.onSwipe=function(e){var s,r=this,a=r.isSwiping,l=r.sliderStartPos.left||0;if(!0!==a)"x"==a&&(r.distanceX>0&&(r.instance.group.length<2||0===r.instance.current.index&&!r.instance.current.opts.loop)?l+=Math.pow(r.distanceX,.8):r.distanceX<0&&(r.instance.group.length<2||r.instance.current.index===r.instance.group.length-1&&!r.instance.current.opts.loop)?l-=Math.pow(-r.distanceX,.8):l+=r.distanceX),r.sliderLastPos={top:"x"==a?0:r.sliderStartPos.top+r.distanceY,left:l},r.requestId&&(o(r.requestId),r.requestId=null),r.requestId=i(function(){r.sliderLastPos&&(n.each(r.instance.slides,function(t,e){var i=e.pos-r.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:r.sliderLastPos.top,left:r.sliderLastPos.left+i*r.canvasWidth+i*e.opts.gutter})}),r.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(r.distance)>10){if(r.canTap=!1,r.instance.group.length<2&&r.opts.vertical?r.isSwiping="y":r.instance.isDragging||!1===r.opts.vertical||"auto"===r.opts.vertical&&n(t).width()>800?r.isSwiping="x":(s=Math.abs(180*Math.atan2(r.distanceY,r.distanceX)/Math.PI),r.isSwiping=s>45&&s<135?"y":"x"),r.canTap=!1,"y"===r.isSwiping&&n.fancybox.isMobile&&(c(r.$target)||c(r.$target.parent())))return void(r.isScrolling=!0);r.instance.isDragging=r.isSwiping,r.startPoints=r.newPoints,n.each(r.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration",""),e.inTransition=!1,e.pos===r.instance.current.pos&&(r.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),r.instance.SlideShow&&r.instance.SlideShow.isActive&&r.instance.SlideShow.stop()}},u.prototype.onPan=function(){var t=this;return r(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5)?void(t.startPoints=t.newPoints):(t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&(o(t.requestId),t.requestId=null),void(t.requestId=i(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})))},u.prototype.limitMovement=function(){var t,e,n,i,o,s,r=this,a=r.canvasWidth,l=r.canvasHeight,c=r.distanceX,u=r.distanceY,d=r.contentStartPos,h=d.left,p=d.top,f=d.width,g=d.height;return o=f>a?h+c:h,s=p+u,t=Math.max(0,.5*a-.5*f),e=Math.max(0,.5*l-.5*g),n=Math.min(a-f,.5*a-.5*f),i=Math.min(l-g,.5*l-.5*g),f>a&&(c>0&&o>t&&(o=t-1+Math.pow(-t+h+c,.8)||0),c<0&&o<n&&(o=n+1-Math.pow(n-h-c,.8)||0)),g>l&&(u>0&&s>e&&(s=e-1+Math.pow(-e+p+u,.8)||0),u<0&&s<i&&(s=i+1-Math.pow(i-p-u,.8)||0)),{top:s,left:o,scaleX:d.scaleX,scaleY:d.scaleY}},u.prototype.limitPosition=function(t,e,n,i){var o=this,s=o.canvasWidth,r=o.canvasHeight;return n>s?(t=t>0?0:t,t=t<s-n?s-n:t):t=Math.max(0,s/2-n/2),i>r?(e=e>0?0:e,e=e<r-i?r-i:e):e=Math.max(0,r/2-i/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,s=e.contentStartPos.width,a=e.contentStartPos.height,l=e.contentStartPos.left,c=e.contentStartPos.top,u=r(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,h=Math.floor(s*d),p=Math.floor(a*d),f=(s-h)*e.percentageOfImageAtPinchPointX,g=(a-p)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,b=v-e.centerPointStartY,x=l+(f+y),w=c+(g+b),_={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=h,e.newHeight=p,e.contentLastPos=_,e.requestId&&(o(e.requestId),e.requestId=null),e.requestId=i(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var i=this,r=Math.max((new Date).getTime()-i.startTime,1),a=i.isSwiping,l=i.isPanning,c=i.isZooming,u=i.isScrolling;return i.endPoints=s(t),i.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",i.onscroll,!0),i.requestId&&(o(i.requestId),i.requestId=null),i.isSwiping=!1,i.isPanning=!1,i.isZooming=!1,i.isScrolling=!1,i.instance.isDragging=!1,i.canTap?i.onTap(t):(i.speed=366,i.velocityX=i.distanceX/r*.5,i.velocityY=i.distanceY/r*.5,i.speedX=Math.max(.5*i.speed,Math.min(1.5*i.speed,1/Math.abs(i.velocityX)*i.speed)),void(l?i.endPanning():c?i.endZooming():i.endSwiping(a,u)))},u.prototype.endSwiping=function(t,e){var i=this,o=!1,s=i.instance.group.length;i.sliderLastPos=null,"y"==t&&!e&&Math.abs(i.distanceY)>50?(n.fancybox.animate(i.instance.current.$slide,{top:i.sliderStartPos.top+i.distanceY+150*i.velocityY,opacity:0},150),o=i.instance.close(!0,300)):"x"==t&&i.distanceX>50&&s>1?o=i.instance.previous(i.speedX):"x"==t&&i.distanceX<-50&&s>1&&(o=i.instance.next(i.speedX)),!1!==o||"x"!=t&&"y"!=t||(e||s<2?i.instance.centerSlide(i.instance.current,150):i.instance.jumpTo(i.instance.current.index)),i.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,i,o=this;o.contentLastPos&&(!1===o.opts.momentum?(t=o.contentLastPos.left,e=o.contentLastPos.top):(t=o.contentLastPos.left+o.velocityX*o.speed,e=o.contentLastPos.top+o.velocityY*o.speed),i=o.limitPosition(t,e,o.contentStartPos.width,o.contentStartPos.height),i.width=o.contentStartPos.width,i.height=o.contentStartPos.height,n.fancybox.animate(o.$content,i,330))},u.prototype.endZooming=function(){var t,e,i,o,s=this,r=s.instance.current,a=s.newWidth,l=s.newHeight;s.contentLastPos&&(t=s.contentLastPos.left,e=s.contentLastPos.top,o={top:e,left:t,width:a,height:l,scaleX:1,scaleY:1},n.fancybox.setTranslate(s.$content,o),a<s.canvasWidth&&l<s.canvasHeight?s.instance.scaleToFit(150):a>r.width||l>r.height?s.instance.scaleToActual(s.centerPointStartX,s.centerPointStartY,150):(i=s.limitPosition(t,e,a,l),n.fancybox.setTranslate(s.content,n.fancybox.getTranslate(s.$content)),n.fancybox.animate(s.$content,i,150)))},u.prototype.onTap=function(t){var e,i=this,o=n(t.target),r=i.instance,a=r.current,l=t&&s(t)||i.startPoints,c=l[0]?l[0].x-i.$stage.offset().left:0,u=l[0]?l[0].y-i.$stage.offset().top:0,d=function(e){var o=a.opts[e];if(n.isFunction(o)&&(o=o.apply(r,[a,t])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls(!0);break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==a.type&&(a.isLoaded||a.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(c,u):r.group.length<2&&r.close(i.startEvent))}};if((!t.originalEvent||2!=t.originalEvent.button)&&(o.is("img")||!(c>o[0].clientWidth+o.offset().left))){if(o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(o.is(".fancybox-slide"))e="Slide";else{if(!r.current.$content||!r.current.$content.find(o).addBack().filter(o).length)return;e="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(c-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;d("dblclick"+e)}else i.tapX=c,i.tapY=u,a.opts["dblclick"+e]&&a.opts["dblclick"+e]!==a.opts["click"+e]?i.tapped=setTimeout(function(){i.tapped=null,d("click"+e)},500):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))})}(window,document,window.jQuery||jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg viewBox="0 0 40 40"><path d="M13,12 L27,20 L13,27 Z" /><path d="M15,10 v19 M23,10 v19" /></svg></button>'},slideShow:{autoStart:!1,speed:3e3}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(t){var e=this;e.instance&&e.instance.current&&(!0===t||e.instance.current.opts.loop||e.instance.currIndex<e.instance.group.length-1)?e.timer=setTimeout(function(){e.isActive&&e.instance.jumpTo((e.instance.currIndex+1)%e.instance.group.length)},e.instance.current.opts.slideShow.speed):(e.stop(),e.instance.idleSecondsCounter=0,e.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;e&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.set(!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,i){var o=e&&e.SlideShow;i?o&&n.opts.slideShow.autoStart&&o.start():o&&o.isActive&&o.clear()},"afterShow.fb":function(t,e,n){var i=e&&e.SlideShow;i&&i.isActive&&i.set()},"afterKeydown.fb":function(n,i,o,s,r){var a=i&&i.SlideShow;!a||!o.opts.slideShow||80!==r&&32!==r||e(t.activeElement).is("button,a,input")||(s.preventDefault(),a.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),i=n&&n.SlideShow;i&&i.isActive&&(t.hidden?i.clear():i.set())})}(document,window.jQuery||jQuery),function(t,e){"use strict";var n=function(){var e,n,i,o=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s={};for(n=0;n<o.length;n++)if((e=o[n])&&e[1]in t){for(i=0;i<e.length;i++)s[o[0][i]]=e[i];return s}return!1}();if(!n)return void(e&&e.fancybox&&(e.fancybox.defaults.btnTpl.fullScreen=!1));var i={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"><svg viewBox="0 0 40 40"><path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" /></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on({"onInit.fb":function(t,e){var n;e&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),i.toggle(n[0])}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&i.request(n[0]),e.FullScreen=i):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,i,o){e&&e.FullScreen&&70===o&&(i.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&i.exit()}}),e(t).on(n.fullscreenchange,function(){var t=i.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.current.$content.css("transition","none"),n.isAnimating=!1,n.update(!0,!0,0)),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t))})}(document,window.jQuery||jQuery),function(t,e){"use strict";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg viewBox="0 0 120 120"><path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" /></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var n=function(t){this.init(t)};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this;e.instance=t,t.Thumbs=e;var n=t.group[0],i=t.group[1];e.opts=t.group[t.currIndex].opts.thumbs,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]"),e.opts&&n&&i&&("image"==n.type||n.opts.thumb||n.opts.$thumb)&&("image"==i.type||i.opts.thumb||i.opts.$thumb)?(e.$button.show().on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,n,i=this,o=i.instance,s=i.opts.parentEl;i.$grid=e('<div class="fancybox-thumbs fancybox-thumbs-'+i.opts.axis+'"></div>').appendTo(o.$refs.container.find(s).addBack().filter(s)),t="<ul>",e.each(o.group,function(e,i){n=i.opts.thumb||(i.opts.$thumb?i.opts.$thumb.attr("src"):null),n||"image"!==i.type||(n=i.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",i.$list=e(t).appendTo(i.$grid).on("click","li",function(){o.jumpTo(e(this).data("index"))}),i.$list.find("img").hide().one("load",function(){var t,n,i,o,s=e(this).parent().removeClass("fancybox-thumbs-loading"),r=s.outerWidth(),a=s.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,i=t/r,o=n/a,i>=1&&o>=1&&(i>o?(t/=o,n=a):(t=r,n/=i)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":n>a?Math.floor(.3*a-.3*n):Math.floor(.5*a-.5*n),"margin-left":Math.floor(.5*r-.5*t)}).show()}).each(function(){this.src=e(this).data("src")}),"x"===i.opts.axis&&i.$list.width(parseInt(i.$grid.css("padding-right"))+o.group.length*i.$list.children().eq(0).outerWidth(!0)+"px")},focus:function(t){var e,n,i=this,o=i.$list;i.instance.current&&(e=o.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+i.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===i.opts.axis&&(n.top<0||n.top>o.height()-e.outerHeight())?o.stop().animate({scrollTop:o.scrollTop()+n.top},t):"x"===i.opts.axis&&(n.left<o.parent().scrollLeft()||n.left>o.parent().scrollLeft()+(o.parent().width()-e.outerWidth()))&&o.parent().stop().animate({scrollLeft:n.left},t))},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus(0)):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var i;e&&!e.Thumbs&&(i=new n(e),i.isActive&&!0===i.opts.autoStart&&i.show())},"beforeShow.fb":function(t,e,n,i){var o=e&&e.Thumbs;o&&o.isVisible&&o.focus(i?0:250)},"afterKeydown.fb":function(t,e,n,i,o){var s=e&&e.Thumbs;s&&s.isActive&&71===o&&(i.preventDefault(),s.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,window.jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg viewBox="0 0 40 40"><path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z"></svg></button>'},share:{tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p class="fancybox-share__links"><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,i,o=e.fancybox.getInstance();o&&(t=!1===o.current.opts.hash?o.current.src:window.location,i=o.current.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===o.current.type?encodeURIComponent(o.current.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,o.$caption?encodeURIComponent(o.$caption.text()):""),e.fancybox.open({src:o.translate(o,i),type:"html",opts:{animationEffect:"fade",animationDuration:250,afterLoad:function(t,e){e.$content.find(".fancybox-share__links a").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})}}}))})}(document,window.jQuery||jQuery),function(t,e,n){"use strict";function i(){var t=e.location.hash.substr(1),n=t.split("-"),i=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,o=n.join("-");return i<1&&(i=1),{hash:t,index:i,gallery:o}}function o(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length||(e=n("#"+n.escapeSelector(t.gallery))),e.length&&(r=!1,e.trigger("click")))}function s(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.hash||(e.$orig?e.$orig.data("fancybox"):""))}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})});var r=!0,a=null,l=null;n(function(){!1!==n.fancybox.defaults.hash&&(n(t).on({"onInit.fb":function(t,e){var n,o;!1!==e.group[e.currIndex].opts.hash&&(n=i(),(o=s(e))&&n.gallery&&o==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,i,o){var c;o&&!1!==o.opts.hash&&(c=s(i))&&""!==c&&(e.location.hash.indexOf(c)<0&&(i.opts.origHash=e.location.hash),a=c+(i.group.length>1?"-"+(o.index+1):""),"replaceState"in e.history?(l&&clearTimeout(l),l=setTimeout(function(){e.history[r?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+a),l=null,r=!1},300)):e.location.hash=a)},"beforeClose.fb":function(i,o,r){var c,u;l&&clearTimeout(l),!1!==r.opts.hash&&(c=s(o),u=o&&o.opts.origHash?o.opts.origHash:"",c&&""!==c&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))),a=null)}}),n(e).on("hashchange.fb",function(){var t=i();n.fancybox.getInstance()?!a||a===t.gallery+"-"+t.index||1===t.index&&a==t.gallery||(a=null,n.fancybox.close()):""!==t.gallery&&o(t)}),setTimeout(function(){o(i())},50))})}(document,window,window.jQuery||jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,i){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var i=e.current,o=(new Date).getTime();e.group.length<1||!1===i.opts.wheel||"auto"===i.opts.wheel&&"image"!==i.type||(t.preventDefault(),t.stopPropagation(),i.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,o-n<250||(n=o,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,window.jQuery||jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/olympia/libs/watercanvas.js?167325310423600";s:6:"source";s:44:"/local/templates/olympia/libs/watercanvas.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * Water Canvas by Almer Thie (http://code.almeros.com).
 * Description: A realtime water ripple effect on an HTML5 canvas. 
 * Copyright 2010 Almer Thie. All rights reserved.
 *
 * Example: http://code.almeros.com/code-examples/water-effect-canvas/
 * Tutorial: http://code.almeros.com/water-ripple-canvas-and-javascript
 */

 
////////////////////////////////////////////////////////////////////////////////
//                              WaterCanvas object                            //
////////////////////////////////////////////////////////////////////////////////

/**
 * This view object is responsible for applying the water ripple data state to an image and therefor 
 * is also responsible for the refraction effect of the light through the water.
 * 
 * @param {Number} width The width in pixels this canvas should be.
 * @param {Number} hight The hight in pixels this canvas should be.
 * @param {String} documentElement The div element ID to insert the canvas into.
 * @param {Object} waterModel A reference to a WaterModel object previously created.
 * @param {Object} props A key/value object which may contain the following properties:
 * 				backgroundImageUrl: 
 *						A relative URL to an image on your webserver. This cannot be a URL to an 
 *						image on another domain. The HTML5 Canvas element follows the Same Origin Policy.
 *				lightRefraction: 
 *						Sets how many pixels the refraction of light uses.
 * 				lightReflection: 
 *						Sets the amount of color highlighting.
 * 				maxFps: 
 *						Maximum Frames Per Second; The maximum reachable FPS highly depends on the system and 
 *						browser the water canvas is running on. You can't control that, but you can control the maximum 
 * 						FPS to keep systems from overloading, trying to reach the highest FPS.
 * 				showStats: 
 *						When set to true, it shows "FPS Canvas: " plus the current FPS of this view on the canvas.
 *
 * @constructor
 */
WaterCanvas = function(width, height, documentElement, waterModel, props) {
	// If a certain property is not set, use a default value
	props = props || {};
	this.backgroundImageUrl	= props.backgroundImageUrl	|| null;
	this.lightRefraction 	= props.lightRefraction 	|| 9.0;
	this.lightReflection	= props.lightReflection 	|| 0.1;
	this.showStats			= props.showStats 			|| false;

	this.width = width;
	this.height = height;
	this.documentElement = document.getElementById(documentElement);
	this.waterModel = waterModel;

	
	
    this.canvas = document.createElement('canvas');  
    this.canvasHelp = document.createElement('canvas'); 

	if(!this.canvas.getContext || !this.canvasHelp.getContext){ 
		alert("You need a browser that supports the HTML5 canvas tag.");
		return; // No point to continue
	}

	this.ctx = this.canvas.getContext('2d');  
	this.ctxHelp = this.canvasHelp.getContext('2d');  	

	this.setSize(width, height);
    this.documentElement.appendChild(this.canvas);  
	
	

	
	// Find out the FPS at certain intervals
	this.fps = -1;
	if(this.showStats){	
		this.fpsCounter = 0;
		this.prevMs = 0;
			
		var self = this; 
		setInterval(function(){
			self.findFps();
		}, 1000);
	}
	
	
	// Start the animation
	this.drawNextFrame();
}

/**
 * Sets the size of the canvas.
 *
 * @param {Number} width The width in pixels this canvas should be.
 * @param {Number} hight The hight in pixels this canvas should be.
 */
WaterCanvas.prototype.setSize = function(width, height){
	this.width = width;
	this.height = height;
	
    this.canvas.setAttribute('width', this.width);  
    this.canvas.setAttribute('height', this.height); 
	
    this.canvasHelp.setAttribute('width', this.width);  
    this.canvasHelp.setAttribute('height', this.height);  	

	this.setBackground(this.backgroundImageUrl);	
}

/**
 * Sets the image to perform the water rippling effect on. 
 *
 * Use an image from the same server as where this script lives. This is needed since browsers use the 
 * Same Origin Policy for savety reasons. If an empty URL is given, a standard canvas will be shown.
 *
 * @param {String} backgroundImageUrl (Relative) URL to an image on the same webserver as this script.						
 */
WaterCanvas.prototype.setBackground = function(backgroundImageUrl){
	this.backgroundImageUrl = backgroundImageUrl=="" ? null : backgroundImageUrl;
	this.pixelsIn = null;
	
	if(this.backgroundImageUrl!=null){
	
		// Background image loading
		this.backgroundImg = new Image();  
		
		var self = this; 	
		this.backgroundImg.onload = function(){  
			self.ctxHelp.drawImage(self.backgroundImg, 0, 0, self.width, self.height); 
			
			// Get the canvas pixel data
			var imgDataIn = self.ctxHelp.getImageData(0, 0, self.width, self.height);
			self.pixelsIn = imgDataIn.data;
			
			// Also paint it on the output canvas
			self.ctx.putImageData(imgDataIn, 0, 0);
		}
		this.backgroundImg.src = this.backgroundImageUrl;
		
	} else {
	
		var radgrad = pointerCtx.createRadialGradient(this.width/2,this.height/2,0,	 this.width/2,this.height/2,this.height/2);
		radgrad.addColorStop(0, '#4af');
		radgrad.addColorStop(1, '#000');

		this.ctxHelp.fillStyle = radgrad;
		this.ctxHelp.fillRect(0,0,this.width,this.height);	
		
		this.ctxHelp.shadowColor = "white";
		this.ctxHelp.shadowOffsetX = 0;
		this.ctxHelp.shadowOffsetY = 0;
		this.ctxHelp.shadowBlur = 10;
		
		this.ctxHelp.textBaseline = "top";
		this.ctxHelp.font = 'normal 200 45px verdana';
		this.ctxHelp.fillStyle = "white";  
		this.ctxHelp.fillText("Water Canvas", 10, (this.height/2)-40);  	
		this.ctxHelp.font = 'normal 200 12px verdana';
		this.ctxHelp.fillText("Move your mouse over this canvas to move the water.", 10, (this.height/2)+10); 
		this.ctxHelp.fillText("By Almeros 2010, See http://code.almeros.com", 10, (this.height/2)+30);  	

		// Get the canvas pixel data
		var imgDataIn = this.ctxHelp.getImageData(0, 0, this.width, this.height);
		this.pixelsIn = imgDataIn.data;			
		
		// Also paint it on the output canvas
		this.ctx.putImageData(imgDataIn, 0, 0);
		
	}
}

/**
 * Renders the next frame and draws it on the canvas. 
 * Also handles calling itself again via requestAnim(ation)Frame.
 *
 * @private
 */
WaterCanvas.prototype.drawNextFrame = function(){	
	if(this.pixelsIn==null || !this.waterModel.isEvolving()){
		// Wait some time and try again
		var self = this; 
		setTimeout(	function(){
			self.drawNextFrame();
		}, 50 );
		
		// Nothing else to do for now
		return;
	}

			
	// Make the canvas give us a CanvasDataArray. 
	// Creating an array ourselves is slow!!!
	// https://developer.mozilla.org/en/HTML/Canvas/Pixel_manipulation_with_canvas
	var imgDataOut = this.ctx.getImageData(0, 0, this.width, this.height);
	var pixelsOut = imgDataOut.data;
	for (var i = 0; n = pixelsOut.length, i < n; i += 4) {
		var pixel = i/4;
		var x = pixel % this.width;
		var y = (pixel-x) / this.width;
		
		var strength = this.waterModel.getWater(x,y);
		

		// Refraction of light in water
		var refraction = Math.round(strength * this.lightRefraction);
		
		var xPix = x + refraction;
		var yPix = y + refraction;     
		
		if(xPix < 0) xPix = 0;
		if(yPix < 0) yPix = 0;					
		if(xPix > this.width-1) xPix = this.width-1;
		if(yPix > this.height-1) yPix = this.height-1;			
		
		
		
		// Get the pixel from input
		var iPix = ((yPix * this.width) + xPix) * 4;
		var red 	= this.pixelsIn[iPix  ];
		var green 	= this.pixelsIn[iPix+1];
		var blue 	= this.pixelsIn[iPix+2];
		
		
		// Set the pixel to output
		strength *= this.lightReflection;
		strength += 1.0;

		pixelsOut[i  ] = red *= strength;
		pixelsOut[i+1] = green *= strength;
		pixelsOut[i+2] = blue *= strength;
		pixelsOut[i+3] = 255; // alpha 
	}

	this.ctx.putImageData(imgDataOut, 0,0);


	
	if(this.showStats){
		this.fpsCounter++;
		
	
		this.ctx.textBaseline = "top";
		this.ctx.font = 'normal 200 10px arial';
		
		this.ctx.fillStyle = "white";  
		this.ctx.fillText  ("FPS Canvas: " + this.getFps(), 10, 10);  
		this.ctx.fillText  ("FPS Water: " + this.waterModel.getFps(), 10, 20);  		

		this.ctx.shadowColor = "black";
		this.ctx.shadowOffsetX = 0;
		this.ctx.shadowOffsetY = 0;
		this.ctx.shadowBlur = 2;
	}
	
	
	
	// Make the browser call this function at a new render frame
	var self = this; // For referencing 'this' in internal eventListeners
	requestAnimFrame( function(){
		self.drawNextFrame()
	}, this.canvas );
			
}

/**
 * Determine the Frames Per Second. 
 * Called at regular intervals by an internal setInterval.
 *
 * @private
 */
WaterCanvas.prototype.findFps = function(){
	if(!this.showStats)
		return;
	
	var nowMs = new Date().getTime();
	var diffMs = nowMs - this.prevMs;

	this.fps = Math.round( ((this.fpsCounter*1000) / diffMs) * 10.0 ) / 10.0;
	
	this.prevMs = nowMs;
	this.fpsCounter = 0;
}

/**
 * @returns The Frames Per Second that was last rendered.
 */
WaterCanvas.prototype.getFps = function(){
	return this.fps;
}

/**
 * Sets the a amount of refraction of light through the water.
 *
 * @param {Number} lightRefraction The a amount of refraction of light.
 */
WaterCanvas.prototype.setLightRefraction = function(lightRefraction){
	this.lightRefraction = lightRefraction;	
}

/**
 * Sets the a amount of reflection of light on the water.
 *
 * @param {Number} lightRefraction The a amount of reflection of light.
 */
WaterCanvas.prototype.setLightReflection = function(lightReflection){
	this.lightReflection = lightReflection;	
}





////////////////////////////////////////////////////////////////////////////////
//                              WaterModel object                             //
////////////////////////////////////////////////////////////////////////////////

/**
 * Model object that is responsible for holding, manipulating and updating the water ripple data.
 * 
 * @param {Number} width The width in pixels this model should work with.
 * @param {Number} hight The hight in pixels this model should work with.
 * @param {Object} props A key/value object which may contain the following properties:
 * 				resolution:  
 *						Sets the pixelsize to use in the model. The higher hte better the performance, but 
 *						you may want to use interpolation to prefent visible block artifacts.
 *				interpolate: 
 *						When the resolution is set higher then 1.0, you can set this to true to use interpolation.
 *				damping: 
 *						Effectively sets how long water ripples travel.
 *				clipping: 
 *						Multiple waves add up. This may create a wave that's to high or low. The clipping value sets 
 *						the absolute maximum a water pixel value may have in the model.
 *				evolveThreshold: 
 *						To prevent this  script from always taking up CPU cycles, even when no water rippling 
 *						is going on in the model (your website is on a non visible tab) you can set a threshold. When 
 *						no water pixel is above this absolute value, the WaterModel and the WaterCanvas will both stop 
 *						rendering until new waves are created by the user.
 *				maxFps: 
 *						Maximum Frames Per Second; The maximum reachable FPS highly depends on the system and browser 
 *						the water canvas is running on. You can't control that, but you can control the maximum FPS to 
 *						keep systems from overloading, trying to reach the highest FPS.
 *				showStats: 
 *						When set to true, it shows "FPS Water: " plus the current FPS of this model on the canvas.
 *
 * @constructor
 */
WaterModel = function(width, height, props) {
	// If a certain property is not set, use a default value
	props = props || {};
	this.resolution 		= props.resolution 		|| 2.0;
	this.interpolate 		= props.interpolate 	|| false;
	this.damping 			= props.damping 		|| 0.985;
	this.clipping 			= props.clipping 		|| 5;	
	this.maxFps 			= props.maxFps 			|| 30;
	this.showStats 			= props.showStats 		|| false;
	this.evolveThreshold 	= props.evolveThreshold	|| 0.05;
	
	this.width = Math.ceil(width/this.resolution);
	this.height = Math.ceil(height/this.resolution);

	
	
	// Create water model 2D arrays
	this.resetSizeAndResolution(width, height, this.resolution)
	this.swapMap;

	this.setMaxFps(this.maxFps);
	
	this.evolving = false; // Holds whether it's needed to render frames
	
	

	// Find out the FPS at certain intervals
	this.fps = -1;
	if(this.showStats){	
		this.fpsCounter = 0;
		this.prevMs = 0;
			
		var self = this; 
		setInterval(function(){
			self.findFps();
		}, 1000);
	}
}

/**
 * Gets the (interpolated) water value of an coordinate.
 *
 * @param {Number} x The X position.
 * @param {Number} y The Y position.
 *
 * @returns A float value representing the hight of the water.
 */
WaterModel.prototype.getWater = function(x, y){
	xTrans = x/this.resolution;
	yTrans = y/this.resolution;

	if(!this.interpolate || this.resolution==1.0){
		xF = Math.floor(xTrans); 
		yF = Math.floor(yTrans);	

		if(xF>this.width-1 || yF>this.height-1)
			return 0.0;
		
		return this.depthMap1[xF][yF];
	}
	
	
	// Else use Bilinear Interpolation
	xF = Math.floor(xTrans); 
	yF = Math.floor(yTrans);
	xC = Math.ceil(xTrans); 
	yC = Math.ceil(yTrans);	

	if(xC>this.width-1 || yC>this.height-1)
		return 0.0;
		
	// Now get 4 points from the array
	var br = this.depthMap1[xF][yF];
	var bl = this.depthMap1[xC][yF];
	var tr = this.depthMap1[xF][yC];
	var tl = this.depthMap1[xC][yC];
	
	// http://tech-algorithm.com/articles/bilinear-image-scaling/
	//	D   C
	//	  Y
	//	B	A
	// Y = A(1-w)(1-h) + B(w)(1-h) + C(h)(1-w) + Dwh

	var xChange = xC - xTrans;
	var yChange = yC - yTrans;
	var intpVal =
			tl*(1-xChange)	*	(1-yChange) +  
			tr*(xChange)	*	(1-yChange) +
			bl*(yChange)	*	(1-xChange) +  
			br*xChange		*	yChange;

	return intpVal;
}

/**
 * Sets bilinear interpolation on or off. Interpolation will give a more smooth effect
 * when a higher resolution is used, but needs CPU resources for that.
 *
 * @param {Boolean} interpolate Whether to use interpolation or not
 */
WaterModel.prototype.setInterpolation = function(interpolate){
	this.interpolate = interpolate;
}

/**
 * Gets the (interpolated) water value of an coordinate.
 *
 * @param {Number} x The X position. The center of where the array2d will be placed.
 * @param {Number} y The Y position. The center of where the array2d will be placed.
 * @param {Number} pressure The factor to multiply the array2d values with while adding the array2d to the model.
 * @param {Array} array2d A 2D array containing float values between -1.0 and 1.0 in a pattern.
 */
WaterModel.prototype.touchWater = function(x, y, pressure, array2d){
	this.evolving = true;

	x = Math.floor(x/this.resolution); 
	y = Math.floor(y/this.resolution);
	
	// Place the array2d in the center of the mouse position
	if(array2d.length>4 || array2d[0].length>4){
		x-=array2d.length/2;
		y-=array2d[0].length/2;
	}
	
	if(x<0) x = 0;
	if(y<0) y = 0;
	if(x>this.width) x = this.width;
	if(y>this.height) y = this.height;

	// Big pixel block
	for(var i = 0; i < array2d.length; i++){
		for(var j = 0; j < array2d[0].length; j++){

			if(x+i>=0 && y+j>=0 && x+i<=this.width-1 && y+j<=this.height-1) {
				this.depthMap1[x+i][y+j] -= array2d[i][j] * pressure;
			}
			
		}
	}
}

/**
 * Renders the next frame in the model. The water ripples will be evolved one step.
 * Called at regular intervals by an internal setInterval.
 *
 * @private
 */
WaterModel.prototype.renderNextFrame = function() {
	if(!this.evolving)
		return;

	this.evolving = false;
	
	for (var x = 0; x < this.width; x++) {
		for (var y = 0; y < this.height; y++) {

			// Handle borders correctly
			var val = 	(x==0 				? 0 : this.depthMap1[x - 1][y]) +
						(x==this.width-1 	? 0 : this.depthMap1[x + 1][y]) +
						(y==0 				? 0 : this.depthMap1[x][y - 1]) +
						(y==this.height-1 	? 0 : this.depthMap1[x][y + 1]);

			// Damping
			val = ((val / 2.0) - this.depthMap2[x][y]) * this.damping;
			
			// Clipping prevention
			if(val>this.clipping) val = this.clipping;
			if(val<-this.clipping) val = -this.clipping;
			
			// Evolve check
			if(Math.abs(val)>this.evolveThreshold) 
				this.evolving = true; 

			
			this.depthMap2[x][y] = val;
		}
	}

	// Swap buffer references
	this.swapMap 	= this.depthMap1;
	this.depthMap1 	= this.depthMap2;
	this.depthMap2 	= this.swapMap;
	
	this.fpsCounter++;
}

/**
 * Tells if the WaterModel is currently evolving. When all postions in the model are below a threshold 
 * (evolveThreshold), evolving will be set to false. This saves resources, especially when the canvas 
 * is not visible on screen.
 *
 * @returns A boolean that tells if the WaterModel is currently in evolving state.
 */
WaterModel.prototype.isEvolving = function() {
	return this.evolving;
}

/**
 * Determine the Frames Per Second. 
 * Called at regular intervals by an internal setInterval.
 *
 * @private
 */
WaterModel.prototype.findFps = function(){
	if(!this.showStats)
		return;
	
	var nowMs = new Date().getTime();
	var diffMs = nowMs - this.prevMs;

	this.fps = Math.round( ((this.fpsCounter*1000) / diffMs) * 10.0 ) / 10.0;
	
	this.prevMs = nowMs;
	this.fpsCounter = 0;
}

/**
 * @returns The Frames Per Second that was last rendered.
 */
WaterModel.prototype.getFps = function(){
	return this.fps;
}

/**
 * Sets the maximum frames per second to render. Use this to set a limit and release resources for other processes.
 *
 * @param {Number} maxFps The maximum frames per second to render.
 */
WaterModel.prototype.setMaxFps = function(maxFps){
	this.maxFps = maxFps;
	
	clearInterval(this.maxFpsInterval);

	// Updating of the animation
	var self = this; // For referencing 'this' in internal eventListeners	
	
	if(this.maxFps>0){
		this.maxFpsInterval = setInterval(function(){
			self.renderNextFrame();
		}, 1000/this.maxFps); 	
	}
}

/**
 * Effectively sets how long water ripples travel.
 *
 * @param {Number} damping The amount of strength to pass on from postion to surrounding positions.
 */
WaterModel.prototype.setDamping = function(damping){
	this.damping = damping;
}

/**
 * Effectively sets how long water ripples travel.
 * 
 * @param {Number} width The width in pixels this model should work with.
 * @param {Number} hight The hight in pixels this model should work with.
 * @param {Number} resolution The pixel size of a models position. The higher the resolution, the less positions to render, the faster. 
 */
WaterModel.prototype.resetSizeAndResolution = function(width, height, resolution){
	this.width = Math.ceil(width/resolution);
	this.height = Math.ceil(height/resolution);
	this.resolution = resolution;
	
	this.depthMap1 = new Array(this.width); 
	this.depthMap2 = new Array(this.width);
	for(var x = 0; x < this.width; x++){
		this.depthMap1[x] = new Array(this.height);
		this.depthMap2[x] = new Array(this.height);
		
		for (var y = 0; y < this.height; y++) {
			this.depthMap1[x][y] = 0.0;
			this.depthMap2[x][y] = 0.0;
		}
	}
}






////////////////////////////////////////////////////////////////////////////////
//                                 Util functions                             //
////////////////////////////////////////////////////////////////////////////////

/**
 * A class to mimic rain on the given waterModel with raindrop2dArray's as raindrops.
 */
RainMaker = function(width, height, waterModel, raindrop2dArray) {
	this.width = width;
	this.height = height;
	this.waterModel = waterModel;
	this.raindrop2dArray = raindrop2dArray;

	this.rainMinPressure = 1;
	this.rainMaxPressure = 3;
}

RainMaker.prototype.raindrop = function(){
	var x = Math.floor(Math.random() * this.width);
	var y = Math.floor(Math.random() * this.height);
	this.waterModel.touchWater(x, y, this.rainMinPressure + Math.random() * this.rainMaxPressure, this.raindrop2dArray);		
}	

RainMaker.prototype.setRaindropsPerSecond = function(rps){
	this.rps = rps;
	
	clearInterval(this.rainInterval);

	if(this.rps>0) {
		var self = this; 
		this.rainInterval = setInterval(function(){
			self.raindrop();
		}, 1000/this.rps); 	
	}
}

RainMaker.prototype.setRainMinPressure = function(rainMinPressure){
	this.rainMinPressure = rainMinPressure;
}

RainMaker.prototype.setRainMaxPressure = function(rainMaxPressure){
	this.rainMaxPressure = rainMaxPressure;
}

/**
 * Enables mouse interactivity by adding event listeners to the given documentElement and
 * using the mouse coordinates to 'touch' the water.
 */
function enableMouseInteraction(waterModel, documentElement){		
	var mouseDown = false;
	
	var canvasHolder = document.getElementById(documentElement);
	
	canvasHolder.addEventListener("mousedown", function(e){
		mouseDown = true;
		var x = (e.clientX - canvasHolder.offsetLeft) + document.body.scrollLeft + document.documentElement.scrollLeft;
		var y = (e.clientY - canvasHolder.offsetTop) + document.body.scrollTop + document.documentElement.scrollTop;
		waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
	}, false);
	
	canvasHolder.addEventListener("mouseup", function(e){
		mouseDown = false;
	}, false);
	
	canvasHolder.addEventListener("mousemove", function(e){
		var x = (e.clientX - canvasHolder.offsetLeft) + document.body.scrollLeft + document.documentElement.scrollLeft;
		var y = (e.clientY - canvasHolder.offsetTop) + document.body.scrollTop + document.documentElement.scrollTop;
		// mozPressure: https://developer.mozilla.org/en/DOM/Event/UIEvent/MouseEvent
		waterModel.touchWater(x, y, 1.5, mouseDown ? finger : pixel);
	}, false);
}

/**
 * Creates a canvas with a radial gradient from white in the center to black on the outside.
 */
function createRadialCanvas(width, height){
	// Create a canvas
	var pointerCanvas = document.createElement('canvas');  
	pointerCanvas.setAttribute('width', width);  
	pointerCanvas.setAttribute('height', height);  
	pointerCtx = pointerCanvas.getContext('2d'); 
	
	// Create a drawing on the canvas
	var radgrad = pointerCtx.createRadialGradient(width/2,height/2,0,  width/2,height/2,height/2);
	radgrad.addColorStop(0, '#fff');
	radgrad.addColorStop(1, '#000');

	pointerCtx.fillStyle = radgrad;
	pointerCtx.fillRect(0,0,width,height);	
	
	return pointerCanvas;
}

/**	
 * Creates a 2D pointer array from a given canvas with a grayscale image on it. 
 * This canvas image is then converted to a 2D array with values between -1.0 and 0.0.
 * 
 * Example:
 * 	var array2d = [
 * 		[0.5, 1.0, 0.5], 
 * 		[1.0, 1.0, 1.0], 
 * 		[0.5, 1.0, 0.5]
 * 	];
 */
function create2DArray(canvas){
	var width = canvas.width;
	var height = canvas.height;

	// Create an empty 2D  array
	var pointerArray = new Array(width); 
	for(var x = 0; x < width; x++){
		pointerArray[x] = new Array(height);
		for (var y = 0; y < height; y++) {
			pointerArray[x][y] = 0.0;
		}
	}

	// Convert gray scale canvas to 2D array
	var pointerCtx = canvas.getContext('2d'); 
	var imgData = pointerCtx.getImageData(0, 0, width, height);
	var pixels = imgData.data;	

	for (var i = 0; n = pixels.length, i < n; i += 4) {				
		// Get the pixel from input
		var pixVal 	= pixels[i];// only use red
		var arrVal = pixVal/255.0;

		var pixel = i/4;
		var x = pixel % width;
		var y = (pixel-x) / width;

		pointerArray[x][y] = arrVal;
	}				
	
	return pointerArray;			
}

// requestAnimFrame (NB: NOT requestAnimationFrame) will be used, 
// so make sure it's available. Credits @mrdoob
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
		  window.webkitRequestAnimationFrame || 
		  window.mozRequestAnimationFrame    || 
		  window.oRequestAnimationFrame      || 
		  window.msRequestAnimationFrame     || 
		  function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
		  };
})();
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/olympia/libs/select/js/select.js?167325310436164";s:6:"source";s:49:"/local/templates/olympia/libs/select/js/select.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(factory) {
  /* global define */
  /* istanbul ignore next */
  if ( typeof define === 'function' && define.amd ) {
    define(['jquery'], factory);
  } else if ( typeof module === 'object' && module.exports ) {
    // Node/CommonJS
    module.exports = function( root, jQuery ) {
      if ( jQuery === undefined ) {
        if ( typeof window !== 'undefined' ) {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
  'use strict';

  var $doc = $(document);
  var $win = $(window);

  var pluginName = 'selectric';
  var classList = 'Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel';
  var eventNamespaceSuffix = '.sl';

  var chars = ['a', 'e', 'i', 'o', 'u', 'n', 'c', 'y'];
  var diacritics = [
    /[\xE0-\xE5]/g, // a
    /[\xE8-\xEB]/g, // e
    /[\xEC-\xEF]/g, // i
    /[\xF2-\xF6]/g, // o
    /[\xF9-\xFC]/g, // u
    /[\xF1]/g,      // n
    /[\xE7]/g,      // c
    /[\xFD-\xFF]/g  // y
  ];

  /**
   * Create an instance of Selectric
   *
   * @constructor
   * @param {Node} element - The &lt;select&gt; element
   * @param {object}  opts - Options
   */
  var Selectric = function(element, opts) {
    var _this = this;

    _this.element = element;
    _this.$element = $(element);

    _this.state = {
      multiple       : !!_this.$element.attr('multiple'),
      enabled        : false,
      opened         : false,
      currValue      : -1,
      selectedIdx    : -1,
      highlightedIdx : -1
    };

    _this.eventTriggers = {
      open    : _this.open,
      close   : _this.close,
      destroy : _this.destroy,
      refresh : _this.refresh,
      init    : _this.init
    };

    _this.init(opts);
  };

  Selectric.prototype = {
    utils: {
      /**
       * Detect mobile browser
       *
       * @return {boolean}
       */
      isMobile: function() {
        return /android|ip(hone|od|ad)/i.test(navigator.userAgent);
      },

      /**
       * Escape especial characters in string (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
       *
       * @param  {string} str - The string to be escaped
       * @return {string}       The string with the special characters escaped
       */
      escapeRegExp: function(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      },

      /**
       * Replace diacritics
       *
       * @param  {string} str - The string to replace the diacritics
       * @return {string}       The string with diacritics replaced with ascii characters
       */
      replaceDiacritics: function(str) {
        var k = diacritics.length;

        while (k--) {
          str = str.toLowerCase().replace(diacritics[k], chars[k]);
        }

        return str;
      },

      /**
       * Format string
       * https://gist.github.com/atesgoral/984375
       *
       * @param  {string} f - String to be formated
       * @return {string}     String formated
       */
      format: function(f) {
        var a = arguments; // store outer arguments
        return ('' + f) // force format specifier to String
          .replace( // replace tokens in format specifier
            /\{(?:(\d+)|(\w+))\}/g, // match {token} references
            function(
              s, // the matched string (ignored)
              i, // an argument index
              p // a property name
            ) {
              return p && a[1] // if property name and first argument exist
                ? a[1][p] // return property from first argument
                : a[i]; // assume argument index and return i-th argument
            });
      },

      /**
       * Get the next enabled item in the options list.
       *
       * @param  {object} selectItems - The options object.
       * @param  {number}    selected - Index of the currently selected option.
       * @return {object}               The next enabled item.
       */
      nextEnabledItem: function(selectItems, selected) {
        while ( selectItems[ selected = (selected + 1) % selectItems.length ].disabled ) {
          // empty
        }
        return selected;
      },

      /**
       * Get the previous enabled item in the options list.
       *
       * @param  {object} selectItems - The options object.
       * @param  {number}    selected - Index of the currently selected option.
       * @return {object}               The previous enabled item.
       */
      previousEnabledItem: function(selectItems, selected) {
        while ( selectItems[ selected = (selected > 0 ? selected : selectItems.length) - 1 ].disabled ) {
          // empty
        }
        return selected;
      },

      /**
       * Transform camelCase string to dash-case.
       *
       * @param  {string} str - The camelCased string.
       * @return {string}       The string transformed to dash-case.
       */
      toDash: function(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
      },

      /**
       * Calls the events registered with function name.
       *
       * @param {string}    fn - The name of the function.
       * @param {number} scope - Scope that should be set on the function.
       */
      triggerCallback: function(fn, scope) {
        var elm = scope.element;
        var func = scope.options['on' + fn];
        var args = [elm].concat([].slice.call(arguments).slice(1));

        if ( $.isFunction(func) ) {
          func.apply(elm, args);
        }

        $(elm).trigger(pluginName + '-' + this.toDash(fn), args);
      },

      /**
       * Transform array list to concatenated string and remove empty values
       * @param  {array} arr - Class list
       * @return {string}      Concatenated string
       */
      arrayToClassname: function(arr) {
        var newArr = $.grep(arr, function(item) {
          return !!item;
        });

        return $.trim(newArr.join(' '));
      }
    },

    /** Initializes */
    init: function(opts) {
      var _this = this;

      // Set options
      _this.options = $.extend(true, {}, $.fn[pluginName].defaults, _this.options, opts);

      _this.utils.triggerCallback('BeforeInit', _this);

      // Preserve data
      _this.destroy(true);

      // Disable on mobile browsers
      if ( _this.options.disableOnMobile && _this.utils.isMobile() ) {
        _this.disableOnMobile = true;
        return;
      }

      // Get classes
      _this.classes = _this.getClassNames();

      // Create elements
      var input              = $('<input/>', { 'class': _this.classes.input, 'readonly': _this.utils.isMobile() });
      var items              = $('<div/>',   { 'class': _this.classes.items, 'tabindex': -1 });
      var itemsScroll        = $('<div/>',   { 'class': _this.classes.scroll });
      var wrapper            = $('<div/>',   { 'class': _this.classes.prefix, 'html': _this.options.arrowButtonMarkup });
      var label              = $('<span/>',  { 'class': 'label' });
      var outerWrapper       = _this.$element.wrap('<div/>').parent().append(wrapper.prepend(label), items, input);
      var hideSelectWrapper  = $('<div/>',   { 'class': _this.classes.hideselect });

      _this.elements = {
        input        : input,
        items        : items,
        itemsScroll  : itemsScroll,
        wrapper      : wrapper,
        label        : label,
        outerWrapper : outerWrapper
      };

      if ( _this.options.nativeOnMobile && _this.utils.isMobile() ) {
        _this.elements.input = undefined;
        hideSelectWrapper.addClass(_this.classes.prefix + '-is-native');

        _this.$element.on('change', function() {
          _this.refresh();
        });
      }

      _this.$element
        .on(_this.eventTriggers)
        .wrap(hideSelectWrapper);

      _this.originalTabindex = _this.$element.prop('tabindex');
      _this.$element.prop('tabindex', -1);

      _this.populate();
      _this.activate();

      _this.utils.triggerCallback('Init', _this);
    },

    /** Activates the plugin */
    activate: function() {
      var _this = this;
      var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
      var originalWidth = _this.$element.width();

      hiddenChildren.removeClass(_this.classes.tempshow);

      _this.utils.triggerCallback('BeforeActivate', _this);

      _this.elements.outerWrapper.prop('class',
        _this.utils.arrayToClassname([
          _this.classes.wrapper,
          _this.$element.prop('class').replace(/\S+/g, _this.classes.prefix + '-$&'),
          _this.options.responsive ? _this.classes.responsive : ''
        ])
      );

      if ( _this.options.inheritOriginalWidth && originalWidth > 0 ) {
        _this.elements.outerWrapper.width(originalWidth);
      }

      _this.unbindEvents();

      if ( !_this.$element.prop('disabled') ) {
        _this.state.enabled = true;

        // Not disabled, so... Removing disabled class
        _this.elements.outerWrapper.removeClass(_this.classes.disabled);

        // Remove styles from items box
        // Fix incorrect height when refreshed is triggered with fewer options
        _this.$li = _this.elements.items.removeAttr('style').find('li');

        _this.bindEvents();
      } else {
        _this.elements.outerWrapper.addClass(_this.classes.disabled);

        if ( _this.elements.input ) {
          _this.elements.input.prop('disabled', true);
        }
      }

      _this.utils.triggerCallback('Activate', _this);
    },

    /**
     * Generate classNames for elements
     *
     * @return {object} Classes object
     */
    getClassNames: function() {
      var _this = this;
      var customClass = _this.options.customClass;
      var classesObj = {};

      $.each(classList.split(' '), function(i, currClass) {
        var c = customClass.prefix + currClass;
        classesObj[currClass.toLowerCase()] = customClass.camelCase ? c : _this.utils.toDash(c);
      });

      classesObj.prefix = customClass.prefix;

      return classesObj;
    },

    /** Set the label text */
    setLabel: function() {
      var _this = this;
      var labelBuilder = _this.options.labelBuilder;

      if ( _this.state.multiple ) {
        // Make sure currentValues is an array
        var currentValues = $.isArray(_this.state.currValue) ? _this.state.currValue : [_this.state.currValue];
        // I'm not happy with this, but currentValues can be an empty
        // array and we need to fallback to the default option.
        currentValues = currentValues.length === 0 ? [0] : currentValues;

        var labelMarkup = $.map(currentValues, function(value) {
          return $.grep(_this.lookupItems, function(item) {
            return item.index === value;
          })[0]; // we don't want nested arrays here
        });

        labelMarkup = $.grep(labelMarkup, function(item) {
          // Hide default (please choose) if more then one element were selected.
          // If no option value were given value is set to option text by default
          if ( labelMarkup.length > 1 || labelMarkup.length === 0 ) {
            return $.trim(item.value) !== '';
          }
          return item;
        });

        labelMarkup = $.map(labelMarkup, function(item) {
          return $.isFunction(labelBuilder)
            ? labelBuilder(item)
            : _this.utils.format(labelBuilder, item);
        });

        // Limit the amount of selected values shown in label
        if ( _this.options.multiple.maxLabelEntries ) {
          if ( labelMarkup.length >= _this.options.multiple.maxLabelEntries + 1 ) {
            labelMarkup = labelMarkup.slice(0, _this.options.multiple.maxLabelEntries);
            labelMarkup.push(
              $.isFunction(labelBuilder)
                ? labelBuilder({ text: '...' })
                : _this.utils.format(labelBuilder, { text: '...' }));
          } else {
            labelMarkup.slice(labelMarkup.length - 1);
          }
        }
        _this.elements.label.html(labelMarkup.join(_this.options.multiple.separator));

      } else {
        var currItem = _this.lookupItems[_this.state.currValue];

        _this.elements.label.html(
          $.isFunction(labelBuilder)
            ? labelBuilder(currItem)
            : _this.utils.format(labelBuilder, currItem)
        );
      }
    },

    /** Get and save the available options */
    populate: function() {
      var _this = this;
      var $options = _this.$element.children();
      var $justOptions = _this.$element.find('option');
      var $selected = $justOptions.filter(':selected');
      var selectedIndex = $justOptions.index($selected);
      var currIndex = 0;
      var emptyValue = (_this.state.multiple ? [] : 0);

      if ( $selected.length > 1 && _this.state.multiple ) {
        selectedIndex = [];
        $selected.each(function() {
          selectedIndex.push($(this).index());
        });
      }

      _this.state.currValue = (~selectedIndex ? selectedIndex : emptyValue);
      _this.state.selectedIdx = _this.state.currValue;
      _this.state.highlightedIdx = _this.state.currValue;
      _this.items = [];
      _this.lookupItems = [];

      if ( $options.length ) {
        // Build options markup
        $options.each(function(i) {
          var $elm = $(this);

          if ( $elm.is('optgroup') ) {

            var optionsGroup = {
              element       : $elm,
              label         : $elm.prop('label'),
              groupDisabled : $elm.prop('disabled'),
              items         : []
            };

            $elm.children().each(function(i) {
              var $elm = $(this);

              optionsGroup.items[i] = _this.getItemData(currIndex, $elm, optionsGroup.groupDisabled || $elm.prop('disabled'));

              _this.lookupItems[currIndex] = optionsGroup.items[i];

              currIndex++;
            });

            _this.items[i] = optionsGroup;

          } else {

            _this.items[i] = _this.getItemData(currIndex, $elm, $elm.prop('disabled'));

            _this.lookupItems[currIndex] = _this.items[i];

            currIndex++;

          }
        });

        _this.setLabel();
        _this.elements.items.append( _this.elements.itemsScroll.html( _this.getItemsMarkup(_this.items) ) );
      }
    },

    /**
     * Generate items object data
     * @param  {integer} index      - Current item index
     * @param  {node}    $elm       - Current element node
     * @param  {boolean} isDisabled - Current element disabled state
     * @return {object}               Item object
     */
    getItemData: function(index, $elm, isDisabled) {
      var _this = this;

      return {
        index     : index,
        element   : $elm,
        value     : $elm.val(),
        className : $elm.prop('class'),
        text      : $elm.html(),
        slug      : $.trim(_this.utils.replaceDiacritics($elm.html())),
        alt       : $elm.attr('data-alt'),
        selected  : $elm.prop('selected'),
        disabled  : isDisabled
      };
    },

    /**
     * Generate options markup
     *
     * @param  {object} items - Object containing all available options
     * @return {string}         HTML for the options box
     */
    getItemsMarkup: function(items) {
      var _this = this;
      var markup = '<ul>';

      if ( $.isFunction(_this.options.listBuilder) && _this.options.listBuilder ) {
        items = _this.options.listBuilder(items);
      }

      $.each(items, function(i, elm) {
        if ( elm.label !== undefined ) {

          markup += _this.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',
            _this.utils.arrayToClassname([
              _this.classes.group,
              elm.groupDisabled ? 'disabled' : '',
              elm.element.prop('class')
            ]),
            _this.classes.grouplabel,
            elm.element.prop('label')
          );

          $.each(elm.items, function(i, elm) {
            markup += _this.getItemMarkup(elm.index, elm);
          });

          markup += '</ul>';

        } else {

          markup += _this.getItemMarkup(elm.index, elm);

        }
      });

      return markup + '</ul>';
    },

    /**
     * Generate every option markup
     *
     * @param  {number} index    - Index of current item
     * @param  {object} itemData - Current item
     * @return {string}            HTML for the option
     */
    getItemMarkup: function(index, itemData) {
      var _this = this;
      var itemBuilder = _this.options.optionsItemBuilder;
      // limit access to item data to provide a simple interface
      // to most relevant options.
      var filteredItemData = {
        value: itemData.value,
        text : itemData.text,
        slug : itemData.slug,
        index: itemData.index
      };

      return _this.utils.format('<li data-index="{1}" class="{2}">{3}</li>',
        index,
        _this.utils.arrayToClassname([
          itemData.className,
          index === _this.items.length - 1  ? 'last'     : '',
          itemData.disabled                 ? 'disabled' : '',
          itemData.selected                 ? 'selected' : ''
        ]),
        $.isFunction(itemBuilder)
          ? _this.utils.format(itemBuilder(itemData, this.$element, index), itemData)
          : _this.utils.format(itemBuilder, filteredItemData)
      );
    },

    /** Remove events on the elements */
    unbindEvents: function() {
      var _this = this;

      _this.elements.wrapper
        .add(_this.$element)
        .add(_this.elements.outerWrapper)
        .add(_this.elements.input)
        .off(eventNamespaceSuffix);
    },

    /** Bind events on the elements */
    bindEvents: function() {
      var _this = this;

      _this.elements.outerWrapper.on('mouseenter' + eventNamespaceSuffix + ' mouseleave' + eventNamespaceSuffix, function(e) {
        $(this).toggleClass(_this.classes.hover, e.type === 'mouseenter');

        // Delay close effect when openOnHover is true
        if ( _this.options.openOnHover ) {
          clearTimeout(_this.closeTimer);

          if ( e.type === 'mouseleave' ) {
            _this.closeTimer = setTimeout($.proxy(_this.close, _this), _this.options.hoverIntentTimeout);
          } else {
            _this.open();
          }
        }
      });

      // Toggle open/close
      _this.elements.wrapper.on('click' + eventNamespaceSuffix, function(e) {
        _this.state.opened ? _this.close() : _this.open(e);
      });

      // Translate original element focus event to dummy input.
      // Disabled on mobile devices because the default option list isn't
      // shown due the fact that hidden input gets focused
      if ( !(_this.options.nativeOnMobile && _this.utils.isMobile()) ) {
        _this.$element.on('focus' + eventNamespaceSuffix, function() {
          _this.elements.input.focus();
        });

        _this.elements.input
          .prop({ tabindex: _this.originalTabindex, disabled: false })
          .on('keydown' + eventNamespaceSuffix, $.proxy(_this.handleKeys, _this))
          .on('focusin' + eventNamespaceSuffix, function(e) {
            _this.elements.outerWrapper.addClass(_this.classes.focus);

            // Prevent the flicker when focusing out and back again in the browser window
            _this.elements.input.one('blur', function() {
              _this.elements.input.blur();
            });

            if ( _this.options.openOnFocus && !_this.state.opened ) {
              _this.open(e);
            }
          })
          .on('focusout' + eventNamespaceSuffix, function() {
            _this.elements.outerWrapper.removeClass(_this.classes.focus);
          })
          .on('input propertychange', function() {
            var val = _this.elements.input.val();
            var searchRegExp = new RegExp('^' + _this.utils.escapeRegExp(val), 'i');

            // Clear search
            clearTimeout(_this.resetStr);
            _this.resetStr = setTimeout(function() {
              _this.elements.input.val('');
            }, _this.options.keySearchTimeout);

            if ( val.length ) {
              // Search in select options
              $.each(_this.items, function(i, elm) {
                if (elm.disabled) {
                  return;
                }
                if (searchRegExp.test(elm.text) || searchRegExp.test(elm.slug)) {
                  _this.highlight(i);
                  return false;
                }
                if (!elm.alt) {
                  return;
                }
                var altItems = elm.alt.split('|');
                for (var ai = 0; ai < altItems.length; ai++) {
                  if (!altItems[ai]) {
                    break;
                  }
                  if (searchRegExp.test(altItems[ai].trim())) {
                    _this.highlight(i);
                    return false;
                  }
                }
              });
            }
          });
      }

      _this.$li.on({
        // Prevent <input> blur on Chrome
        mousedown: function(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        click: function() {
          _this.select($(this).data('index'));

          // Chrome doesn't close options box if select is wrapped with a label
          // We need to 'return false' to avoid that
          return false;
        }
      });
    },

    /**
     * Behavior when keyboard keys is pressed
     *
     * @param {object} e - Event object
     */
    handleKeys: function(e) {
      var _this = this;
      var key = e.which;
      var keys = _this.options.keys;

      var isPrevKey = $.inArray(key, keys.previous) > -1;
      var isNextKey = $.inArray(key, keys.next) > -1;
      var isSelectKey = $.inArray(key, keys.select) > -1;
      var isOpenKey = $.inArray(key, keys.open) > -1;
      var idx = _this.state.highlightedIdx;
      var isFirstOrLastItem = (isPrevKey && idx === 0) || (isNextKey && (idx + 1) === _this.items.length);
      var goToItem = 0;

      // Enter / Space
      if ( key === 13 || key === 32 ) {
        e.preventDefault();
      }

      // If it's a directional key
      if ( isPrevKey || isNextKey ) {
        if ( !_this.options.allowWrap && isFirstOrLastItem ) {
          return;
        }

        if ( isPrevKey ) {
          goToItem = _this.utils.previousEnabledItem(_this.lookupItems, idx);
        }

        if ( isNextKey ) {
          goToItem = _this.utils.nextEnabledItem(_this.lookupItems, idx);
        }

        _this.highlight(goToItem);
      }

      // Tab / Enter / ESC
      if ( isSelectKey && _this.state.opened ) {
        _this.select(idx);

        if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
          _this.close();
        }

        return;
      }

      // Space / Enter / Left / Up / Right / Down
      if ( isOpenKey && !_this.state.opened ) {
        _this.open();
      }
    },

    /** Update the items object */
    refresh: function() {
      var _this = this;

      _this.populate();
      _this.activate();
      _this.utils.triggerCallback('Refresh', _this);
    },

    /** Set options box width/height */
    setOptionsDimensions: function() {
      var _this = this;

      // Calculate options box height
      // Set a temporary class on the hidden parent of the element
      var hiddenChildren = _this.elements.items.closest(':visible').children(':hidden').addClass(_this.classes.tempshow);
      var maxHeight = _this.options.maxHeight;
      var itemsWidth = _this.elements.items.outerWidth();
      var wrapperWidth = _this.elements.wrapper.outerWidth() - (itemsWidth - _this.elements.items.width());

      // Set the dimensions, minimum is wrapper width, expand for long items if option is true
      if ( !_this.options.expandToItemText || wrapperWidth > itemsWidth ) {
        _this.finalWidth = wrapperWidth;
      } else {
        // Make sure the scrollbar width is included
        _this.elements.items.css('overflow', 'scroll');

        // Set a really long width for _this.elements.outerWrapper
        _this.elements.outerWrapper.width(9e4);
        _this.finalWidth = _this.elements.items.width();
        // Set scroll bar to auto
        _this.elements.items.css('overflow', '');
        _this.elements.outerWrapper.width('');
      }

      _this.elements.items.width(_this.finalWidth).height() > maxHeight && _this.elements.items.height(maxHeight);

      // Remove the temporary class
      hiddenChildren.removeClass(_this.classes.tempshow);
    },

    /** Detect if the options box is inside the window */
    isInViewport: function() {
      var _this = this;

      if (_this.options.forceRenderAbove === true) {
        _this.elements.outerWrapper.addClass(_this.classes.above);
      } else if (_this.options.forceRenderBelow === true) {
        _this.elements.outerWrapper.addClass(_this.classes.below);
      } else {
        var scrollTop = $win.scrollTop();
        var winHeight = $win.height();
        var uiPosX = _this.elements.outerWrapper.offset().top;
        var uiHeight = _this.elements.outerWrapper.outerHeight();

        var fitsDown = (uiPosX + uiHeight + _this.itemsHeight) <= (scrollTop + winHeight);
        var fitsAbove = (uiPosX - _this.itemsHeight) > scrollTop;

        // If it does not fit below, only render it
        // above it fit's there.
        // It's acceptable that the user needs to
        // scroll the viewport to see the cut off UI
        var renderAbove = !fitsDown && fitsAbove;
        var renderBelow = !renderAbove;

        _this.elements.outerWrapper.toggleClass(_this.classes.above, renderAbove);
        _this.elements.outerWrapper.toggleClass(_this.classes.below, renderBelow);
      }
    },

    /**
     * Detect if currently selected option is visible and scroll the options box to show it
     *
     * @param {Number|Array} index - Index of the selected items
     */
    detectItemVisibility: function(index) {
      var _this = this;
      var $filteredLi = _this.$li.filter('[data-index]');

      if ( _this.state.multiple ) {
        // If index is an array, we can assume a multiple select and we
        // want to scroll to the uppermost selected item!
        // Math.min.apply(Math, index) returns the lowest entry in an Array.
        index = ($.isArray(index) && index.length === 0) ? 0 : index;
        index = $.isArray(index) ? Math.min.apply(Math, index) : index;
      }

      var liHeight = $filteredLi.eq(index).outerHeight();
      var liTop = $filteredLi[index].offsetTop;
      var itemsScrollTop = _this.elements.itemsScroll.scrollTop();
      var scrollT = liTop + liHeight * 2;

      _this.elements.itemsScroll.scrollTop(
        scrollT > itemsScrollTop + _this.itemsHeight ? scrollT - _this.itemsHeight :
          liTop - liHeight < itemsScrollTop ? liTop - liHeight :
            itemsScrollTop
      );
    },

    /**
     * Open the select options box
     *
     * @param {Event} e - Event
     */
    open: function(e) {
      var _this = this;

      if ( _this.options.nativeOnMobile && _this.utils.isMobile()) {
        return false;
      }

      _this.utils.triggerCallback('BeforeOpen', _this);

      if ( e ) {
        e.preventDefault();
        if (_this.options.stopPropagation) {
          e.stopPropagation();
        }
      }

      if ( _this.state.enabled ) {
        _this.setOptionsDimensions();

        // Find any other opened instances of select and close it
        $('.' + _this.classes.hideselect, '.' + _this.classes.open).children()[pluginName]('close');

        _this.state.opened = true;
        _this.itemsHeight = _this.elements.items.outerHeight();
        _this.itemsInnerHeight = _this.elements.items.height();

        // Toggle options box visibility
        _this.elements.outerWrapper.addClass(_this.classes.open);

        // Give dummy input focus
        _this.elements.input.val('');
        if ( e && e.type !== 'focusin' ) {
          _this.elements.input.focus();
        }

        // Delayed binds events on Document to make label clicks work
        setTimeout(function() {
          $doc
            .on('click' + eventNamespaceSuffix, $.proxy(_this.close, _this))
            .on('scroll' + eventNamespaceSuffix, $.proxy(_this.isInViewport, _this));
        }, 1);

        _this.isInViewport();

        // Prevent window scroll when using mouse wheel inside items box
        if ( _this.options.preventWindowScroll ) {
          /* istanbul ignore next */
          $doc.on('mousewheel' + eventNamespaceSuffix + ' DOMMouseScroll' + eventNamespaceSuffix, '.' + _this.classes.scroll, function(e) {
            var orgEvent = e.originalEvent;
            var scrollTop = $(this).scrollTop();
            var deltaY = 0;

            if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1; }
            if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;  }
            if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY; }
            if ( 'deltaY'      in orgEvent ) { deltaY = orgEvent.deltaY * -1; }

            if ( scrollTop === (this.scrollHeight - _this.itemsInnerHeight) && deltaY < 0 || scrollTop === 0 && deltaY > 0 ) {
              e.preventDefault();
            }
          });
        }

        _this.detectItemVisibility(_this.state.selectedIdx);

        _this.highlight(_this.state.multiple ? -1 : _this.state.selectedIdx);

        _this.utils.triggerCallback('Open', _this);
      }
    },

    /** Close the select options box */
    close: function() {
      var _this = this;

      _this.utils.triggerCallback('BeforeClose', _this);

      // Remove custom events on document
      $doc.off(eventNamespaceSuffix);

      // Remove visible class to hide options box
      _this.elements.outerWrapper.removeClass(_this.classes.open);

      _this.state.opened = false;

      _this.utils.triggerCallback('Close', _this);
    },

    /** Select current option and change the label */
    change: function() {
      var _this = this;

      _this.utils.triggerCallback('BeforeChange', _this);

      if ( _this.state.multiple ) {
        // Reset old selected
        $.each(_this.lookupItems, function(idx) {
          _this.lookupItems[idx].selected = false;
          _this.$element.find('option').prop('selected', false);
        });

        // Set new selected
        $.each(_this.state.selectedIdx, function(idx, value) {
          _this.lookupItems[value].selected = true;
          _this.$element.find('option').eq(value).prop('selected', true);
        });

        _this.state.currValue = _this.state.selectedIdx;

        _this.setLabel();

        _this.utils.triggerCallback('Change', _this);
      } else if ( _this.state.currValue !== _this.state.selectedIdx ) {
        // Apply changed value to original select
        _this.$element
          .prop('selectedIndex', _this.state.currValue = _this.state.selectedIdx)
          .data('value', _this.lookupItems[_this.state.selectedIdx].text);

        // Change label text
        _this.setLabel();

        _this.utils.triggerCallback('Change', _this);
      }
    },

    /**
     * Highlight option
     * @param {number} index - Index of the options that will be highlighted
     */
    highlight: function(index) {
      var _this = this;
      var $filteredLi = _this.$li.filter('[data-index]').removeClass('highlighted');

      _this.utils.triggerCallback('BeforeHighlight', _this);

      // Parameter index is required and should not be a disabled item
      if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
        return;
      }

      $filteredLi
        .eq(_this.state.highlightedIdx = index)
        .addClass('highlighted');

      _this.detectItemVisibility(index);

      _this.utils.triggerCallback('Highlight', _this);
    },

    /**
     * Select option
     *
     * @param {number} index - Index of the option that will be selected
     */
    select: function(index) {
      var _this = this;
      var $filteredLi = _this.$li.filter('[data-index]');

      _this.utils.triggerCallback('BeforeSelect', _this, index);

      // Parameter index is required and should not be a disabled item
      if ( index === undefined || index === -1 || _this.lookupItems[index].disabled ) {
        return;
      }

      if ( _this.state.multiple ) {
        // Make sure selectedIdx is an array
        _this.state.selectedIdx = $.isArray(_this.state.selectedIdx) ? _this.state.selectedIdx : [_this.state.selectedIdx];

        var hasSelectedIndex = $.inArray(index, _this.state.selectedIdx);
        if ( hasSelectedIndex !== -1 ) {
          _this.state.selectedIdx.splice(hasSelectedIndex, 1);
        } else {
          _this.state.selectedIdx.push(index);
        }

        $filteredLi
          .removeClass('selected')
          .filter(function(index) {
            return $.inArray(index, _this.state.selectedIdx) !== -1;
          })
          .addClass('selected');
      } else {
        $filteredLi
          .removeClass('selected')
          .eq(_this.state.selectedIdx = index)
          .addClass('selected');
      }

      if ( !_this.state.multiple || !_this.options.multiple.keepMenuOpen ) {
        _this.close();
      }

      _this.change();

      _this.utils.triggerCallback('Select', _this, index);
    },

    /**
     * Unbind and remove
     *
     * @param {boolean} preserveData - Check if the data on the element should be removed too
     */
    destroy: function(preserveData) {
      var _this = this;

      if ( _this.state && _this.state.enabled ) {
        _this.elements.items.add(_this.elements.wrapper).add(_this.elements.input).remove();

        if ( !preserveData ) {
          _this.$element.removeData(pluginName).removeData('value');
        }

        _this.$element.prop('tabindex', _this.originalTabindex).off(eventNamespaceSuffix).off(_this.eventTriggers).unwrap().unwrap();

        _this.state.enabled = false;
      }
    }
  };

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function(args) {
    return this.each(function() {
      var data = $.data(this, pluginName);

      if ( data && !data.disableOnMobile ) {
        (typeof args === 'string' && data[args]) ? data[args]() : data.init(args);
      } else {
        $.data(this, pluginName, new Selectric(this, args));
      }
    });
  };

  /**
   * Default plugin options
   *
   * @type {object}
   */
  $.fn[pluginName].defaults = {
    onChange             : function(elm) { $(elm).change(); },
    maxHeight            : 300,
    keySearchTimeout     : 500,
    arrowButtonMarkup    : '<b class="button">&#x25be;</b>',
    disableOnMobile      : false,
    nativeOnMobile       : true,
    openOnFocus          : true,
    openOnHover          : false,
    hoverIntentTimeout   : 500,
    expandToItemText     : false,
    responsive           : false,
    preventWindowScroll  : true,
    inheritOriginalWidth : false,
    allowWrap            : true,
    forceRenderAbove     : false,
    forceRenderBelow     : false,
    stopPropagation      : true,
    optionsItemBuilder   : '{text}', // function(itemData, element, index)
    labelBuilder         : '{text}', // function(currItem)
    listBuilder          : false,    // function(items)
    keys                 : {
      previous : [37, 38],                 // Left / Up
      next     : [39, 40],                 // Right / Down
      select   : [9, 13, 27],              // Tab / Enter / Escape
      open     : [13, 32, 37, 38, 39, 40], // Enter / Space / Left / Up / Right / Down
      close    : [9, 27]                   // Tab / Escape
    },
    customClass          : {
      prefix: pluginName,
      camelCase: false
    },
    multiple              : {
      separator: ', ',
      keepMenuOpen: true,
      maxLabelEntries: false
    }
  };
}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:81:"/local/templates/olympia/js/jquery.mCustomScrollbar.concat.min.js?167325310645479";s:6:"source";s:65:"/local/templates/olympia/js/jquery.mCustomScrollbar.concat.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:51:"/local/templates/olympia/js/main.js?178704689948005";s:6:"source";s:35:"/local/templates/olympia/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$.fn.mytoggle = function() {
    var b = arguments;
    return this.each(function(i, el) {
        var a = function() {
            var c = 0;
            return function() {
                b[c++ % b.length].apply(el, arguments);
            };
        }();
        $(el).click(a);
    });
};

$(function() {

    checkDevice();

    var fixedMenu = false;
    $(window).scroll(function() {
        var w = $(window).width();
        var h = $(window).scrollTop();
        if (h > 136 && w > 1100) {
            $('.header').addClass('fixed');
            $('.bottom__header').addClass('fixed');
            if (!fixedMenu) {
                $('.header').hide();
                $('.header').slideDown(250);
            }
            fixedMenu = true;
            $('.header').css({
                position: 'fixed',
                top: 0,
                left: 0
            });
        } else {
            fixedMenu = false;
            $('.header').css({
                position: 'relative'
            });
            $('.header').removeClass('fixed');
            $('.bottom__header').removeClass('fixed');
        }
    });

    function checkDevice() {
        var wPage = $(window).width();

        if (wPage > 1100) {
            $('.has_submenu').removeClass('mobile tablet').addClass('desktop');
            $('.has_subcat').removeClass('mobile tablet').addClass('desktop');
            $('.footer .menu__footer').removeClass('mobile');
            state = false;
            // console.log('Desktop');
        }

        if (wPage <= 1100 && wPage > 660) {
            $('.has_submenu').removeClass('desktop mobile').addClass('tablet');
            $('.has_subcat').removeClass('desktop mobile').addClass('tablet');
            $('.footer .menu__footer').removeClass('mobile');
            $('.footer .menu__footer').find('.list').show();
            // console.log('Tablets');
        }

        if (wPage <= 660) {
            $('.has_submenu').removeClass('desktop tablet').addClass('mobile');
            $('.has_subcat').removeClass('desktop tablet').addClass('mobile');
            $('.footer .menu__footer').addClass('mobile');
            // console.log('Mobile');
        }
    }
    $(document).ready(function() {
        $(".instagram_stories_mobile .owl-item").outerHeight($(".instagram_stories_mobile .owl-item").innerWidth());
    });

    $(window).resize(function() {
        $("body").css("overflow", "visible");
        initEqualHeight();
        checkDevice();

        var aboutBlockHeight = $('.wr_about_list').height();
        $('.wr_about').height(aboutBlockHeight);
        if (document.body.clientWidth > 540) {
            $(".main_slider .slide_href").attr("hrefto", $(".main_slider .slide_href").attr("href"));
            $(".main_slider .slide_href").removeAttr("href");
        } else {
            $(".main_slider .slide_href").attr("href", $(".main_slider .slide_href").attr("hrefto"));
        }
        $(".instagram_stories_mobile .owl-item").outerHeight($(".instagram_stories_mobile .owl-item").innerWidth());
    });
    if (document.body.clientWidth > 540) {
        $(".main_slider .slide_href").attr("hrefto", $(".main_slider .slide_href").attr("href"));
        $(".main_slider .slide_href").removeAttr("href");
    }

    $(document).on('click', '.footer .menu__footer.mobile .div_name', function(e) {
        if ($(this).parent().children('ul').length > 0) {
            e.preventDefault();
            $(this).parent().addClass('open');
            $(this).parent().find('.list').slideDown(200);
        }
    });

    $(document).on('click', '.footer .menu__footer.mobile.open .div_name', function(e) {
        if ($(this).parent().children('ul').length > 0) {
            e.preventDefault();
            $(this).parent().removeClass('open');
            $(this).parent().find('.list').slideUp(150);
        }
    });

    $('.btn-menu').click(function() {
        $('.wrapper_menu__header').removeClass('hide-menu').addClass('show-menu');
        $("body").css("overflow", "hidden");
        $('.dark_layout').show();
    });

    $('.close_menu, .dark_layout').click(function() {
        $('.wrapper_menu__header').addClass('hide-menu').removeClass('show-menu');
        $("body").css("overflow", "visible");
        $('.dark_layout').hide();
        $('.wrapper_order_online_modal').hide();
        $('.callback_modal').hide();
    });

    $('.go_to').click(function() {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 0 }, 600);
        }
        return false;
    });

    var mainSlider = $('.main_slider');
    mainSlider.owlCarousel({
        pagination: false,
        items: 1,
        margin: 10,
        lazyLoad: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000
    });

    $('.wr_main_slider .next-slide').click(function() {
        mainSlider.trigger('next.owl.carousel');
    });

    $('.wr_main_slider .prev-slide').click(function() {
        mainSlider.trigger('prev.owl.carousel');
    });

    var adsSlider = $('.ads_slider');
    var adsSliders = adsSlider.find('.slide');

    adsSlider.owlCarousel({
        pagination: false,
        items: 3,
        margin: 10,
        lazyLoad: true,
        nav: false,
        loop: adsSliders.length > 4 ? true : false,
        autoplay: false,
        responsive: {
            1700: {
                nav: true,
                items: 4,
                loop: adsSliders.length > 4 ? true : false
            },
            1600: {
                nav: true,
                items: 3,
                loop: adsSliders.length > 3 ? true : false
            },
            1200: {
                nav: true,
                items: 3,
                loop: adsSliders.length > 3 ? true : false
            },
            820: {
                items: 2,
                loop: adsSliders.length > 2 ? true : false
            },
            760: {
                items: 2,
                loop: adsSliders.length > 2 ? true : false
            },
            580: {
                items: 1,
                loop: adsSliders.length > 1 ? true : false
            },
            0: {
                items: 1,
                loop: adsSliders.length > 1 ? true : false,
                margin: 0
            }
        }
    });

    // adsSlider.owlCarousel({
    // 	pagination: false,
    // 	items: 3.21,
    // 	margin: 10,
    // 	lazyLoad: true,
    // 	loop: true,
    // 	autoplay: false,
    // 	responsive: {
    // 		1700: {
    // 			items: 4.23
    // 		},
    // 		1600: {
    // 			items: 3.2
    // 		},
    // 		1200: {
    // 			items: 3.21
    // 		},
    // 		820: {
    // 			items: 2.6
    // 		},
    // 		760: {
    // 			items: 2.2
    // 		},
    // 		580: {
    // 			items: 1.6
    // 		},
    // 		0: {
    // 			items: 1.15,
    // 			margin: 0
    // 		}
    // 	}
    // });

    $('.ads_section .next-slide').click(function() {
        adsSlider.trigger('next.owl.carousel');
    });

    $('.ads_section .prev-slide').click(function() {
        adsSlider.trigger('prev.owl.carousel');
    });

    var newsSlider = $('.news_slider');
    var newSliders = newsSlider.find('.slide');

    newsSlider.owlCarousel({
        pagination: false,
        items: 3,
        margin: 10,
        lazyLoad: true,
        nav: false,
        loop: newSliders.length > 3 ? true : false,
        autoplay: false,
        responsive: {
            1700: {
                nav: true,
                items: 4,
                loop: newSliders.length > 4 ? true : false
            },
            1600: {
                nav: true,
                items: 3,
                loop: newSliders.length > 3 ? true : false
            },
            1200: {
                nav: true,
                items: 3,
                loop: newSliders.length > 3 ? true : false
            },
            820: {
                items: 2,
                loop: newSliders.length > 2 ? true : false
            },
            760: {
                items: 2,
                loop: newSliders.length > 2 ? true : false
            },
            580: {
                items: 1,
                loop: newSliders.length > 1 ? true : false
            },
            0: {
                items: 1,
                loop: newSliders.length > 1 ? true : false,
                margin: 0
            }
        }
    });

    $('.news_section .next-slide').click(function() {
        newsSlider.trigger('next.owl.carousel');
    });

    $('.news_section .prev-slide').click(function() {
        newsSlider.trigger('prev.owl.carousel');
    });

    var poolSlider = $('.pool_slider');
    poolSlider.owlCarousel({
        pagination: false,
        items: 1,
        margin: 10,
        lazyLoad: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_pool_slider .next-slide').click(function() {
        poolSlider.trigger('next.owl.carousel');
    });

    $('.wr_pool_slider .prev-slide').click(function() {
        poolSlider.trigger('prev.owl.carousel');
    });

    var servicesSlider = $('.services_slider');
    servicesSlider.owlCarousel({
        pagination: false,
        items: 1,
        margin: 0,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    var mapsSlider = $('.maps_slider');
    mapsSlider.owlCarousel({
        pagination: false,
        items: 1,
        margin: 0,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_maps_slider .next-slide').click(function() {
        mapsSlider.trigger('next.owl.carousel');
    });

    $('.wr_maps_slider .prev-slide').click(function() {
        mapsSlider.trigger('prev.owl.carousel');
    });

    var instSlider = $('.inst_slider');
    instSlider.owlCarousel({
        pagination: false,
        items: 1,
        margin: 0,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    var coachSlider = $('.coach_slider');
    coachSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_coach_slider .next-slide').click(function() {
        coachSlider.trigger('next.owl.carousel');
    });

    $('.wr_coach_slider .prev-slide').click(function() {
        coachSlider.trigger('prev.owl.carousel');
    });

    var reviewsSlider = $('.reviews_slider');
    reviewsSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
		autoHeight: true,
    });

    $('.wr_reviews_slider .next-slide').click(function() {
        reviewsSlider.trigger('next.owl.carousel');
    });

    $('.wr_reviews_slider .prev-slide').click(function() {
        reviewsSlider.trigger('prev.owl.carousel');
    });

    var simSlider = $('.sim_slider');
    simSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_sim_slider .next-slide').click(function() {
        simSlider.trigger('next.owl.carousel');
    });

    $('.wr_sim_slider .prev-slide').click(function() {
        simSlider.trigger('prev.owl.carousel');
    });

    var hallSlider = $('.hall_photo_slider');
    hallSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_hall_photo_slider .next-slide').click(function() {
        hallSlider.trigger('next.owl.carousel');
    });

    $('.wr_hall_photo_slider .prev-slide').click(function() {
        hallSlider.trigger('prev.owl.carousel');
    });

    var ourPhotoSlider = $('.our_photos_slider');
    ourPhotoSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: false,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_our_photos_slider .next-slide').click(function() {
        ourPhotoSlider.trigger('next.owl.carousel');
    });

    $('.wr_our_photos_slider .prev-slide').click(function() {
        ourPhotoSlider.trigger('prev.owl.carousel');
    });

    var newsSlider2 = $('._news_slider');
    newsSlider2.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('._wr_news_slider .next-slide').click(function() {
        newsSlider2.trigger('next.owl.carousel');
    });

    $('._wr_news_slider .prev-slide').click(function() {
        newsSlider2.trigger('prev.owl.carousel');
    });

    var capSlider = $('.our_capabilities_slider');
    capSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_our_capabilities_slider .next-slide').click(function() {
        capSlider.trigger('next.owl.carousel');
    });

    $('.wr_our_capabilities_slider .prev-slide').click(function() {
        capSlider.trigger('prev.owl.carousel');
    });

    var capListSlider = $('.cap_list_slider');
    capListSlider.owlCarousel({
        pagination: false,
        items: 4,
        loop: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        onInitialized: function() {
                var btns = document.getElementsByClassName('js-got-to-slide');
                var btnsElements = Array.prototype.slice.call(btns);
                btnsElements.forEach(function(btn) {
                    btn.onclick = function() {
                        goToSlide(Number(this.getAttribute('data-slide')) - 1);
                    };
                });
            }
            // pagination: false,
            // items: 4.4,
            // lazyLoad: true,
            // loop: false,
            // autoplay: false,
            // autoplayTimeout: 6000,
            // autoplaySpeed: 1000,
            // responsive: {
            //   1200: {
            //     items: 4.4
            //   },
            //   1100: {
            //     items: 4
            //   },
            //   820: {
            //     items: 4
            //   },
            //   0: {
            //     items: 3
            //   }
            // }
    });

    capSlider.on('changed.owl.carousel', function(event) {
        dataSlide = event.page.index;
        goToSlide(dataSlide);
    });

    // capSlider.trigger('to.owl.carousel', [1, 0]);
    // $('.cap_list_slider').find('.item').click(function() {
    //   $('.cap_list_slider').find('.item').removeClass('active');
    //   var dataSlide = $(this).attr('data-slide');
    //   dataSlide = dataSlide - 1;
    //   capSlider.trigger('to.owl.carousel', [dataSlide, 300]);
    //   $(this).addClass('active');
    // });

    // $('.next-item').click(function() {
    //   capListSlider.trigger('next.owl.carousel');
    // });

    // Pools slider
    var poolsSlider = $('.our_pools_slider');
    poolsSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000
    });

    $('.wr_our_pools_slider .next-slide').click(function() {
        poolsSlider.trigger('next.owl.carousel');
    });

    $('.wr_our_pools_slider .prev-slide').click(function() {
        poolsSlider.trigger('prev.owl.carousel');
    });

    var poolsListSlider = $('.pools_list_slider');
    poolsListSlider.owlCarousel({
        pagination: false,
        items: 4,
        loop: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000,
        onInitialized: function() {
            var btns = document.getElementsByClassName('js-got-to-slide');
            var btnsElements = Array.prototype.slice.call(btns);
            btnsElements.forEach(function(btn) {
                btn.onclick = function() {
                    goToSlide(Number(this.getAttribute('data-slide')) - 1);
                };
            });
        }
    });

    poolsSlider.on('changed.owl.carousel', function(event) {
        dataSlide = event.page.index;
        goToSlide(dataSlide);
    });


    function goToSlide(index) {
        var btns = document.getElementsByClassName('js-got-to-slide');
        var btnsElements = Array.prototype.slice.call(btns);
        btnsElements.forEach(function(btn) {
            btn.classList.remove('active');
            if (Number(btn.getAttribute('data-slide')) === index + 1) btn.classList.add('active');
        });

        // TODO: подставить сюда кол-во кнопок в нижней части слайдера :)
        countBtns = 4;
        poolsListSlider.trigger('to.owl.carousel', index < countBtns ? 0 : Math.floor(index / countBtns));
        poolsSlider.trigger('to.owl.carousel', index);

        capListSlider.trigger('to.owl.carousel', index < countBtns ? 0 : Math.floor(index / countBtns));
        capSlider.trigger('to.owl.carousel', index);
    }


    var advertisingSlider = $('.advertising_slider');
    advertisingSlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false
    });

    $('.wr_advertising_slider .next-slide').click(function() {
        advertisingSlider.trigger('next.owl.carousel');
    });

    $('.wr_advertising_slider .prev-slide').click(function() {
        advertisingSlider.trigger('prev.owl.carousel');
    });

    // Gallery slider
    var gallerySlider = $('.gallery_slider');
    gallerySlider.owlCarousel({
        pagination: false,
        items: 1,
        lazyLoad: true,
        loop: true,
        autoplay: false
    });

    $('.wr_gallery_slider .next-slide').click(function() {
        gallerySlider.trigger('next.owl.carousel');
        $('.gallery_list_slider').find('.item').removeClass('clicked');
    });

    $('.wr_gallery_slider .prev-slide').click(function() {
        gallerySlider.trigger('prev.owl.carousel');
        $('.gallery_list_slider').find('.item').removeClass('clicked');
    });

    var galleryListSlider = $('.gallery_list_slider');
    galleryListSlider.owlCarousel({
        pagination: false,
        items: 6,
        margin: 30,
        lazyLoad: true,
        loop: false,
        autoplay: false,
        responsive: {
            1300: {
                items: 6
            },
            0: {
                items: 5,
            }
        }
    });

    $('.wr_gallery_list_slider .next-slide').click(function() {
        galleryListSlider.trigger('next.owl.carousel');
    });

    $('.wr_gallery_list_slider .prev-slide').click(function() {
        galleryListSlider.trigger('prev.owl.carousel');
    });

    $('.gallery_list_slider').find('.item').click(function() {
        $('.gallery_list_slider .item').removeClass('clicked');
        $(this).addClass('clicked');
    });

    $('.gallery_list_slider').find('.item').click(function() {
        $('.gallery_list_slider').find('.item').removeClass('clicked');
        var dataSlide = $(this).attr('data-slide');
        dataSlide = dataSlide - 1;
        gallerySlider.trigger('to.owl.carousel', [dataSlide, 300]);
        $(this).addClass('clicked');
    });
    //End gallery slider


    var monthSlider = $('.month_slider');
    monthSlider.owlCarousel({
        pagination: false,
        items: 3,
        margin: 8,
        lazyLoad: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        loop: false,
        autoplay: false
    });

    $('.wr_month_slider .next-month').click(function() {
        monthSlider.trigger('next.owl.carousel');
    });

    $('.wr_month_slider .prev-month').click(function() {
        monthSlider.trigger('prev.owl.carousel');
    });

    var calendarSlider = $('.calendar_slider');
    calendarSlider.owlCarousel({
        pagination: false,
        items: 1,
        margin: 0,
        lazyLoad: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        loop: false,
        autoplay: false
    });

    var daysSlider = $('.days_slider');
    daysSlider.owlCarousel({
        pagination: false,
        items: 3,
        margin: 8,
        lazyLoad: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        loop: false,
        autoplay: false
    });

    $('.wr_days_slider .next-month').click(function() {
        daysSlider.trigger('next.owl.carousel');
    });

    $('.wr_days_slider .prev-month').click(function() {
        daysSlider.trigger('prev.owl.carousel');
    });

    calendarSlider.trigger('to.owl.carousel', [1, 0]);

    $(".month_slider").find('.item').click(function() {
        $(".month_slider .item").removeClass('selected');
        $(this).addClass('selected');
        var dataSlide = $(this).attr('data-slide');
        calendarSlider.trigger('to.owl.carousel', [dataSlide - 1, 300]);
    });


    $('select').selectric();

    $('.close_modal').click(function() {
        $.fancybox.close(true);
        $('body').css({ overflow: 'visible' });
    });

    $("[data-fancybox]").fancybox();


    $(document).on('click', '.name__menu.close', function() {
        $('.menu__header').find('.name__menu').addClass('close');
        $('.menu__header').find('.name__menu').removeClass('active');
        $(this).removeClass('close');
        $(this).addClass('active');
        $('.submenu').hide();
        $('.arrow_menu').hide();

        $(this).parent().find('.arrow_menu').show();

        if ($(this).parent().hasClass('desktop')) {
            $(this).parent().find('.submenu').slideDown(180);
        } else {
            $(this).parent().find('.submenu').show();
        }
    });

    $(document).on('click', '.name__menu.active', function() {
        $(this).parent().find('.arrow_menu').hide();
        $(this).removeClass('active');
        $(this).addClass('close');

        if ($(this).parent().hasClass('desktop')) {
            $(this).parent().find('.submenu').slideUp(100);
        } else {
            $(this).parent().find('.submenu').hide();
        }
    });

    $('.back_arrow').click(function() {
        $('.has_submenu').find('.name__menu').removeClass('active');
        $('.has_submenu').find('.name__menu').addClass('close');
        $('.submenu').hide();

        $('.cat').addClass('close');
        $('.cat').removeClass('active');
        $('.cat').parent().find('.subcat').hide();
    });

    //ОРИГИНАЛЬНОЕ (ОТКРЫТИЕ 2ГО ПОДМЕНЮ ПО КЛИКУ)
    //   $(document).on('click', '.cat.close', function() {
    //     $('.cat').addClass('close');
    //     $('.cat').removeClass('active');
    //     $('.cat').parent().find('.subcat').hide();
    //  
    //     //close menu
    //     $('.has_submenu').find('.name__menu').removeClass('active');
    //     $('.has_submenu').find('.name__menu').addClass('close');
    //     $('.submenu').hide();
    //  
    //     if ($(this).parent().hasClass('desktop')) {
    //       $(this).parent().find('.subcat').slideDown(180);
    //     } else {
    //       $(this).parent().find('.subcat').show();
    //     }
    //  
    //     $(this).removeClass('close');
    //     $(this).addClass('active');
    //  
    //   });

    //ОТКРЫТИЕ 2ГО ПОДМЕНЮ ПО НАВЕДЕНИЮ
    //МИША - AMADO - ПЕРЕДЕЛЫВАЛ СОБЫТИЕ ОТКРЫТИЯ ВТОРОГО ПОДМЕНЮ НА HOVER.
    //ХОВЕР ПОД ПК
    $(document).on('mouseover', '.cat.close', function() {
        if ($(window).width() > 1199)
            if (!$(this).hasClass('active')) {
                $('.cat').addClass('close');
                $('.cat').removeClass('active');
                $('.cat').parent().find('.subcat').hide();
                //close menu
                $('.has_submenu').find('.name__menu').removeClass('active');
                $('.has_submenu').find('.name__menu').addClass('close');
                $('.submenu').hide();

                if ($(this).parent().hasClass('desktop')) {
                    $(this).parent().find('.subcat').slideDown(180);
                } else {
                    $(this).parent().find('.subcat').show();
                }

                $(this).removeClass('close');
                $(this).addClass('active');
            }

    });

    //ПОД ТЕЛЕФОН УБИРАЕМ ХОВЕР И СТАВИМ КЛИК
    $(document).on('click', '.cat.close', function() {
        if ($(window).width() <= 1199)
            if (!$(this).hasClass('active')) {
                $('.cat').addClass('close');
                $('.cat').removeClass('active');
                $('.cat').parent().find('.subcat').hide();
                //close menu
                $('.has_submenu').find('.name__menu').removeClass('active');
                $('.has_submenu').find('.name__menu').addClass('close');
                $('.submenu').hide();

                if ($(this).parent().hasClass('desktop')) {
                    $(this).parent().find('.subcat').slideDown(180);
                } else {
                    $(this).parent().find('.subcat').show();
                }

                $(this).removeClass('close');
                $(this).addClass('active');
            }

    });

    //УБИРАЕМ ВТОРОЕ ПОД МЕНЮ ЕСЛИ КУРСОР НЕ НА МЕНЮ
    $(document).mouseover(function(event) {
        if ($(event.target).closest(".categories__header").length) return;

        $('.cat').removeClass('active');
        $('.cat').addClass('close');

        if ($('.has_subcat').hasClass('desktop')) {
            $('.has_subcat').find('.subcat').slideUp(100);
        } else {
            $('.has_subcat').find('.subcat').hide();
        }

        event.stopPropagation();
    });
    //ЗАКРЫТИЕ 2ГО ПОДМЕНЮ
    // $(document).on('click', '.cat.active', function() {
    //   $(this).addClass('close');
    //   $(this).removeClass('active');
    //
    //   if ($(this).parent().hasClass('desktop')) {
    //     $(this).parent().find('.subcat').slideUp(100);
    //   } else {
    //     $(this).parent().find('.subcat').hide();
    //   }
    // });

    $(document).click(function(event) {
        if ($(event.target).closest(".wrapper_menu__header").length) return;

        $('.wrapper_menu__header').find('.arrow_menu').hide();
        $('.wrapper_menu__header').find('.name__menu').removeClass('active');
        $('.wrapper_menu__header').find('.name__menu').addClass('close');

        if ($('.wrapper_menu__header').find('.has_submenu').hasClass('desktop')) {
            $('.wrapper_menu__header').find('.submenu').slideUp(100);
        } else {
            $('.wrapper_menu__header').find('.submenu').hide();
        }

        event.stopPropagation();
    });

    $(document).click(function(event) {
        if ($(event.target).closest(".categories__header").length) return;

        $('.cat').removeClass('active');
        $('.cat').addClass('close');

        if ($('.has_subcat').hasClass('desktop')) {
            $('.has_subcat').find('.subcat').slideUp(100);
        } else {
            $('.has_subcat').find('.subcat').hide();
        }

        event.stopPropagation();
    });

    $('.pop_questions .head').mytoggle(function() {
        $(this).parent().find('.content').slideDown(250);
        $(this).find('.arrow').addClass('up');
    }, function() {
        $(this).parent().find('.content').slideUp(150);
        $(this).find('.arrow').removeClass('up');
    });

    $('.we_need_list .head').mytoggle(function() {
        $(this).parent().find('.content').slideDown(250);
        $(this).find('.arrow').addClass('up');
    }, function() {
        $(this).parent().find('.content').slideUp(150);
        $(this).find('.arrow').removeClass('up');
    });

    $(document).on('click', '.select_dropdown .head_option.close', function() {
        $(this).removeClass('close');
        $(this).addClass('open');
        $(this).parent().find('.options').slideDown(270);
    });

    $(document).on('click', '.select_dropdown .head_option.open', function() {
        $(this).removeClass('open');
        $(this).addClass('close');
        $(this).parent().find('.options').slideUp(270);
    });

    $(document).on('click', '.select_dropdown .options .item', function() {
        $(this).parent().parent().find('.head_option').removeClass('open');
        $(this).parent().parent().find('.head_option').addClass('close');
        $(this).parent().slideUp(100);
        $(this).parent().parent().find('.head_option').text($(this).text());
    });

    // loading items
    var items1 = $('.our_procedures .row').find('.item');
    var maxItems = 20;
    // getItems(maxItems, items1, 1);

    function getItems(count, items) {
        $('.our_procedures .row').find('.item').remove();
        for (var i = 0; i < count; i++) {
            if (items1[i] != undefined) {
                $('.our_procedures .row').append(items1[i]);
                $('.our_procedures .row .item').show();
            } else {
                $('.load_more_procedures').hide();
            }
        }
    }

    var count = maxItems;
    $('.load_more_procedures').click(function() {
        count += maxItems;
        getItems(count, items1);
    });

    // hideLoad();
    function hideLoad() {
        if ($(items1).length <= maxItems) {
            $('.load_more_procedures').hide();
        }
    }

    var items2 = $('.our_advantages2 .row').find('.item');
    var maxItems2 = 20;

    function getItems2(count, items) {
        $('.our_advantages2 .row').find('.item').remove();
        for (var i = 0; i < count; i++) {
            if (items2[i] != undefined) {
                $('.our_advantages2 .row').append(items2[i]);
                $('.our_advantages2 .row .item').show();
            } else {
                $('.load_more_advantages').hide();
            }
        }
    }

    var count2 = maxItems2;
    $('.load_more_advantages').click(function() {
        count2 += maxItems2;
        getItems2(count2, items2);
    });

    function equalHeight(group) {
        var tallest = 0;
        group.addClass('equal_height');
        group.each(function() {
            thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        group.height(tallest);
        // group.removeClass('equal_height');
    }

    function initEqualHeight() {
        var cols1 = $(".our_advantages2 .item");
        equalHeight(cols1);
    }

    initEqualHeight();

    var aboutBlockHeight = $('.wr_about_list').height();
    $('.wr_about').height(aboutBlockHeight);

    $('.docs').find('.item').click(function() {
        $.fancybox.open($(this).find('#modalDocument'));
    });

    $('.photo_gallery').find('.item').click(function() {
        $.fancybox.open($(this).find('#modalGallery'));
    });

    $('.callback_modal .close_modal').click(function() {
        $('.callback_modal').hide();
        $('.dark_layout').hide();
    });

    $('.call_back').click(function(e) {
        e.preventDefault();
        $('.dark_layout').show();
        $('.callback_modal').show();
    });

    $('#order_online').click(function(e) {
        e.preventDefault();
        $("body").css("overflow", "hidden");
        $('.wrapper_order_online_modal').show();
        $('.dark_layout').show();
    });

    $('.wrapper_order_online_modal .close_modal').click(function() {
        $('.wrapper_order_online_modal').hide();
        $('.dark_layout').hide();
    });

    $('.order_list .item1').click(function() {
        $('.choose-1').show();
    });

    $('.order_list .item2').click(function() {
        $('.choose-2').show();
    });

    $('.order_list .item3').click(function() {
        $('.choose-3').show();
        setTimeout(function() {
            $('.month_slider').css({ opacity: 1 });
            $('.calendar_slider').css({ opacity: 1 });
        }, 500);
    });

    $('.choose-1 .back_arrow').click(function() {
        $('.choose-1').hide();
    });

    $('.choose-2 .back_arrow').click(function() {
        $('.choose-2').hide();
        if ($('.choose-2 .choose_service').is('.selected')) {
            $('.order_list .item2').addClass('active');
        } else {
            $('.order_list .item2').removeClass('active');
        }
    });

    $('.choose-3 .back_arrow').click(function() {
        $('.choose-3').hide();
    });

    $('.choose-4 .back_arrow').click(function() {
        $('.choose-4').hide();
    });

    $('.choose-5 .back_arrow').click(function() {
        $('.choose-5').hide();
    });

    $('.spec_list').find('.item').click(function() {
        $('.spec_list .item').removeClass('active');
        $(this).addClass('active');
        var name = $(this).find('.title').text();
        $('.order_list .item1').addClass('active');
        $('.order_list .item1').find('.selected').text(name);
        $('.choose-1').hide();
    });

    $('.choose-2 .choose_service').mytoggle(function() {
        $(this).addClass('selected');
        $(this).text('УБРАТЬ');
    }, function() {
        $(this).removeClass('selected');
        $(this).text('ВЫБРАТЬ');
    });

    $('.calendar').find('.day.available').click(function() {
        $('.calendar .day').removeClass('selected');
        $(this).addClass('selected');
        $('.choose-4').show();
        setTimeout(function() {
            $('.days_slider').css({ opacity: 1 });
        }, 500);

        var dataDay = $(this).attr('data-day');
        dataDay = dataDay - 1;
        $('.days_slider').find('.item').removeClass('selected');
        $('.days_slider').find('.item').eq(dataDay).addClass('selected');
        dataDay = parseInt(dataDay / 3);
        daysSlider.trigger('to.owl.carousel', [dataDay, 0]);
    });

    $('.available_time').find('.col').click(function() {
        $('.available_time .col').removeClass('selected');
        $(this).addClass('selected');
        $('.choose-3, .choose-4').hide();
        $('.order_list .item3').addClass('active');
    });

    $('.order_online_btn').click(function() {
        $('.choose-5').show();
    });

    $('.checkbox').mytoggle(function() {
        $(this).removeClass('active');
        $(this).parent().find('input:checkbox').val("");
    }, function() {
        $(this).addClass('active');
        $(this).parent().find('input:checkbox').val("14");
    });

    $('.reminder label').mytoggle(function() {
        $(this).parent().find('.checkbox').removeClass('active');
    }, function() {
        $(this).parent().find('.checkbox').addClass('active');
    });

/*
	$('.subscribe_form .send_subscribe_form').click(function() {
		var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		if (testEmail.test($('.subscribe_form .email_field').val())){

		}else{
			alert('Заполните все поля!');
		}
    });
*/

    $('.subscribe_form .email_field').focus(function() {
        $(this).addClass('focus');
        $(this).parent().find('.note').css({ top: '-10px', opacity: 1 });
        $(this).attr('placeholder', '');
    });

    $('.subscribe_form .email_field').focusout(function() {
        var str = this.value;
        if (str.length < 1) {
            $(this).parent().find('.note').css({ top: '45px', opacity: 0 });
            $(this).removeClass('focus');
            $(this).attr('placeholder', 'Электронная почта');
        }
    });

    $('.feedback_form input, .feedback_form textarea').focus(function() {
        $(this).addClass('focus');
        $(this).parent().find('.note').css({ top: '-10px', opacity: 1 });
        $(this).attr('placeholder', '');
    });

    $('.feedback_form input, .feedback_form textarea').focusout(function() {
        var str = this.value;
        if (str.length < 1) {
            var noteText = $(this).parent().find('.note').text();
            $(this).parent().find('.note').css({ top: '45px', opacity: 0 });
            $(this).removeClass('focus');
            $(this).attr('placeholder', noteText);
        } else {
            $(this).removeClass('error');
        }
    });

    $('.feedback_form .send_feedback_form').click(function(e) {
        var fields = $(this).parent().parent().find('input, textarea');
        var k = 0;
        $(fields).each(function(i, e) {
            console.log(e)
            if ( ( e.type === 'checkbox' && e.checked === false ) || e.value.length == '') {
                $(e).addClass('error');
                $(e).parent().find('.error_message').show();
                k++;
            } else {
                $(e).removeClass('error');
                $(e).parent().find('.error_message').hide();
            }
        });
        if (k == 0) {
            ga('gtm2.send', 'event', 'form', 'vopros');
            ym(29323175, 'reachGoal', 'vopros');
            return true;
        } else {
            return false;
        }
    });

    $('.stars .star').hover(function() {
        var dataStar = $(this).attr('data-star');
        $('.stars .star').removeClass('half full');
        $('.stars .star').each(function(i, e) {
            if (i < dataStar) {
                $(e).addClass('full');
            }
        });
    }, function() {
        $('.stars .star').removeClass('half full');
    });


    var width = 205;
    var height = 27;
    var waterModel = new WaterModel(width, height, {
        resolution: 1.6,
        interpolate: true,
        damping: 0.865,
        clipping: 0,
        evolveThreshold: 0.05,
        maxFps: 26,
        showStats: false
    });
    var waterCanvas = new WaterCanvas(width, height,
        "waterHolder", waterModel, {
            backgroundImageUrl: "/images/logo.jpg",
            lightRefraction: 1.3,
            lightReflection: 0,
            maxFps: 26,
            showStats: false
        });
    $('#waterHolder').mousemove(function(e) {
        var ff = $(this);
        var offset = ff.offset();
        var ofs = e.pageX - offset.left;
        var ofs2 = e.pageY - offset.top;

        //$('#koord').html(ofs2);
        var finger = [
            [0.5, 1.0, 0.5],
            [1.0, 1.0, 1.0],
            [0.5, 1.0, 0.5]
        ];
        waterModel.touchWater(ofs, ofs2, 1.5, finger);
    });

});

// Вот этот кусок кода
$(document).on('click', '.has-child > a', function(e) {
    e.preventDefault();
    $(this).closest('.has-child').addClass('active');
    $('#sidebar-nav-wrap .kinez_menu').height($(this).closest('.has-child').find('ul').height() + 'px');
    $('#sidebar-nav-wrap .kinez_menu').css({ 'overflow': 'hidden' });
    $('#sidebar-nav-wrap').mCustomScrollbar('update');
    $('#sidebar-nav-btn-back').addClass('is-visible');
    return false;
});

$(document).on('click', '#sidebar-nav-btn-back', function() {
    $('.has-child.active').removeClass('active');
    $('#sidebar-nav-wrap .kinez_menu').height('auto');
    $('#sidebar-nav-wrap .kinez_menu').css({ 'overflow': 'visible' });
    $('#sidebar-nav-wrap').mCustomScrollbar('update');
    $('#sidebar-nav-btn-back').removeClass('is-visible');
});

$(window).on('load', function() {
    $('#sidebar-nav-wrap').mCustomScrollbar();
});
// до сюда


//29.07.2019 MISHA (RECAPTCHA) - обработка форм с помощью ajax
//global
//var captchaCheck = false; //

//Обработка форм на капчу
//$('body,html').on('click' , '.callback_modal .simple_red_btn , .questions_section .send_question_form , .feedback_form .bottom_form .send_feedback_form' , function (e){

//if (!captchaCheck)
//  e.preventDefault();
//else
//  captchaCheck = false;
// else
// {
//   // captchaCheck = false;
//   var name = $(this).parent().find("input[name='form_text_10']").val(),
//       phone = $(this).parent().find("input[name='form_text_12']").val(),
//       message = $(this).parent().find("textarea").val(),
//       checkbox = $(this).parent().find("input[type='checkbox']").val();
//   $.ajax({
//     method: "post",
//     url: "/local/ajax/formBackAjax.php",
//     data: {name:name , phone:phone , message:message , checkbox:checkbox},
//     success: function (data){
//         if (data)
//           alert('Сообщение отправлено!');
//         else
//           alert("Ошибка в отправке сообщения");
//     },
//     beforeSend: function (){
//       console.log('запуск ajax запроса');
//     }
//   })
//
//   e.preventDefault();
// }

//});
//$(document).ready(function(){
//	if(document.body.clientWidth<=540){
//		for(var i = 1;i<=$(".main_slider .owl-item").length;i++){
//			var slide = $(".main_slider .owl-item:nth-child("+i+") .slide").html();
//			var href = $(".main_slider .owl-item:nth-child("+i+") .read_more").attr("href");
//			$(".main_slider .owl-item:nth-child("+i+") .slide *").remove();
//			$('<a href="'+href+'">' + slide + '</a>').appendTo($(".main_slider .owl-item:nth-child("+i+") .slide"));
//		}
//	}
//});

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            if (document.body.clientWidth >= 768) {
                $('.arrow_up').fadeIn();
            }
        } else {
            $('.arrow_up').fadeOut();
        }
    });
    $('.arrow_up').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 300);
    });
});


//29.07.2019 MISHA (RECAPTCHA) - обработка форм с помощью ajax
//global
var html_form_callback = '';
var captchaCheck = false; //

$('body,html').on('click', '.order_form .send_callback', function(e) {

    if (0&&!captchaCheck)
        e.preventDefault();
    else {
        // captchaCheck = false;
        var name = $(this).parent().find("input[name='form_text_10']").val(),
            phone = $(this).parent().find("input[name='form_text_12']").val(),
            fz152 = $(this).parent().find("input[name^='form_checkbox_fz152']")?.[0],
            message = $(this).parent().find("textarea")?.val() || '',
            recaptcha = $(this).parent().find("#g-recaptcha-response")?.val() || '';
		if(name == '' || phone == '' || ( fz152 && !fz152.checked ) ){
			$('.order_form .order_form-error').remove();
			$('.order_form .form_callback').prepend("<p class='order_form-error'>Заполните все поля!</p>");
		}else{
			$.ajax({
				method: "post",
				url: "/local/ajax/formBackAjax.php",
				data: { name: name, phone: phone, message: message, fz152: fz152?.value || '', 'g-recaptcha-response': recaptcha },
				success: function(data) {
					if (!data)
						alert("Ошибка в отправке сообщения");
					else {
						grecaptcha.reset();
						ga('send', 'event', 'form', 'callme');
						ym(29323175, 'reachGoal', 'callme');
						return true;
					}
	
				},
				beforeSend: function() {
					// console.log('запуск ajax запроса');
				}
			});
			$('.order_form .order_form-error').remove();
			$(this).parent().find("input[name='form_text_10']").val('');
			$(this).parent().find("input[name='form_text_12']").val('');
			$(this).parent().find("textarea").val('');
			$(this).parent().css({ 'display': 'none' });
			$(".result_callback").css({ 'display': 'block' });
		}
        e.preventDefault();
    }

});

function validateEmail(email) {
    var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}

$('body,html').on('submit', 'form[name="form_subscribes"]', function(e) {

//from btnClick to submit event
    e.preventDefault();
	var btn = $('form[name="form_subscribes"]').find('input[name=form_email_45]');
    // captchaCheck = true;
    var email = btn.val(); 
//console.log(email, validateEmail(email));   
    var fz152 = this.querySelector('[name="form_checkbox_fz152"]');
//console.log($(this)[0].elements.form_email_45.value);   
    if ( fz152?.checked ||validateEmail(email )) {

        $.ajax({
            method: "post",
            url: "/local/ajax/formSubscribesAjax.php",
            data: { email: email },
            success: function(data) {
                if (!data)
                    alert("Ошибка в отправке сообщения");
                else {
                    $('<div class="message_sent_BG"></div><div class="message_sent"> <h4>ВАШЕ СООБЩЕНИЕ ОТПРАВЛЕНО</h4><p>Спасибо!<br> На адрес подписки выслан код подтверждения.</p><input id="sent_message" class="send_order_form simple_red_btn" type="button" value="Закрыть" /></div>').appendTo('body');
                    // history.pushState("?", document.title, window.location.pathname);
                    return true;
                }
            },
            error: function(){
                alert("Ошибка в отправке сообщения");
            },
            beforeSend: function() {
                // console.log('запуск ajax запроса');
            }
        });
        btn.parent().parent().find("input[name='form_text_45']").val('');
        btn.parent().parent().find("input[name='form_text_45']").removeClass('focus');
        btn.parent().parent().find("input[name='form_text_45']").attr('placeholder','Электронная почта');
        btn.parent().parent().find(".note").css({'top':'45px','opacity':'0'});
	}

});

$('body,html').on('click', '.order_form #send_more', function(e) {
    $(this).parent().css({ 'display': 'none' });
    $(".form_callback").css({ 'display': 'block' });
});


$('body,html').on('click', '.message_sent #sent_message', function(e) {
    $('.message_sent').remove();
    $('.message_sent_BG').remove();
});

//ПЕРЕХОД ПО ССЫЛКАМ НА ГЛАВНОМ СЛАЙДЕРЕ (СДЕЛАНО ТАК ПОТОМУ ЧТО ПРОБЕЛМА С ВЛОЖЕННЫМИ ССЫЛКАМИ)
(function() {

    $('body,html').on('click', '.main_slider .slide', function() {
        if ($(window).width() < 600) {
            let link = $(this).attr('id');
            //               console.log(link);
            document.location.href = link;
        }
    });

}());
window.addEventListener('DOMContentLoaded', function() {
    new SmartPhoto(".js-smartPhoto");
});
$(document).on('click', '.wrapper_menu__header .has_submenu.mobile .name__menu', function() {
    var sportcomplex_top = $('.wrapper_menu__header').height();
    $('.wrapper_menu__header .has_submenu.mobile .submenu').css({ 'max-height': sportcomplex_top, 'min-height': sportcomplex_top });
});

/* Подгонка размеров объявлений на главной, остальная часть в styles.min.css */

$(window).on("load resize", function () {
    $(".ads_slider").find(".owl-stage").find(".content").height("auto");
    if(document.body.clientWidth<=767){
        var maxHeight = 0;
        $(".ads_slider").find(".owl-stage").find(".content").each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height()+20;
            }
        }).height(maxHeight);
    }
});
/* End */
;; /* /local/templates/olympia/js/jquery-3.4.1.min.js?167325310688145*/
; /* /local/templates/olympia/js/search.js?1673253106957*/
; /* /local/templates/olympia/js/bitrix_form.js?16732531061144*/
; /* /local/templates/olympia/js/smartphoto.min.js?167325310654494*/
; /* /bitrix/components/x10/popup_multi/templates/.default/script.js?177996897316447*/
; /* /local/templates/olympia/components/bitrix/menu/overtop_multilevel_custom/script.min.js?1728624305407*/
; /* /local/templates/olympia/components/bitrix/menu/top_multilevel/script.min.js?1697106348409*/
; /* /local/templates/olympia/js/libs.min.js?1673253106198511*/
; /* /local/templates/olympia/libs/watercanvas.js?167325310423600*/
; /* /local/templates/olympia/libs/select/js/select.js?167325310436164*/
; /* /local/templates/olympia/js/jquery.mCustomScrollbar.concat.min.js?167325310645479*/
; /* /local/templates/olympia/js/main.js?178704689948005*/

//# sourceMappingURL=template_d36d6cf9028320fb62d0ec5428061a1a.map.js