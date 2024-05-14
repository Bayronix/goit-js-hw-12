import{a as w,i as m,S as x}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();let L=20,d=1;async function g(o){const t={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},a={key:t.key,q:o,per_page:L,page:d,...t.options};try{const i=await w.get(t.http,{params:a});if(i.status!==200)throw new Error("Network response was not ok.");d+=1;const{data:e}=i;return e.hits}catch(i){throw console.error("Error fetching image data:",i),i}}function b(){return new x(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function S(){m.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function n(){S(),m.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function p(o){const t=document.querySelector(".gallery-list"),a=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:c,views:f,comments:h,downloads:y})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${i}" width="360" height="200" class="image-card-thumb" alt="${r}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${c}</p>
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
          </li>`).join("");t.innerHTML=a,b().refresh()}function u(o){document.querySelector(".loader").classList.toggle("is-active",o)}const s={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let l="";s.searchForm.addEventListener("submit",async o=>{if(o.preventDefault(),l=s.searchInput.value.trim(),l===""){n();return}u(!0);try{setTimeout(async()=>{try{const t=await g(l);p(t),s.galleryList.childElementCount<=0&&n("No images found."),s.extensionButton&&(s.extensionButton.classList.remove("extentionButton"),s.extensionButton.classList.add("div-button"))}catch(t){console.error("Error fetching or updating images:",t),n("An error occurred while fetching images.")}finally{u(!1)}},1e3)}catch{console.error("An unexpected error occurred.")}});s.extensionButton.addEventListener("click",async()=>{u(!0);try{setTimeout(async()=>{try{const o=await g(l);p(o)}catch(o){console.error("Error fetching or updating images:",o),n("An error occurred while fetching images.")}finally{u(!1)}},1e3)}catch{console.error("An unexpected error occurred.")}});
//# sourceMappingURL=commonHelpers.js.map
