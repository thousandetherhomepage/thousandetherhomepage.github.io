(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{258:function(t,n,e){"use strict";e.r(n);e(136),e(48),e(261),e(196);var r={props:["ad","showNSFW","skipImage"],data:function(){return{blank:!1}},computed:{shown:function(){return!this.ad.NSFW||this.showNSFW},link:function(){return this.shown?this.ad.link&&function(link){var t=link.trim().toLowerCase();return!(!t.startsWith("javascript:")&&!t.startsWith("data:"))}(this.ad.link)?"":this.ad.link:""},title:function(){return this.shown?this.ad.title:"NSFW hidden"},image:function(){return!this.shown||this.blank?"":(t=this.ad.image)?(t.startsWith("bzz://")?t="http://swarm-gateways.net/bzz:/"+t.slice(6):t.startsWith("ipfs://")&&(t="https://gateway.ipfs.io/ipfs/"+t.slice(7)),t):"";var t},style:function(){return function(t,n){if(!t.width)return{display:"none"};var s={left:10*t.x+"px",top:10*t.y+"px",width:10*t.width+"px",height:10*t.height+"px"};return n||!t.image?s.background="#"+t.owner.slice(-6)+"cc":s.background="#fff",s}(this.ad,this.blank)},classMap:function(){return{nsfwAd:!this.shown,blank:this.blank}}},methods:{placeholder:function(t){this.blank=!0,t.target.setAttribute("x-original-src",this.ad.image),t.target.src="/static/broken-image.svg"}}},o=e(47),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a",{attrs:{href:t.link,target:"_blank"}},[t.skipImage?e("div",{class:t.classMap,style:t.style,attrs:{title:t.title}}):e("img",{class:t.classMap,style:t.style,attrs:{src:t.image,title:t.title},on:{error:t.placeholder}})])}),[],!1,null,null,null);n.default=component.exports},261:function(t,n,e){"use strict";var r=e(5),o=e(197).trim;r({target:"String",proto:!0,forced:e(263)("trim")},{trim:function(){return o(this)}})},263:function(t,n,e){var r=e(6),o=e(198);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},269:function(t,n,e){var content=e(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(103).default)("7f0ad6b3",content,!0,{sourceMap:!1})},278:function(t,n,e){"use strict";e(269)},279:function(t,n,e){var r=e(102)(!1);r.push([t.i,".adList{background:#fff}.adList img{vertical-align:middle;padding:5px}.adList ul{list-style:none;padding:0;margin:0}.adList li{background:#ddd;margin-bottom:.5em}",""]),t.exports=r},290:function(t,n,e){"use strict";e.r(n);e(48),e(20),e(31),e(50),e(32),e(38),e(51),e(52),e(39);function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw l}}}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var l={props:["showNSFW"],data:function(){return{omitted:0,num:0}},computed:{listAds:function(){var t,n=0,e=0,o=[],l=r(this.$store.state.ads);try{for(l.s();!(t=l.n()).done;){var c=t.value;c&&c.image||(n+=1),e+=1,o.push(c)}}catch(t){l.e(t)}finally{l.f()}return o.reverse(),this.omitted=n,this.num=e,o}},components:{Ad:e(258).default}},c=(e(278),e(47)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"adList"},[e("p",[t._v("Listing "+t._s(t.num)+" published ads and omitting "+t._s(t.omitted)+" empty ads.")]),t._v(" "),t._m(0),t._v(" "),t._l(t.listAds,(function(n){return e("ul",{key:n.idx},[e("li",[e("Ad",{attrs:{showNSFW:t.showNSFW,ad:n}})],1)])}))],2)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",[e("strong",[t._v("Newest ad first:")])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Ad:e(258).default})}}]);