(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{24:function(e,t,a){e.exports=a(41)},34:function(e,t,a){e.exports=a.p+"static/media/Logo_wheelzdevNew.99c060e3.png"},35:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.e40567b1.svg"},36:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.13b5a685.svg"},37:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.8b7d0a8e.svg"},38:function(e,t,a){e.exports=a.p+"static/media/white-instagram-icon-png.b5b41e27.png"},39:function(e,t,a){e.exports=a.p+"static/media/newLaunch_imageInstagram.11c945bf.png"},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(21),l=a.n(r),o=a(10),s=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(o.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(11),v=a(3),u=a.n(v),p=a(17),h=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],o=r[1],s=Object(i.useState)([]),c=Object(d.a)(s,2),m=c[0],v=c[1],u=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},h=function(){if(!u())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(u()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),h())}),[m]);var b=function(){u()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(p.throttle)((function(){b(),h()}),30),g=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){b(),h()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));h.propTypes={children:u.a.func.isRequired};var b=h,f=a(13),g=a(1),E=a.n(g),N=a(8),O=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useRef)(null);Object(i.useEffect)((function(){var e=document.createElement("img");d(m.current,e)}),[]);var d=function(e,t){e.before(t),t.width=e.getAttribute("width"),t.height=e.getAttribute("height"),t.style.opacity="0",e.className&&t.classList.add(e.className),e.addEventListener("load",(function(){t.remove(),e.style.display=""}))};return n.a.createElement("img",Object.assign({},s,{ref:m,className:t,src:a,width:r,height:l,alt:o}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,j=function(e){var t=e.className,i=Object(c.a)(e,["className"]),r=E()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(N.a,{to:"/"},n.a.createElement(w,{src:a(34),width:100,height:20}))))},D=function(e){var t=e.className,a=e.navPosition,r=e.hideNav,l=(e.hideSignin,e.bottomOuterDivider),o=e.bottomDivider,s=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),v=Object(d.a)(m,2),u=v[0],p=v[1],h=Object(i.useRef)(null),b=Object(i.useRef)(null);Object(i.useEffect)((function(){return u&&f(),document.addEventListener("keydown",O),document.addEventListener("click",w),function(){document.removeEventListener("keydown",O),document.addEventListener("click",w),g()}}));var f=function(){document.body.classList.add("off-nav-is-active"),h.current.style.maxHeight=h.current.scrollHeight+"px",p(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),h.current&&(h.current.style.maxHeight=null),p(!1)},O=function(e){u&&27===e.keyCode&&g()},w=function(e){h.current&&u&&!h.current.contains(e.target)&&e.target!==b.current&&g()},D=E()("site-header",l&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},s,{className:D}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-header-inner",o&&"has-bottom-divider")},n.a.createElement(j,null),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:u?g:f},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:h,className:E()("header-nav",u&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:E()("list-reset text-xs",a&&"header-nav-".concat(a))},n.a.createElement("li",null,n.a.createElement(N.a,{to:"#0",onClick:g},"Shop")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var y=D,k=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-social",t);return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.instagram.com/wheelzdev/"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Instagram"),n.a.createElement("g",null,n.a.createElement("circle",{cx:"12.145",cy:"3.892",r:"1"}),n.a.createElement("path",{d:"M8 12c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"}),n.a.createElement("path",{d:"M12 16H4c-2.056 0-4-1.944-4-4V4c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zM4 2c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2V4c0-.935-1.065-2-2-2H4z"})))))))},x=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},"\xa9 Copyright WheelzDev",n.a.createElement(k,null)))))};x.defaultProps={topOuterDivider:!1,topDivider:!1};var C=x,z=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(y,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(C,null))},L=a(5),P={types:{topOuterDivider:u.a.bool,bottomOuterDivider:u.a.bool,topDivider:u.a.bool,bottomDivider:u.a.bool,hasBgColor:u.a.bool,invertColor:u.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},B={types:Object(L.a)({},P.types),defaults:Object(L.a)({},P.defaults)},H={types:Object(L.a)({},P.types,{invertMobile:u.a.bool,invertDesktop:u.a.bool,alignTop:u.a.bool,imageFill:u.a.bool}),defaults:Object(L.a)({},P.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},S={types:Object(L.a)({},P.types,{pushLeft:u.a.bool}),defaults:Object(L.a)({},P.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},F=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),v=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),u=a;return n.a.createElement(u,Object.assign({},d,{className:v,disabled:m}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var _=F,A=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",p),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){v()}),[d.show]);var v=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},h=E()("modal",l&&"is-active",s&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:h,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},s?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:s})):n.a.createElement(n.a.Fragment,null,!o&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};A.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var R=Object(L.a)({},B.defaults),M=function(e){var t=e.className,a=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),u=Object(i.useState)(!1),p=Object(d.a)(u,2),h=(p[0],p[1],E()("hero section center-content",a&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t)),b=E()("hero-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:h}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:b},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Op zoek naar een ",n.a.createElement("span",{className:"text-color-primary"},"applicatie")," voor uw bedrijf?"),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Heeft u altijd al een mobiele applicatie voor zowel iOS en Android gewenst, dan bent u hier aan het juiste adres. Wij gaan samen met u kijken naar de mogelijkheden om uw bedrijf te verbeteren doormiddel van een applicatie."),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"600"},n.a.createElement(T,null,n.a.createElement(_,{tag:"a",color:"primary",wideMobile:!0,href:"mailto:info@wheelzdev.nl"},"Neem contact op"))))))))};M.defaultProps=R;var I=M,W=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),o=E()("section-header",t),s=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:o}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(s,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};W.defaultProps={children:null,tag:"h2"};var G=W,q=Object(L.a)({},S.defaults),K=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=E()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",o&&"has-bottom-divider"),h=E()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},v,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(G,{data:{title:"Build up the whole picture",paragraph:"Het werk is pas af wanneer u tevreden bent!"},className:"center-content"}),n.a.createElement("div",{className:h},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(35),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Persoonlijk contact"),n.a.createElement("p",{className:"m-0 text-sm"},"De klant is koning, geen standaard applicaties. Alles zal helemaal op uw wens worden ontwikkeld.")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(36),alt:"Features tile icon 02",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Dezelfde applicatie voor zowel iOS als Android."),n.a.createElement("p",{className:"m-0 text-sm"},"Beide applicatie worden op dezelfde manier ontwikkeld, zo hoeft er dus minder werk verricht te worden!")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(37),alt:"Features tile icon 03",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"Onnovatief"),n.a.createElement("p",{className:"m-0 text-sm"},"Bij WheelzDev blijven wij altijd op de hoogte van nieuwste technologie\xebn, zo heeft u altijd een moderne applicatie."))))))))};K.defaultProps=q;var V=K,J=Object(L.a)({},S.defaults),U=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),u=E()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),p=E()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:u},n.a.createElement(G,{data:{title:"Gebruikers feedback",paragraph:"Zoals u kunt zien zijn al veel gebruikers razend enthousiast over de voorgaande projecten."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Is echt een superfijne app. In 1 overzicht al je wedstrijden. Een scheidsrechter tool en nog veel meer.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Patrick"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"Rolstoelhockey"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Wat een top app, werkt ook echt super. Denk dat de app een goede toevoeging is voor de sport en er voor zal zorgen dat de sport groter wordt.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Sam"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"Rolstoelhockey")))))))))};U.defaultProps=J;var Z=U,$=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),o=E()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},l,{className:o,htmlFor:r}),a)};$.defaultProps={children:null,labelHidden:!1,id:null};var Q=$,X=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),l=E()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:l}),t)};X.defaultProps={children:null,status:!1};var Y=X,ee=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,l=e.type,o=e.name,s=e.status,m=e.disabled,d=e.value,v=e.formGroup,u=e.hasIcon,p=e.size,h=e.placeholder,b=e.rows,f=e.hint,g=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(v&&""!==v&&("desktop"===v?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),O=E()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),w="textarea"===l?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(Q,{labelHidden:r,id:g.id},i),n.a.createElement("div",{className:N},n.a.createElement(w,Object.assign({},g,{type:"textarea"!==l?l:null,className:O,name:o,disabled:m,value:d,placeholder:h,rows:"textarea"===l?b:null})),a),f&&n.a.createElement(Y,{status:s},f))};ee.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var te=Object(L.a)({},B.defaults,{split:!1}),ae=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.split,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=E()("cta section center-content-mobile reveal-from-bottom",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),p=E()("cta-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider",d&&"cta-split");return n.a.createElement("section",Object.assign({},v,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"Op de hoogte blijven van alle ontwikkelingen?")),n.a.createElement("div",{className:"cta-action"},n.a.createElement("a",{href:"https://www.instagram.com/wheelzdev/"},n.a.createElement(w,{src:a(38),width:108,height:196}))))))};ae.defaultProps=te;var ie=ae,ne=Object(L.a)({},H.defaults),re=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,v=e.invertDesktop,u=e.alignTop,p=e.imageFill,h=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),f=E()("features-split-inner section-inner",l&&"has-top-divider",o&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",v&&"invert-desktop",u&&"align-top");return n.a.createElement("section",Object.assign({},h,{className:b}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(G,{data:{title:"Projecten",paragraph:"Dit is een project wat uit eigen initiatief is gemaakt voor en door Rolstoelhockey spelers."},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("h3",{className:"mt-0 mb-12"},"Rolstoelhockey"),n.a.createElement("p",{className:"m-0"},"Deze app is gemaakt voor een door spelers van de Rolstoelhockey community."),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginTop:10}},n.a.createElement("a",{href:"https://apps.apple.com/nl/app/rolstoelhockey/id1512920070?mt=8",style:{display:"inline-block",overflow:"hidden",background:"url(https://linkmaker.itunes.apple.com/nl-nl/badge-lrg.svg?releaseDate=2020-06-15&kind=iossoftware&bubble=ios_apps) no-repeat",width:135,height:40}}),n.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=rolstoel.hockey&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},n.a.createElement("img",{alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",style:{width:160,height:60,marginTop:-9}})))),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(39),width:328,height:196})))))))};re.defaultProps=ne;var le=re,oe=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(I,{className:"illustration-section-01"}),n.a.createElement(V,null),n.a.createElement(le,null),n.a.createElement(Z,{topDivider:!0}),n.a.createElement(ie,{split:!0}))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/wheelz-dev",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var se=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),n.a.createElement(b,{ref:e,children:function(){return n.a.createElement(o.c,null,n.a.createElement(m,{exact:!0,path:"/",component:oe,layout:z}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);var ce=Object(s.a)();l.a.render(n.a.createElement(o.b,{history:ce},n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.bb3aa446.chunk.js.map