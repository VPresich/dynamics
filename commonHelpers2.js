var ce=Object.defineProperty;var le=(t,e,s)=>e in t?ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(le(t,typeof e!="symbol"?e+"":e,s),s),R=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(R(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},v=(t,e,s,r)=>(R(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(R(t,e,"access private method"),s);import"./assets/styles-ef4b4704.js";import{i as K}from"./assets/vendor-0a7943b3.js";const k="https://energyflow.b.goit.study/api/";var w,d,x;class q{constructor(e){l(this,d);l(this,w,"");v(this,w,e)}async objectGetRequest(e){return u(this,d,x).call(this,e)}async objectCreateRequest(e,s){return u(this,d,x).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return u(this,d,x).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return u(this,d,x).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}w=new WeakMap,d=new WeakSet,x=async function(e,s={}){try{const r=await fetch(i(this,w)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const ue=document.querySelector(".js-quote"),Q="quote",Y="date",de=new q(k);pe();async function pe(){try{const{quote:t,author:e}=await ge();he({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function ge(){const t=localStorage.getItem(Y),e=localStorage.getItem(Q),r=new Date().toISOString().split("T")[0];if(t===r&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const a=await fe();return localStorage.setItem(Y,r),localStorage.setItem(Q,JSON.stringify(a)),a}async function fe(){const{quote:t,author:e}=await de.objectGetRequest("quote");return{quote:t,author:e}}function he({quote:t,author:e}){ue.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const me="Muscles",z="filters",I="exercises",ye=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case z:e=12;break;case I:e=6;break;default:e=8;break}return e},V=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===I&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:ye(z)},`${t}?${new URLSearchParams(a).toString()}`};async function ve(t,e){const s=new q(k),r=V("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function xe(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const be=document.querySelector(".return-to-the-top-btn"),Le=document.querySelector(".return-to-the-top-small-btn"),we=document.querySelector(".return-to-the-top-big-btn");function Se(){window.innerWidth<=1440?Le.classList.remove("visually-hidden"):we.classList.remove("visually-hidden")}Se();be.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const A=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},Ee=(t,e)=>A(e,t,xe),Ce="/dynamics/assets/bi-x-octagon-73f29380.svg",Te="/dynamics/assets/bi_check-45de7d45.svg";function X(t){K.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ce}`,iconColor:"#fafafb"})}function ke(t){K.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Te}`,iconColor:"#fafafb"})}async function Z(t={},e=1,s=""){const r=new q(k),a=V(I,t,e,s);try{return await r.objectGetRequest(a)}catch{}}const B="/dynamics/assets/symbols-80aeedc9.svg";function qe(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:a,time:n,target:f,burnedCalories:D,gifUrl:N,name:_,filter:G,popularity:W,rating:P})=>e+`
       <li class="exercise-card data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${P}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${B}#icon-star"></use>
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
                  <use href="${B}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${B}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${_}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${D}</span>
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
                  <span class="ex-card-text-part">${f}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const ee=(t,e)=>A(e,t,qe);var c,S,y,p,T,te,E,M;class $e{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){l(this,T);l(this,E);h(this,"currentPage",1);h(this,"totalPages",0);l(this,c,void 0);l(this,S,10);l(this,y,"pagination-dot");l(this,p,"active-paggination-dot");h(this,"galleryHandle");h(this,"filter",{filter:""});h(this,"keyWord","");this.galleryHandle=e,this.filter=s,v(this,p,n),v(this,y,a),v(this,c,document.querySelector(r)),i(this,c).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>i(this,S)?i(this,S):r,this.filter=s,u(this,T,te).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,u(this,E,M).call(this)}destroy(){i(this,c).removeEventListener("click",this.onDotsClick.bind(this)),u(this,E,M).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,y)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,c).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,p))}),e[this.currentPage-1].classList.add(i(this,p))}}c=new WeakMap,S=new WeakMap,y=new WeakMap,p=new WeakMap,T=new WeakSet,te=function(){i(this,c).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,y)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,c).innerHTML=e,i(this,c).children[this.currentPage-1].classList.add(i(this,p))},E=new WeakSet,M=function(){i(this,c).innerHTML=""};const $=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function De(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const O="filter-button-active";let m={};const C=document.querySelector(".exercise-filter-title"),se=document.querySelector(".filters-buttons"),U=document.querySelector(".exercise-filters-list"),b=document.querySelector(".exercises-gallery"),j=document.querySelector(".form-for-searching-input"),Pe=document.querySelector(".searching-input");se.addEventListener("click",Re);U.addEventListener("click",Be);j.addEventListener("submit",Ae);const g=new $e({galleryHandle:L,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Re(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;j.classList.add("visually-hidden"),g.reset(L,e,1,0),je(),L({filter:e}),Oe(t.target)}function L(t={filter:me}){ve(t,g.currentPage).then(e=>{const s=e.results;$(b),Ee(U,s),g.init(L,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function Be(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(j.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),f=a.textContent.toLowerCase();if(f==="")return;s[f]=n}Fe(r.textContent),g.reset(H,s,1,0),H(s)}function H(t){Z(t,g.currentPage).then(e=>{$(U),ee(b,e.results),g.init(H,t,e.totalPages)}).catch(e=>{console.log(e.message),X(`Error fetching images: ${e.message}`)})}function Me(){m=se.querySelector("BUTTON"),m&&m.classList.add(O)}function Oe(t){m&&m.classList.remove(O),t&&t.classList.add(O),m=t}function He(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ie(){return Pe.value.trim().toLowerCase()}function Ae(t){t.preventDefault();const e=Ie(),s=He();Ue(s,e)}function Ue(t,e){Z(t,g.currentPage,e).then(s=>{if(!s.results){console.log(s.results),A([],b,De);return}return s}).then(s=>{$(b),ee(b,s.results)}).catch(s=>{console.log(s.message)})}function je(){C.textContent.indexOf("/")!==-1&&(C.textContent=C.textContent.split("/")[0])}function Fe(t){const e=` / 
  <span class="chapter-text">${t}</span>`;C.insertAdjacentHTML("beforeend",e)}Me();L();const Ne="Escape",re="modal-backdrop",_e=".exercise-close-btn",Ge=".exercises-gallery",We="ex-card-start-btn",ae="is-open";function Qe(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:f,gifUrl:D,name:N,filter:_,popularity:G,rating:W,description:P}=t;return`
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
                src="${D}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${N}</p>
                <p class="modal-rating">${W}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${G}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${f}/${a} m</p>
              </div>
              <svg class="exercise-line-svg" aria-label="Line">
               <use href="../img/icons/symbols.svg#line-svg"></use>
              </svg>
              <p class="exercise-description">${P}</p>
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
                  <use href=".img/icons/symbols.svg#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const Ye=(t,e)=>{const s=Qe(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Je(t){const e=new q(k);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}let o=document.querySelector("."+re);o&&o.addEventListener("click",ne);const Ke=document.querySelector(Ge);let J;Ke.addEventListener("click",ze);async function ze(t){const e=t.target;if(console.log(e.dataset),!!e.classList.contains(We)){t.preventDefault(),console.log(e.dataset.id);try{const s=await Je(e.dataset.id);s&&(Ye(s,o),J=document.querySelector(_e),J.addEventListener("click",F),Ve())}catch(s){console.log(s.message)}}}function Ve(){o.classList.add(ae),window.addEventListener("keydown",ie)}function F(t){window.removeEventListener("keydown",ie),o.classList.remove(ae),$(o)}function ie(t){t.code===Ne&&F()}function ne(t){t.currentTarget===t.target&&F()}function Xe(){o=document.createElement("div"),o&&o.classList.add(re),document.body.appendChild(o),o.addEventListener("click",ne)}o||Xe();const oe=document.querySelector(".footer-subscription"),Ze=oe.querySelector(".input-footer");oe.addEventListener("submit",et);function et(t){t.preventDefault();const e=Ze.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&ke("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.")}).catch(r=>{console.log(r),X("Sorry! Something is wrong")})}
//# sourceMappingURL=commonHelpers2.js.map
