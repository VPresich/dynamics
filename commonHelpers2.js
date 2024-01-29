var pe=Object.defineProperty;var fe=(e,t,s)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>(fe(e,typeof t!="symbol"?t+"":t,s),s),A=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(A(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},L=(e,t,s,r)=>(A(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var C=(e,t,s)=>(A(e,t,"access private method"),s);import{D as M,B as F,i as d,m as Q,a as me,c as ge,s as he}from"./assets/handle-menu-buttons-ea95ff4c.js";import{i as X}from"./assets/vendor-0a7943b3.js";const xe="Muscles",Z="filters",H="exercises",ve=e=>{let t=8;const s=window.innerWidth;if(s>=1440)t=12;else if(s>=768)switch(e){case Z:t=12;break;case H:t=6;break;default:t=8;break}return t},ee=(e,t={},s=1,r="")=>{let a={};return t&&(a={...t}),e===H&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:ve(Z)},`${e}?${new URLSearchParams(a).toString()}`};async function ye(e,t){const s=new M(F),r=ee("filters",e,t);try{return await s.objectGetRequest(r)}catch{}}function Se(e=[]){return e.reduce((t,{imgUrl:s,name:r,filter:a})=>t+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const be=document.querySelector(".return-to-the-top-btn"),Le=document.querySelector(".return-to-the-top-small-btn"),Ce=document.querySelector(".return-to-the-top-big-btn");function Ee(){window.innerWidth<=1440?Le.classList.remove("visually-hidden"):Ce.classList.remove("visually-hidden")}Ee();be.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const N=(e,t,s)=>{t.innerHTML="",e.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",r),t.classList.remove("visually-hidden")},we=(e,t)=>N(t,e,Se),Te="/dynamics/assets/bi-x-octagon-73f29380.svg",ke="/dynamics/assets/bi_check-45de7d45.svg";function P(e){X.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Te}`,iconColor:"#fafafb"})}function qe(e){X.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ke}`,iconColor:"#fafafb"})}async function te(e={},t=1,s=""){const r=new M(F),a=ee(H,e,t,s);try{return await r.objectGetRequest(a)}catch{}}function $e(e=[]){return e.reduce((t,{_id:s,bodyPart:r,equipment:a,time:n,target:p,burnedCalories:q,gifUrl:j,name:Y,filter:V,popularity:J,rating:$})=>t+`
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
                  fill = "#EEA10C";
                >
                  <use href="${d}#icon-star"></use>
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
                  <use href="${d}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${d}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${Y}</h3>
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
                  <span class="ex-card-text-part">${r}</span>
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
      `,"")}const se=(e,t)=>N(t,e,$e);var o,S,g,l,k,re,b,B;class Ae{constructor({galleryHandle:t,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){c(this,k);c(this,b);f(this,"currentPage",1);f(this,"totalPages",0);c(this,o,void 0);c(this,S,10);c(this,g,"pagination-dot");c(this,l,"active-paggination-dot");f(this,"galleryHandle");f(this,"filter",{filter:""});f(this,"keyWord","");this.galleryHandle=t,this.filter=s,L(this,l,n),L(this,g,a),L(this,o,document.querySelector(r)),i(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(t,s,r=0){this.galleryHandle=t,this.totalPages=r>i(this,S)?i(this,S):r,this.filter=s,C(this,k,re).call(this)}reset(t,s,r=1,a="",n=0){this.galleryHandle=t,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,C(this,b,B).call(this)}destroy(){i(this,o).removeEventListener("click",this.onDotsClick.bind(this)),C(this,b,B).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(t){console.log(t.message)}}onDotsClick(t){const s=t.target;if(!s.classList.contains(i(this,g)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const t=i(this,o).querySelectorAll("li");t.forEach(s=>{s.classList.remove(i(this,l))}),t[this.currentPage-1].classList.add(i(this,l))}}o=new WeakMap,S=new WeakMap,g=new WeakMap,l=new WeakMap,k=new WeakSet,re=function(){i(this,o).innerHTML="";let t="";for(let s=0;s<this.totalPages;s+=1)t+=`
       <li class="${i(this,g)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,o).innerHTML=t,i(this,o).children[this.currentPage-1].classList.add(i(this,l))},b=new WeakSet,B=function(){i(this,o).innerHTML=""};const _=e=>{e.innerHTML="",e.classList.add("visually-hidden")};function Re(e){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const D="filter-button-active";let m={};const E=document.querySelector(".exercise-filter-title"),ae=document.querySelector(".filters-buttons"),U=document.querySelector(".exercise-filters-list"),x=document.querySelector(".exercises-gallery"),G=document.querySelector(".form-for-searching-input"),Ie=document.querySelector(".searching-input");ae.addEventListener("click",Pe);U.addEventListener("click",Be);G.addEventListener("submit",He);const u=new Ae({galleryHandle:v,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Pe(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault();const t=e.target.dataset.filter;G.classList.add("visually-hidden"),u.reset(v,t,1,0),_e(),v({filter:t}),Oe(e.target)}function v(e={filter:xe}){ye(e,u.currentPage).then(t=>{const s=t.results;_(x),we(U,s),u.init(v,e,t.totalPages)}).catch(t=>{console.log(t.message)})}function Be(e){e.preventDefault(),e.target;const t=e.target.closest("li");if(!t)return;const s={},r=t.querySelector(".filter-name"),a=t.querySelector(".filter-type");if(G.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),p=a.textContent.toLowerCase();if(p==="")return;s[p]=n}Ue(r.textContent),u.reset(O,s,1,0),O(s)}function O(e){te(e,u.currentPage).then(t=>{_(U),se(x,t.results),u.init(O,e,t.totalPages)}).catch(t=>{console.log(t.message),P(`Error fetching images: ${t.message}`)})}function De(){m=ae.querySelector("BUTTON"),m&&m.classList.add(D)}function Oe(e){m&&m.classList.remove(D),e&&e.classList.add(D),m=e}function Me(){const e=document.querySelector(".filter-button-active"),t=document.querySelector(".chapter-text"),s={};return s[e.dataset.filter.toLowerCase()]=t.textContent.toLowerCase(),s}function Fe(){return Ie.value.trim().toLowerCase()}function He(e){e.preventDefault();const t=Fe(),s=Me();Ne(s,t)}function Ne(e,t){te(e,u.currentPage,t).then(s=>{if(!s.results){console.log(s.results),N([],x,Re);return}return s}).then(s=>{_(x),se(x,s.results)}).catch(s=>{console.log(s.message)})}function _e(){E.textContent.indexOf("/")!==-1&&(E.textContent=E.textContent.split("/")[0])}function Ue(e){const t=` / 
  <span class="chapter-text">${e}</span>`;E.insertAdjacentHTML("beforeend",t)}De();v();const Ge="Escape",We="modal-backdrop",je=".exercise-close-btn",Ye=".exercises-gallery",Ve="ex-card-start-btn",ie="is-open",Je=".exercise-favorite-btn",Ke=".exercise-raiting-btn",ne="Remove from",oe="Add to favorites",ze=".modal-rating";function Qe(e={}){const{_id:t,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:p,gifUrl:q,name:j,filter:Y,popularity:V,rating:J,description:$}=e;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${d}#con-close"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${q}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${j}</p>
                <p class="modal-rating">${J}</p>
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
                <p class="exercise-calories-value">${p}/${a} m</p>
              </div>
              <p class="exercise-description">${$}</p>
              <div class="exercise-buttons">
                <button
                  class="exercise-favorite-btn"
                  type="submit"
                  data="${t}"
                >
                  Add to favorites
                  <svg
                  class="exercise-fav-icon"
                  aria-label="Heart icon"
                  >
                  <use href="${d}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const Xe=(e,t)=>{const s=Qe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function Ze(e){const t=new M(F);try{return await t.objectGetRequest(`exercises/${e}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function w(e,t){const s=t.childNodes[0];s.nodeValue=e}function et(e,t){const r=(JSON.parse(localStorage.getItem("favorites"))||[]).some(a=>a._id===e);w(r?ne:oe,t)}const tt="favorites";function st(e){return{_id:e,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function rt(e,t){const s=st(e),r=JSON.parse(localStorage.getItem("favorites"))||[],a=r.findIndex(n=>n.name===s.name);a!==-1?(r.splice(a,1),w(oe,t)):(r.push(s),w(ne,t)),localStorage.setItem(tt,JSON.stringify(r))}const at=(e,t)=>e<t?"#EEA10C":"#7E847F",it=e=>{const t=parseInt(e.textContent);let s="";for(let r=0;r<5;r++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${at(r,t)}"
      >
        <use href="${d}#icon-star"></use>
      </svg>`;e.insertAdjacentHTML("beforeend",s)};let R,h,I,T,y=document.querySelector("."+We);y&&y.addEventListener("click",ct);const K=document.querySelector(Ye);K&&K.addEventListener("click",nt);async function nt(e){e.preventDefault();const t=e.target;if(t.classList.contains(Ve)){T=t.dataset.id;try{const s=await Ze(T);s&&(Xe(s,y),ot())}catch(s){console.log(s.message)}}}function W(e){window.removeEventListener("keydown",ce),y.classList.remove(ie)}function ot(){y.classList.add(ie),window.addEventListener("keydown",ce),R=document.querySelector(je),R&&R.addEventListener("click",W),h=document.querySelector(Je),h&&h.addEventListener("click",z),et(T,h);const e=document.querySelector(ze);it(e),I=document.querySelector(Ke),I&&I.addEventListener("click",z)}function ce(e){e.code===Ge&&W()}function ct(e){e.currentTarget===e.target&&W()}function z(e){rt(T,h)}const le=document.querySelector(".footer-subscription"),lt=le.querySelector(".input-footer");le.addEventListener("submit",dt);function dt(e){e.preventDefault();const t=lt.value.trim(),s={method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&qe("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&P("Subscription already exists")}).catch(r=>{console.log(r),P("Sorry! Something is wrong")})}const de=document.querySelectorAll(".button-home"),ue=document.querySelectorAll(".button-favorites");Q(de,ue);ue.forEach(e=>{e.addEventListener("click",t=>{Q([e],de)})});me();const ut={iconURL:d,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},pt=document.querySelector(".social-list");ge(pt,ut,he);
//# sourceMappingURL=commonHelpers2.js.map
