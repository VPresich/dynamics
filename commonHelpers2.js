var ae=Object.defineProperty;var re=(t,e,s)=>e in t?ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(re(t,typeof e!="symbol"?e+"":e,s),s),P=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(P(t,e,"read from private field"),s?s.call(t):e.get(t)),o=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,a)=>(P(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var l=(t,e,s)=>(P(t,e,"access private method"),s);import"./assets/styles-47d07ca3.js";import{i as ie}from"./assets/vendor-0a7943b3.js";const ne="Muscles",Q="filters",B="exercises",q="https://energyflow.b.goit.study/api/";var b,u,x;class T{constructor(e){o(this,u);o(this,b,"");y(this,b,e)}async objectGetRequest(e){return l(this,u,x).call(this,e)}async objectCreateRequest(e,s){return l(this,u,x).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return l(this,u,x).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return l(this,u,x).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}b=new WeakMap,u=new WeakSet,x=async function(e,s={}){try{const a=await fetch(i(this,b)+e,s);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){console.log(a.message)}};const ce=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case Q:e=12;break;case B:e=6;break;default:e=8;break}return e},Y=(t,e={},s=1,a="")=>{let r={};return e&&(r={...e}),t===B&&a&&(r={...r,keyword:a}),r={...r,page:s,limit:ce(Q)},`${t}?${new URLSearchParams(r).toString()}`};async function oe(t,e){const s=new T(q),a=Y("filters",t,e);try{return await s.objectGetRequest(a)}catch{}}function le(t=[]){return t.reduce((e,{imgUrl:s,name:a,filter:r})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${r}"/>
          <div class="filter-label">
          <p class="filter-name">${a}</p>
          <p class="filter-type">${r}</p>            
          </div>
      </li>
      `,"")}const I=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const a=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",a),e.classList.remove("visually-hidden")},ue=(t,e)=>I(e,t,le),de="/dynamics/assets/bi-x-octagon-73f29380.svg";function pe(t){ie.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${de}`,iconColor:"#fafafb"})}async function K(t={},e=1,s=""){const a=new T(q),r=Y(B,t,e,s);try{return await a.objectGetRequest(r)}catch{}}function ge(t=[]){return t.reduce((e,{_id:s,bodyPart:a,equipment:r,time:n,target:g,burnedCalories:k,gifUrl:U,name:F,filter:j,popularity:G,rating:D})=>e+`
       <li class="exercise-card data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${D}</p>
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
            <h3 class="ex-card-name exercise-param">${F}</h3>
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
                  <span class="ex-card-text-part">${a}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Target:
                  <span class="ex-card-text-part">${g}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const W=(t,e)=>I(e,t,ge);var c,L,f,d,C,J,w,R;class me{constructor({galleryHandle:e,filter:s,dotsSelector:a,dotDefaultClass:r,dotActiveClass:n}){o(this,C);o(this,w);h(this,"currentPage",1);h(this,"totalPages",0);o(this,c,void 0);o(this,L,10);o(this,f,"pagination-dot");o(this,d,"active-paggination-dot");h(this,"galleryHandle");h(this,"filter");this.galleryHandle=e,this.filter=s,y(this,d,n),y(this,f,r),y(this,c,document.querySelector(a)),i(this,c).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,a=0){this.galleryHandle=e,this.totalPages=a>i(this,L)?i(this,L):a,this.filter=s,l(this,C,J).call(this)}reset(e,s,a=1,r=0){this.galleryHandle=e,this.totalPages=r,this.currentPage=a,this.filter=s,l(this,w,R).call(this)}destroy(){i(this,c).removeEventListener("click",this.onDotsClick.bind(this)),l(this,w,R).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,12)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,f)))return;const a=parseInt(s.dataset.ind,10);this.currentPage=a,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,c).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,d))}),e[this.currentPage-1].classList.add(i(this,d))}}c=new WeakMap,L=new WeakMap,f=new WeakMap,d=new WeakMap,C=new WeakSet,J=function(){i(this,c).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,f)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,c).innerHTML=e,i(this,c).children[this.currentPage-1].classList.add(i(this,d))},w=new WeakSet,R=function(){i(this,c).innerHTML=""};const A=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function fe(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const M="filter-button-active";let m={};const z=document.querySelector(".exercise-filter-title"),X=document.querySelector(".filters-buttons"),$=document.querySelector(".exercise-filters-list"),S=document.querySelector(".exercises-gallery"),O=document.querySelector(".form-for-searching-input"),V=document.querySelector(".searching-input");X.addEventListener("click",he);$.addEventListener("click",ye);O.addEventListener("submit",Ce);const p=new me({galleryHandle:v,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function he(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;O.classList.add("visually-hidden"),p.reset(v,e,1,0),xe(),v({filter:e}),Le(t.target)}function v(t={filter:ne}){oe(t,p.currentPage).then(e=>{const s=e.results;A(S),ue($,s),p.init(v,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function ye(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},a=e.querySelector(".filter-name"),r=e.querySelector(".filter-type");if(O.classList.remove("visually-hidden"),r&&r){const n=a.textContent.toLowerCase(),g=r.textContent.toLowerCase();if(g==="")return;s[g]=n}ve(a.textContent),p.reset(H,s,1,0),H(s)}function xe(){z.innerHTML="Exercises"}function ve(t=""){z.innerHTML=`Exercises / <span class="chapter-text">${t}</span>`}function H(t){K(t,p.currentPage).then(e=>{A($),W(S,e.results),p.init(H,t,e.totalPages)}).catch(e=>{console.log(e.message),pe(`Error fetching images: ${e.message}`)})}function be(){m=X.querySelector("BUTTON"),m&&m.classList.add(M)}function Le(t){m&&m.classList.remove(M),t&&t.classList.add(M),m=t}be();v();function we(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ee(){return V.value.trim().toLowerCase()}function Se(){V.value=""}function Ce(t){t.preventDefault();const e=Ee(),s=we();Se(),qe(s,e)}function qe(t,e){K(t,p.currentPage,e).then(s=>{if(!s.results){console.log(s.results),I([],S,fe);return}return s}).then(s=>{A($),W(S,s.results)}).catch(s=>{console.log(s.message)})}const Te="Escape",Z="modal-backdrop",$e=".exercise-close-btn",ke=".exercises-gallery",De="ex-card-start-btn",ee="is-open";function Pe(t={}){const{_id:e,bodyPart:s,equipment:a,time:r,target:n,burnedCalories:g,gifUrl:k,name:U,filter:F,popularity:j,rating:G,description:D}=t;return`
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
                src="${k}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${U}</p>
                <p class="modal-rating">${G}
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
                    <p class="exercise-param-value exercise-param-target">${n}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${j}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${g}/${r} m</p>
              </div>
              <svg class="exercise-line-svg" aria-label="Line">
               <use href="../img/icons/symbols.svg#line-svg"></use>
              </svg>
              <p class="exercise-description">${D}</p>
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

      `}const Re=(t,e)=>{const s=Pe(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Me(t){const e=new T(q);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}Ue();const E=document.querySelector("."+Z);console.log(E);const He=document.querySelector(ke);let Be;He.addEventListener("click",Ie);E.addEventListener("click",Oe);async function Ie(t){const e=t.target;if(console.log(e.dataset),!!e.classList.contains(De)){t.preventDefault(),console.log(e.dataset.id);try{const s=await Me(e.dataset.id);s&&(Re(s,E),Be=document.querySelector($e),Ae())}catch(s){console.log(s.message)}}}function Ae(){E.classList.add(ee),window.addEventListener("keydown",se)}function te(t){window.removeEventListener("keydown",se),E.classList.remove(ee)}function se(t){t.code===Te&&te()}function Oe(t){t.currentTarget===t.target&&te()}function Ue(){const t=document.createElement("div");t.classList.add(Z),document.body.appendChild(t),console.log(t)}const Fe=document.querySelector(".js-quote"),N="quote",_="date",je=new T(q);Ge();async function Ge(){try{const{quote:t,author:e}=await Ne();Qe({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function Ne(){const t=localStorage.getItem(_),e=localStorage.getItem(N),a=new Date().toISOString().split("T")[0];if(t===a&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const r=await _e();return localStorage.setItem(_,a),localStorage.setItem(N,JSON.stringify(r)),r}async function _e(){const{quote:t,author:e}=await je.objectGetRequest("quote");return{quote:t,author:e}}function Qe({quote:t,author:e}){Fe.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}
//# sourceMappingURL=commonHelpers2.js.map
