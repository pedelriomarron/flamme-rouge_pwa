if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),o={module:{uri:r},exports:t,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(l(...s),t)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...fallback_.67af04ce.js",revision:null},{url:"assets/_module.e0787869.js",revision:null},{url:"assets/_tabs_.37a58bd1.js",revision:null},{url:"assets/_tabs_.b2f8c8b1.css",revision:null},{url:"assets/index.2b182f95.js",revision:null},{url:"assets/index.7b586bee.js",revision:null},{url:"assets/index.ce680e85.js",revision:null},{url:"assets/index.d06a6f89.js",revision:null},{url:"assets/index.d1449cb0.css",revision:null},{url:"assets/index.e1bbdfdc.js",revision:null},{url:"assets/index9.1279d9bd.js",revision:null},{url:"assets/input-shims.3b599c75.js",revision:null},{url:"assets/ios.transition.d373c9ff.js",revision:null},{url:"assets/md.transition.fdae622a.js",revision:null},{url:"assets/status-tap.7a7fb904.js",revision:null},{url:"assets/swipe-back.ecbf9e4f.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"index.html",revision:"6cd9e165037190685f7bb3108b74c335"},{url:"favicon.ico",revision:"991f98b949295bbc9cb76124c50b1aa0"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"80ddaaeb37a702ac34d2b73b06d588d4"},{url:"./assets/img/great-success.png",revision:"a2125198094ae484f5b87f120ba69460"},{url:"assets/svelte-ionic-logo.png",revision:"be56ccfa9a7151d6f2549e4e5ebd5e86"},{url:"assets/svelte.png",revision:"087bf945b9f69c0abd4d9f3862440327"},{url:"manifest.webmanifest",revision:"f1cd5b0ec6ec5442b89567a0f3a132e7"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
