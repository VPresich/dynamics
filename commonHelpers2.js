var ce=Object.defineProperty;var le=(t,e,s)=>e in t?ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(le(t,typeof e!="symbol"?e+"":e,s),s),O=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(O(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},b=(t,e,s,r)=>(O(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var d=(t,e,s)=>(O(t,e,"access private method"),s);import"./assets/styles-c3ebc9ef.js";import{i as z}from"./assets/vendor-0a7943b3.js";const R="https://energyflow.b.goit.study/api/";var C,p,w;class M{constructor(e){l(this,p);l(this,C,"");b(this,C,e)}async objectGetRequest(e){return d(this,p,w).call(this,e)}async objectCreateRequest(e,s){return d(this,p,w).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return d(this,p,w).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return d(this,p,w).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}C=new WeakMap,p=new WeakSet,w=async function(e,s={}){try{const r=await fetch(i(this,C)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const ue=document.querySelector(".js-quote"),Y="quote",J="date",de=new M(R);pe();async function pe(){try{const{quote:t,author:e}=await fe();he({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function fe(){const t=localStorage.getItem(J),e=localStorage.getItem(Y),r=new Date().toISOString().split("T")[0];if(t===r&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const a=await ge();return localStorage.setItem(J,r),localStorage.setItem(Y,JSON.stringify(a)),a}async function ge(){const{quote:t,author:e}=await de.objectGetRequest("quote");return{quote:t,author:e}}function he({quote:t,author:e}){ue.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const me="Muscles",V="filters",F="exercises",ye=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case V:e=12;break;case F:e=6;break;default:e=8;break}return e},X=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===F&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:ye(V)},`${t}?${new URLSearchParams(a).toString()}`};async function xe(t,e){const s=new M(R),r=X("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function ve(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const be=document.querySelector(".return-to-the-top-btn"),we=document.querySelector(".return-to-the-top-small-btn"),Le=document.querySelector(".return-to-the-top-big-btn");function Se(){window.innerWidth<=1440?we.classList.remove("visually-hidden"):Le.classList.remove("visually-hidden")}Se();be.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const _=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},Ce=(t,e)=>_(e,t,ve),Ee="/dynamics/assets/bi-x-octagon-73f29380.svg",Te="/dynamics/assets/bi_check-45de7d45.svg";function A(t){z.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ee}`,iconColor:"#fafafb"})}function ke(t){z.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Te}`,iconColor:"#fafafb"})}async function Z(t={},e=1,s=""){const r=new M(R),a=X(F,t,e,s);try{return await r.objectGetRequest(a)}catch{}}const m="/dynamics/assets/symbols-99c7e837.svg";function $e(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:a,time:n,target:u,burnedCalories:v,gifUrl:k,name:$,filter:q,popularity:Q,rating:B})=>e+`
       <li class="exercise-card data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${B}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${m}#icon-star"></use>
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
                  <use href="${m}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${m}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${$}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${v}</span>
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
                  <span class="ex-card-text-part">${u}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const ee=(t,e)=>_(e,t,$e);var c,E,x,f,P,te,T,H;class qe{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){l(this,P);l(this,T);h(this,"currentPage",1);h(this,"totalPages",0);l(this,c,void 0);l(this,E,10);l(this,x,"pagination-dot");l(this,f,"active-paggination-dot");h(this,"galleryHandle");h(this,"filter",{filter:""});h(this,"keyWord","");this.galleryHandle=e,this.filter=s,b(this,f,n),b(this,x,a),b(this,c,document.querySelector(r)),i(this,c).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>i(this,E)?i(this,E):r,this.filter=s,d(this,P,te).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,d(this,T,H).call(this)}destroy(){i(this,c).removeEventListener("click",this.onDotsClick.bind(this)),d(this,T,H).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,x)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,c).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,f))}),e[this.currentPage-1].classList.add(i(this,f))}}c=new WeakMap,E=new WeakMap,x=new WeakMap,f=new WeakMap,P=new WeakSet,te=function(){i(this,c).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,x)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,c).innerHTML=e,i(this,c).children[this.currentPage-1].classList.add(i(this,f))},T=new WeakSet,H=function(){i(this,c).innerHTML=""};const I=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function De(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const U="filter-button-active";let y={};const D=document.querySelector(".exercise-filter-title"),se=document.querySelector(".filters-buttons"),G=document.querySelector(".exercise-filters-list"),L=document.querySelector(".exercises-gallery"),N=document.querySelector(".form-for-searching-input"),Pe=document.querySelector(".searching-input");se.addEventListener("click",Re);G.addEventListener("click",Me);N.addEventListener("submit",He);const g=new qe({galleryHandle:S,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Re(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;N.classList.add("visually-hidden"),g.reset(S,e,1,0),je(),S({filter:e}),Be(t.target)}function S(t={filter:me}){xe(t,g.currentPage).then(e=>{const s=e.results;I(L),Ce(G,s),g.init(S,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function Me(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(N.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),u=a.textContent.toLowerCase();if(u==="")return;s[u]=n}Fe(r.textContent),g.reset(j,s,1,0),j(s)}function j(t){Z(t,g.currentPage).then(e=>{I(G),ee(L,e.results),g.init(j,t,e.totalPages)}).catch(e=>{console.log(e.message),A(`Error fetching images: ${e.message}`)})}function Ie(){y=se.querySelector("BUTTON"),y&&y.classList.add(U)}function Be(t){y&&y.classList.remove(U),t&&t.classList.add(U),y=t}function Oe(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ae(){return Pe.value.trim().toLowerCase()}function He(t){t.preventDefault();const e=Ae(),s=Oe();Ue(s,e)}function Ue(t,e){Z(t,g.currentPage,e).then(s=>{if(!s.results){console.log(s.results),_([],L,De);return}return s}).then(s=>{I(L),ee(L,s.results)}).catch(s=>{console.log(s.message)})}function je(){D.textContent.indexOf("/")!==-1&&(D.textContent=D.textContent.split("/")[0])}function Fe(t){const e=` / 
  <span class="chapter-text">${t}</span>`;D.insertAdjacentHTML("beforeend",e)}Ie();S();const _e="Escape",re="modal-backdrop",Ge=".exercise-close-btn",Ne=".exercises-gallery",We="ex-card-start-btn",ae="is-open";function Qe(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:u,gifUrl:v,name:k,filter:$,popularity:q,rating:Q,description:B}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${m}#icon-cross"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${v}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${k}</p>
                <p class="modal-rating">${Q}</p>
              </div>
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
                    <p class="exercise-param-value exercise-param-popularuty">${q}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${u}/${a} m</p>
              </div>
              <p class="exercise-description">${B}</p>
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
                  <use href="${m}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const Ye=(t,e)=>{const s=Qe(t);console.log("strMarkup",s),e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Je(t){const e=new M(R);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}let o=document.querySelector("."+re);o&&o.addEventListener("click",ie);const Ke=document.querySelector(Ne);let K;Ke.addEventListener("click",ze);async function ze(t){const e=t.target;if(console.log(e.dataset),!!e.classList.contains(We)){t.preventDefault(),console.log(e.dataset.id);try{const s=await Je(e.dataset.id);s&&(Ye(s,o),K=document.querySelector(Ge),K.addEventListener("click",W),Ve())}catch(s){console.log(s.message)}}}function Ve(){o.classList.add(ae),window.addEventListener("keydown",ne)}function W(t){window.removeEventListener("keydown",ne),o.classList.remove(ae),I(o)}function ne(t){t.code===_e&&W()}function ie(t){t.currentTarget===t.target&&W()}function Xe(){o=document.createElement("div"),o&&o.classList.add(re),document.body.appendChild(o),o.addEventListener("click",ie)}o||Xe();const oe=document.querySelector(".footer-subscription"),Ze=oe.querySelector(".input-footer");oe.addEventListener("submit",et);function et(t){t.preventDefault();const e=Ze.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&ke("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&A("Subscription already exists")}).catch(r=>{console.log(r),A("Sorry! Something is wrong")})}const tt=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function st(t,e=[]){const{iconURL:s,iconContainerClass:r,iconLinkClass:a,iconClass:n}=t;return e.reduce((u,{url:v,id:k,label:$,hrefTag:q})=>u+`
        <li class="${r}">
            <a class="${a}" target="_blank" rel="noopener" href="${v}">
            <svg class="${n}" aria-label="${$}" id=${k}>
                <use href="${s}#${q}"></use>
            </svg>
            </a>
        </li>
      `,"")}function rt(t,e,s=[]){const r=st(e,s);t.innerHTML="",t.insertAdjacentHTML("beforeend",r)}const at={iconURL:m,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},nt=document.querySelector(".social-list");rt(nt,at,tt);
//# sourceMappingURL=commonHelpers2.js.map
