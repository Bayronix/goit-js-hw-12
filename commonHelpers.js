import{i as u,S as L,a as b}from"./assets/vendor-09d7c26e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function x(){return new L(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function B(){u.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function S(){B(),u.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function v(e){e.length<=0&&S();const o=document.querySelector(".gallery-list"),n=e.map(({webformatURL:s,largeImageURL:t,tags:i,likes:a,views:f,comments:h,downloads:y})=>`<li class="image-card">
              <a href="${t}" class="image-card-link"><img src="${s}" width="360" height="200" class="image-card-thumb" alt="${i}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${a}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${f}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${h}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${y}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");o.innerHTML=n,x().refresh()}function p(e){if(l>w)return u.error({position:"topRight",message:"We're sorry, there are no more posts to load"})}function m(e){document.querySelector(".loader").classList.toggle("is-active",e)}let g=40,l=1;const w=Math.ceil(100/g);async function d(e){const o={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},n={key:o.key,q:e,per_page:g,page:l,...o.options};try{m(!0),await new Promise(a=>setTimeout(a,1e3));const s=await b.get(o.http,{params:n}),{data:t}=s,i=t.hits;v(i),l++}catch(s){console.error(s)}finally{m(!1)}}const r={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let c="";r.searchInput.addEventListener("input",e=>{c=e.target.value});r.searchForm.addEventListener("submit",e=>{e.preventDefault(),d(c)});r.searchButton.addEventListener("click",async()=>{if(c)try{const e=await d(c);p(e),setTimeout(()=>{r.extensionButton.classList.remove("extentionButton"),r.extensionButton.classList.add("div-button")},1e3)}catch(e){console.log(e)}});r.extensionButton.addEventListener("click",async()=>{try{const e=await d(c);p(e)}catch(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
