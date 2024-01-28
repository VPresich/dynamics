var ue=Object.defineProperty;var de=(t,e,s)=>e in t?ue(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>(de(t,typeof e!="symbol"?e+"":e,s),s),M=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(M(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},v=(t,e,s,r)=>(M(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(M(t,e,"access private method"),s);import"./assets/styles-c3ebc9ef.js";import{i as Z}from"./assets/vendor-0a7943b3.js";const P="https://energyflow.b.goit.study/api/";var E,d,b;class B{constructor(e){c(this,d);c(this,E,"");v(this,E,e)}async objectGetRequest(e){return u(this,d,b).call(this,e)}async objectCreateRequest(e,s){return u(this,d,b).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return u(this,d,b).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return u(this,d,b).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}E=new WeakMap,d=new WeakSet,b=async function(e,s={}){try{const r=await fetch(i(this,E)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const pe=document.querySelector(".js-quote"),z="quote",V="date",fe=new B(P);ge();async function ge(){try{const{quote:t,author:e}=await he();ye({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function he(){const t=localStorage.getItem(V),e=localStorage.getItem(z),r=new Date().toISOString().split("T")[0];if(t===r&&e){const a=JSON.parse(e);if(a.quote&&a.author)return a}const n=await me();return localStorage.setItem(V,r),localStorage.setItem(z,JSON.stringify(n)),n}async function me(){const{quote:t,author:e}=await fe.objectGetRequest("quote");return{quote:t,author:e}}function ye({quote:t,author:e}){pe.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const xe="Muscles",ee="filters",G="exercises",ve=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case ee:e=12;break;case G:e=6;break;default:e=8;break}return e},te=(t,e={},s=1,r="")=>{let n={};return e&&(n={...e}),t===G&&r&&(n={...n,keyword:r}),n={...n,page:s,limit:ve(ee)},`${t}?${new URLSearchParams(n).toString()}`};async function be(t,e){const s=new B(P),r=te("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function we(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:n})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${n}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${n}</p>            
          </div>
      </li>
      `,"")}const Le=document.querySelector(".return-to-the-top-btn"),Se=document.querySelector(".return-to-the-top-small-btn"),Ee=document.querySelector(".return-to-the-top-big-btn");function Te(){window.innerWidth<=1440?Se.classList.remove("visually-hidden"):Ee.classList.remove("visually-hidden")}Te();Le.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const N=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},Ce=(t,e)=>N(e,t,we),ke="/dynamics/assets/bi-x-octagon-73f29380.svg",$e="/dynamics/assets/bi_check-45de7d45.svg";function U(t){Z.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ke}`,iconColor:"#fafafb"})}function qe(t){Z.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${$e}`,iconColor:"#fafafb"})}async function se(t={},e=1,s=""){const r=new B(P),n=te(G,t,e,s);try{return await r.objectGetRequest(n)}catch{}}const h="/dynamics/assets/symbols-99c7e837.svg";function De(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:n,time:a,target:l,burnedCalories:x,gifUrl:k,name:$,filter:q,popularity:K,rating:I})=>e+`
       <li class="exercise-card data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${I}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${h}#icon-star"></use>
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
                  <use href="${h}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${h}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${$}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${x}</span>
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
      `,"")}const re=(t,e)=>N(e,t,De);var o,T,y,p,R,ne,C,j;class Re{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:n,dotActiveClass:a}){c(this,R);c(this,C);g(this,"currentPage",1);g(this,"totalPages",0);c(this,o,void 0);c(this,T,10);c(this,y,"pagination-dot");c(this,p,"active-paggination-dot");g(this,"galleryHandle");g(this,"filter",{filter:""});g(this,"keyWord","");this.galleryHandle=e,this.filter=s,v(this,p,a),v(this,y,n),v(this,o,document.querySelector(r)),i(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>i(this,T)?i(this,T):r,this.filter=s,u(this,R,ne).call(this)}reset(e,s,r=1,n="",a=0){this.galleryHandle=e,this.totalPages=a,this.currentPage=r,this.filter=s,this.keyWord=n,u(this,C,j).call(this)}destroy(){i(this,o).removeEventListener("click",this.onDotsClick.bind(this)),u(this,C,j).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,y)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,p))}),e[this.currentPage-1].classList.add(i(this,p))}}o=new WeakMap,T=new WeakMap,y=new WeakMap,p=new WeakMap,R=new WeakSet,ne=function(){i(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,y)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,o).innerHTML=e,i(this,o).children[this.currentPage-1].classList.add(i(this,p))},C=new WeakSet,j=function(){i(this,o).innerHTML=""};const W=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Pe(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const F="filter-button-active";let m={};const D=document.querySelector(".exercise-filter-title"),ae=document.querySelector(".filters-buttons"),Q=document.querySelector(".exercise-filters-list"),w=document.querySelector(".exercises-gallery"),Y=document.querySelector(".form-for-searching-input"),Be=document.querySelector(".searching-input");ae.addEventListener("click",Ie);Q.addEventListener("click",Me);Y.addEventListener("submit",je);const f=new Re({galleryHandle:L,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Ie(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;Y.classList.add("visually-hidden"),f.reset(L,e,1,0),_e(),L({filter:e}),He(t.target)}function L(t={filter:xe}){be(t,f.currentPage).then(e=>{const s=e.results;W(w),Ce(Q,s),f.init(L,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function Me(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),n=e.querySelector(".filter-type");if(Y.classList.remove("visually-hidden"),n&&n){const a=r.textContent.toLowerCase(),l=n.textContent.toLowerCase();if(l==="")return;s[l]=a}Ge(r.textContent),f.reset(_,s,1,0),_(s)}function _(t){se(t,f.currentPage).then(e=>{W(Q),re(w,e.results),f.init(_,t,e.totalPages)}).catch(e=>{console.log(e.message),U(`Error fetching images: ${e.message}`)})}function Oe(){m=ae.querySelector("BUTTON"),m&&m.classList.add(F)}function He(t){m&&m.classList.remove(F),t&&t.classList.add(F),m=t}function Ae(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ue(){return Be.value.trim().toLowerCase()}function je(t){t.preventDefault();const e=Ue(),s=Ae();Fe(s,e)}function Fe(t,e){se(t,f.currentPage,e).then(s=>{if(!s.results){console.log(s.results),N([],w,Pe);return}return s}).then(s=>{W(w),re(w,s.results)}).catch(s=>{console.log(s.message)})}function _e(){D.textContent.indexOf("/")!==-1&&(D.textContent=D.textContent.split("/")[0])}function Ge(t){const e=` / 
  <span class="chapter-text">${t}</span>`;D.insertAdjacentHTML("beforeend",e)}Oe();L();const Ne="Escape",We="modal-backdrop",Qe=".exercise-close-btn",Ye=".exercises-gallery",Je="ex-card-start-btn",ie="is-open",Ke=".exercise-favorite-btn",ze=".exercise-raiting-btn";function Ve(t={}){const{_id:e,bodyPart:s,equipment:r,time:n,target:a,burnedCalories:l,gifUrl:x,name:k,filter:$,popularity:q,rating:K,description:I}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${h}#icon-cross"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${x}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${k}</p>
                <p class="modal-rating">${K}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${a}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${q}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${l}/${n} m</p>
              </div>
              <p class="exercise-description">${I}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${e}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${h}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const Xe=(t,e)=>{const s=Ve(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Ze(t){const e=new B(P);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}let O,H,A,S=document.querySelector("."+We);S&&S.addEventListener("click",at);const X=document.querySelector(Ye);X&&X.addEventListener("click",et);async function et(t){t.preventDefault();const e=t.target;if(!e.classList.contains(Je))return;const s=e.dataset.id;try{const r=await Ze(s);r&&(Xe(r,S),tt(),st(),rt(),nt())}catch(r){console.log(r.message)}}function tt(){O=document.querySelector(Qe),O&&O.addEventListener("click",J)}function J(t){window.removeEventListener("keydown",oe),S.classList.remove(ie)}function st(){H=document.querySelector(Ke),H&&H.addEventListener("click",ce)}function rt(){A=document.querySelector(ze),A&&A.addEventListener("click",ce)}function nt(){S.classList.add(ie),window.addEventListener("keydown",oe)}function oe(t){t.code===Ne&&J()}function at(t){t.currentTarget===t.target&&J()}function ce(t){}const le=document.querySelector(".footer-subscription"),it=le.querySelector(".input-footer");le.addEventListener("submit",ot);function ot(t){t.preventDefault();const e=it.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&qe("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&U("Subscription already exists")}).catch(r=>{console.log(r),U("Sorry! Something is wrong")})}const ct=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function lt(t,e=[]){const{iconURL:s,iconContainerClass:r,iconLinkClass:n,iconClass:a}=t;return e.reduce((l,{url:x,id:k,label:$,hrefTag:q})=>l+`
        <li class="${r}">
            <a class="${n}" target="_blank" rel="noopener" href="${x}">
            <svg class="${a}" aria-label="${$}" id=${k}>
                <use href="${s}#${q}"></use>
            </svg>
            </a>
        </li>
      `,"")}function ut(t,e,s=[]){const r=lt(e,s);t.innerHTML="",t.insertAdjacentHTML("beforeend",r)}const dt={iconURL:h,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},pt=document.querySelector(".social-list");ut(pt,dt,ct);
//# sourceMappingURL=commonHelpers2.js.map
