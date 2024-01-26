var Q=Object.defineProperty;var X=(t,e,s)=>e in t?Q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(X(t,typeof e!="symbol"?e+"":e,s),s),S=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var c=(t,e,s)=>(S(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,r)=>(S(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var d=(t,e,s)=>(S(t,e,"access private method"),s);/* empty css                      */import{i as V}from"./assets/vendor-32231325.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const Z="Muscles",U="filters",q="exercises",R="https://energyflow.b.goit.study/api/";var b,u,x;class M{constructor(e){l(this,u);l(this,b,"");y(this,b,e)}async objectGetRequest(e){return d(this,u,x).call(this,e)}async objectCreateRequest(e,s){return d(this,u,x).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return d(this,u,x).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return d(this,u,x).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}b=new WeakMap,u=new WeakSet,x=async function(e,s={}){try{const r=await fetch(c(this,b)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const ee=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case U:e=12;break;case q:e=6;break;default:e=8;break}return e},G=(t,e={},s=1,r="")=>{let i={};return e&&(i={...e}),t===q&&r&&(i={...i,keyword:r}),i={...i,page:s,limit:ee(U)},`${t}?${new URLSearchParams(i).toString()}`};async function te(t,e){const s=new M(R),r=G("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function se(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:i})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${i}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${i}</p>            
          </div>
      </li>
      `,"")}const N=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},ie=(t,e)=>N(e,t,se),re="/dynamics/assets/bi-x-octagon-73f29380.svg";function ae(t){V.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${re}`,iconColor:"#fafafb"})}async function ce(t={},e=1,s=""){const r=new M(R),i=G(q,t,e,s);try{return await r.objectGetRequest(i)}catch{}}function ne(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:i,time:a,target:o,burnedCalories:k,gifUrl:A,name:H,filter:O,popularity:I,rating:$})=>e+`
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
            <h3 class="ex-card-name exercise-param">${H}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${k}</span>
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
                  <span class="ex-card-text-part">${o}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      `,"")}const oe=(t,e)=>N(e,t,ne);var n,L,f,p,C,j,w,T;class le{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:i,dotActiveClass:a}){l(this,C);l(this,w);h(this,"currentPage",1);h(this,"totalPages",0);l(this,n,void 0);l(this,L,10);l(this,f,"pagination-dot");l(this,p,"active-paggination-dot");h(this,"galleryHandle");h(this,"filter");this.galleryHandle=e,this.filter=s,y(this,p,a),y(this,f,i),y(this,n,document.querySelector(r)),c(this,n).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>c(this,L)?c(this,L):r,this.filter=s,d(this,C,j).call(this)}reset(e,s,r=1,i=0){this.galleryHandle=e,this.totalPages=i,this.currentPage=r,this.filter=s,d(this,w,T).call(this)}destroy(){c(this,n).removeEventListener("click",this.onDotsClick.bind(this)),d(this,w,T).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,12)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(c(this,f)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=c(this,n).querySelectorAll("li");e.forEach(s=>{s.classList.remove(c(this,p))}),e[this.currentPage-1].classList.add(c(this,p))}}n=new WeakMap,L=new WeakMap,f=new WeakMap,p=new WeakMap,C=new WeakSet,j=function(){c(this,n).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${c(this,f)}" data-ind="${s+1}">${s+1}</li>
      `;c(this,n).innerHTML=e,c(this,n).children[this.currentPage-1].classList.add(c(this,p))},w=new WeakSet,T=function(){c(this,n).innerHTML=""};const F=t=>{t.innerHTML="",t.classList.add("visually-hidden")},P="filter-button-active";let g={};const _=document.querySelector(".filters-buttons"),B=document.querySelector(".exercise-filters-list"),Y=document.querySelector(".exercises-gallery");_.addEventListener("click",de);B.addEventListener("click",ue);const m=new le({galleryHandle:v,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function de(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;m.reset(v,e,1,0),v({filter:e}),ge(t.target)}function v(t={filter:Z}){te(t,m.currentPage).then(e=>{const s=e.results;F(Y),ie(B,s),m.init(v,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function ue(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),i=e.querySelector(".filter-type");if(i&&i){const a=r.textContent.toLowerCase(),o=i.textContent.toLowerCase();if(o==="")return;s[o]=a}m.reset(D,s,1,0),D(s)}function D(t){ce(t,m.currentPage).then(e=>{F(B),oe(Y,e.results),m.init(D,t,e.totalPages)}).catch(e=>{console.log(e.message),ae(`Error fetching images: ${e.message}`)})}function pe(){g=_.querySelector("BUTTON"),g&&g.classList.add(P)}function ge(t){g&&g.classList.remove(P),t&&t.classList.add(P),g=t}pe();v();const fe="Escape",W="modal-backdrop",me=".exercise-close-btn",he=".exercises-gallery",ye="ex-card-start-btn",K="is-open";function xe(t={}){const{_id:e,bodyPart:s,equipment:r,time:i,target:a,burnedCalories:o,gifUrl:k,name:A,filter:H,popularity:O,rating:I,description:$}=t;return`
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
                src="${k}"
                alt=""
              />
            </div>
            <div class="exercise-info-wrapper">
              <p class="exercise-name">${A}</p>
              <p class="modal-rating">${I}</p>
              <ul class="exercise-params">
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Target</p>
                  <p class="exercise-param-value">${a}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Body part</p>
                  <p class="exercise-param-value">${s}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Equipment</p>
                  <p class="exercise-param-value">${r}</p>
                </li>
                <li class="exercise-params-card">
                  <p class="exercise-param-name">Popular</p>
                  <p class="exercise-param-value">${O}</p>
                </li>
              </ul>
              <p class="exercise-calories">Burned calories</p>
              <p class="exercise-calories-value">${o}/${i} m</p>
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

      `}const ve=(t,e)=>{const s=xe(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function be(t){const e=new M(R);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}$e();const E=document.querySelector("."+W);console.log(E);const Le=document.querySelector(he);let we;Le.addEventListener("click",Ee);E.addEventListener("click",ke);async function Ee(t){const e=t.target;if(console.log(e),!!e.classList.contains(ye)){t.preventDefault(),console.log(e.dataset.id);try{const s=await be(e.dataset.id);s&&(ve(s,E),we=document.querySelector(me),Ce())}catch(s){console.log(s.message)}}}function Ce(){E.classList.add(K),window.addEventListener("keydown",J)}function z(t){window.removeEventListener("keydown",J),E.classList.remove(K)}function J(t){t.code===fe&&z()}function ke(t){t.currentTarget===t.target&&z()}function $e(){const t=document.createElement("div");t.classList.add(W),document.body.appendChild(t),console.log(t)}
//# sourceMappingURL=commonHelpers2.js.map
