var w=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var o=(s,e,t)=>(w(s,e,"read from private field"),t?t.call(s):e.get(s)),c=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},n=(s,e,t,r)=>(w(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t);var f=(s,e,t)=>(w(s,e,"access private method"),t);/* empty css                      */import{i as D}from"./assets/vendor-32231325.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const R="Muscles",T="https://energyflow.b.goit.study/api/";var h,u,g;class ${constructor(e){c(this,u);c(this,h,"");n(this,h,e)}async objectGetRequest(e){return f(this,u,g).call(this,e)}async objectCreateRequest(e,t){return f(this,u,g).call(this,e,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,t){return f(this,u,g).call(this,`${e}/${t}`,{method:"DELETE"})}async ojectUpdateRequest(e,t){return f(this,u,g).call(this,`${e}/${t.id}`,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})}}h=new WeakMap,u=new WeakSet,g=async function(e,t={}){try{const r=await fetch(o(this,h)+e,t);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const M=new $(T);async function P(s,e,t){const r={filter:s,page:e,limit:t},a=`filters?${new URLSearchParams(r).toString()}`;try{return await M.objectGetRequest(a)}catch{}}function U(s=[]){return s.reduce((e,{imgUrl:t,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${t}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const j=(s,e)=>{const t=U(e);s.innerHTML="",s.insertAdjacentHTML("beforeend",t)},H="/dynamics/assets/bi-x-octagon-73f29380.svg";function F(s){D.show({message:s,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${H}`,iconColor:"#fafafb"})}async function N(s={},e=""){const t=new $(T),r={...s,page:1,limit:12},a=`exercises?${new URLSearchParams(r).toString()}`;console.log(a);try{return await t.objectGetRequest(a)}catch{}}function O(s=[]){return s.reduce((e,{_id:t,bodyPart:r,equipment:a,time:i,target:d,burnedCalories:q,gifUrl:K,name:C,filter:V,popularity:X,rating:E})=>e+`
      <ul class="exercises-gallery">
        <li class="exercise-card data-id="${t}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${E}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                >
                  <use href="../img/icons/symbols.svg#icon-Star"></use>
                </svg>
              </div>
            </div>
            <button type="button" class="ex-card-start-btn">
              Start
              <span class="arrow-icon-span">
                <svg
                  class="arrow-icon"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="./img/icons/symbols.svg#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
              <use href="./img/icons/symbols.svg#icon-icon"></use>
            </svg>
            <h3 class="ex-card-name exercise-param">${C}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${q}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Body part:
                  <span class="ex-card-text-part">${r}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Target:
                  <span class="ex-card-text-part">${d}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      `,"")}const A=(s,e)=>{const t=O(e);s.innerHTML="",s.insertAdjacentHTML("beforeend",t)};var m,y,l,v,p,x,L;class G{constructor({galleryHandle:e,dotsSelector:t,dotDefaultClass:r,dotActiveClass:a}){c(this,m,0);c(this,y,0);c(this,l,void 0);c(this,v,"");c(this,p,"");c(this,x,void 0);c(this,L,"Muscles");n(this,v,r),n(this,p,a),n(this,x,e),n(this,l,document.querySelector(t))}destroy(){o(this,l).removeEventListener("click",this.onDotsClick.bind(this))}async updateGallery(){try{n(this,y,await o(this,x).call(this,o(this,L),o(this,m)))}catch(e){console.log(e.message)}}createDots(e){o(this,l).innerHTML="",n(this,y,e);let t="";for(let r=0;r<e;r+=1)t+=`
       <span class="pagination-dot" data-ind="${r+1}">${r+1}</span>
      `,o(this,l).innerHTML=t;o(this,l).addEventListener("click",this.onDotsClick.bind(this))}onDotsClick(e){const t=e.target,r=parseInt(t.dataset.ind,10);n(this,m,r),this.updateGallery(),this.updateDisplayDots(e.target)}updateDisplayDots(e){const t=o(this,l).children;for(let r=0;r<t.length;r++)t[r].classList.remove(o(this,p));console.log(e),e.classList.add(o(this,p))}}m=new WeakMap,y=new WeakMap,l=new WeakMap,v=new WeakMap,p=new WeakMap,x=new WeakMap,L=new WeakMap;const I=document.querySelector(".filters-buttons");let b=document.querySelector('button[data-filter="Muscles"]');b.classList.add("filter-button-active");const k=document.querySelector(".exercise-filters-list"),B=document.querySelector(".exercises-gallery");I.addEventListener("click",J);k.addEventListener("click",_);const z=new G({galleryHandle:S,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function J(s){if(s.target.tagName!=="BUTTON")return;const e=s.target.dataset.filter;S(e,1),b.classList.remove("filter-button-active"),b=s.target,b.classList.add("filter-button-active")}function S(s=R,e=1,t=12){P(s,e,t).then(r=>{const a=r.results;a.length||console.log("Sorry, there are no data matching your search query. Please, try again!"),j(k,a),z.createDots(r.totalPages)}).catch(r=>{F(`Error fetching images: ${r.message}`)})}function _(s){s.preventDefault(),s.target;const e=s.target.closest("li");if(!e)return;const t={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(a&&a){const i=r.textContent.toLowerCase(),d=a.textContent.toLowerCase();if(d==="")return;t[d]=i}N(t).then(i=>{A(B,i.results)}).catch(i=>console.log(i))}S();
//# sourceMappingURL=commonHelpers2.js.map
