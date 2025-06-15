/* empty css                      */import{a as f,S as p,i}from"./assets/vendor-1AYLTIiv.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const d="50818292-28c953def5feac0614fc2706b",h="https://pixabay.com/api/";function m(s){const o={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(h,{params:o}).then(e=>{if(e.data.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.data})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
          </a>
        <ul class="info">
  <li class="photo-info">👍 <span class="span">${e.likes}</span></li>
  <li class="photo-info">👁 <span class="span">${e.views}</span></li>
  <li class="photo-info">💬 <span class="span">${e.comments}</span></li>
  <li class="photo-info">⬇️ <span class="span">${e.downloads}</span></li>
</ul>
        </li>
      `).join("");c.innerHTML+=o,y.refresh()}function L(){c.innerHTML=""}function b(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const a=document.querySelector(".form");a.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim()??"";if(o===""){i.error({title:"Error!",message:"Please enter a search query",position:"topRight",backgroundColor:"#f39c12"}),a.reset();return}L(),b(),m(o).then(e=>{if(e.hits.length===0){i.error({title:"Error!",message:"No images found",position:"topRight",backgroundColor:"#e74c3c"}),a.reset();return}g(e.hits),a.reset()}).catch(()=>{i.error({title:"Error!",message:"Failed to load images",position:"topRight"}),a.reset()}).finally(q)});
//# sourceMappingURL=index.js.map
