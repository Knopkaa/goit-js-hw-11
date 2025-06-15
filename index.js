/* empty css                      */import{a as u,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50873907-8b846281db2f2ba14baa2840f",m="https://pixabay.com/api/";async function h(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:o})).data}const l=document.querySelector(".gallery"),d=document.querySelector(".loader");let g=new f(".gallery a");function y(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function b(){l.innerHTML=""}function L(){d.classList.remove("hidden")}function w(){d.classList.add("hidden")}const i=document.querySelector(".form");i.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim()??"";if(o===""){a.error({title:"Error!",message:"Please enter a search query",position:"topRight",backgroundColor:"#f39c12"}),i.reset();return}b(),L(),h(o).then(t=>{if(t.hits.length===0){a.error({title:"Error!",message:"No images found",position:"topRight",backgroundColor:"#e74c3c"}),i.reset();return}y(t.hits),i.reset()}).catch(()=>{a.error({title:"Error!",message:"Failed to load images",position:"topRight"}),i.reset()}).finally(w)});
//# sourceMappingURL=index.js.map
