import{a0 as b,a1 as A,Y as P,X as B,V as T,a2 as M,a3 as N,a4 as p}from"./index.7b586bee.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const L=new WeakMap,g=(e,t,o,r=0)=>{L.has(e)!==o&&(o?x(e,t,r):R(e,t))},C=e=>e===e.getRootNode().activeElement,x=(e,t,o)=>{const r=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r.appendChild(n),L.set(e,n);const d=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${o}px,0) scale(0)`},R=(e,t)=>{const o=L.get(e);o&&(L.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},K=(e,t,o)=>{if(!o||!t)return()=>{};const r=i=>{C(t)&&g(e,t,i)},n=()=>g(e,t,!1),s=()=>r(!0),d=()=>r(!1);return b(o,"ionScrollStart",s),b(o,"ionScrollEnd",d),t.addEventListener("blur",n),()=>{A(o,"ionScrollStart",s),A(o,"ionScrollEnd",d),t.addEventListener("ionBlur",n)}},y="input, textarea, [no-blur], [contenteditable]",_=()=>{let e=!0,t=!1;const o=document,r=()=>{t=!0},n=()=>{e=!0},s=d=>{if(t){t=!1;return}const i=o.activeElement;if(!i||i.matches(y))return;const c=d.target;c!==i&&(c.matches(y)||c.closest(y)||(e=!1,setTimeout(()=>{e||i.blur()},50)))};return b(o,"ionScrollStart",r),o.addEventListener("focusin",n,!0),o.addEventListener("touchend",s,!1),()=>{A(o,"ionScrollStart",r,!0),o.removeEventListener("focusin",n,!0),o.removeEventListener("touchend",s,!1)}},O=.3,F=(e,t,o)=>{const r=e.closest("ion-item,[ion-item]")||e;return k(r.getBoundingClientRect(),t.getBoundingClientRect(),o,e.ownerDocument.defaultView.innerHeight)},k=(e,t,o,r)=>{const n=e.top,s=e.bottom,d=t.top,i=Math.min(t.bottom,r-o),c=d+15,f=i*.75-s,m=c-n,a=Math.round(f<0?-f:m>0?-m:0),u=Math.min(a,n-d),v=Math.abs(u)/O,w=Math.min(400,Math.max(150,v));return{scrollAmount:u,scrollDuration:w,scrollPadding:o,inputSafeY:-(n-c)+4}},H=(e,t,o,r,n)=>{let s;const d=c=>{s=T(c)},i=c=>{if(!s)return;const l=T(c);!U(6,s,l)&&!C(t)&&Y(e,t,o,r,n)};return e.addEventListener("touchstart",d,{capture:!0,passive:!0}),e.addEventListener("touchend",i,!0),()=>{e.removeEventListener("touchstart",d,!0),e.removeEventListener("touchend",i,!0)}},Y=async(e,t,o,r,n)=>{if(!o&&!r)return;const s=F(e,o||r,n);if(o&&Math.abs(s.scrollAmount)<4){t.focus();return}if(g(e,t,!0,s.inputSafeY),t.focus(),M(()=>e.click()),typeof window!="undefined"){let d;const i=async()=>{d!==void 0&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",c),window.removeEventListener("ionKeyboardDidShow",i),o&&await p(o,0,s.scrollAmount,s.scrollDuration),g(e,t,!1,s.inputSafeY),t.focus()},c=()=>{window.removeEventListener("ionKeyboardDidShow",c),window.addEventListener("ionKeyboardDidShow",i)};if(o){const l=await N(o),f=l.scrollHeight-l.clientHeight;if(s.scrollAmount>f-l.scrollTop){t.type==="password"?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",c)):window.addEventListener("ionKeyboardDidShow",i),d=setTimeout(i,1e3);return}}i()}},U=(e,t,o)=>{if(t&&o){const r=t.x-o.x,n=t.y-o.y;return r*r+n*n>e*e}return!1},D="$ionPaddingTimer",$=e=>{const t=document,o=n=>{I(n.target,e)},r=n=>{I(n.target,0)};return t.addEventListener("focusin",o),t.addEventListener("focusout",r),()=>{t.removeEventListener("focusin",o),t.removeEventListener("focusout",r)}},I=(e,t)=>{var o,r;if(e.tagName!=="INPUT"||e.parentElement&&e.parentElement.tagName==="ION-INPUT"||((r=(o=e.parentElement)===null||o===void 0?void 0:o.parentElement)===null||r===void 0?void 0:r.tagName)==="ION-SEARCHBAR")return;const n=B(e);if(n===null)return;const s=n[D];s&&clearTimeout(s),t>0?n.style.setProperty("--keyboard-offset",`${t}px`):n[D]=setTimeout(()=>{n.style.setProperty("--keyboard-offset","0px")},120)},q=!0,G=!0,V=e=>{const t=document,o=e.getNumber("keyboardHeight",290),r=e.getBoolean("scrollAssist",!0),n=e.getBoolean("hideCaretOnScroll",!0),s=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),i=Array.from(t.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,l=new WeakMap,f=async a=>{await new Promise(S=>P(a,S));const u=a.shadowRoot||a,h=u.querySelector("input")||u.querySelector("textarea"),v=B(a),w=v?null:a.closest("ion-footer");if(!!h){if(!!v&&n&&!c.has(a)){const S=K(a,h,v);c.set(a,S)}if((!!v||!!w)&&r&&!l.has(a)){const S=H(a,h,v,w,o);l.set(a,S)}}},m=a=>{if(n){const u=c.get(a);u&&u(),c.delete(a)}if(r){const u=l.get(a);u&&u(),l.delete(a)}};s&&q&&_(),d&&G&&$(o);for(const a of i)f(a);t.addEventListener("ionInputDidLoad",a=>{f(a.detail)}),t.addEventListener("ionInputDidUnload",a=>{m(a.detail)})};export{V as startInputShims};
