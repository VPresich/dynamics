var V=Object.defineProperty;var Z=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(Z(t,typeof e!="symbol"?e+"":e,s),s),k=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var c=(t,e,s)=>(k(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,a)=>(k(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var d=(t,e,s)=>(k(t,e,"access private method"),s);/* empty css                      */import{i as ee}from"./assets/vendor-32231325.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}})();const te="Muscles",j="filters",M="exercises",C="https://energyflow.b.goit.study/api/";var b,u,x;class T{constructor(e){l(this,u);l(this,b,"");y(this,b,e)}async objectGetRequest(e){return d(this,u,x).call(this,e)}async objectCreateRequest(e,s){return d(this,u,x).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return d(this,u,x).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return d(this,u,x).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}b=new WeakMap,u=new WeakSet,x=async function(e,s={}){try{const a=await fetch(c(this,b)+e,s);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){console.log(a.message)}};const se=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case j:e=12;break;case M:e=6;break;default:e=8;break}return e},F=(t,e={},s=1,a="")=>{let r={};return e&&(r={...e}),t===M&&a&&(r={...r,keyword:a}),r={...r,page:s,limit:se(j)},`${t}?${new URLSearchParams(r).toString()}`};async function re(t,e){const s=new T(C),a=F("filters",t,e);try{return await s.objectGetRequest(a)}catch{}}function ae(t=[]){return t.reduce((e,{imgUrl:s,name:a,filter:r})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${r}"/>
          <div class="filter-label">
          <p class="filter-name">${a}</p>
          <p class="filter-type">${r}</p>            
          </div>
      </li>
      `,"")}const G=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const a=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",a),e.classList.remove("visually-hidden")},ie=(t,e)=>G(e,t,ae),ce="/dynamics/assets/bi-x-octagon-73f29380.svg";function ne(t){ee.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ce}`,iconColor:"#fafafb"})}async function oe(t={},e=1,s=""){const a=new T(C),r=F(M,t,e,s);try{return await a.objectGetRequest(r)}catch{}}function le(t=[]){return t.reduce((e,{_id:s,bodyPart:a,equipment:r,time:i,target:o,burnedCalories:q,gifUrl:B,name:A,filter:I,popularity:H,rating:$})=>e+`
      <ul class="exercises-gallery">
        <li class="exercise-card" data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${$}</p>
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
            <button type="submit" class="ex-card-start-btn" data-id="${s}">
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
            <h3 class="ex-card-name exercise-param">${A}</h3>
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
                  <span class="ex-card-text-part">${a}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Target:
                  <span class="ex-card-text-part">${o}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      `,"")}const de=(t,e)=>G(e,t,le);var n,L,f,p,S,_,w,D;class ue{constructor({galleryHandle:e,filter:s,dotsSelector:a,dotDefaultClass:r,dotActiveClass:i}){l(this,S);l(this,w);h(this,"currentPage",1);h(this,"totalPages",0);l(this,n,void 0);l(this,L,10);l(this,f,"pagination-dot");l(this,p,"active-paggination-dot");h(this,"galleryHandle");h(this,"filter");this.galleryHandle=e,this.filter=s,y(this,p,i),y(this,f,r),y(this,n,document.querySelector(a)),c(this,n).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,a=0){this.galleryHandle=e,this.totalPages=a>c(this,L)?c(this,L):a,this.filter=s,d(this,S,_).call(this)}reset(e,s,a=1,r=0){this.galleryHandle=e,this.totalPages=r,this.currentPage=a,this.filter=s,d(this,w,D).call(this)}destroy(){c(this,n).removeEventListener("click",this.onDotsClick.bind(this)),d(this,w,D).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,12)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(c(this,f)))return;const a=parseInt(s.dataset.ind,10);this.currentPage=a,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=c(this,n).querySelectorAll("li");e.forEach(s=>{s.classList.remove(c(this,p))}),e[this.currentPage-1].classList.add(c(this,p))}}n=new WeakMap,L=new WeakMap,f=new WeakMap,p=new WeakMap,S=new WeakSet,_=function(){c(this,n).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${c(this,f)}" data-ind="${s+1}">${s+1}</li>
      `;c(this,n).innerHTML=e,c(this,n).children[this.currentPage-1].classList.add(c(this,p))},w=new WeakSet,D=function(){c(this,n).innerHTML=""};const Q=t=>{t.innerHTML="",t.classList.add("visually-hidden")},P="filter-button-active";let g={};const Y=document.querySelector(".filters-buttons"),O=document.querySelector(".exercise-filters-list"),K=document.querySelector(".exercises-gallery");Y.addEventListener("click",pe);O.addEventListener("click",ge);const m=new ue({galleryHandle:v,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function pe(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;m.reset(v,e,1,0),v({filter:e}),me(t.target)}function v(t={filter:te}){re(t,m.currentPage).then(e=>{const s=e.results;Q(K),ie(O,s),m.init(v,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function ge(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},a=e.querySelector(".filter-name"),r=e.querySelector(".filter-type");if(r&&r){const i=a.textContent.toLowerCase(),o=r.textContent.toLowerCase();if(o==="")return;s[o]=i}m.reset(R,s,1,0),R(s)}function R(t){oe(t,m.currentPage).then(e=>{Q(O),de(K,e.results),m.init(R,t,e.totalPages)}).catch(e=>{console.log(e.message),ne(`Error fetching images: ${e.message}`)})}function fe(){g=Y.querySelector("BUTTON"),g&&g.classList.add(P)}function me(t){g&&g.classList.remove(P),t&&t.classList.add(P),g=t}fe();v();const he="Escape",W="modal-backdrop",ye=".exercise-close-btn",xe=".exercises-gallery",ve="ex-card-start-btn",J="is-open";function be(t={}){const{_id:e,bodyPart:s,equipment:a,time:r,target:i,burnedCalories:o,gifUrl:q,name:B,filter:A,popularity:I,rating:H,description:$}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="../img/icons/symbols.svg#icon-icon"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${q}"
                alt=""
              />
            </div>
            <div class="exercise-info-wrapper">
              <p class="exercise-name">${B}</p>
              <p class="modal-rating">${H}</p>
              <ul class="exercise-params">
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Target</p>
                  <p class="exercise-param-value">${i}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Body part</p>
                  <p class="exercise-param-value">${s}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Equipment</p>
                  <p class="exercise-param-value">${a}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Popular</p>
                  <p class="exercise-param-value">${I}</p>
                </li>
              </ul>
              <p class="exercise-calories">Burned calories</p>
              <p class="exercise-calories-value">${o}/${r} m</p>
              <p class="exercise-description">${$}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="exercise-id"
                >
                  Add to favorites
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const Le=(t,e)=>{const s=be(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function we(t){const e=new T(C);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}$e();const E=document.querySelector("."+W);console.log(E);const Ee=document.querySelector(xe);let Se;Ee.addEventListener("click",Ce);E.addEventListener("click",qe);async function Ce(t){const e=t.target;if(console.log(e),!!e.classList.contains(ve)){t.preventDefault(),console.log(e.dataset.id);try{const s=await we(e.dataset.id);s&&(Le(s,E),Se=document.querySelector(ye),Te())}catch(s){console.log(s.message)}}}function Te(){E.classList.add(J),window.addEventListener("keydown",X)}function z(t){window.removeEventListener("keydown",X),E.classList.remove(J)}function X(t){t.code===he&&z()}function qe(t){t.currentTarget===t.target&&z()}function $e(){const t=document.createElement("div");t.classList.add(W),document.body.appendChild(t),console.log(t)}const ke=document.querySelector(".js-quote"),U="quote",N="date",De=new T(C);Pe();async function Pe(){try{const{quote:t,author:e}=await Re();Oe({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function Re(){const t=localStorage.getItem(N),e=localStorage.getItem(U),a=new Date().toISOString().split("T")[0];if(t===a&&e){const i=JSON.parse(e);if(i.quote&&i.author)return i}const r=await Me();return localStorage.setItem(N,a),localStorage.setItem(U,JSON.stringify(r)),r}async function Me(){const{quote:t,author:e}=await De.objectGetRequest("quote");return{quote:t,author:e}}function Oe({quote:t,author:e}){ke.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}
//# sourceMappingURL=commonHelpers2.js.map
