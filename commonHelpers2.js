var ie=Object.defineProperty;var ne=(t,e,s)=>e in t?ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>(ne(t,typeof e!="symbol"?e+"":e,s),s),P=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(P(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},y=(t,e,s,r)=>(P(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var l=(t,e,s)=>(P(t,e,"access private method"),s);import"./assets/styles-53c3a916.js";import{i as Y}from"./assets/vendor-0a7943b3.js";const q="https://energyflow.b.goit.study/api/";var w,u,x;class T{constructor(e){c(this,u);c(this,w,"");y(this,w,e)}async objectGetRequest(e){return l(this,u,x).call(this,e)}async objectCreateRequest(e,s){return l(this,u,x).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return l(this,u,x).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return l(this,u,x).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}w=new WeakMap,u=new WeakSet,x=async function(e,s={}){try{const r=await fetch(i(this,w)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const oe=document.querySelector(".js-quote"),G="quote",Q="date",ce=new T(q);le();async function le(){try{const{quote:t,author:e}=await ue();pe({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function ue(){const t=localStorage.getItem(Q),e=localStorage.getItem(G),r=new Date().toISOString().split("T")[0];if(t===r&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const a=await de();return localStorage.setItem(Q,r),localStorage.setItem(G,JSON.stringify(a)),a}async function de(){const{quote:t,author:e}=await ce.objectGetRequest("quote");return{quote:t,author:e}}function pe({quote:t,author:e}){oe.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const ge="Muscles",W="filters",H="exercises",fe=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case W:e=12;break;case H:e=6;break;default:e=8;break}return e},J=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===H&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:fe(W)},`${t}?${new URLSearchParams(a).toString()}`};async function he(t,e){const s=new T(q),r=J("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function me(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const I=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},ye=(t,e)=>I(e,t,me),xe="/dynamics/assets/bi-x-octagon-73f29380.svg",ve="/dynamics/assets/bi_check-45de7d45.svg";function K(t){Y.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${xe}`,iconColor:"#fafafb"})}function be(t){Y.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ve}`,iconColor:"#fafafb"})}async function z(t={},e=1,s=""){const r=new T(q),a=J(H,t,e,s);try{return await r.objectGetRequest(a)}catch{}}function we(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:a,time:n,target:g,burnedCalories:$,gifUrl:j,name:F,filter:N,popularity:_,rating:D})=>e+`
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
                  <span class="ex-card-text-part">${$}</span>
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
                  <span class="ex-card-text-part">${g}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const V=(t,e)=>I(e,t,we);var o,L,m,d,k,X,S,R;class Le{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){c(this,k);c(this,S);f(this,"currentPage",1);f(this,"totalPages",0);c(this,o,void 0);c(this,L,10);c(this,m,"pagination-dot");c(this,d,"active-paggination-dot");f(this,"galleryHandle");f(this,"filter",{filter:""});f(this,"keyWord","");this.galleryHandle=e,this.filter=s,y(this,d,n),y(this,m,a),y(this,o,document.querySelector(r)),i(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>i(this,L)?i(this,L):r,this.filter=s,l(this,k,X).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,l(this,S,R).call(this)}destroy(){i(this,o).removeEventListener("click",this.onDotsClick.bind(this)),l(this,S,R).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,m)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,d))}),e[this.currentPage-1].classList.add(i(this,d))}}o=new WeakMap,L=new WeakMap,m=new WeakMap,d=new WeakMap,k=new WeakSet,X=function(){i(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,m)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,o).innerHTML=e,i(this,o).children[this.currentPage-1].classList.add(i(this,d))},S=new WeakSet,R=function(){i(this,o).innerHTML=""};const B=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Se(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const M="filter-button-active";let h={};const C=document.querySelector(".exercise-filter-title"),Z=document.querySelector(".filters-buttons"),A=document.querySelector(".exercise-filters-list"),v=document.querySelector(".exercises-gallery"),U=document.querySelector(".form-for-searching-input"),Ee=document.querySelector(".searching-input");Z.addEventListener("click",Ce);A.addEventListener("click",ke);U.addEventListener("submit",Pe);const p=new Le({galleryHandle:b,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Ce(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;U.classList.add("visually-hidden"),p.reset(b,e,1,0),Me(),b({filter:e}),Te(t.target)}function b(t={filter:ge}){he(t,p.currentPage).then(e=>{const s=e.results;B(v),ye(A,s),p.init(b,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function ke(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(U.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),g=a.textContent.toLowerCase();if(g==="")return;s[g]=n}Oe(r.textContent),p.reset(O,s,1,0),O(s)}function O(t){z(t,p.currentPage).then(e=>{B(A),V(v,e.results),p.init(O,t,e.totalPages)}).catch(e=>{console.log(e.message),K(`Error fetching images: ${e.message}`)})}function qe(){h=Z.querySelector("BUTTON"),h&&h.classList.add(M)}function Te(t){h&&h.classList.remove(M),t&&t.classList.add(M),h=t}function $e(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function De(){return Ee.value.trim().toLowerCase()}function Pe(t){t.preventDefault();const e=De(),s=$e();Re(s,e)}function Re(t,e){z(t,p.currentPage,e).then(s=>{if(!s.results){console.log(s.results),I([],v,Se);return}return s}).then(s=>{B(v),V(v,s.results)}).catch(s=>{console.log(s.message)})}function Me(){C.textContent.indexOf("/")!==-1&&(C.textContent=C.textContent.split("/")[0])}function Oe(t){const e=`/ 
  <span class="chapter-text">${t}</span>`;C.insertAdjacentHTML("beforeend",e)}qe();b();const He="Escape",ee="modal-backdrop",Ie=".exercise-close-btn",Be=".exercises-gallery",Ae="ex-card-start-btn",te="is-open";function Ue(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:g,gifUrl:$,name:j,filter:F,popularity:N,rating:_,description:D}=t;return`
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
                src="${$}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${j}</p>
                <p class="modal-rating">${_}
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
                    <p class="exercise-param-value exercise-param-equipment">${r}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${N}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${g}/${a} m</p>
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

      `}const je=(t,e)=>{const s=Ue(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Fe(t){const e=new T(q);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}We();const E=document.querySelector("."+ee);console.log(E);const Ne=document.querySelector(Be);let _e;Ne.addEventListener("click",Ge);E.addEventListener("click",Ye);async function Ge(t){const e=t.target;if(console.log(e.dataset),!!e.classList.contains(Ae)){t.preventDefault(),console.log(e.dataset.id);try{const s=await Fe(e.dataset.id);s&&(je(s,E),_e=document.querySelector(Ie),Qe())}catch(s){console.log(s.message)}}}function Qe(){E.classList.add(te),window.addEventListener("keydown",re)}function se(t){window.removeEventListener("keydown",re),E.classList.remove(te)}function re(t){t.code===He&&se()}function Ye(t){t.currentTarget===t.target&&se()}function We(){const t=document.createElement("div");t.classList.add(ee),document.body.appendChild(t),console.log(t)}const ae=document.querySelector(".footer-subscription"),Je=ae.querySelector(".input-footer");ae.addEventListener("submit",Ke);function Ke(t){t.preventDefault();const e=Je.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&be("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")}).catch(r=>{console.log(r),K("Sorry! Something is wrong")})}
//# sourceMappingURL=commonHelpers2.js.map
