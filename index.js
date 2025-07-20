import{a as f,S as d,i as l}from"./assets/vendor-0LLe4tDC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="51376871-d210e7f13e39905b8a62b8cdf",g="https://pixabay.com/api/";function h(s){return f.get(g,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");function y(s){const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${o}" alt="${e}" width="360" height="200" />
      </a>
      <ul class="gallery-info">
        <li class="info-block">
          <p class="label">Likes</p>
          <p class="value">${t}</p>
        </li>
        <li class="info-block">
          <p class="label">Views</p>
          <p class="value">${a}</p>
        </li>
        <li class="info-block">
          <p class="label">Comments</p>
          <p class="value">${u}</p>
        </li>
        <li class="info-block">
          <p class="label">Downloads</p>
          <p class="value">${p}</p>
        </li>
      </ul>
    </li>`).join("");n.insertAdjacentHTML("beforeend",r)}function b(){n.innerHTML=""}function L(){c.classList.remove("is-hidden")}function v(){c.classList.add("is-hidden")}const S=new d(".gallery a",{captionsData:"alt",captionDelay:250}),q=document.querySelector(".form");q.addEventListener("submit",function(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){l.error({message:"Please enter a search query!",position:"topRight"});return}s.currentTarget.elements["search-text"].value="",b(),L(),h(r).then(o=>{if(o.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits),S.refresh()}).catch(()=>{l.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
