import{a as x,i as f,S as B}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();let h=10;const L=Math.ceil(100/h);async function y(a,t){const s={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},r={key:s.key,q:a,per_page:h,page:t,...Object.fromEntries(new URLSearchParams(s.options))};try{const e=await x.get(s.http,{params:r});if(e.status!==200)throw new Error("Network response was not ok.");const{data:i}=e;return i.hits}catch(e){throw console.error("Error fetching image data:",e),e}}function w(){return new B(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function b(){f.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}function p(a){b(),f.error({message:a||"Sorry, there are no images matching your search query. Please try again!",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"red",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})}function v(a){const t=document.querySelector(".gallery-list"),s=a.map(({webformatURL:r,largeImageURL:e,tags:i,likes:l,views:m,comments:u,downloads:g})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${i}">
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
                      <p class="image-card-details-text">${g}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML=s,w().refresh()}function S(a){const t=document.querySelector(".gallery-list"),s=a.map(({webformatURL:r,largeImageURL:e,tags:i,likes:l,views:m,comments:u,downloads:g})=>`<li class="image-card">
              <a href="${e}" class="image-card-link"><img src="${r}" width="360" height="200" class="image-card-thumb" alt="${i}">
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
                      <p class="image-card-details-text">${g}</p>
                  </li>
                </ul>
              </a>
          </li>`).join("");t.innerHTML+=s,w().refresh()}function C(){c>=L&&(o.extensionButton.remove(),f.error({position:"topRight",message:"We're sorry, there are no more posts to load",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"red",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0}))}function d(a){document.querySelector(".loader").classList.toggle("is-active",a)}const o={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let n="",c=1;o.searchForm.addEventListener("submit",async a=>{if(a.preventDefault(),n=o.searchInput.value.trim(),c=1,n===""){p("Please enter a search term.");return}d(!0),setTimeout(async()=>{try{const t=await y(n,c);v(t),o.galleryList.childElementCount<=0?p("No images found."):o.extensionButton&&(o.extensionButton.classList.remove("extentionButton"),o.extensionButton.classList.add("div-button"))}catch(t){console.error("Error fetching or updating images:",t),p("An error occurred while fetching images.")}finally{d(!1)}},1e3)});o.extensionButton.dataset.listenerAttached||(o.extensionButton.dataset.listenerAttached="true",o.extensionButton.addEventListener("click",async a=>{a.preventDefault(),d(!0),c+=1,setTimeout(async()=>{try{const t=await y(n,c);S(t),C(),$()}catch(t){console.error("Error fetching or updating images:",t)}finally{d(!1)}},1e3)}));function $(){const t=o.galleryList.getBoundingClientRect().height*2,s=100,r=t/(1e3/s);let e=0;const i=setInterval(()=>{window.scrollBy({top:r,left:0,behavior:"smooth"}),e+=r,e>=t&&clearInterval(i)},s)}
//# sourceMappingURL=commonHelpers.js.map
