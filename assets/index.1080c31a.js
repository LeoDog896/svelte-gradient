import{w as V,S as C,i as q,s as T,e as p,t as $,a as u,b as H,c as i,l as j,d as A,n as L,f as M,g as N,h as K,j as d,k as P,m as E,o as F,p as I,q as z,r as B,u as D,v as G}from"./vendor.d5e55934.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};J();const b=V(0);let Q={};function R(o,e){Q[o]=e}R("count",b);var U="./assets/svelte.d72399d3.png";function W(o){let e,s,r,t,n;return{c(){e=p("button"),s=$("Clicks: "),r=$(o[0]),u(e,"class","rounded-full py-4 px-8 border-2 border-transparent outline-none w-48 tabular-nums focus:border-opacity-100 svelte-8g1gnq")},m(a,l){H(a,e,l),i(e,s),i(e,r),t||(n=j(e,"click",o[1]),t=!0)},p(a,[l]){l&1&&A(r,a[0])},i:L,o:L,d(a){a&&M(e),t=!1,n()}}}function X(o,e,s){let{count:r=0}=e;const t=()=>s(0,r+=1);return o.$$set=n=>{"count"in n&&s(0,r=n.count)},[r,t]}class Y extends C{constructor(e){super();q(this,e,X,W,T,{count:0})}}function Z(o){let e,s,r,t,n,a,l,_,y,f,w,m,x,g,h;function O(c){o[1](c)}let k={};return o[0]!==void 0&&(k.count=o[0]),l=new Y({props:k}),N.push(()=>K(l,"count",O)),{c(){e=p("main"),s=p("img"),t=d(),n=p("h1"),n.textContent="Hello Vite!",a=d(),P(l.$$.fragment),y=d(),f=p("p"),f.innerHTML=`Visit <a class="text-red-600 hover:underline" href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.`,w=d(),m=p("p"),m.innerHTML=`Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!`,x=d(),g=p("div"),g.innerHTML=`<a href="https://svelte.dev/" target="_blank" class="p-2 hover:underline">Svelte</a> +
    <a href="https://tailwindcss.com/" target="_blank" class="p-2 hover:underline">Tailwind CSS</a> +
    <a href="https://www.typescriptlang.org/" target="_blank" class="p-2 hover:underline">TypeScript</a> +
    Component + 
    <a href="https://vitejs.dev/" target="_blank" class="p-2 hover:underline">Vite</a>`,u(s,"width","100"),u(s,"height","100"),E(s.src,r=U)||u(s,"src",r),u(s,"alt","Svelte Logo"),u(s,"class","inline-block"),u(n,"class","text-6xl uppercase font-thin leading-tight my-8 mx-auto max-w-xs sm:max-w-xs svelte-44atyv"),u(f,"class","max-w-xs sm:max-w-none my-4 mx-auto leading-5"),u(m,"class","max-w-xs sm:max-w-none my-4 mx-auto leading-5"),u(g,"class","text-red-500 p-2"),u(e,"class","text-center p-4 mx-0")},m(c,v){H(c,e,v),i(e,s),i(e,t),i(e,n),i(e,a),F(l,e,null),i(e,y),i(e,f),i(e,w),i(e,m),i(e,x),i(e,g),h=!0},p(c,[v]){const S={};!_&&v&1&&(_=!0,S.count=c[0],I(()=>_=!1)),l.$set(S)},i(c){h||(z(l.$$.fragment,c),h=!0)},o(c){B(l.$$.fragment,c),h=!1},d(c){c&&M(e),D(l)}}}function ee(o,e,s){let r;G(o,b,n=>s(0,r=n));function t(n){r=n,b.set(r)}return[r,t]}class te extends C{constructor(e){super();q(this,e,ee,Z,T,{})}}new te({target:document.body});
