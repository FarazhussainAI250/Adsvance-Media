// Performance Optimization Script
(function(){
'use strict';

// Lazy Load Images Observer
const imgObserver=new IntersectionObserver((e,o)=>{
e.forEach(i=>{if(i.isIntersecting){const t=i.target;t.src=t.dataset.src||t.src;t.classList.add('loaded');o.unobserve(t)}})
},{rootMargin:'50px'});

document.querySelectorAll('img[loading="lazy"]').forEach(i=>imgObserver.observe(i));

// Debounce Scroll Events
let ticking=false;
window.addEventListener('scroll',()=>{
if(!ticking){window.requestAnimationFrame(()=>{ticking=false});ticking=true}
},{passive:true});

// Preload Critical Resources
const preload=(h,a='script')=>{
const l=document.createElement('link');
l.rel='preload';l.as=a;l.href=h;
document.head.appendChild(l);
};

// Cache DOM Queries
const cache={};
window.$=(s)=>cache[s]||(cache[s]=document.querySelector(s));
window.$$=(s)=>cache[s+'All']||(cache[s+'All']=document.querySelectorAll(s));

// Optimize Animations
if('IntersectionObserver' in window){
const animObserver=new IntersectionObserver(e=>{
e.forEach(i=>{if(i.isIntersecting){i.target.classList.add('animate');animObserver.unobserve(i.target)}})
},{threshold:0.1});
document.querySelectorAll('.animate-on-scroll').forEach(e=>animObserver.observe(e));
}

// Reduce Repaints
document.addEventListener('DOMContentLoaded',()=>{
document.body.style.visibility='visible';
});

// Service Worker Registration (Optional)
if('serviceWorker' in navigator){
window.addEventListener('load',()=>{
// navigator.serviceWorker.register('/sw.js').catch(()=>{});
});
}

})();
