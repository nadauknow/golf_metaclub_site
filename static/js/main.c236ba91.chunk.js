(this.webpackJsonpgolf_metaclub_sit=this.webpackJsonpgolf_metaclub_sit||[]).push([[0],{131:function(e,t,a){e.exports=a.p+"static/media/golf_metaclub_logo.97a117f0.png"},223:function(e,t,a){e.exports=a(545)},232:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},233:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},234:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},235:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},236:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},237:function(e,t,a){e.exports=a.p+"static/media/BeFunky-collage.619399a2.png"},238:function(e,t,a){e.exports=a.p+"static/media/example1.d9ee10d6.png"},239:function(e,t,a){e.exports=a.p+"static/media/golfcart.6ae28c30.png"},240:function(e,t,a){e.exports=a.p+"static/media/226-modified.533fc882.png"},255:function(e,t){},258:function(e,t){},261:function(e,t){},266:function(e,t){},267:function(e,t){},293:function(e,t){},295:function(e,t){},303:function(e,t){},305:function(e,t){},324:function(e,t){},358:function(e,t){},359:function(e,t){},432:function(e,t){},544:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(96),o=a.n(i),l=a(48),c=a(27),s=a(2),m=a(3),d=a(5),u=a(6),v=a(12),p=function(e){var t=e.component,a=e.layout,n=Object(v.a)(e,["component","layout"]);return a=void 0===a?function(e){return r.a.createElement(r.a.Fragment,null,e.children)}:a,r.a.createElement(l.a,Object.assign({},n,{render:function(e){return r.a.createElement(a,null,r.a.createElement(t,e))}}))},h=a(128),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={viewportHeight:window.innerHeight,revealEl:[]},e.checkComplete=function(){return e.state.revealEl.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},e.elementIsVisible=function(t,a){return t.getBoundingClientRect().top<=e.state.viewportHeight-a},e.revealElements=function(){if(!e.checkComplete())for(var t=function(t){var a=e.state.revealEl[t],n=a.getAttribute("data-reveal-delay"),r=a.getAttribute("data-reveal-offset")?a.getAttribute("data-reveal-offset"):"0",i=a.getAttribute("data-reveal-container")?a.closest(a.getAttribute("data-reveal-container")):a;e.elementIsVisible(i,r)&&!a.classList.contains("is-revealed")&&(n&&0!==n?setTimeout((function(){a.classList.add("is-revealed")}),n):a.classList.add("is-revealed"))},a=0;a<e.state.revealEl.length;a++)t(a)},e.init=function(){setTimeout((function(){e.setState({revealEl:document.querySelectorAll("[class*=reveal-]")},(function(){e.checkComplete()||(window.addEventListener("scroll",e.handleScroll),window.addEventListener("resize",e.handleResize)),e.revealElements()}))}),100)},e.handleListeners=function(){e.checkComplete()&&(window.removeEventListener("scroll",e.handleScroll),window.removeEventListener("resize",e.handleResize))},e.handleScroll=Object(h.throttle)((function(){e.handleListeners(),e.revealElements()}),30),e.handleResize=Object(h.throttle)((function(){e.setState({viewportHeight:window.innerHeight},(function(){e.handleListeners(),e.revealElements()}))}),30),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.children())}}]),a}(r.a.Component),f=a(97),g=a(8),E=a.n(g),N=a(46),O={src:void 0,width:void 0,height:void 0,alt:void 0},w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isLoaded:!1},e.image=r.a.createRef(),e.placeholderSrc=function(e,t){return'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(e," ").concat(t,'"%3E%3C/svg%3E')},e.handlePlaceholder=function(t,a){t.style.display="none",t.before(a),a.src=e.placeholderSrc(t.getAttribute("width")||0,t.getAttribute("height")||0),a.width=t.getAttribute("width"),a.height=t.getAttribute("height"),a.style.opacity="0",t.className&&a.classList.add(t.className),t.addEventListener("load",(function(){a.remove(),t.style.display="",e.setState({isLoaded:!0})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("img");this.handlePlaceholder(this.image.current,e)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.src,n=e.width,i=e.height,o=e.alt,l=Object(v.a)(e,["className","src","width","height","alt"]);return r.a.createElement("img",Object.assign({},l,{ref:this.image,className:t,src:a,width:n,height:i,alt:o}))}}]),a}(r.a.Component);w.defaultProps=O;var x=w,y=function(e){var t=e.className,n=Object(v.a)(e,["className"]),i=E()("brand",t);return r.a.createElement("div",Object.assign({},n,{className:i}),r.a.createElement("h1",{className:"m-0"},r.a.createElement(N.a,{to:"/"},r.a.createElement(x,{src:a(131),alt:"Open",width:64,height:64}))))},j=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isActive:!1},e.nav=r.a.createRef(),e.hamburger=r.a.createRef(),e.openMenu=function(){document.body.classList.add("off-nav-is-active"),e.nav.current.style.maxHeight=e.nav.current.scrollHeight+"px",e.setState({isActive:!0})},e.closeMenu=function(){document.body.classList.remove("off-nav-is-active"),e.nav.current&&(e.nav.current.style.maxHeight=null),e.setState({isActive:!1})},e.keyPress=function(t){e.state.isActive&&27===t.keyCode&&e.closeMenu()},e.clickOutside=function(t){e.nav.current&&e.state.isActive&&!e.nav.current.contains(t.target)&&t.target!==e.hamburger.current&&e.closeMenu()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.props.active&&this.openMenu(),document.addEventListener("keydown",this.keyPress),document.addEventListener("click",this.clickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPress),document.addEventListener("click",this.clickOutside),this.closeMenu()}},{key:"render",value:function(){var e=this.props,t=e.className,a=(e.active,e.navPosition),n=e.hideNav,i=e.hideSignin,o=e.bottomOuterDivider,l=e.bottomDivider,c=Object(v.a)(e,["className","active","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),s=E()("site-header",o&&"has-bottom-divider",t);return r.a.createElement("header",Object.assign({},c,{className:s}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E()("site-header-inner",l&&"has-bottom-divider")},r.a.createElement(y,null),!n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{ref:this.hamburger,className:"header-nav-toggle",onClick:this.state.isActive?this.closeMenu:this.openMenu},r.a.createElement("span",{className:"screen-reader"},"Menu"),r.a.createElement("span",{className:"hamburger"},r.a.createElement("span",{className:"hamburger-inner"}))),r.a.createElement("nav",{ref:this.nav,className:E()("header-nav",this.state.isActive&&"is-active")},r.a.createElement("div",{className:"header-nav-inner"},r.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},r.a.createElement("li",null,r.a.createElement("a",{href:"#project-overview"},"Project Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#membership-benefits"},"Membership Benefits")),r.a.createElement("li",null,r.a.createElement("a",{href:"#team"},"Team"))),!i&&r.a.createElement("ul",{className:"list-reset header-nav-right"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"#0",className:"button button-primary button-wide-mobile button-sm",onClick:this.closeMenu},"Minting on March 15")))))))))}}]),a}(r.a.Component);j.defaultProps={active:!1,navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var C=j,D=function(e){var t=e.className,a=Object(v.a)(e,["className"]),n=E()("footer-nav",t);return r.a.createElement("nav",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"}))},k=function(e){var t=e.className,a=Object(v.a)(e,["className"]),n=E()("footer-social",t);return r.a.createElement("div",Object.assign({},a,{className:n}),r.a.createElement("ul",{className:"list-reset"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://discord.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Discord"),r.a.createElement("path",{d:"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/GolfMetaClub"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Twitter"),r.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://opensea.com/"},r.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Opensea"),r.a.createElement("g",null,r.a.createElement("path",{d:"M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z",fill:"white"})))))))},M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,n=e.topDivider,i=Object(v.a)(e,["className","topOuterDivider","topDivider"]),o=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return r.a.createElement("footer",Object.assign({},i,{className:o}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:E()("site-footer-inner",n&&"has-top-divider")},r.a.createElement("div",{className:"footer-top space-between text-xxs"},r.a.createElement(y,null),r.a.createElement(k,null)),r.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},r.a.createElement(D,null)))))}}]),a}(r.a.Component);M.defaultProps={topOuterDivider:!1,topDivider:!1};var A=M,F=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{navPosition:"right",className:"reveal-from-bottom"}),r.a.createElement("main",{className:"site-content"},t),r.a.createElement(A,null))},P=a(14),S=a(15),T=a.n(S),L={types:{topOuterDivider:T.a.bool,bottomOuterDivider:T.a.bool,topDivider:T.a.bool,bottomDivider:T.a.bool,hasBgColor:T.a.bool,invertColor:T.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},z={types:Object(P.a)({},L.types),defaults:Object(P.a)({},L.defaults)},B={types:Object(P.a)({},L.types,{invertMobile:T.a.bool,invertDesktop:T.a.bool,alignTop:T.a.bool,imageFill:T.a.bool}),defaults:Object(P.a)({},L.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},H={types:Object(P.a)({},L.types,{pushLeft:T.a.bool}),defaults:Object(P.a)({},L.defaults,{pushLeft:!1})},_=function(e){var t=e.className,a=e.tag,n=e.color,i=e.size,o=e.loading,l=e.wide,c=e.wideMobile,s=e.disabled,m=Object(v.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),d=E()("button",n&&"button-".concat(n),i&&"button-".concat(i),o&&"is-loading",l&&"button-block",c&&"button-wide-mobile",t),u=a;return r.a.createElement(u,Object.assign({},m,{className:d,disabled:s}))};_.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleBodyClass=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},e.keyPress=function(t){27===t.keyCode&&e.props.handleClose(t)},e.stopProgagation=function(e){e.stopPropagation()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyPress),document.addEventListener("click",this.stopProgagation)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyPress),document.removeEventListener("click",this.stopProgagation)}},{key:"componentDidUpdate",value:function(e){e.show!==this.props.show&&this.handleBodyClass()}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,n=e.handleClose,i=e.show,o=e.closeHidden,l=e.video,c=e.videoTag,s=Object(v.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]),m=E()("modal",i&&"is-active",l&&"modal-video",t);return r.a.createElement(r.a.Fragment,null,i&&r.a.createElement("div",Object.assign({},s,{className:m,onClick:n}),r.a.createElement("div",{className:"modal-inner",onClick:this.stopProgagation},l?r.a.createElement("div",{className:"responsive-video"},"iframe"===c?r.a.createElement("iframe",{title:"video",src:l,frameBorder:"0",allowFullScreen:!0}):r.a.createElement("video",{"v-else":!0,controls:!0,src:l})):r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),r.a.createElement("div",{className:"modal-content"},a)))))}}]),a}(r.a.Component);G.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var R=Object(P.a)({},z.defaults),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videoModalActive:!1},e.openModal=function(t){t.preventDefault(),e.setState({videoModalActive:!0})},e.closeModal=function(t){t.preventDefault(),e.setState({videoModalActive:!1})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.topOuterDivider,i=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,c=e.hasBgColor,s=e.invertColor,m=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),d=E()("hero section center-content",n&&"has-top-divider",i&&"has-bottom-divider",c&&"has-bg-color",s&&"invert-color",t),u=E()("hero-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider");return r.a.createElement("section",Object.assign({},m,{className:d}),r.a.createElement("div",{className:"container-sm"},r.a.createElement("div",{className:u},r.a.createElement("div",{className:"hero-content"},r.a.createElement(x,{src:a(131),width:500,height:500}),r.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom"},r.a.createElement("span",{className:"text-color-primary"},"Golf MetaClub")),r.a.createElement("div",{className:"container-xs"},r.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom"},"Golf MetaClub is a supportive community of golf and NFT enthusiasts coming together to make golf accessible to everyone."),r.a.createElement("div",{className:"reveal-from-bottom"}))))))}}]),n}(r.a.Component);I.defaultProps=R;var U=I,W=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.data,n=e.children,i=e.tag,o=Object(v.a)(e,["className","data","children","tag"]),l=E()("section-header",t),c=i;return r.a.createElement(r.a.Fragment,null,(a.title||a.paragraph)&&r.a.createElement("div",Object.assign({},o,{className:l}),r.a.createElement("div",{className:"container-xs"},n,a.title&&r.a.createElement(c,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&r.a.createElement("p",{className:"m-0"},a.paragraph))))}}]),a}(r.a.Component);W.defaultProps={children:null,tag:"h2"};var q=W,K=Object(P.a)({},H.defaults),V=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.topOuterDivider,i=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,c=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("features-tiles section",n&&"has-top-divider",i&&"has-bottom-divider",c&&"has-bg-color",s&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",o&&"has-top-divider",l&&"has-bottom-divider"),h=E()("tiles-wrap center-content",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("a",{id:"membership-benefits"}),r.a.createElement("div",{className:p},r.a.createElement(q,{data:{title:"Full Membership Benefits",paragraph:""},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-bottom"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(232),alt:"Features tile icon 01",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Quarterly Gear Shipments"),r.a.createElement("p",{className:"m-0 text-sm"},"The Club will support our great community by sending out Titleist Pro V1s, custom golf towels, membership bag tags and more to all our members.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(233),alt:"Features tile icon 02",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Organized Golf Outings"),r.a.createElement("p",{className:"m-0 text-sm"},"Golf MetaClub Ambassadors will coordinate local golf outings in major cities partially subsidized by the club. Receive airdrops and premium access to future NFTs by attending.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(234),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Support TGR Foundation"),r.a.createElement("p",{className:"m-0 text-sm"},"5% of all NFT sales will empower underprivileged students through education in science, technology, engineering, and mathematics.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(235),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Free Golf Lesson"),r.a.createElement("p",{className:"m-0 text-sm"},"Own 3 Golf MetaClub NFTs to access a virtual golf lesson with a PGA professional to improve your golf game.")))),r.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"features-tiles-item-header"},r.a.createElement("div",{className:"features-tiles-item-image mb-16"},r.a.createElement(x,{src:a(236),alt:"Features tile icon 03",width:64,height:64}))),r.a.createElement("div",{className:"features-tiles-item-content"},r.a.createElement("h4",{className:"mt-0 mb-8"},"Golf Cart Giveaway"),r.a.createElement("p",{className:"m-0 text-sm"},"Mint 1 Golf MetaClub NFT to have a chance at winning a 4 seat, ClubCar\xae golf cart with a custom wrap!"))))))))}}]),n}(r.a.Component);V.defaultProps=K;var Z=V,Q=Object(P.a)({},B.defaults),Y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.topOuterDivider,i=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,c=e.hasBgColor,s=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",n&&"has-top-divider",i&&"has-bottom-divider",c&&"has-bg-color",s&&"invert-color",t),f=E()("features-split-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider"),g=E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return r.a.createElement("section",Object.assign({},h,{className:b}),r.a.createElement("div",{className:"container"},r.a.createElement("a",{id:"project-overview"}),r.a.createElement("div",{className:f},r.a.createElement(q,{data:{title:"The First Digital Golf Club",paragraph:"You don\u2019t need connections, interviews, or have $10,000s to join. You only need to love golf and the community."},className:"center-content"}),r.a.createElement("div",{className:g},r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Golf MetaClub"),r.a.createElement("h3",null,"2000 Unique NFTs"),r.a.createElement("p",{className:"m-0"},"With over 90 unique traits, Golf MetaClub NFTs vary in rarity. Owners will get special access to the VIP club for holding rarer NFTs.")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(x,{src:a(237),alt:"Features split 01",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Benefits"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Membership Benefits"),r.a.createElement("p",{className:"m-0"},"Golf MetaClub is committed to providing value to its holders. Membership includes quarterly gear shipments, organized golf outings and access to virtual golf lessons.")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(x,{src:a(238),alt:"Features split 02",width:528,height:396}))),r.a.createElement("div",{className:"split-item"},r.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},r.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Grand Prize"),r.a.createElement("h3",{className:"mt-0 mb-12"},"Win a Golf Cart"),r.a.createElement("p",{className:"m-0"},"We love to think big and reward our community, so we are giving away a ClubCar\xae golf cart ($14,000 MSRP) with a custom wrap to a member who mints the special 1:1 NFT!")),r.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},r.a.createElement(x,{src:a(239),alt:"Features split 03",width:528,height:396})))))))}}]),n}(r.a.Component);Y.defaultProps=Q;var $=Y,J=Object(P.a)({},H.defaults),X=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.topOuterDivider,i=e.bottomOuterDivider,o=e.topDivider,l=e.bottomDivider,c=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",n&&"has-top-divider",i&&"has-bottom-divider",c&&"has-bg-color",s&&"invert-color",t),p=E()("testimonial-inner section-inner",o&&"has-top-divider",l&&"has-bottom-divider"),h=E()("tiles-wrap",m&&"push-left");return r.a.createElement("section",Object.assign({},d,{className:u}),r.a.createElement("div",{className:"container"},r.a.createElement("a",{id:"team"}),r.a.createElement("div",{className:p},r.a.createElement(q,{data:{title:"Golf MetaClub Team",paragraph:""},className:"center-content"}),r.a.createElement("div",{className:h},r.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},r.a.createElement("div",{className:"tiles-item-inner"},r.a.createElement("div",{className:"testimonial-item-content"},r.a.createElement(x,{src:a(240),alt:"Open",width:800,height:800})),r.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},r.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Hugh"),r.a.createElement("span",{className:"text-color-low"}," / "),r.a.createElement("span",{className:"testimonial-item-link"},r.a.createElement("a",{href:"#0"},"Founder")))))))))}}]),n}(r.a.Component);X.defaultProps=J;var ee=X,te=function(e){var t=e.className,a=e.children,n=e.labelHidden,i=e.id,o=Object(v.a)(e,["className","children","labelHidden","id"]),l=E()("form-label",n&&"screen-reader",t);return r.a.createElement("label",Object.assign({},o,{className:l,htmlFor:i}),a)};te.defaultProps={children:null,labelHidden:!1,id:null};var ae=te,ne=function(e){var t=e.children,a=e.className,n=e.status,i=Object(v.a)(e,["children","className","status"]),o=E()("form-hint",n&&"text-color-".concat(n),a);return r.a.createElement("div",Object.assign({},i,{className:o}),t)};ne.defaultProps={children:null,status:!1};var re=ne,ie=function(e){var t=e.className,a=e.children,n=e.label,i=e.labelHidden,o=e.type,l=e.name,c=e.status,s=e.disabled,m=e.value,d=e.formGroup,u=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,g=Object(v.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(d&&""!==d&&("desktop"===d?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),O=E()("form-input",p&&"form-input-".concat(p),c&&"form-".concat(c),t),w="textarea"===o?"textarea":"input";return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(ae,{labelHidden:i,id:g.id},n),r.a.createElement("div",{className:N},r.a.createElement(w,Object.assign({},g,{type:"textarea"!==o?o:null,className:O,name:l,disabled:s,value:m,placeholder:h,rows:"textarea"===o?b:null})),a),f&&r.a.createElement(re,{status:c},f))};ie.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var oe=ie,le=Object(P.a)({},z.defaults,{split:!1}),ce=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,i=e.topDivider,o=e.bottomDivider,l=e.hasBgColor,c=e.invertColor,s=e.split,m=Object(v.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),d=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",n&&"has-bottom-divider",l&&"has-bg-color",c&&"invert-color",t),u=E()("cta-inner section-inner",i&&"has-top-divider",o&&"has-bottom-divider",s&&"cta-split");return r.a.createElement("section",Object.assign({},m,{className:d}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:u},r.a.createElement("div",{className:"cta-slogan"},r.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),r.a.createElement("div",{className:"cta-action"},r.a.createElement(oe,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},r.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))}}]),a}(r.a.Component);ce.defaultProps=le;a(23),a(55),a(81);var se=a(21),me=a(68),de=(a(129),a(216),a(82)),ue=a(217),ve={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(P.a)({},ve,{loading:!0});case"CONNECTION_SUCCESS":return Object(P.a)({},e,{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(P.a)({},ve,{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(P.a)({},e,{account:t.payload.account});default:return e}},he={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(P.a)({},e,{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(P.a)({},e,{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(P.a)({},he,{loading:!1,error:!0,errorMsg:t.payload});default:return e}},fe=Object(de.b)({blockchain:pe,data:be}),ge=[ue.a],Ee=Object(de.c)(de.a.apply(void 0,ge)),Ne=Object(de.d)(fe,Ee),Oe=a(22);function we(){var e=Object(se.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]);return we=function(){return e},e}function xe(){var e=Object(se.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"]);return xe=function(){return e},e}function ye(){var e=Object(se.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]);return ye=function(){return e},e}function je(){var e=Object(se.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]);return je=function(){return e},e}function Ce(){var e=Object(se.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"]);return Ce=function(){return e},e}function De(){var e=Object(se.a)(["\n  height: 32px;\n  width: 32px;\n"]);return De=function(){return e},e}function ke(){var e=Object(se.a)(["\n  height: 24px;\n  width: 24px;\n"]);return ke=function(){return e},e}function Me(){var e=Object(se.a)(["\n  height: 16px;\n  width: 16px;\n"]);return Me=function(){return e},e}function Ae(){var e=Object(se.a)(["\n  height: 8px;\n  width: 8px;\n"]);return Ae=function(){return e},e}function Fe(){var e=Object(se.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]);return Fe=function(){return e},e}Oe.a.div(Fe(),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Oe.a.div(Ae()),Oe.a.div(Me()),Oe.a.div(ke()),Oe.a.div(De()),Oe.a.div(Ce(),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Oe.a.p(je()),Oe.a.p(ye()),Oe.a.p(xe()),Oe.a.div(we());function Pe(){var e=Object(se.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]);return Pe=function(){return e},e}function Se(){var e=Object(se.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]);return Se=function(){return e},e}function Te(){var e=Object(se.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]);return Te=function(){return e},e}function Le(){var e=Object(se.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]);return Le=function(){return e},e}function ze(){var e=Object(se.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 10px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]);return ze=function(){return e},e}function Be(){var e=Object(se.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: white;\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 10px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]);return Be=function(){return e},e}Oe.a.button(Be()),Oe.a.button(ze()),Oe.a.div(Le()),Oe.a.img(Te()),Oe.a.img(Se()),Oe.a.a(Pe());var He=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={videoModalActive:!1},e.openModal=function(t){t.preventDefault(),e.setState({videoModalActive:!0})},e.closeModal=function(t){t.preventDefault(),e.setState({videoModalActive:!1})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement($,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),r.a.createElement(Z,null),r.a.createElement(ee,{topDivider:!0}))}}]),a}(r.a.Component);f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var _e=function(e){f.a.set({page:e}),f.a.pageview(e)},Ge=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname;document.body.classList.add("is-loaded"),this.refs.scrollReveal.init(),_e(e)}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname+e.location.search,a=this.props.location.pathname+this.props.location.search;t!==a&&(this.refs.scrollReveal.init(),_e(a))}},{key:"render",value:function(){return r.a.createElement(b,{ref:"scrollReveal",children:function(){return r.a.createElement(l.c,null,r.a.createElement(p,{exact:!0,path:"/",component:He,layout:F}))}})}}]),a}(r.a.Component),Re=Object(l.f)((function(e){return r.a.createElement(Ge,e)}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(544);var Ie=Object(c.a)();o.a.render(r.a.createElement(me.a,{store:Ne},r.a.createElement(l.b,{history:Ie},r.a.createElement(Re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[223,1,2]]]);
//# sourceMappingURL=main.c236ba91.chunk.js.map