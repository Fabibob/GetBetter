(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{293:function(t,e,n){"use strict";n.r(e);n(30),n(39),n(9),n(24),n(38),n(23),n(29),n(40),n(41),n(26);function r(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={props:{document:{required:!0,type:Object}},data:function(){return{anchors:[],activeAnchor:null,showNav:!1,stick:!1}},mounted:function(){var t,e=this,n=r(this.document.body.children);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.tag&&o.children&&"h"===o.tag[0]){var title=null;o.children.forEach((function(t){"text"===t.type&&(title=t.value)})),this.anchors.push({id:o.props.id,title:title,depth:parseInt(o.tag[1],10)})}}}catch(t){n.e(t)}finally{n.f()}window.addEventListener("scroll",(function(){var rect=e.$refs["sticky-guard"].getBoundingClientRect();e.stick=rect.y<=0})),window.addEventListener("message",(function(t){if(0!==t.data["datawrapper-height"]){var e=document.querySelectorAll("iframe");for(var a in t.data["datawrapper-height"])for(var n=0;n<e.length;n++)e[n].contentWindow===t.source&&(e[n].style.height="".concat(t.data["datawrapper-height"][a],"px"))}}))},methods:{jumpTo:function(t){this.activeAnchor=t,this.showNav&&(this.showNav=!1)}}},l=n(14),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"mt-0 md:-mt-16 max-w-prose mx-auto"},[n("h1",{staticClass:"mb-12 text-center text-5xl md:text-8xl text-green-800 font-normal font-sans"},[t._v("\n        "+t._s(t.document.title)+"\n    ")]),t._v(" "),t.showNav&&t.anchors.length>0?n("div",{staticClass:"fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 z-10",on:{click:function(e){t.showNav=!1}}}):t._e(),t._v(" "),t.anchors.length>0?n("div",{staticClass:"h-full z-20",class:{"left-1/2 z-10 -translate-x-1/2 -translate-y-1/2":t.showNav,"hidden xl:block pr-4 transform -translate-x-full":!t.showNav,"fixed xl:top-10":t.stick,"fixed xl:absolute":!t.stick}},[n("div",{staticClass:"p-4 mr-0 xl:mr-4 w-64 bg-green-200"},[n("div",{staticClass:"mb-2 pb-2 text-2xl font-medium border-b-2 border-green-300"},[t._v("\n                Inhalte\n            ")]),t._v(" "),t._l(t.anchors,(function(e){return n("div",{key:e.id,staticClass:"truncate",style:{paddingLeft:10*(e.depth-1)+"px"}},[n("a",{staticClass:"text-black hover:text-green-700 no-underline!important truncate",class:{"text-sm":e.depth>1},attrs:{href:"#"+e.id},on:{click:function(n){return t.jumpTo(e)}}},[t._v("\n                    "+t._s(e.title)+"\n                ")])])})),t._v(" "),n("a",{staticClass:"block text-black hover:text-green-700 no-underline!important truncate mt-2 pt-2 border-t-2 border-green-300",attrs:{href:"#top"}},[t._v("\n                Nach oben\n            ")])],2)]):t._e(),t._v(" "),n("div",{ref:"sticky-guard",staticClass:"prose prose-green max-w-none mx-auto overflow-x-auto"},[n("nuxt-content",{ref:"content",attrs:{document:t.document}})],1),t._v(" "),n("div",{staticClass:"block xl:hidden fixed mr-10 mb-10 bottom-0 right-0 z-20"},[n("button",{staticClass:"rounded-full bg-green-300 focus:bg-green-400 p-4 shadow",on:{click:function(e){t.showNav=!t.showNav}}},[t._v("\n            Nav\n        ")])])])}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(44),{layout:"content",data:function(){return{page:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("umwelt").fetch();case 2:t.page=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Umwelt - Get Better"}}}),c=n(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.page?n("Content",{attrs:{document:t.page}}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Content:n(293).default})}}]);