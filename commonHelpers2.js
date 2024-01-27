var Z=Object.defineProperty;var ee=(t,e,s)=>e in t?Z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>(ee(t,typeof e!="symbol"?e+"":e,s),s),k=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(k(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,a)=>(k(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var l=(t,e,s)=>(k(t,e,"access private method"),s);import"./assets/styles-43b8db46.js";import{i as te}from"./assets/vendor-0a7943b3.js";const se="Muscles",F="filters",M="exercises",q="https://energyflow.b.goit.study/api/";var b,d,v;class C{constructor(e){o(this,d);o(this,b,"");y(this,b,e)}async objectGetRequest(e){return l(this,d,v).call(this,e)}async objectCreateRequest(e,s){return l(this,d,v).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return l(this,d,v).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return l(this,d,v).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}b=new WeakMap,d=new WeakSet,v=async function(e,s={}){try{const a=await fetch(r(this,b)+e,s);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){console.log(a.message)}};const ae=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case F:e=12;break;case M:e=6;break;default:e=8;break}return e},G=(t,e={},s=1,a="")=>{let i={};return e&&(i={...e}),t===M&&a&&(i={...i,keyword:a}),i={...i,page:s,limit:ae(F)},`${t}?${new URLSearchParams(i).toString()}`};async function ie(t,e){const s=new C(q),a=G("filters",t,e);try{return await s.objectGetRequest(a)}catch{}}function re(t=[]){return t.reduce((e,{imgUrl:s,name:a,filter:i})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${i}"/>
          <div class="filter-label">
          <p class="filter-name">${a}</p>
          <p class="filter-type">${i}</p>            
          </div>
      </li>
      `,"")}const _=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const a=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",a),e.classList.remove("visually-hidden")},ce=(t,e)=>_(e,t,re),ne="/dynamics/assets/bi-x-octagon-73f29380.svg";function oe(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ne}`,iconColor:"#fafafb"})}async function le(t={},e=1,s=""){const a=new C(q),i=G(M,t,e,s);try{return await a.objectGetRequest(i)}catch{}}function de(t=[]){return t.reduce((e,{_id:s,bodyPart:a,equipment:i,time:c,target:p,burnedCalories:T,gifUrl:H,name:A,filter:I,popularity:O,rating:$})=>e+`
       <li class="exercise-card data-id="${s}">
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
                  <use href="../img/icons/symbols.svg#icon-star"></use>
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
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="./img/icons/symbols.svg#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${A}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${T}</span>
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
                  <span class="ex-card-text-part">${p}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const ue=(t,e)=>_(e,t,de);var n,L,m,u,S,N,w,D;class pe{constructor({galleryHandle:e,filter:s,dotsSelector:a,dotDefaultClass:i,dotActiveClass:c}){o(this,S);o(this,w);f(this,"currentPage",1);f(this,"totalPages",0);o(this,n,void 0);o(this,L,10);o(this,m,"pagination-dot");o(this,u,"active-paggination-dot");f(this,"galleryHandle");f(this,"filter");this.galleryHandle=e,this.filter=s,y(this,u,c),y(this,m,i),y(this,n,document.querySelector(a)),r(this,n).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,a=0){this.galleryHandle=e,this.totalPages=a>r(this,L)?r(this,L):a,this.filter=s,l(this,S,N).call(this)}reset(e,s,a=1,i=0){this.galleryHandle=e,this.totalPages=i,this.currentPage=a,this.filter=s,l(this,w,D).call(this)}destroy(){r(this,n).removeEventListener("click",this.onDotsClick.bind(this)),l(this,w,D).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,12)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(r(this,m)))return;const a=parseInt(s.dataset.ind,10);this.currentPage=a,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=r(this,n).querySelectorAll("li");e.forEach(s=>{s.classList.remove(r(this,u))}),e[this.currentPage-1].classList.add(r(this,u))}}n=new WeakMap,L=new WeakMap,m=new WeakMap,u=new WeakMap,S=new WeakSet,N=function(){r(this,n).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${r(this,m)}" data-ind="${s+1}">${s+1}</li>
      `;r(this,n).innerHTML=e,r(this,n).children[this.currentPage-1].classList.add(r(this,u))},w=new WeakSet,D=function(){r(this,n).innerHTML=""};const Q=t=>{t.innerHTML="",t.classList.add("visually-hidden")},P="filter-button-active";let g={};const Y=document.querySelector(".filters-buttons"),B=document.querySelector(".exercise-filters-list"),K=document.querySelector(".exercises-gallery"),W=document.querySelector(".form-for-searching-input");Y.addEventListener("click",ge);B.addEventListener("click",me);const h=new pe({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function ge(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;W.classList.add("visually-hidden"),h.reset(x,e,1,0),x({filter:e}),fe(t.target)}function x(t={filter:se}){ie(t,h.currentPage).then(e=>{const s=e.results;Q(K),ce(B,s),h.init(x,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function me(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},a=e.querySelector(".filter-name"),i=e.querySelector(".filter-type");if(W.classList.remove("visually-hidden"),i&&i){const c=a.textContent.toLowerCase(),p=i.textContent.toLowerCase();if(p==="")return;s[p]=c}h.reset(R,s,1,0),R(s)}function R(t){le(t,h.currentPage).then(e=>{Q(B),ue(K,e.results),h.init(R,t,e.totalPages)}).catch(e=>{console.log(e.message),oe(`Error fetching images: ${e.message}`)})}function he(){g=Y.querySelector("BUTTON"),g&&g.classList.add(P)}function fe(t){g&&g.classList.remove(P),t&&t.classList.add(P),g=t}he();x();const ye="Escape",J="modal-backdrop",ve=".exercise-close-btn",xe=".exercises-gallery",be="ex-card-start-btn",z="is-open";function Le(t={}){const{_id:e,bodyPart:s,equipment:a,time:i,target:c,burnedCalories:p,gifUrl:T,name:H,filter:A,popularity:I,rating:O,description:$}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="../img/icons/symbols.svg#icon-cross"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${T}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${H}</p>
                <p class="modal-rating">${O}
                  <svg class="exercise-star" width="18" height="18" aria-label="Star icon">
                    <use href="../img/icons/symbols.svg#icon-star"></use>
                 </svg>
                </p>
              </div>
              <svg class="exercise-line-svg" aria-label="Line">
               <use href="../img/icons/symbols.svg#line-svg"></use>
              </svg>
              <div class="exercise-params-container">
                <ul class="exercise-params">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${c}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${s}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${I}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${p}/${i} m</p>
              </div>
              <svg class="exercise-line-svg" aria-label="Line">
               <use href="../img/icons/symbols.svg#line-svg"></use>
              </svg>
              <p class="exercise-description">${$}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="exercise-id"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="../img/icons/symbols.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const we=(t,e)=>{const s=Le(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Ee(t){const e=new C(q);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}ke();const E=document.querySelector("."+J);console.log(E);const Se=document.querySelector(xe);let qe;Se.addEventListener("click",Ce);E.addEventListener("click",$e);async function Ce(t){const e=t.target;if(console.log(e.dataset),!!e.classList.contains(be)){t.preventDefault(),console.log(e.dataset.id);try{const s=await Ee(e.dataset.id);s&&(we(s,E),qe=document.querySelector(ve),Te())}catch(s){console.log(s.message)}}}function Te(){E.classList.add(z),window.addEventListener("keydown",V)}function X(t){window.removeEventListener("keydown",V),E.classList.remove(z)}function V(t){t.code===ye&&X()}function $e(t){t.currentTarget===t.target&&X()}function ke(){const t=document.createElement("div");t.classList.add(J),document.body.appendChild(t),console.log(t)}const De=document.querySelector(".js-quote"),U="quote",j="date",Pe=new C(q);Re();async function Re(){try{const{quote:t,author:e}=await Me();He({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function Me(){const t=localStorage.getItem(j),e=localStorage.getItem(U),a=new Date().toISOString().split("T")[0];if(t===a&&e){const c=JSON.parse(e);if(c.quote&&c.author)return c}const i=await Be();return localStorage.setItem(j,a),localStorage.setItem(U,JSON.stringify(i)),i}async function Be(){const{quote:t,author:e}=await Pe.objectGetRequest("quote");return{quote:t,author:e}}function He({quote:t,author:e}){De.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}
//# sourceMappingURL=commonHelpers2.js.map
