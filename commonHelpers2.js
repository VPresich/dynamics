var ye=Object.defineProperty;var xe=(t,e,s)=>e in t?ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>(xe(t,typeof e!="symbol"?e+"":e,s),s),P=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var o=(t,e,s)=>(P(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},x=(t,e,s,r)=>(P(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var l=(t,e,s)=>(P(t,e,"access private method"),s);import{i as p,m as se,a as ve,c as Se,s as be}from"./assets/handle-menu-buttons-aa7c4817.js";import{i as re}from"./assets/vendor-0a7943b3.js";const A="https://energyflow.b.goit.study/api/";var C,u,v;class D{constructor(e){c(this,u);c(this,C,"");x(this,C,e)}async objectGetRequest(e){return l(this,u,v).call(this,e)}async objectCreateRequest(e,s){return l(this,u,v).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return l(this,u,v).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return l(this,u,v).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}C=new WeakMap,u=new WeakSet,v=async function(e,s={}){try{const r=await fetch(o(this,C)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const Le=document.querySelector(".js-quote"),X="quote",Z="date",Ee=new D(A);Ce();async function Ce(){try{const{quote:t,author:e}=await we();qe({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function we(){const t=localStorage.getItem(Z),e=localStorage.getItem(X),r=new Date().toISOString().split("T")[0];if(t===r&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const a=await Te();return localStorage.setItem(Z,r),localStorage.setItem(X,JSON.stringify(a)),a}async function Te(){const{quote:t,author:e}=await Ee.objectGetRequest("quote");return{quote:t,author:e}}function qe({quote:t,author:e}){Le.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const ke="Muscles",ae="filters",U="exercises",$e=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case ae:e=12;break;case U:e=6;break;default:e=8;break}return e},ne=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===U&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:$e(ae)},`${t}?${new URLSearchParams(a).toString()}`};async function Re(t,e){const s=new D(A),r=ne("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function Ae(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const De=document.querySelector(".return-to-the-top-btn"),Ie=document.querySelector(".return-to-the-top-small-btn"),Oe=document.querySelector(".return-to-the-top-big-btn");function Pe(){window.innerWidth<=1440?Ie.classList.remove("visually-hidden"):Oe.classList.remove("visually-hidden")}Pe();De.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const j=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},Be=(t,e)=>j(e,t,Ae),Me="/dynamics/assets/bi-x-octagon-73f29380.svg",Ne="/dynamics/assets/bi_check-45de7d45.svg";function N(t){re.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Me}`,iconColor:"#fafafb"})}function Fe(t){re.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ne}`,iconColor:"#fafafb"})}async function oe(t={},e=1,s=""){const r=new D(A),a=ne(U,t,e,s);try{return await r.objectGetRequest(a)}catch{}}function He(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:a,time:n,target:g,burnedCalories:I,gifUrl:J,name:K,filter:V,popularity:z,rating:O})=>e+`
       <li class="exercise-card data-id="${s}">
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
                  fill = "#EEA10C";
                >
                  <use href="${p}#icon-star"></use>
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
                  <use href="${p}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${p}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${K}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${I}</span>
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
      `,"")}const ie=(t,e)=>j(e,t,He);var i,w,y,d,R,ce,T,F;class _e{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){c(this,R);c(this,T);m(this,"currentPage",1);m(this,"totalPages",0);c(this,i,void 0);c(this,w,10);c(this,y,"pagination-dot");c(this,d,"active-paggination-dot");m(this,"galleryHandle");m(this,"filter",{filter:""});m(this,"keyWord","");this.galleryHandle=e,this.filter=s,x(this,d,n),x(this,y,a),x(this,i,document.querySelector(r)),o(this,i).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>o(this,w)?o(this,w):r,this.filter=s,l(this,R,ce).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,l(this,T,F).call(this)}destroy(){o(this,i).removeEventListener("click",this.onDotsClick.bind(this)),l(this,T,F).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(o(this,y)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=o(this,i).querySelectorAll("li");e.forEach(s=>{s.classList.remove(o(this,d))}),e[this.currentPage-1].classList.add(o(this,d))}}i=new WeakMap,w=new WeakMap,y=new WeakMap,d=new WeakMap,R=new WeakSet,ce=function(){o(this,i).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${o(this,y)}" data-ind="${s+1}">${s+1}</li>
      `;o(this,i).innerHTML=e,o(this,i).children[this.currentPage-1].classList.add(o(this,d))},T=new WeakSet,F=function(){o(this,i).innerHTML=""};const G=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Ue(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const H="filter-button-active";let h={};const q=document.querySelector(".exercise-filter-title"),le=document.querySelector(".filters-buttons"),W=document.querySelector(".exercise-filters-list"),b=document.querySelector(".exercises-gallery"),Y=document.querySelector(".form-for-searching-input"),je=document.querySelector(".searching-input");le.addEventListener("click",Ge);W.addEventListener("click",We);Y.addEventListener("submit",Ve);const f=new _e({galleryHandle:L,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Ge(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;Y.classList.add("visually-hidden"),f.reset(L,e,1,0),Xe(),L({filter:e}),Qe(t.target)}function L(t={filter:ke}){Re(t,f.currentPage).then(e=>{const s=e.results;G(b),Be(W,s),f.init(L,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function We(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(Y.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),g=a.textContent.toLowerCase();if(g==="")return;s[g]=n}Ze(r.textContent),f.reset(_,s,1,0),_(s)}function _(t){oe(t,f.currentPage).then(e=>{G(W),ie(b,e.results),f.init(_,t,e.totalPages)}).catch(e=>{console.log(e.message),N(`Error fetching images: ${e.message}`)})}function Ye(){h=le.querySelector("BUTTON"),h&&h.classList.add(H)}function Qe(t){h&&h.classList.remove(H),t&&t.classList.add(H),h=t}function Je(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ke(){return je.value.trim().toLowerCase()}function Ve(t){t.preventDefault();const e=Ke(),s=Je();ze(s,e)}function ze(t,e){oe(t,f.currentPage,e).then(s=>{if(!s.results){console.log(s.results),j([],b,Ue);return}return s}).then(s=>{G(b),ie(b,s.results)}).catch(s=>{console.log(s.message)})}function Xe(){q.textContent.indexOf("/")!==-1&&(q.textContent=q.textContent.split("/")[0])}function Ze(t){const e=` / 
  <span class="chapter-text">${t}</span>`;q.insertAdjacentHTML("beforeend",e)}Ye();L();const et="Escape",tt="modal-backdrop",st=".exercise-close-btn",rt=".exercises-gallery",at="ex-card-start-btn",ue="is-open",nt=".exercise-favorite-btn",ot=".exercise-raiting-btn",de="Remove from",pe="Add to favorites",it=".modal-rating";function ct(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:g,gifUrl:I,name:J,filter:K,popularity:V,rating:z,description:O}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${p}#con-close"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${I}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${J}</p>
                <p class="modal-rating">${z}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${V}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${g}/${a} m</p>
              </div>
              <p class="exercise-description">${O}</p>
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
                  <use href="${p}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const lt=(t,e)=>{const s=ct(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function ut(t){const e=new D(A);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function k(t,e){const s=e.childNodes[0];s.nodeValue=t}function dt(t,e){const r=(JSON.parse(localStorage.getItem("favorites"))||[]).some(a=>a._id===t);k(r?de:pe,e)}const pt="favorites";function ft(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function gt(t,e){const s=ft(t),r=JSON.parse(localStorage.getItem("favorites"))||[],a=r.findIndex(n=>n.name===s.name);a!==-1?(r.splice(a,1),k(pe,e)):(r.push(s),k(de,e)),localStorage.setItem(pt,JSON.stringify(r))}const mt=(t,e)=>t<e?"#EEA10C":"#7E847F",ht=t=>{const e=parseInt(t.textContent);let s="";for(let r=0;r<5;r++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${mt(r,e)}"
      >
        <use href="${p}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)};let B,S,M,$,E=document.querySelector("."+tt);E&&E.addEventListener("click",vt);const ee=document.querySelector(rt);ee&&ee.addEventListener("click",yt);async function yt(t){t.preventDefault();const e=t.target;if(e.classList.contains(at)){$=e.dataset.id;try{const s=await ut($);s&&(lt(s,E),xt())}catch(s){console.log(s.message)}}}function Q(t){window.removeEventListener("keydown",fe),E.classList.remove(ue)}function xt(){E.classList.add(ue),window.addEventListener("keydown",fe),B=document.querySelector(st),B&&B.addEventListener("click",Q),S=document.querySelector(nt),S&&S.addEventListener("click",te),dt($,S);const t=document.querySelector(it);ht(t),M=document.querySelector(ot),M&&M.addEventListener("click",te)}function fe(t){t.code===et&&Q()}function vt(t){t.currentTarget===t.target&&Q()}function te(t){gt($,S)}const ge=document.querySelector(".footer-subscription"),St=ge.querySelector(".input-footer");ge.addEventListener("submit",bt);function bt(t){t.preventDefault();const e=St.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&Fe("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&N("Subscription already exists")}).catch(r=>{console.log(r),N("Sorry! Something is wrong")})}const me=document.querySelectorAll(".button-home"),he=document.querySelectorAll(".button-favorites");se(me,he);he.forEach(t=>{t.addEventListener("click",e=>{se([t],me)})});ve();const Lt={iconURL:p,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Et=document.querySelector(".social-list");Se(Et,Lt,be);
//# sourceMappingURL=commonHelpers2.js.map
