if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const a=s=>i(s,r),u={module:{uri:r},exports:t,require:a};e[r]=Promise.all(n.map((s=>u[s]||a(s)))).then((s=>(l(...s),t)))}}define(["./workbox-c1760cce"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_...fallback_.66a91a5e.js",revision:null},{url:"assets/_module.ec90e44f.js",revision:null},{url:"assets/_tabs_.b2f8c8b1.css",revision:null},{url:"assets/_tabs_.e81ecea8.js",revision:null},{url:"assets/index.22df2591.js",revision:null},{url:"assets/index.5ea007c3.js",revision:null},{url:"assets/index.5ea3ef1f.js",revision:null},{url:"assets/index.6c44eb81.js",revision:null},{url:"assets/index.d1449cb0.css",revision:null},{url:"assets/index.db61a71c.js",revision:null},{url:"assets/index9.a948f98d.js",revision:null},{url:"assets/input-shims.ce00a91b.js",revision:null},{url:"assets/ios.transition.e64fe2fb.js",revision:null},{url:"assets/md.transition.2d082409.js",revision:null},{url:"assets/status-tap.e81588da.js",revision:null},{url:"assets/swipe-back.fa375c67.js",revision:null},{url:"assets/swiper.bundle.a76d5250.js",revision:null},{url:"index.html",revision:"5029e2fc55770ad5a122cf9865fefb8b"},{url:"favicon.ico",revision:"991f98b949295bbc9cb76124c50b1aa0"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"80ddaaeb37a702ac34d2b73b06d588d4"},{url:"./assets/img/great-success.png",revision:"f5190e1726d81b4225041536c67401c6"},{url:"assets/svelte-ionic-logo.png",revision:"be56ccfa9a7151d6f2549e4e5ebd5e86"},{url:"assets/svelte.png",revision:"087bf945b9f69c0abd4d9f3862440327"},{url:"manifest.webmanifest",revision:"a5b45bbdaee41a540a69113a19f2d21f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
