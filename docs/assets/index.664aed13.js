import{l as u,m as l,p as h}from"./index.a87ee656.js";const g=(r,t)=>{const s=[r,...r.ancestors],n=[t,...t.ancestors];return s.find(e=>n.includes(e))},N=(r,t)=>{const s=[r,...r.ancestors],n=[t,...t.ancestors],e=g(r,t),o=s.indexOf(e),a=o?"../".repeat(o):"",i=n.indexOf(e),p=n.slice(0,i).reverse().map(c=>c.name).join("/");return a+p},k={subscribe:(r,t)=>{const{router:s}=l;return u(v,n=>(e,o,a)=>{const i=n(e,o);s.url.push(i)}).subscribe(r,t)}},v={subscribe:(r,t)=>{const{router:s}=l,n=l.fragment.node;return u(s.activeRoute,e=>{const o=s.rootNode.traverse(n.path);return(a,i={})=>{const p=a.startsWith("/")?s.rootNode.path:"",c=o.traverse(p+a);if(!c){console.error("could not find destination node",a);return}const b=g(c,s.rootNode),d="/"+N(b,c),m={...x(c,e),...i},f=h(d,m,e);return s.getExternalUrl(f)}}).subscribe(r,t)}},x=(r,t)=>{const n=[r,...r.ancestors].reverse().map(e=>{var o;return(o=t.allFragments.find(a=>a.node===e||a.node.path===e.path))==null?void 0:o.params});return Object.assign({},...n)},O={subscribe:(r,t)=>u(l.router.params,s=>s).subscribe(r,t)};export{k as g,O as p};
