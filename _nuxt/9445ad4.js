(window.webpackJsonp=window.webpackJsonp||[]).push([[6,9],{324:function(e,t,r){"use strict";r.r(t);r(323),r(61),r(163),r(334);var n={props:["ad","showNSFW","skipImage"],data:function(){return{blank:!1,brokenImage:""}},computed:{shown:function(){return!this.ad.NSFW||this.showNSFW},link:function(){return this.shown?this.ad.link&&function(link){var e=link.trim().toLowerCase();return!!(e.startsWith("javascript:")||e.startsWith("data:")||e.startsWith("file:"))}(this.ad.link)?"":this.ad.link:""},title:function(){return this.shown?this.ad.title:"NSFW hidden"},image:function(){if(!this.shown)return"";var e=function(e){var u=e.trim().toLowerCase();if(!u)return"";if(u.startsWith("bzz://"))e="http://swarm-gateways.net/bzz:/"+e.slice(6);else if(u.startsWith("ipfs://"))e="https://gateway.ipfs.io/ipfs/"+e.slice(7);else if(u.startsWith("https://gateway.pinata.cloud/ipfs/"))e="https://gateway.ipfs.io/ipfs/"+e.slice(34);else if(u.startsWith("file:"))return"";return e}(this.ad.image);return""===e||e==this.brokenImage?(this.blank=!0,this.ad.title?e:"/broken-image.png"):e},style:function(){return function(e,t){if(!e.width)return{display:"none"};var s={left:10*e.x+"px",top:10*e.y+"px",width:10*e.width+"px",height:10*e.height+"px"};return t||!e.image?s.background="#"+e.owner.slice(-6)+"cc":s.background="#fff",s}(this.ad,this.blank)},classMap:function(){return{nsfwAd:!this.shown,blank:this.blank}}},methods:{setBroken:function(e){this.brokenImage=e.target.src}}},o=r(60),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("a",{attrs:{href:e.link,target:"_blank","data-idx":e.ad.idx}},[e.skipImage?t("div",{class:e.classMap,style:e.style,attrs:{title:e.title}}):t("img",{class:e.classMap,style:e.style,attrs:{src:e.image,title:e.title},on:{error:e.setBroken}})])}),[],!1,null,null,null);t.default=component.exports},335:function(e,t,r){var content=r(347);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(126).default)("c3558796",content,!0,{sourceMap:!1})},344:function(e,t,r){"use strict";r.r(t);r(45),r(63),r(64),r(65),r(61),r(41),r(36),r(46),r(47);var n=r(9),o=(r(24),r(51),r(62),r(34));function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,a){if(e){if("string"==typeof e)return c(e,a);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,a):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,l=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw l}}}}function c(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}var d={props:["provider","contract","isReadOnly"],data:function(){return{error:null,success:null,available:!1}},computed:{isAvailable:function(){return this.checkAvailable(this.$parent.left,this.$parent.top,this.$parent.width,this.$parent.height,this.$store.state.ads)}},methods:{price:function(e,t){return Math.ceil(e*t*.001*100)/100},checkAccounts:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==window.ethereum){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,window.ethereum.enable();case 4:r=t.sent,n=l(r);try{for(n.s();!(o=n.n()).done;)c=o.value,e.$store.commit("addAccount",c)}catch(e){n.e(e)}finally{n.f()}case 7:case"end":return t.stop()}}),t)})))()},checkAvailable:function(e,t,r,n){var o=Math.floor(e/10),l=Math.floor(t/10),c=o+Math.floor(r/10)-1,d=l+Math.floor(n/10)-1;return!this.$store.getters.isColliding(o,l,c,d)},buy:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,l,c,d,h,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r={x:e.$parent.left,y:e.$parent.top,width:e.$parent.width,height:e.$parent.height},e.checkAvailable(r.x,r.y,r.width,r.height)){t.next=4;break}return e.error="Slot is not available: ".concat(r),t.abrupt("return");case 4:return n=o.a.utils.parseUnits(e.price(r.width,r.height).toString(),"ether"),l=Math.floor(r.x/10),c=Math.floor(r.y/10),d=Math.floor(r.width/10),h=Math.floor(r.height/10),t.next=8,e.provider.getSigner();case 8:return f=t.sent,t.prev=9,t.next=12,e.contract.connect(f).buy(l,c,d,h,{value:n});case 12:t.sent,t.next=21;break;case 15:if(t.prev=15,t.t0=t.catch(9),-1===(t.t0.stack||t.t0.message||"").indexOf("User denied transaction signature.")){t.next=19;break}return t.abrupt("return");case 19:return e.error=t.t0.toString(),t.abrupt("return");case 21:e.success="Transaction sent successfully.",e.$emit("buy",{x:l,y:c,width:d,height:h});case 23:case"end":return t.stop()}}),t,null,[[9,15]])})))()}}},h=(r(346),r(60)),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.$parent.enabled,expression:"$parent.enabled"}],class:{available:e.isAvailable},attrs:{id:"adBuy"}},[t("div",[e._v("\n    "+e._s(e.$parent.width)+"x"+e._s(e.$parent.height)+" = "+e._s(e.$parent.width*e.$parent.height)+" pixels at position ("+e._s(e.$parent.left)+", "+e._s(e.$parent.top)+").\n  ")]),e._v(" "),t("div",[e._v("\n    Price: "+e._s(e.price(e.$parent.width,e.$parent.height))+" ETH + gas fees.\n  ")]),e._v(" "),e.error?t("p",{staticClass:"error"},[e._v(e._s(e.error))]):e.success?t("p",{staticClass:"success"},[e._v(e._s(e.success))]):e.isAvailable?t("p",[t("strong",[e._v("Slot is available.")]),e._v(" "),this.$store.state.activeAccount?t("button",{attrs:{type:"button",disabled:e.isReadOnly},on:{click:e.buy}},[e._v("Buy Pixels")]):t("strong",[e._v('Click "Connect Wallet" at the bottom')])]):t("p",[e._v("\n    Slot is not available.\n  ")])])}),[],!1,null,null,null);t.default=component.exports},346:function(e,t,r){"use strict";r(335)},347:function(e,t,r){var n=r(125)((function(i){return i[1]}));n.push([e.i,"#adBuy{background:#fff;border:2px solid #d90006;display:block;height:80px;margin-top:-110px;padding:5px;position:absolute;text-align:center;width:400px}#adBuy.available{border-color:#97d900}.error{color:red}",""]),n.locals={},e.exports=n},348:function(e,t,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(126).default)("846e6d5a",content,!0,{sourceMap:!1})},365:function(e,t,r){"use strict";r(348)},366:function(e,t,r){var n=r(125)((function(i){return i[1]}));n.push([e.i,".adGrid{background-blend-mode:normal,difference,normal;background-image:linear-gradient(90deg,hsla(0,0%,100%,.97),hsla(0,0%,100%,.97)),linear-gradient(90deg,#000 50%,#fff 0),linear-gradient(180deg,#000 50%,#fff 0);background-size:20px 20px}.adGrid .nsfwAd,.adGrid a div,.adGrid img{color:rgba(0,0,0,.7);display:block;font-size:11px;image-rendering:pixelated;overflow:hidden;position:absolute;white-space:nowrap}.adGrid .blank{outline:2px solid rgba(0,0,0,.1);outline-offset:-2px}.adGrid .nsfwAd{background:#000}.adGrid.active img{box-shadow:inset 0 0 0 1px hsla(0,0%,100%,.4)}.adGrid .previewAd{background:hsla(0,0%,100%,.8);border:1px solid hsla(0,0%,100%,.9);outline:20px solid rgba(0,0,0,.4);z-index:5}.adGrid .previewAd.locked{background:#ffcc47}",""]),n.locals={},e.exports=n},388:function(e,t,r){"use strict";r.r(t);var n=r(324),o=r(344),l=r(390),c=r.n(l),d=(r(391),{props:["provider","contract","isReadOnly","showNSFW","prerendered"],data:function(){return{previewLocked:!1,loadRemoteImages:!this.prerendered||this.prerendered.loadRemoteImages}},methods:{onBuy:function(e){this.previewLocked=!0},updatePreview:function(e,t,r,n){var o=this.$refs.draggable;this.$store.commit("updatePreview",{x:o.left,y:o.top,width:o.width,height:o.height})},gridStyle:function(e){if(e)return{"background-image":"url("+e.image+")"}}},components:{"vue-draggable-resizable":c.a,Ad:n.default,Buy:o.default}}),h=(r(365),r(60)),component=Object(h.a)(d,(function(){var e=this,t=e._self._c;return t("div",{class:{adGrid:!0,active:!!e.$store.state.previewAd},style:e.gridStyle(e.prerendered)},[e._l(e.$store.state.ads,(function(r){return[r?t("Ad",{key:r.idx,attrs:{showNSFW:e.showNSFW,ad:r,skipImage:!e.loadRemoteImages}}):e._e()]})),e._v(" "),e.$store.state.previewAd?t("vue-draggable-resizable",{ref:"draggable",class:{previewAd:!0,locked:e.previewLocked},attrs:{active:!0,minWidth:10,minHeight:10,x:e.$store.state.previewAd.x,y:e.$store.state.previewAd.y,w:80,h:40,grid:[10,10],parent:!0,draggable:!e.previewLocked,resizable:!e.previewLocked},on:{dragstop:e.updatePreview,resizestop:e.updatePreview}},[t("Buy",{attrs:{provider:e.provider,contract:e.contract,isReadOnly:e.isReadOnly},on:{buy:e.onBuy}})],1):e._e()],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Ad:r(324).default,Buy:r(344).default})}}]);