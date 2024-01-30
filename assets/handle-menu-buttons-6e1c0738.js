var y=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var b=(t,e,s)=>(y(t,e,"read from private field"),s?s.call(t):e.get(t)),h=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},x=(t,e,s,a)=>(y(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var i=(t,e,s)=>(y(t,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const T="https://energyflow.b.goit.study/api/";var d,n,l;class C{constructor(e){h(this,n);h(this,d,"");x(this,d,e)}async objectGetRequest(e){return i(this,n,l).call(this,e)}async objectCreateRequest(e,s){return i(this,n,l).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return i(this,n,l).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return i(this,n,l).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectPatchRequest(e,s){const{id:a,...o}=s;return i(this,n,l).call(this,`${e}/${a}/rating`,{method:"PATCH",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})}}d=new WeakMap,n=new WeakSet,l=async function(e,s={}){try{const a=await fetch(b(this,d)+e,s);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){console.log(a.message)}};const E=document.querySelector(".js-quote"),L="quote",v="date",A=new C(T);O();async function O(){try{const{quote:t,author:e}=await j();U({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function j(){const t=localStorage.getItem(v),e=localStorage.getItem(L),a=new Date().toISOString().split("T")[0];if(t===a&&e){const r=JSON.parse(e);if(r.quote&&r.author)return r}const o=await R();return localStorage.setItem(v,a),localStorage.setItem(L,JSON.stringify(o)),o}async function R(){const{quote:t,author:e}=await A.objectGetRequest("quote");return{quote:t,author:e}}function U({quote:t,author:e}){E.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const u="/dynamics/assets/symbols-4ad092cf.svg";function G(t=[],e){return t.reduce((s,{_id:a,bodyPart:o,equipment:r,time:c,target:p,burnedCalories:m,gifUrl:g,name:f,filter:P,popularity:Q,rating:S})=>s+`
       <li class="exercise-card" data-id="${a}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${e(S,u,a)}
            </div>
            <button type="submit" class="ex-card-start-btn gallery-start" data-id="${a}">
              Start
              <span class="arrow-icon-span gallery-start">
                <svg
                  class="arrow-icon gallery-start"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="${u}#icon-arrow" class="gallery-start"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${u}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${f}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${m}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Body part:
                  <span class="ex-card-text-part">${o}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Target:
                  <span class="ex-card-text-part">${p}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const J="favorites",w=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function D(t,e=[]){const{iconURL:s,iconContainerClass:a,iconLinkClass:o,iconClass:r}=t;return e.reduce((c,{url:p,id:m,label:g,hrefTag:f})=>c+`
        <li class="${a}">
            <a class="${o}" target="_blank" rel="noopener" href="${p}">
            <svg class="${r}" aria-label="${g}" id=${m}>
                <use href="${s}#${f}"></use>
            </svg>
            </a>
        </li>
      `,"")}function q(t,e,s=[]){const a=D(e,s);t.innerHTML="",t.insertAdjacentHTML("beforeend",a)}const K=()=>{const t={iconURL:u,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link",iconClass:"social-list-icon"},e=document.querySelector(".social-list-header");q(e,t,w);const s={iconURL:u,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link-menu",iconClass:"social-list-icon-menu"},a=document.querySelector(".social-list-menu");q(a,s,w)},I=document.querySelector(".js-open-menu-btn"),$=document.querySelector(".js-mobile-menu"),M=document.querySelector(".js-mobile-menu-close-btn"),k="is-open";I.addEventListener("click",()=>{$.classList.add(k)});M.addEventListener("click",()=>{$.classList.remove(k)});function N(t){t.classList.add("active-btn"),t.classList.remove("btn")}function B(t){t.classList.remove("active-btn"),t.classList.add("btn")}function F(t,e){Array.from(t).forEach(s=>{N(s)}),Array.from(e).forEach(s=>{B(s)})}export{T as B,C as D,J as K,K as a,q as c,G as e,u as i,F as m,w as s};
//# sourceMappingURL=handle-menu-buttons-6e1c0738.js.map
