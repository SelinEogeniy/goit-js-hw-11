import{a as d,S as m,i}from"./assets/vendor-Cip_4kvj.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="51376871-d210e7f13e39905b8a62b8cdf",h="https://pixabay.com/api/";function y(s){return d.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let n;function b(s){const r=s.map(({webformatURL:o,largeImageURL:l,tags:e,likes:t,views:a,comments:f,downloads:p})=>`<li class="gallery-item">
      <a class="gallery-link" href="${l}">
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
          <p class="value">${f}</p>
        </li>
        <li class="info-block">
          <p class="label">Downloads</p>
          <p class="value">${p}</p>
        </li>
      </ul>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),n?n.refresh():n=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){c.innerHTML=""}function v(){u.classList.remove("is-hidden")}function S(){u.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",function(s){s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search query!",position:"topRight"});return}s.currentTarget.elements["search-text"].value="",L(),v(),y(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(()=>{i.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
