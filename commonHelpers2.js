var j=Object.defineProperty;var B=(t,e,s)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>(B(t,typeof e!="symbol"?e+"":e,s),s),E=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var n=(t,e,s)=>(E(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,r)=>(E(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var d=(t,e,s)=>(E(t,e,"access private method"),s);/* empty css                      */import{i as I}from"./assets/vendor-32231325.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const G="Muscles",D="filters",$="exercises",q="https://energyflow.b.goit.study/api/";var b,u,x;class R{constructor(e){c(this,u);c(this,b,"");y(this,b,e)}async objectGetRequest(e){return d(this,u,x).call(this,e)}async objectCreateRequest(e,s){return d(this,u,x).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return d(this,u,x).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return d(this,u,x).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}b=new WeakMap,u=new WeakSet,x=async function(e,s={}){try{const r=await fetch(n(this,b)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const _=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case D:e=12;break;case $:e=6;break;default:e=8;break}return e},H=(t,e={},s=1,r="")=>{let i={};return e&&(i={...e}),t===$&&r&&(i={...i,keyword:r}),i={...i,page:s,limit:_(D)},`${t}?${new URLSearchParams(i).toString()}`};async function z(t,e){const s=new R(q),r=H("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function J(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:i})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${i}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${i}</p>            
          </div>
      </li>
      `,"")}const M=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r)},Q=(t,e)=>M(e,t,J),W="/dynamics/assets/bi-x-octagon-73f29380.svg";function X(t){I.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${W}`,iconColor:"#fafafb"})}async function Y(t={},e=1,s=""){const r=new R(q),i=H($,t,e,s);try{return await r.objectGetRequest(i)}catch{}}function K(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:i,time:a,target:l,burnedCalories:A,gifUrl:re,name:F,filter:ae,popularity:ne,rating:O})=>e+`
      <ul class="exercises-gallery">
        <li class="exercise-card" data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${O}</p>
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
            <h3 class="ex-card-name exercise-param">${F}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${A}</span>
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
                  <span class="ex-card-text-part">${l}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      `,"")}const Z=(t,e)=>M(e,t,K);var o,L,h,g,w,U,P,C;class V{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:i,dotActiveClass:a}){c(this,w);c(this,P);m(this,"currentPage",1);m(this,"totalPages",0);c(this,o,void 0);c(this,L,10);c(this,h,"pagination-dot");c(this,g,"active-paggination-dot");m(this,"galleryHandle");m(this,"filter");this.galleryHandle=e,this.filter=s,y(this,g,a),y(this,h,i),y(this,o,document.querySelector(r)),n(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>n(this,L)?n(this,L):r,console.log("Pagination:",r),this.filter=s,d(this,w,U).call(this)}reset(e,s,r=1,i=0){this.galleryHandle=e,this.totalPages=i,this.currentPage=r,this.filter=s,d(this,P,C).call(this)}destroy(){n(this,o).removeEventListener("click",this.onDotsClick.bind(this)),d(this,P,C).call(this)}async updateGallery(){console.log("current",this.currentPage),console.log("filter",this.filter);try{await this.galleryHandle(this.filter,this.currentPage,12)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(n(this,h)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=n(this,o).querySelectorAll("li");console.log(e),e.forEach(s=>{s.classList.remove(n(this,g))}),e[this.currentPage-1].classList.add(n(this,g))}}o=new WeakMap,L=new WeakMap,h=new WeakMap,g=new WeakMap,w=new WeakSet,U=function(){n(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${n(this,h)}" data-ind="${s+1}">${s+1}</li>
      `;n(this,o).innerHTML=e,n(this,o).children[this.currentPage-1].classList.add(n(this,g))},P=new WeakSet,C=function(){n(this,o).innerHTML=""};const k="filter-button-active";let f;const N=document.querySelector(".filters-buttons"),S=document.querySelector(".exercise-filters-list");N.addEventListener("click",ee);S.addEventListener("click",te);const p=new V({galleryHandle:v,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function ee(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;p.reset(v,e,1,0),v({filter:e}),ie(t.target)}function v(t={filter:G}){z(t,p.currentPage).then(e=>{const s=e.results;console.log(e.totalPages),console.log(t),Q(S,s),p.init(v,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function te(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),i=e.querySelector(".filter-type");if(i&&i){const a=r.textContent.toLowerCase(),l=i.textContent.toLowerCase();if(l==="")return;s[l]=a}p.reset(T,s,1,0),T(s)}function T(t){Y(t,p.currentPage).then(e=>{Z(S,e.results),console.log(e.totalPages),console.log(t),p.init(T,t,e.totalPages)}).catch(e=>{console.log(e.message),X(`Error fetching images: ${e.message}`)})}function se(){f=N.querySelector("BUTTON"),f&&f.classList.add(k)}function ie(t){f&&f.classList.remove(k),t&&t.classList.add(k),f=t}se();v();
//# sourceMappingURL=commonHelpers2.js.map
