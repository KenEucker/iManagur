(self["webpackChunkvue3_boilerplate"]=self["webpackChunkvue3_boilerplate"]||[]).push([[742],{4230:function(e,t,n){var i=n(1702),a=n(4488),r=n(1340),o=/"/g,l=i("".replace);e.exports=function(e,t,n,i){var s=r(a(e)),u="<"+t;return""!==n&&(u+=" "+n+'="'+l(r(i),o,"&quot;")+'"'),u+">"+s+"</"+t+">"}},7007:function(e,t,n){"use strict";n(4916);var i=n(1702),a=n(1320),r=n(2261),o=n(7293),l=n(5112),s=n(8880),u=l("species"),c=RegExp.prototype;e.exports=function(e,t,n,d){var g=l(e),p=!o((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),f=p&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!p||!f||n){var h=i(/./[g]),m=t(g,""[e],(function(e,t,n,a,o){var l=i(e),s=t.exec;return s===r||s===c.exec?p&&!o?{done:!0,value:h(t,n,a)}:{done:!0,value:l(n,t,a)}:{done:!1}}));a(String.prototype,e,m[0]),a(c,g,m[1])}d&&s(c[g],"sham",!0)}},7651:function(e,t,n){var i=n(7854),a=n(6916),r=n(9670),o=n(614),l=n(4326),s=n(2261),u=i.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var i=a(n,e,t);return null!==i&&r(i),i}if("RegExp"===l(e))return a(s,e,t);throw u("RegExp#exec called on incompatible receiver")}},2261:function(e,t,n){"use strict";var i=n(6916),a=n(1702),r=n(1340),o=n(7066),l=n(2999),s=n(2309),u=n(30),c=n(9909).get,d=n(9441),g=n(7168),p=s("native-string-replace",String.prototype.replace),f=RegExp.prototype.exec,h=f,m=a("".charAt),v=a("".indexOf),x=a("".replace),w=a("".slice),b=function(){var e=/a/,t=/b*/g;return i(f,e,"a"),i(f,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),y=l.BROKEN_CARET,L=void 0!==/()??/.exec("")[1],I=b||L||y||d||g;I&&(h=function(e){var t,n,a,l,s,d,g,I=this,k=c(I),_=r(e),S=k.raw;if(S)return S.lastIndex=I.lastIndex,t=i(h,S,_),I.lastIndex=S.lastIndex,t;var E=k.groups,P=y&&I.sticky,O=i(o,I),C=I.source,j=0,V=_;if(P&&(O=x(O,"y",""),-1===v(O,"g")&&(O+="g"),V=w(_,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==m(_,I.lastIndex-1))&&(C="(?: "+C+")",V=" "+V,j++),n=new RegExp("^(?:"+C+")",O)),L&&(n=new RegExp("^"+C+"$(?!\\s)",O)),b&&(a=I.lastIndex),l=i(f,P?n:I,V),P?l?(l.input=w(l.input,j),l[0]=w(l[0],j),l.index=I.lastIndex,I.lastIndex+=l[0].length):I.lastIndex=0:b&&l&&(I.lastIndex=I.global?l.index+l[0].length:a),L&&l&&l.length>1&&i(p,l[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(l[s]=void 0)})),l&&E)for(l.groups=d=u(null),s=0;s<E.length;s++)g=E[s],d[g[0]]=l[g[1]];return l}),e.exports=h},7066:function(e,t,n){"use strict";var i=n(9670);e.exports=function(){var e=i(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2999:function(e,t,n){var i=n(7293),a=n(7854),r=a.RegExp,o=i((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),l=o||i((function(){return!r("a","y").sticky})),s=o||i((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:s,MISSED_STICKY:l,UNSUPPORTED_Y:o}},9441:function(e,t,n){var i=n(7293),a=n(7854),r=a.RegExp;e.exports=i((function(){var e=r(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:function(e,t,n){var i=n(7293),a=n(7854),r=a.RegExp;e.exports=i((function(){var e=r("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1150:function(e){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},3429:function(e,t,n){var i=n(7293);e.exports=function(e){return i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},7042:function(e,t,n){"use strict";var i=n(2109),a=n(7854),r=n(3157),o=n(4411),l=n(111),s=n(1400),u=n(6244),c=n(5656),d=n(6135),g=n(5112),p=n(1194),f=n(206),h=p("slice"),m=g("species"),v=a.Array,x=Math.max;i({target:"Array",proto:!0,forced:!h},{slice:function(e,t){var n,i,a,g=c(this),p=u(g),h=s(e,p),w=s(void 0===t?p:t,p);if(r(g)&&(n=g.constructor,o(n)&&(n===v||r(n.prototype))?n=void 0:l(n)&&(n=n[m],null===n&&(n=void 0)),n===v||void 0===n))return f(g,h,w);for(i=new(void 0===n?v:n)(x(w-h,0)),a=0;h<w;h++,a++)h in g&&d(i,a,g[h]);return i.length=a,i}})},4916:function(e,t,n){"use strict";var i=n(2109),a=n(2261);i({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},9254:function(e,t,n){"use strict";var i=n(2109),a=n(4230),r=n(3429);i({target:"String",proto:!0,forced:r("link")},{link:function(e){return a(this,"a","href",e)}})},4765:function(e,t,n){"use strict";var i=n(6916),a=n(7007),r=n(9670),o=n(4488),l=n(1150),s=n(1340),u=n(8173),c=n(7651);a("search",(function(e,t,n){return[function(t){var n=o(this),a=void 0==t?void 0:u(t,e);return a?i(a,t,n):new RegExp(t)[e](s(n))},function(e){var i=r(this),a=s(e),o=n(t,i,a);if(o.done)return o.value;var u=i.lastIndex;l(u,0)||(i.lastIndex=0);var d=c(i,a);return l(i.lastIndex,u)||(i.lastIndex=u),null===d?-1:d.index}]}))},742:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});n(4916),n(4765);var i=n(6252),a=n(3577),r={class:"container"},o={class:"row justify-content-md-center"},l={class:"col col-md-auto"},s=(0,i.Uk)("Search"),u=(0,i.Uk)("🔎"),c=(0,i.Uk)("X"),d={id:"itemList",class:"list-unstyled"};function g(e,t,n,g,p,f){var h=(0,i.up)("b-input-group-text"),m=(0,i.up)("b-form-input"),v=(0,i.up)("b-button"),x=(0,i.up)("b-input-group"),w=(0,i.up)("b-pagination"),b=(0,i.up)("i-mage"),y=(0,i.up)("b-row"),L=(0,i.up)("b-overlay");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("h3",null,"Images for the album ("+(0,a.zw)(e.currentAlbum)+")",1),(0,i._)("div",o,[(0,i._)("div",l,[(0,i.Wm)(x,{class:"search"},{prepend:(0,i.w5)((function(){return[(0,i.Wm)(h,null,{default:(0,i.w5)((function(){return[s]})),_:1})]})),append:(0,i.w5)((function(){var t,n;return[null!==(t=e.searchString)&&void 0!==t&&t.length?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(v,{key:0,type:"button",class:"btn",onClick:e.search},{default:(0,i.w5)((function(){return[u]})),_:1},8,["onClick"])),null!==(n=e.searchString)&&void 0!==n&&n.length?((0,i.wg)(),(0,i.j4)(h,{key:1},{default:(0,i.w5)((function(){return[(0,i.Wm)(v,{class:"clear",onClick:e.clearSearch},{default:(0,i.w5)((function(){return[c]})),_:1},8,["onClick"])]})),_:1})):(0,i.kq)("",!0)]})),default:(0,i.w5)((function(){return[(0,i.Wm)(m,{modelValue:e.searchString,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.searchString=t}),type:"search",placeholder:"id or title or desc",onKeyup:e.searchKeyup},null,8,["modelValue","onKeyup"])]})),_:1})])]),(0,i.Wm)(w,{modelValue:e.selectedPage,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selectedPage=t}),"total-rows":e.count,"per-page":e.perPage,"aria-controls":"itemList",align:"center",pills:"",onChange:e.startLoading},null,8,["modelValue","total-rows","per-page","onChange"]),(0,i.Wm)(L,{show:e.loading},{default:(0,i.w5)((function(){return[(0,i._)("ul",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.iMages,(function(t){return(0,i.wg)(),(0,i.iD)("li",{key:t[0].id},[(0,i.Wm)(y,null,{default:(0,i.w5)((function(){return[t[0]?((0,i.wg)(),(0,i.j4)(b,{key:0,image:t[0],onLoad:function(n){return e.imageLoaded(t[0].id)}},null,8,["image","onLoad"])):(0,i.kq)("",!0),t[1]?((0,i.wg)(),(0,i.j4)(b,{key:1,image:t[1],onLoad:function(n){return e.imageLoaded(t[1].id)}},null,8,["image","onLoad"])):(0,i.kq)("",!0)]})),_:2},1024)])})),128))])]})),_:1},8,["show"]),(0,i.Wm)(w,{modelValue:e.selectedPage,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.selectedPage=t}),"total-rows":e.count,"per-page":e.perPage,"aria-controls":"itemList",align:"center",pills:"",onChange:e.startLoading},null,8,["modelValue","total-rows","per-page","onChange"])])}n(7941),n(5003),n(4747),n(9337);var p=n(4942),f=(n(1539),n(7327),n(2526),n(1817),n(7042),n(4250)),h={class:"image-title"},m={class:"img-wrapper"},v={class:"image-description"};function x(e,t){var n=(0,i.up)("editable-image"),r=(0,i.up)("b-card"),o=(0,i.up)("b-col");return(0,i.wg)(),(0,i.j4)(o,{md:6,class:"mb-3"},{default:(0,i.w5)((function(){return[(0,i.Wm)(r,null,{default:(0,i.w5)((function(){return[(0,i._)("h6",h,(0,a.zw)(e.image.title),1),(0,i._)("div",m,[(0,i.Wm)(n,{class:"image img-fluid",image:e.image,fields:e.imageEditableFields,"save-fields":e.saveEditableFields,alt:"image",onLoad:e.onImgLoad},null,8,["image","fields","save-fields","onLoad"])]),(0,i._)("span",v,(0,a.zw)(e.image.description),1)]})),_:1})]})),_:1})}n(9254),n(8309);var w=function(e){return(0,i.dD)("data-v-5319415a"),e=e(),(0,i.Cn)(),e},b={key:0,class:"close-button shadow fill-white"},y=w((function(){return(0,i._)("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24"},[(0,i._)("path",{fill:"#666666",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})],-1)})),L=[y],I={key:1,class:"expand-button"},k=w((function(){return(0,i._)("svg",{style:{width:"24px",height:"24px"},viewBox:"0 0 24 24"},[(0,i._)("path",{fill:"#000000",d:"M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"})],-1)})),_=[k],S=["src"],E={key:2,class:"editable-fields"},P={class:"fields"},O=w((function(){return(0,i._)("legend",null,"Editable Fields",-1)})),C={class:"row"},j=["for"],V={class:"row"},R={key:0,class:"save-button"},D=w((function(){return(0,i._)("path",{class:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"},null,-1)})),$=[D];function A(e,t,n,r,o,l){var s=(0,i.up)("b-form-textarea");return(0,i.wg)(),(0,i.iD)("div",{class:(0,a.C_)(["editable-image",{expanded:e.expanded}]),onClick:t[2]||(t[2]=function(t){return e.expanded=!0})},[e.expanded?((0,i.wg)(),(0,i.iD)("i",b,L)):(0,i.kq)("",!0),e.expanded?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("i",I,_)),(0,i._)("img",(0,i.dG)({class:"img-fluid",src:e.image.link},e.$attrs,{onLoad:t[0]||(t[0]=function(){return e.onImgLoad&&e.onImgLoad.apply(e,arguments)})}),null,16,S),e.expanded?((0,i.wg)(),(0,i.iD)("div",E,[(0,i._)("fieldset",P,[O,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.fields,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{key:"field-".concat(t)},[(0,i._)("div",C,[(0,i._)("label",{for:e.name},(0,a.zw)(e.name),9,j)]),(0,i._)("div",V,["text"===e.type?((0,i.wg)(),(0,i.j4)(s,{key:0,modelValue:e.value,"onUpdate:modelValue":function(t){return e.value=t},type:e.type,name:e.name},null,8,["modelValue","onUpdate:modelValue","type","name"])):(0,i.kq)("",!0)])])})),128))]),e.expanded?((0,i.wg)(),(0,i.iD)("i",R,[((0,i.wg)(),(0,i.iD)("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",onClick:t[1]||(t[1]=function(){return e.saveFields&&e.saveFields.apply(e,arguments)})},$))])):(0,i.kq)("",!0)])):(0,i.kq)("",!0)],2)}var q=(0,i.aZ)({name:"EditableImage",props:{image:{type:Object,default:function(){return{}}},fields:{type:Object,default:function(){return{}}}},emits:["save-fields","load"],data:function(){return{expanded:!1,closeButtonRef:null,isLoaded:!1}},watch:{expanded:function(e){var t=this;this.$nextTick((function(){e?(t.cloned=t.$el.cloneNode(!0),t.closeButtonRef=t.cloned.querySelector(".close-button"),t.closeButtonRef.addEventListener("click",t.closeImage),document.body.appendChild(t.cloned),document.body.style.overflow="hidden",t.cloned.addEventListener("touchmove",t.freezeVp,!1),setTimeout((function(){t.cloned.style.opacity=1}),0)):(t.cloned.style.opacity=0,t.cloned.removeEventListener("touchmove",t.freezeVp,!1),setTimeout((function(){t.closeButtonRef.removeEventListener("click",t.closeImage),t.cloned.remove(),t.cloned=null,t.closeButtonRef=null,document.body.style.overflow="auto"}),250))}))}},mounted:function(){var e=document.createElement("meta");e.name="viewport",e.content="width=device-width, initial-scale=1",document.head.appendChild(e)},methods:{saveFields:function(){console.log("saving fields",this.fields),this.$emit("save-fields",this.fields)},closeImage:function(e){this.expanded=!1,e.stopPropagation()},freezeVp:function(e){e.preventDefault()},onImgLoad:function(){this.isLoaded=!0,this.$emit("load")}}}),B=n(3744);const K=(0,B.Z)(q,[["render",A],["__scopeId","data-v-5319415a"]]);var M=K,U=(0,i.aZ)({name:"IMage",components:{EditableImage:M},props:{image:{type:Object,default:()=>({})}},emits:["load"],data(){return{isLoaded:!1}},computed:{imageEditableFields(){return[{name:"title",type:"text",value:this.image.title},{name:"description",type:"text",value:this.image.description}]}},mounted(){const e=document.createElement("meta");e.name="viewport",e.content="width=device-width, initial-scale=1",document.head.appendChild(e)},methods:{saveEditableFields(e){console.log("save",e)},onImgLoad(){this.isLoaded=!0,this.$emit("load")}}});const W=(0,B.Z)(U,[["render",x],["__scopeId","data-v-25022f44"]]);var Z=W;function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=(0,i.aZ)({name:"ImagesPage",components:{IMage:Z},data:function(){return{selectedPage:1,perPage:10,searchString:"",oldSearchString:"",images:null,loading:!0,imagesLoaded:[]}},computed:H(H({},(0,f.Se)(["getImages","getAlbum"])),{},{currentAlbum:function(){var e,t;return null!==(e=this.$route.params)&&void 0!==e&&null!==(t=e.album)&&void 0!==t&&t.length?this.$route.params.album:this.getAlbum},iMages:function(){var e=this.getSelectedPageImages(),t=2,n=e.reduce((function(e,n,i){return i%t===0&&e.push([]),e[e.length-1].push(n),e}),[]);return n},count:function(){var e,t;return null===(e=null!==(t=this.images)&&void 0!==t?t:this.getImages)||void 0===e?void 0:e.length}}),updated:function(){this.imagesLoaded=[]},mounted:function(){var e;this.startLoading(),this.$store.commit("album",null===(e=this.$route.params)||void 0===e?void 0:e.album),this.$store.dispatch("setAlbum"),this.$store.dispatch("setImages")},methods:{searchKeyup:function(){console.log("searchKeyup"),this.searchString.length===this.oldSearchString.length&&0!==this.searchString.length||this.search(!this.searchString.length)},clearSearch:function(){this.search(!0)},search:function(e){console.log("search"),this.startLoading(),this.perPage=10,this.selectedPage=1,e?(this.searchString="",this.images=this.getImages):""!==this.searchString&&this.oldSearchString!==this.searchString&&(this.images=this.searchImages(this.images,this.searchString)),this.oldSearchString=this.searchString},searchImages:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(null!==(t=null!==e&&void 0!==e?e:this.images)&&void 0!==t?t:this.getImages).filter((function(e){var t,i,a,r,o,l,s=null!==(t=null===(i=e.id)||void 0===i?void 0:i.toLowerCase())&&void 0!==t?t:"",u=null!==(a=null===(r=e.title)||void 0===r?void 0:r.toLowerCase())&&void 0!==a?a:"",c=null!==(o=null===(l=e.description)||void 0===l?void 0:l.toLowerCase())&&void 0!==o?o:"",d=n.toLowerCase(),g=-1!==s.indexOf(d),p=-1!==u.indexOf(d),f=-1!==c.indexOf(d);return g||p||f}))},startLoading:function(){this.imagesLoaded=[],this.loading=!0},selectPerPageCount:function(e){this.selectedPage=0,this.perPage=e.target.value},getSelectedPageImages:function(e){var t;return(null!==(t=null!==e&&void 0!==e?e:this.images)&&void 0!==t?t:this.getImages).slice((this.selectedPage-1)*this.perPage,this.selectedPage*this.perPage)},imageLoaded:function(e){var t=this,n=-1===this.imagesLoaded.indexOf(e);n&&this.imagesLoaded.push(e);var i=this.getSelectedPageImages();if(this.imagesLoaded.length===i.length){var a=i.reduce((function(e,n){return e&&-1!==t.imagesLoaded.indexOf(n.id)}),!0);a&&(this.loading=!1)}}}});const z=(0,B.Z)(T,[["render",g],["__scopeId","data-v-06bc121b"]]);var N=z}}]);