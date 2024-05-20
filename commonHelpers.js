import{a as b,i as m,S as x}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();let g=15,f=0;async function p(i,t){const s={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},a={key:s.key,q:i,per_page:g,page:t,...Object.fromEntries(new URLSearchParams(s.options))};try{const{data:e}=await b.get(s.http,{params:a});return e.totalHits&&(f=Math.ceil(e.totalHits/g)),e.hits}catch(e){throw console.error("Error fetching image data:",e),e}}function v(){return new x(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function S(){m.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function d(i){S(),m.error({message:i||"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"red",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function h(i){const t=document.querySelector(".gallery-list"),s=i.map(({webformatURL:a,largeImageURL:e,tags:o,likes:n,views:y,comments:B,downloads:L})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${a}" width="360" height="200" class="image-card-thumb" alt="${o}">
                <ul class="image-card-details-list">
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Likes</p>
                      <p class="image-card-details-text">${n}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Views</p>
                      <p class="image-card-details-text">${y}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Comments</p>
                      <p class="image-card-details-text">${B}</p>
                  </li>
                  <li class="image-card-details-list-item">
                      <p class="image-card-details-title">Downloads</p>
                      <p class="image-card-details-text">${L}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.insertAdjacentHTML("beforeend",s),v().refresh()}function w(){l>=f&&(r.extensionButton.remove(),m.error({position:"topRight",message:"We're sorry, there are no more posts to load",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"red",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0}))}function u(i){document.querySelector(".loader").classList.toggle("is-active",i)}const r={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let c="",l=1;function C(){r.galleryList.innerHTML=""}r.searchForm.dataset.listenerAttached||(r.searchForm.dataset.listenerAttached="true",r.searchForm.addEventListener("submit",async i=>{if(i.preventDefault(),C(),c=r.searchInput.value.trim(),l=1,c===""){d("Please enter a search term.");return}r.extensionButton.style.display="none",u(!0),setTimeout(async()=>{try{const t=await p(c,l);h(t),r.galleryList.childElementCount<=0&&d("No images found."),t.length>0?(r.extensionButton.style.display="block",r.extensionButton.classList.remove("extentionButton"),r.extensionButton.classList.add("div-button")):r.extensionButton.style.display="none"}catch(t){console.error("Error fetching or updating images:",t),d("An error occurred while fetching images.")}finally{u(!1)}},1e3),r.searchInput.value=""}));r.extensionButton.dataset.listenerAttached||(r.extensionButton.dataset.listenerAttached="true",r.extensionButton.addEventListener("click",async i=>{i.preventDefault(),u(!0),l+=1,setTimeout(async()=>{try{const t=await p(c,l);h(t),w(),q()}catch(t){console.error("Error fetching or updating images:",t)}finally{u(!1)}},1e3)}));function q(){const t=r.galleryList.getBoundingClientRect().height*2,s=500,a=t/(1e3/s);let e=0;const o=setInterval(()=>{window.scrollBy({top:a,left:0,behavior:"smooth"}),e+=a,e>=t&&clearInterval(o)},s)}
//# sourceMappingURL=commonHelpers.js.map
