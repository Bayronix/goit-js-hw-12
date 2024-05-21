import{a as L,i as m,S as b}from"./assets/vendor-09d7c26e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function g(i,t,s=15,a=0){const e={http:"https://pixabay.com/api/",key:"43793393-3131be18ae161d81d2e9721c8",options:"image_type=photo&orientation=horizontal&safesearch=true"},r={key:e.key,q:i,per_page:s,page:t,...Object.fromEntries(new URLSearchParams(e.options))},{data:n}=await L.get(e.http,{params:r});return n.totalHits&&(a=Math.ceil(n.totalHits/s)),n.hits}function v(){return new b(".image-card-link",{caption:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}function S(){m.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1})}let f=!1;function d(i="Sorry, there are no images matching your search query. Please try again!"){f||(S(),m.error({message:i,class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"red",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0}),f=!0)}function p(i){const t=document.querySelector(".gallery-list"),s=i.map(({webformatURL:a,largeImageURL:e,tags:r,likes:n,views:y,comments:B,downloads:x})=>`
    <li class="image-card">
      <a href="${e}" class="image-card-link">
        <img src="${a}" width="360" height="200" class="image-card-thumb" alt="${r}">
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
            <p class="image-card-details-text">${x}</p>
          </li>
        </ul>
      </a>
    </li>`).join("");t.insertAdjacentHTML("beforeend",s),v().refresh()}function w(){l>=C&&(o.extensionButton.style.display="none",m.error({message:"We're sorry, there are no more posts to load",class:"error-notification",timeout:5e3,iconUrl:"/img/octagon.svg",titleColor:"#fff",position:"topRight",backgroundColor:"red",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0}))}function u(i){document.querySelector(".loader").classList.toggle("is-active",i)}const o={searchForm:document.querySelector(".search-bar-form"),searchInput:document.querySelector("#search-bar"),searchButton:document.querySelector("button"),galleryList:document.querySelector(".gallery-list"),extensionButton:document.querySelector(".extentionButton")};let c="",l=1,h=15,C=0;function q(){o.galleryList.innerHTML=""}o.searchForm.dataset.listenerAttached||(o.searchForm.dataset.listenerAttached="true",o.searchForm.addEventListener("submit",async i=>{if(i.preventDefault(),q(),c=o.searchInput.value.trim(),l=1,c===""){o.extensionButton.style.display="none",d("Please enter a search term.");return}o.extensionButton.style.display="none",u(!0),setTimeout(async()=>{try{const t=await g(c,l,h);p(t),o.galleryList.childElementCount<=0&&d("No images found."),t.length>0?(o.extensionButton.style.display="block",o.extensionButton.classList.remove("extentionButton"),o.extensionButton.classList.add("div-button")):o.extensionButton.style.display="none"}catch(t){console.error("Error fetching or updating images:",t),d("An error occurred while fetching images.")}finally{u(!1)}},1e3),o.searchInput.value=""}));o.extensionButton.dataset.listenerAttached||(o.extensionButton.dataset.listenerAttached="true",o.extensionButton.addEventListener("click",async i=>{i.preventDefault(),u(!0),l+=1,setTimeout(async()=>{try{const t=await g(c,l,h);p(t),w(),P()}catch(t){console.error("Error fetching or updating images:",t)}finally{u(!1)}},1e3)}));function P(){const t=o.galleryList.getBoundingClientRect().height*2,s=500,a=t/(1e3/s);let e=0;const r=setInterval(()=>{window.scrollBy({top:a,left:0,behavior:"smooth"}),e+=a,e>=t&&clearInterval(r)},s)}
//# sourceMappingURL=commonHelpers.js.map
