import{S as g,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(){return new g(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function y(){d.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function L(){y(),d.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function w(i){i.length<=0&&L();const s=document.querySelector(".gallery-list"),o=i.map(({webformatURL:r,largeImageURL:e,tags:t,likes:a,views:l,comments:p,downloads:f})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${t}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${a}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${l}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${f}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");s.innerHTML=o,h().refresh()}function u(i){document.querySelector(".loader").classList.toggle("is-active",i)}async function m(i){const s={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},r=`${`${s.http}?key=${s.key}&q=${i}`}&${s.options}`;try{u(!0),await new Promise(l=>setTimeout(l,1e3));const e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok.");const a=(await e.json()).hits;w(a)}catch(e){console.error(e)}finally{u(!1)}}const c={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list")};let n="";c.searchInput.addEventListener("input",i=>{n=i.target.value});c.searchForm.addEventListener("submit",i=>{i.preventDefault(),m(n)});c.searchButton.addEventListener("click",()=>{m(n)});
//# sourceMappingURL=commonHelpers.js.map
