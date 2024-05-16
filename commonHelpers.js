import{a as w,i as f,S as L}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();let h=20,g=1;const b=Math.ceil(100/h);async function y(a){const t={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},o={key:t.key,q:a,per_page:h,page:g,...t.options};try{const s=await w.get(t.http,{params:o});if(s.status!==200)throw new Error("Network response was not ok.");g+=1;const{data:e}=s;return e.hits}catch(s){throw console.error("Error fetching image data:",s),s}}function x(){return new L(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function B(){f.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function c(){B(),f.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function S(a){const t=document.querySelector(".gallery-list"),o=a.map(({webformatURL:s,largeImageURL:e,tags:i,likes:l,views:m,comments:u,downloads:p})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${s}" width="360" height="200" class="image-card-thumb" alt="${i}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${l}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${m}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${u}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML=o,x().refresh()}function $(a){const t=document.querySelector(".gallery-list"),o=a.map(({webformatURL:s,largeImageURL:e,tags:i,likes:l,views:m,comments:u,downloads:p})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${s}" width="360" height="200" class="image-card-thumb" alt="${i}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${l}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${m}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${u}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML+=o,x().refresh()}function q(){g>=b&&(r.extensionButton.remove(),f.error({position:"topRight",message:"We're sorry, there are no more posts to load"}))}function d(a){document.querySelector(".loader").classList.toggle("is-active",a)}const r={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let n="";r.searchForm.addEventListener("submit",async a=>{if(a.preventDefault(),n=r.searchInput.value.trim(),n===""){c();return}d(!0),setTimeout(async()=>{try{const t=await y(n);S(t),r.galleryList.childElementCount<=0&&c("No images found."),r.extensionButton&&(r.extensionButton.classList.remove("extentionButton"),r.extensionButton.classList.add("div-button"))}catch(t){console.error("Error fetching or updating images:",t),c()}finally{d(!1)}},1e3)});r.extensionButton.addEventListener("click",async a=>{a.preventDefault(),d(!0),setTimeout(async()=>{try{const t=await y(n);$(t),q()}catch(t){console.error("Error fetching or updating images:",t),c()}finally{d(!1)}},1e3)});
//# sourceMappingURL=commonHelpers.js.map
