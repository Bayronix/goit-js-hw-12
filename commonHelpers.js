import{a as b,i as f,S}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();let w=10,h=1;const y=Math.ceil(100/w);async function x(a,t=1){const s={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},r={key:s.key,q:a,per_page:w,page:t,...Object.fromEntries(new URLSearchParams(s.options))};try{const e=await b.get(s.http,{params:r});if(e.status!==200)throw new Error("Network response was not ok.");const{data:i}=e;return i.hits}catch(e){throw console.error("Error fetching image data:",e),e}}function L(){return new S(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function B(){f.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function c(){B(),f.error({message:"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function $(a){const t=document.querySelector(".gallery-list"),s=a.map(({webformatURL:r,largeImageURL:e,tags:i,likes:o,views:u,comments:g,downloads:p})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${i}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${o}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${u}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${g}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML=s,L().refresh()}function q(a){const t=document.querySelector(".gallery-list"),s=a.map(({webformatURL:r,largeImageURL:e,tags:i,likes:o,views:u,comments:g,downloads:p})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${i}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${o}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${u}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${g}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${p}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML+=s,L().refresh()}function v(){console.log(y),console.log(h),h>=y&&(l.extensionButton.remove(),f.error({position:"topRight",message:"We're sorry, there are no more posts to load"}))}function d(a){document.querySelector(".loader").classList.toggle("is-active",a)}const l={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let n="",m=1;l.searchForm.addEventListener("submit",async a=>{if(a.preventDefault(),n=l.searchInput.value.trim(),m=1,n===""){c();return}d(!0);try{const t=await x(n,m);$(t),l.galleryList.childElementCount<=0&&c("No images found."),l.extensionButton&&(l.extensionButton.classList.remove("extentionButton"),l.extensionButton.classList.add("div-button"))}catch(t){console.error("Error fetching or updating images:",t),c()}finally{d(!1)}});l.extensionButton.addEventListener("click",async a=>{a.preventDefault(),d(!0),m+=1;try{const t=await x(n,m);q(t),v()}catch(t){console.error("Error fetching or updating images:",t),c()}finally{d(!1)}});
//# sourceMappingURL=commonHelpers.js.map
