if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),o={module:{uri:r},exports:t,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(l(...s),t)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...fallback_.45e41c76.js",revision:null},{url:"assets/_module.60fd5835.js",revision:null},{url:"assets/_tabs_.3e888f91.js",revision:null},{url:"assets/_tabs_.a3c33653.css",revision:null},{url:"assets/index.1a1ec80d.js",revision:null},{url:"assets/index.39e080d7.css",revision:null},{url:"assets/index.5c11a2c7.js",revision:null},{url:"assets/index.aada8e50.js",revision:null},{url:"assets/index.b0e4e99e.js",revision:null},{url:"assets/index9.fc8520bf.js",revision:null},{url:"assets/input-shims.dfe4af35.js",revision:null},{url:"assets/ios.transition.0d59c96e.js",revision:null},{url:"assets/md.transition.f20484d6.js",revision:null},{url:"assets/status-tap.b344319c.js",revision:null},{url:"assets/swipe-back.e3818dcb.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"index.html",revision:"22ceda0415a4a67c73d161ec85988739"},{url:"favicon.ico",revision:"991f98b949295bbc9cb76124c50b1aa0"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"80ddaaeb37a702ac34d2b73b06d588d4"},{url:"assets/img/great-success.png",revision:"a2125198094ae484f5b87f120ba69460"},{url:"assets/svelte-ionic-logo.png",revision:"be56ccfa9a7151d6f2549e4e5ebd5e86"},{url:"assets/svelte.png",revision:"087bf945b9f69c0abd4d9f3862440327"},{url:"manifest.webmanifest",revision:"bac6b689a05bc0214d2574621f76155c"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
