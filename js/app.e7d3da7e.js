(function(){"use strict";var e={3739:function(e,t,n){var r=n(9963),o=n(6252);function a(e,t,n,r,a,u){var i=(0,o.up)("app-header"),c=(0,o.up)("router-view"),l=(0,o.up)("app-footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(c),(0,o.Wm)(l)],64)}var u=function(e){return(0,o.dD)("data-v-44165686"),e=e(),(0,o.Cn)(),e},i={key:0,class:"p-2"},c=u((function(){return(0,o._)("i",{class:"fa fa-long-arrow-alt-left"},null,-1)})),l=(0,o.uE)('<div class="container mb-4" data-v-44165686><div class="header-logo" data-v-44165686><a href="./" data-v-44165686><img class="logo img-fluid" src="images/iManagur.png" data-v-44165686></a><div data-v-44165686><h1 data-v-44165686>iManagur</h1><h2 class="pronunciation" data-v-44165686> (<a data-v-44165686>aye</a> ‧ <a data-v-44165686>ma‧na</a> ‧ <a data-v-44165686>grrr</a>) </h2></div></div></div>',1);function s(e,t,n,r,a,u){var s=(0,o.up)("b-button");return(0,o.wg)(),(0,o.iD)(o.HY,null,[e.isHelloWorld?((0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(s,{class:"menu-button",variant:"primary",onClick:e.goBack},{default:(0,o.w5)((function(){return[c]})),_:1},8,["onClick"])])):(0,o.kq)("",!0),l],64)}n(7941),n(2526),n(7327),n(1539),n(5003),n(4747),n(9337);var f=n(4942),d=(n(8309),n(4250));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=(0,o.aZ)({name:"HeaderTemplate",computed:p({isHelloWorld:function(){return"Hello"!==this.$route.name}},(0,d.Se)(["getAccount","getAlbum","getImages","getLogo"])),methods:{helloPage:function(){this.$router.push("/")},goBack:function(){this.$router.back()}}}),g=n(3744);const b=(0,g.Z)(v,[["render",s],["__scopeId","data-v-44165686"]]);var h=b,y=function(e){return(0,o.dD)("data-v-670a79ed"),e=e(),(0,o.Cn)(),e},O={class:"container full bottom"},w=y((function(){return(0,o._)("footer",{class:"footer container my-5"},[(0,o._)("section",null,[(0,o._)("p",{class:"copyright"},[(0,o.Uk)(" iManagur is an open source application "),(0,o._)("a",{href:"https://github.com/KenEucker/iManagur"},"developed on github")])])],-1)})),A=[w];function k(e,t,n,r,a,u){return(0,o.wg)(),(0,o.iD)("div",O,A)}var _=(0,o.aZ)({name:"PageFooter"});const j=(0,g.Z)(_,[["render",k],["__scopeId","data-v-670a79ed"]]);var C=j,E=(0,o.aZ)({name:"App",components:{AppHeader:h,AppFooter:C}});const P=(0,g.Z)(E,[["render",a]]);var I,S,T=P,D=(n(6992),n(8674),n(8783),n(3948),n(2119)),N=[{path:"/",name:"Hello",component:function(){return n.e(828).then(n.bind(n,3828))}},{path:"/albums",name:"Albums",component:function(){return n.e(221).then(n.bind(n,221))}},{path:"/albums/:album",name:"Images",component:function(){return n.e(742).then(n.bind(n,742))}}],H=(0,D.p7)({history:(0,D.r5)(),routes:N}),M=H,L=(n(1817),n(3900)),B=n.n(L),Z=(Symbol(),{clientId:"a404f3d0c94ee79"}),x=new(B())(Z),F=(0,d.MT)({state:{account:"Biketag",album:"",images:[],albums:[],credentials:{}},getters:{getAccount:function(e){return e.account},getImages:function(e){return e.images},getAlbum:function(e){return e.album},getAlbums:function(e){return e.albums}},mutations:{credentials:function(e,t){e.credentials=t},account:function(e,t){e.account=t},album:function(e,t){e.album=t},albums:function(e,t){e.albums=t,console.log({setAlbums:t})},images:function(e,t){e.images=t,console.log({setImages:t})}},actions:{setCredentials:function(e){var t=e.commit;t("credentials",{clientId:"a404f3d0c94ee79"})},setAccount:function(e){var t=e.commit,n=e.state;t("account",n.account)},setAlbum:function(e){var t=e.commit,n=e.state;t("album",n.album)},setAlbums:function(e){var t=e.commit,n=e.state;n.account?(console.log(n.account),x.getAlbums(n.account).then((function(e){var n,r=null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.length?e.data:[];t("albums",r)}))):(console.log("[setAlbums] no account set",n.album),t("albums",[]))},setImages:function(e){var t=e.commit,n=e.state;n.album?x.getAlbum(n.album).then((function(e){var n,r,o=null!==e&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&null!==(r=n.images)&&void 0!==r&&r.length?e.data.images:[];t("images",o)})):(console.log("[setImages] no album set",n.album),t("images",[]))}},modules:{}}),U=n(6825);(0,r.ri)(T).use(M).use(F).use(U.Z).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],a=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(i=!1,a<u&&(u=a));if(i){e.splice(s--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"imanagur/js/"+e+"."+{221:"8132035c",742:"17f13c19",828:"322a2ee6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"imanagur/css/"+e+"."+{221:"774852f8",742:"478a2b7c",828:"5d8b3bee"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue3-boilerplate:";n.l=function(r,o,a,u){if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+a){i=f;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var u=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=i,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var u=n.miniCssF(r),i=n.p+u;if(t(u,i))return o();e(r,i,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={221:1,742:1,828:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var u=n.p+n.u(t),i=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",i.name="ChunkLoadError",i.type=a,i.request=u,o[1](i)}};n.l(u,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,u=r[0],i=r[1],c=r[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var s=c(n)}for(t&&t(r);l<u.length;l++)a=u[l],n.o(e,a)&&e[a]&&e[a][0](),e[u[l]]=0;return n.O(s)},r=self["webpackChunkvue3_boilerplate"]=self["webpackChunkvue3_boilerplate"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3739)}));r=n.O(r)})();