import{a8 as o,a9 as z}from"./index.7b586bee.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const U=540,D=n=>document.querySelector(`${n}.ion-cloned-element`),F=n=>n.shadowRoot||n,k=n=>{const a=n.tagName==="ION-TABS"?n:n.querySelector("ion-tabs"),s="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(a!=null){const t=a.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return t!=null?t.querySelector(s):null}return n.querySelector(s)},W=(n,a)=>{const s=n.tagName==="ION-TABS"?n:n.querySelector("ion-tabs");let t=[];if(s!=null){const i=s.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");i!=null&&(t=i.querySelectorAll("ion-buttons"))}else t=n.querySelectorAll("ion-buttons");for(const i of t){const e=i.closest("ion-header"),b=e&&!e.classList.contains("header-collapse-condense-inactive"),l=i.querySelector("ion-back-button"),p=i.classList.contains("buttons-collapse"),f=i.slot==="start"||i.slot==="";if(l!==null&&f&&(p&&b&&a||!p))return l}return null},j=(n,a,s,t,i)=>{const e=W(t,s),b=k(i),l=k(t),p=W(i,s),f=e!==null&&b!==null&&!s,y=l!==null&&p!==null&&s;if(f){const m=b.getBoundingClientRect(),c=e.getBoundingClientRect();G(n,a,s,b,m,c),M(n,a,s,e,m,c)}else if(y){const m=l.getBoundingClientRect(),c=p.getBoundingClientRect();G(n,a,s,l,m,c),M(n,a,s,p,m,c)}return{forward:f,backward:y}},M=(n,a,s,t,i,e)=>{const b=a?`calc(100% - ${e.right+4}px)`:`${e.left-4}px`,l=a?"7px":"-7px",p=a?"-4px":"4px",f=a?"-4px":"4px",y=a?"right":"left",m=a?"left":"right",c=[{offset:0,opacity:0,transform:`translate3d(${l}, ${i.top-40}px, 0) scale(2.1)`},{offset:1,opacity:1,transform:`translate3d(${p}, ${e.top-46}px, 0) scale(1)`}],$=[{offset:0,opacity:1,transform:`translate3d(${p}, ${e.top-46}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${l}, ${i.top-40}px, 0) scale(2.1)`}],P=s?$:c,w=[{offset:0,opacity:0,transform:`translate3d(${f}, ${e.top-41}px, 0) scale(0.6)`},{offset:1,opacity:1,transform:`translate3d(${f}, ${e.top-46}px, 0) scale(1)`}],A=[{offset:0,opacity:1,transform:`translate3d(${f}, ${e.top-46}px, 0) scale(1)`},{offset:.2,opacity:0,transform:`translate3d(${f}, ${e.top-41}px, 0) scale(0.6)`},{offset:1,opacity:0,transform:`translate3d(${f}, ${e.top-41}px, 0) scale(0.6)`}],R=s?A:w,B=o(),I=o(),S=D("ion-back-button"),r=F(S).querySelector(".button-text"),g=F(S).querySelector("ion-icon");S.text=t.text,S.mode=t.mode,S.icon=t.icon,S.color=t.color,S.disabled=t.disabled,S.style.setProperty("display","block"),S.style.setProperty("position","fixed"),I.addElement(g),B.addElement(r),B.beforeStyles({"transform-origin":`${y} center`}).beforeAddWrite(()=>{t.style.setProperty("display","none"),S.style.setProperty(y,b)}).afterAddWrite(()=>{t.style.setProperty("display",""),S.style.setProperty("display","none"),S.style.removeProperty(y)}).keyframes(P),I.beforeStyles({"transform-origin":`${m} center`}).keyframes(R),n.addAnimation([B,I])},G=(n,a,s,t,i,e)=>{const b=a?`calc(100% - ${i.right}px)`:`${i.left}px`,l=a?"-18px":"18px",p=a?"right":"left",f=[{offset:0,opacity:0,transform:`translate3d(${l}, ${e.top-4}px, 0) scale(0.49)`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0, ${i.top-2}px, 0) scale(1)`}],y=[{offset:0,opacity:.99,transform:`translate3d(0, ${i.top-2}px, 0) scale(1)`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${l}, ${e.top-4}px, 0) scale(0.5)`}],m=s?f:y,c=D("ion-title"),$=o();c.innerText=t.innerText,c.size=t.size,c.color=t.color,$.addElement(c),$.beforeStyles({"transform-origin":`${p} center`,height:"46px",display:"",position:"relative",[p]:b}).beforeAddWrite(()=>{t.style.setProperty("display","none")}).afterAddWrite(()=>{t.style.setProperty("display",""),c.style.setProperty("display","none")}).keyframes(m),n.addAnimation($)},Q=(n,a)=>{try{const s="cubic-bezier(0.32,0.72,0,1)",t="opacity",i="transform",e="0%",l=n.ownerDocument.dir==="rtl",p=l?"-99.5%":"99.5%",f=l?"33%":"-33%",y=a.enteringEl,m=a.leavingEl,c=a.direction==="back",$=y.querySelector(":scope > ion-content"),P=y.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),w=y.querySelectorAll(":scope > ion-header > ion-toolbar"),A=o(),R=o();if(A.addElement(y).duration(a.duration||U).easing(a.easing||s).fill("both").beforeRemoveClass("ion-page-invisible"),m&&n){const r=o();r.addElement(n),A.addAnimation(r)}if(!$&&w.length===0&&P.length===0?R.addElement(y.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(R.addElement($),R.addElement(P)),A.addAnimation(R),c?R.beforeClearStyles([t]).fromTo("transform",`translateX(${f})`,`translateX(${e})`).fromTo(t,.8,1):R.beforeClearStyles([t]).fromTo("transform",`translateX(${p})`,`translateX(${e})`),$){const r=F($).querySelector(".transition-effect");if(r){const g=r.querySelector(".transition-cover"),q=r.querySelector(".transition-shadow"),v=o(),d=o(),u=o();v.addElement(r).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),d.addElement(g).beforeClearStyles([t]).fromTo(t,0,.1),u.addElement(q).beforeClearStyles([t]).fromTo(t,.03,.7),v.addAnimation([d,u]),R.addAnimation([v])}}const B=y.querySelector("ion-header.header-collapse-condense"),{forward:I,backward:S}=j(A,l,c,y,m);if(w.forEach(r=>{const g=o();g.addElement(r),A.addAnimation(g);const q=o();q.addElement(r.querySelector("ion-title"));const v=o(),d=Array.from(r.querySelectorAll("ion-buttons,[menuToggle]")),u=r.closest("ion-header"),X=u==null?void 0:u.classList.contains("header-collapse-condense-inactive");let E;c?E=d.filter(C=>{const _=C.classList.contains("buttons-collapse");return _&&!X||!_}):E=d.filter(C=>!C.classList.contains("buttons-collapse")),v.addElement(E);const h=o();h.addElement(r.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const T=o();T.addElement(F(r).querySelector(".toolbar-background"));const x=o(),O=r.querySelector("ion-back-button");if(O&&x.addElement(O),g.addAnimation([q,v,h,T,x]),v.fromTo(t,.01,1),h.fromTo(t,.01,1),c)X||q.fromTo("transform",`translateX(${f})`,`translateX(${e})`).fromTo(t,.01,1),h.fromTo("transform",`translateX(${f})`,`translateX(${e})`),x.fromTo(t,.01,1);else if(B||q.fromTo("transform",`translateX(${p})`,`translateX(${e})`).fromTo(t,.01,1),h.fromTo("transform",`translateX(${p})`,`translateX(${e})`),T.beforeClearStyles([t,"transform"]),(u==null?void 0:u.translucent)?T.fromTo("transform",l?"translateX(-100%)":"translateX(100%)","translateX(0px)"):T.fromTo(t,.01,"var(--opacity)"),I||x.fromTo(t,.01,1),O&&!I){const _=o();_.addElement(F(O).querySelector(".button-text")).fromTo("transform",l?"translateX(-100px)":"translateX(100px)","translateX(0px)"),g.addAnimation(_)}}),m){const r=o(),g=m.querySelector(":scope > ion-content"),q=m.querySelectorAll(":scope > ion-header > ion-toolbar"),v=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(!g&&q.length===0&&v.length===0?r.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")):(r.addElement(g),r.addElement(v)),A.addAnimation(r),c){r.beforeClearStyles([t]).fromTo("transform",`translateX(${e})`,l?"translateX(-100%)":"translateX(100%)");const d=z(m);A.afterAddWrite(()=>{A.getDirection()==="normal"&&d.style.setProperty("display","none")})}else r.fromTo("transform",`translateX(${e})`,`translateX(${f})`).fromTo(t,1,.8);if(g){const d=F(g).querySelector(".transition-effect");if(d){const u=d.querySelector(".transition-cover"),X=d.querySelector(".transition-shadow"),E=o(),h=o(),T=o();E.addElement(d).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),h.addElement(u).beforeClearStyles([t]).fromTo(t,.1,0),T.addElement(X).beforeClearStyles([t]).fromTo(t,.7,.03),E.addAnimation([h,T]),r.addAnimation([E])}}q.forEach(d=>{const u=o();u.addElement(d);const X=o();X.addElement(d.querySelector("ion-title"));const E=o(),h=d.querySelectorAll("ion-buttons,[menuToggle]"),T=d.closest("ion-header"),x=T==null?void 0:T.classList.contains("header-collapse-condense-inactive"),O=Array.from(h).filter(Y=>{const N=Y.classList.contains("buttons-collapse");return N&&!x||!N});E.addElement(O);const C=o(),_=d.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");_.length>0&&C.addElement(_);const L=o();L.addElement(F(d).querySelector(".toolbar-background"));const H=o(),K=d.querySelector("ion-back-button");if(K&&H.addElement(K),u.addAnimation([X,E,C,H,L]),A.addAnimation(u),H.fromTo(t,.99,0),E.fromTo(t,.99,0),C.fromTo(t,.99,0),c){if(x||X.fromTo("transform",`translateX(${e})`,l?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),C.fromTo("transform",`translateX(${e})`,l?"translateX(-100%)":"translateX(100%)"),L.beforeClearStyles([t,"transform"]),(T==null?void 0:T.translucent)?L.fromTo("transform","translateX(0px)",l?"translateX(-100%)":"translateX(100%)"):L.fromTo(t,"var(--opacity)",0),K&&!S){const N=o();N.addElement(F(K).querySelector(".button-text")).fromTo("transform",`translateX(${e})`,`translateX(${(l?-124:124)+"px"})`),u.addAnimation(N)}}else x||X.fromTo("transform",`translateX(${e})`,`translateX(${f})`).fromTo(t,.99,0).afterClearStyles([i,t]),C.fromTo("transform",`translateX(${e})`,`translateX(${f})`).afterClearStyles([i,t]),H.afterClearStyles([t]),X.afterClearStyles([t]),E.afterClearStyles([t])})}return A}catch(s){throw s}};export{Q as iosTransitionAnimation,F as shadow};
