(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{258:function(e,t,r){"use strict";r.r(t);r(136),r(48),r(261),r(196);var n="/broken-image.png",o={props:["ad","showNSFW","skipImage"],data:function(){return{blank:!1}},computed:{shown:function(){return!this.ad.NSFW||this.showNSFW},link:function(){return this.shown?this.ad.link&&function(link){var e=link.trim().toLowerCase();return!(!e.startsWith("javascript:")&&!e.startsWith("data:"))}(this.ad.link)?"":this.ad.link:""},title:function(){return this.shown?this.ad.title:"NSFW hidden"},image:function(){return!this.shown||this.blank?"":(e=this.ad.image)?(e.startsWith("bzz://")?e="http://swarm-gateways.net/bzz:/"+e.slice(6):e.startsWith("ipfs://")&&(e="https://gateway.ipfs.io/ipfs/"+e.slice(7)),e):"";var e},style:function(){return function(e,t){if(!e.width)return{display:"none"};var s={left:10*e.x+"px",top:10*e.y+"px",width:10*e.width+"px",height:10*e.height+"px"};return t||!e.image?s.background="#"+e.owner.slice(-6)+"cc":s.background="#fff",s}(this.ad,this.blank)},classMap:function(){return{nsfwAd:!this.shown,blank:this.blank}}},methods:{placeholder:function(e){!0!==this.blank&&(this.blank=!0,e.target.setAttribute("x-original-src",this.ad.image),e.target.src=n)}}},l=r(47),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:e.link,target:"_blank"}},[e.skipImage?r("div",{class:e.classMap,style:e.style,attrs:{title:e.title}}):r("img",{class:e.classMap,style:e.style,attrs:{src:e.image,title:e.title},on:{error:e.placeholder}})])}),[],!1,null,null,null);t.default=component.exports},262:function(e,t,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(103).default)("478a7cde",content,!0,{sourceMap:!1})},264:function(e,t,r){"use strict";r.r(t);r(48),r(31),r(50),r(32),r(38),r(51),r(52),r(39);var n=r(9),o=(r(20),r(104),r(49),r(105));function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){d=!0,o=e},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var d={props:["provider","contract","isReadOnly"],data:function(){return ga("send",{hitType:"event",eventCategory:this.contract._network,eventAction:"buy-open"}),{error:null,success:null,available:!1}},computed:{isAvailable:function(){return this.checkAvailable(this.$parent.left,this.$parent.top,this.$parent.width,this.$parent.height,this.$store.state.ads)}},methods:{price:function(e,t){return Math.ceil(e*t*.001*100)/100},checkAccounts:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==window.ethereum){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,window.ethereum.enable();case 4:r=t.sent,n=l(r);try{for(n.s();!(o=n.n()).done;)c=o.value,e.$store.commit("addAccount",c)}catch(e){n.e(e)}finally{n.f()}case 7:case"end":return t.stop()}}),t)})))()},checkAvailable:function(e,t,r,n){var o=Math.floor(e/10),l=Math.floor(t/10),c=o+Math.floor(r/10)-1,d=l+Math.floor(n/10)-1;return!this.$store.getters.isColliding(o,l,c,d)},buy:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,c,d,h,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r={x:e.$parent.left,y:e.$parent.top,width:e.$parent.width,height:e.$parent.height},e.checkAvailable(r.x,r.y,r.width,r.height)){t.next=4;break}return e.error="Slot is not available: ".concat(r),t.abrupt("return");case 4:return n=o.a.utils.parseUnits(e.price(r.width,r.height).toString(),"ether"),l=Math.floor(r.x/10),c=Math.floor(r.y/10),d=Math.floor(r.width/10),h=Math.floor(r.height/10),ga("send",{hitType:"event",eventCategory:e.contract._network,eventAction:"buy-submit",eventValue:n,eventLabel:r.width+"x"+r.height}),t.next=9,e.provider.getSigner();case 9:return f=t.sent,t.prev=10,t.next=13,e.contract.connect(f).buy(l,c,d,h,{value:n});case 13:t.sent,t.next=23;break;case 16:if(t.prev=16,t.t0=t.catch(10),ga("send",{hitType:"event",eventCategory:e.contract._network,eventAction:"buy-error",eventLabel:JSON.stringify(t.t0)}),-1===(t.t0.stack||t.t0.message||"").indexOf("User denied transaction signature.")){t.next=21;break}return t.abrupt("return");case 21:return e.error=t.t0.toString(),t.abrupt("return");case 23:e.success="Transaction sent successfully.",e.$emit("buy",{x:l,y:c,width:d,height:h}),ga("send",{hitType:"event",eventCategory:e.contract._network,eventAction:"buy-success",eventValue:n,eventLabel:r.width+"x"+r.height});case 26:case"end":return t.stop()}}),t,null,[[10,16]])})))()}}},h=(r(266),r(47)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.enabled,expression:"$parent.enabled"}],class:{available:e.isAvailable},attrs:{id:"adBuy"}},[r("div",[e._v("\n    "+e._s(e.$parent.width)+"x"+e._s(e.$parent.height)+" = "+e._s(e.$parent.width*e.$parent.height)+" pixels at position ("+e._s(e.$parent.left)+", "+e._s(e.$parent.top)+").\n  ")]),e._v(" "),r("div",[e._v("\n    Price: "+e._s(e.price(e.$parent.width,e.$parent.height))+" ETH + gas fees.\n  ")]),e._v(" "),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e.success?r("p",{staticClass:"success"},[e._v(e._s(e.success))]):e.isAvailable?r("p",[r("strong",[e._v("Slot is available.")]),e._v(" "),this.$store.state.activeAccount?r("button",{attrs:{disabled:e.isReadOnly},on:{click:e.buy}},[e._v("Buy Pixels")]):e.isReadOnly?r("button",{attrs:{disabled:"disabled"},on:{click:e.checkAccounts}},[e._v("Buy disabled (read-only mode)")]):r("button",{on:{click:e.checkAccounts}},[e._v("Connect Wallet to Buy")])]):r("p",[e._v("\n    Slot is not available.\n  ")])])}),[],!1,null,null,null);t.default=component.exports},266:function(e,t,r){"use strict";r(262)},267:function(e,t,r){var n=r(102)(!1);n.push([e.i,"#adBuy{position:absolute;background:#fff;border:2px solid #d90006;display:block;width:400px;height:80px;margin-top:-110px;padding:5px;text-align:center}#adBuy.available{border-color:#97d900}.error{color:red}",""]),e.exports=n},268:function(e,t,r){var content=r(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(103).default)("6e38a3fa",content,!0,{sourceMap:!1})},276:function(e,t,r){"use strict";r(268)},277:function(e,t,r){var n=r(102)(!1);n.push([e.i,".adGrid{background-image:linear-gradient(90deg,hsla(0,0%,100%,.97),hsla(0,0%,100%,.97)),linear-gradient(90deg,#000 50%,#fff 0),linear-gradient(180deg,#000 50%,#fff 0);background-blend-mode:normal,difference,normal;background-size:20px 20px}.adGrid .nsfwAd,.adGrid a div,.adGrid img{position:absolute;display:block;overflow:hidden;font-size:11px;color:rgba(0,0,0,.7);white-space:nowrap}.adGrid .blank{outline:2px solid rgba(0,0,0,.1);outline-offset:-2px}.adGrid .nsfwAd{background:#000}.adGrid.active img{box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.4)}.adGrid .previewAd{background:hsla(0,0%,100%,.8);border:1px solid hsla(0,0%,100%,.9);z-index:5}.adGrid .previewAd.locked{background:#ffcc47}",""]),e.exports=n},289:function(e,t,r){"use strict";r.r(t);var n=r(258),o=r(264),l=r(292),c=r.n(l),d=(r(293),{props:["provider","contract","isReadOnly","showNSFW","prerendered"],data:function(){return{previewLocked:!1,loadRemoteImages:!this.prerendered||this.prerendered.loadRemoteImages}},methods:{onBuy:function(e){this.previewLocked=!0},updatePreview:function(e,t,r,n){var o=this.$refs.draggable;this.$store.commit("updatePreview",{x:o.left,y:o.top,width:o.width,height:o.height})},gridStyle:function(e){if(e)return{"background-image":"url("+e.image+")"}}},components:{"vue-draggable-resizable":c.a,Ad:n.default,Buy:o.default}}),h=(r(276),r(47)),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:{adGrid:!0,active:!!e.$store.state.previewAd},style:e.gridStyle(e.prerendered)},[e._l(e.$store.state.ads,(function(t){return[t?r("Ad",{key:t.idx,attrs:{showNSFW:e.showNSFW,ad:t,skipImage:!e.loadRemoteImages}}):e._e()]})),e._v(" "),e.$store.state.previewAd?r("vue-draggable-resizable",{ref:"draggable",class:{previewAd:!0,locked:e.previewLocked},attrs:{active:!0,minWidth:10,minHeight:10,x:e.$store.state.previewAd.x,y:e.$store.state.previewAd.y,w:80,h:40,grid:[10,10],parent:!0,draggable:!e.previewLocked,resizable:!e.previewLocked},on:{dragstop:e.updatePreview,resizestop:e.updatePreview}},[r("Buy",{attrs:{provider:e.provider,contract:e.contract,isReadOnly:e.isReadOnly},on:{buy:e.onBuy}})],1):e._e()],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Ad:r(258).default,Buy:r(264).default})}}]);