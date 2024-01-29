var pe=Object.defineProperty;var fe=(e,t,s)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var f=(e,t,s)=>(fe(e,typeof t!="symbol"?t+"":t,s),s),R=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var a=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},b=(e,t,s,r)=>(R(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var L=(e,t,s)=>(R(e,t,"access private method"),s);import{D as F,B as N,i as d,m as z,a as me,c as ge,s as he}from"./assets/handle-menu-buttons-ebbd8bc3.js";import{i as Q}from"./assets/vendor-0a7943b3.js";const xe="Muscles",X="filters",_="exercises",ve=e=>{let t=8;const s=window.innerWidth;if(s>=1440)t=12;else if(s>=768)switch(e){case X:t=12;break;case _:t=6;break;default:t=8;break}return t},Z=(e,t={},s=1,r="")=>{let i={};return t&&(i={...t}),e===_&&r&&(i={...i,keyword:r}),i={...i,page:s,limit:ve(X)},`${e}?${new URLSearchParams(i).toString()}`};async function ye(e,t){const s=new F(N),r=Z("filters",e,t);try{return await s.objectGetRequest(r)}catch{}}function Se(e=[]){return e.reduce((t,{imgUrl:s,name:r,filter:i})=>t+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${i}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${i}</p>            
          </div>
      </li>
      `,"")}const be=document.querySelector(".return-to-the-top-btn"),Le=document.querySelector(".return-to-the-top-small-btn"),Ce=document.querySelector(".return-to-the-top-big-btn");function Ee(){window.innerWidth<=1440?Le.classList.remove("visually-hidden"):Ce.classList.remove("visually-hidden")}Ee();be.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const E=(e,t,s)=>{t.textContent="",console.log("111"),t.classList.add("visually-hidden");let r="";e.length?r=s(e):r=s(),t.insertAdjacentHTML("beforeend",r),t.classList.remove("visually-hidden")},we=(e,t)=>E(t,e,Se),ke="/dynamics/assets/bi-x-octagon-73f29380.svg",Te="/dynamics/assets/bi_check-45de7d45.svg";function P(e){Q.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ke}`,iconColor:"#fafafb"})}function qe(e){Q.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Te}`,iconColor:"#fafafb"})}async function ee(e={},t=1,s=""){const r=new F(N),i=Z(_,e,t,s);try{return await r.objectGetRequest(i)}catch{}}function te(e=[]){return e.reduce((t,{_id:s,bodyPart:r,equipment:i,time:n,target:p,burnedCalories:$,gifUrl:W,name:j,filter:Y,popularity:V,rating:A})=>t+`
       <li class="exercise-card data-id="${s}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              <div class="rating-container">
                <p class="ex-card-rating">${A}</p>
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
            <h3 class="ex-card-name exercise-param">${j}</h3>
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
                  <span class="ex-card-text-part">${p}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const $e=(e,t)=>E(t,e,te);var o,y,g,l,q,se,S,D;class Ae{constructor({galleryHandle:t,filter:s,dotsSelector:r,dotDefaultClass:i,dotActiveClass:n}){c(this,q);c(this,S);f(this,"currentPage",1);f(this,"totalPages",0);c(this,o,void 0);c(this,y,10);c(this,g,"pagination-dot");c(this,l,"active-paggination-dot");f(this,"galleryHandle");f(this,"filter",{filter:""});f(this,"keyWord","");this.galleryHandle=t,this.filter=s,b(this,l,n),b(this,g,i),b(this,o,document.querySelector(r)),a(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(t,s,r=0){this.galleryHandle=t,this.totalPages=r>a(this,y)?a(this,y):r,this.filter=s,L(this,q,se).call(this)}reset(t,s,r=1,i="",n=0){this.galleryHandle=t,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=i,L(this,S,D).call(this)}destroy(){a(this,o).removeEventListener("click",this.onDotsClick.bind(this)),L(this,S,D).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(t){console.log(t.message)}}onDotsClick(t){const s=t.target;if(!s.classList.contains(a(this,g)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const t=a(this,o).querySelectorAll("li");t.forEach(s=>{s.classList.remove(a(this,l))}),t[this.currentPage-1].classList.add(a(this,l))}}o=new WeakMap,y=new WeakMap,g=new WeakMap,l=new WeakMap,q=new WeakSet,se=function(){a(this,o).innerHTML="";let t="";for(let s=0;s<this.totalPages;s+=1)t+=`
       <li class="${a(this,g)}" data-ind="${s+1}">${s+1}</li>
      `;a(this,o).innerHTML=t,a(this,o).children[this.currentPage-1].classList.add(a(this,l))},S=new WeakSet,D=function(){a(this,o).innerHTML=""};const re=e=>{e.innerHTML="",e.classList.add("visually-hidden")};function Re(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const O="filter-button-active";let m={};const C=document.querySelector(".exercise-filter-title"),ie=document.querySelector(".filters-buttons"),H=document.querySelector(".exercise-filters-list"),w=document.querySelector(".exercises-gallery"),U=document.querySelector(".form-for-searching-input"),Ie=document.querySelector(".searching-input");ie.addEventListener("click",Be);H.addEventListener("click",Pe);U.addEventListener("submit",Ne);const u=new Ae({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Be(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault();const t=e.target.dataset.filter;U.classList.add("visually-hidden"),u.reset(x,t,1,0),He(),x({filter:t}),Oe(e.target)}function x(e={filter:xe}){ye(e,u.currentPage).then(t=>{const s=t.results;re(w),we(H,s),u.init(x,e,t.totalPages)}).catch(t=>{console.log(t.message)})}function Pe(e){e.preventDefault(),e.target;const t=e.target.closest("li");if(!t)return;const s={},r=t.querySelector(".filter-name"),i=t.querySelector(".filter-type");if(U.classList.remove("visually-hidden"),i&&i){const n=r.textContent.toLowerCase(),p=i.textContent.toLowerCase();if(p==="")return;s[p]=n}Ue(r.textContent),u.reset(M,s,1,0),M(s)}function M(e){ee(e,u.currentPage).then(t=>{re(H),$e(w,t.results),u.init(M,e,t.totalPages)}).catch(t=>{console.log(t.message),P(`Error fetching images: ${t.message}`)})}function De(){m=ie.querySelector("BUTTON"),m&&m.classList.add(O)}function Oe(e){m&&m.classList.remove(O),e&&e.classList.add(O),m=e}function Me(){const e=document.querySelector(".filter-button-active"),t=document.querySelector(".chapter-text"),s={};return s[e.dataset.filter.toLowerCase()]=t.textContent.toLowerCase(),s}function Fe(){return Ie.value.trim().toLowerCase()}function Ne(e){e.preventDefault();const t=Fe(),s=Me();_e(s,t)}function _e(e,t){ee(e,u.currentPage,t).then(s=>{s.results.length===0?E([],w,Re):E(s.results,w,te)}).catch(s=>{console.log(s.message)})}function He(){C.textContent.indexOf("/")!==-1&&(C.textContent=C.textContent.split("/")[0])}function Ue(e){const t=` / 
  <span class="chapter-text">${e}</span>`;C.insertAdjacentHTML("beforeend",t)}De();x();const Ge="Escape",We="modal-backdrop",je=".exercise-close-btn",Ye=".exercises-gallery",Ve="ex-card-start-btn",ae="is-open",Je=".exercise-favorite-btn",Ke=".exercise-raiting-btn",ne="Remove from",oe="Add to favorites",ze=".modal-rating";function Qe(e={}){const{_id:t,bodyPart:s,equipment:r,time:i,target:n,burnedCalories:p,gifUrl:$,name:W,filter:j,popularity:Y,rating:V,description:A}=e;return`
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
                src="${$}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${W}</p>
                <p class="modal-rating">${V}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${Y}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${p}/${i} m</p>
              </div>
              <p class="exercise-description">${A}</p>
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

      `}const Xe=(e,t)=>{const s=Qe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function Ze(e){const t=new F(N);try{return await t.objectGetRequest(`exercises/${e}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function k(e,t){const s=t.childNodes[0];s.nodeValue=e}function et(e,t){const r=(JSON.parse(localStorage.getItem("favorites"))||[]).some(i=>i._id===e);k(r?ne:oe,t)}const tt="favorites";function st(e){return{_id:e,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function rt(e,t){const s=st(e),r=JSON.parse(localStorage.getItem("favorites"))||[],i=r.findIndex(n=>n.name===s.name);i!==-1?(r.splice(i,1),k(oe,t)):(r.push(s),k(ne,t)),localStorage.setItem(tt,JSON.stringify(r))}const it=(e,t)=>e<t?"#EEA10C":"#7E847F",at=e=>{const t=parseInt(e.textContent);let s="";for(let r=0;r<5;r++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${it(r,t)}"
      >
        <use href="${d}#icon-star"></use>
      </svg>`;e.insertAdjacentHTML("beforeend",s)};let I,h,B,T,v=document.querySelector("."+We);v&&v.addEventListener("click",ct);const J=document.querySelector(Ye);J&&J.addEventListener("click",nt);async function nt(e){e.preventDefault();const t=e.target;if(t.classList.contains(Ve)){T=t.dataset.id;try{const s=await Ze(T);s&&(Xe(s,v),ot())}catch(s){console.log(s.message)}}}function G(e){window.removeEventListener("keydown",ce),v.classList.remove(ae)}function ot(){v.classList.add(ae),window.addEventListener("keydown",ce),I=document.querySelector(je),I&&I.addEventListener("click",G),h=document.querySelector(Je),h&&h.addEventListener("click",K),et(T,h);const e=document.querySelector(ze);at(e),B=document.querySelector(Ke),B&&B.addEventListener("click",K)}function ce(e){e.code===Ge&&G()}function ct(e){e.currentTarget===e.target&&G()}function K(e){rt(T,h)}const le=document.querySelector(".footer-subscription"),lt=le.querySelector(".input-footer");le.addEventListener("submit",dt);function dt(e){e.preventDefault();const t=lt.value.trim(),s={method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&qe("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&P("Subscription already exists")}).catch(r=>{console.log(r),P("Sorry! Something is wrong")})}const de=document.querySelectorAll(".button-home"),ue=document.querySelectorAll(".button-favorites");z(de,ue);ue.forEach(e=>{e.addEventListener("click",t=>{z([e],de)})});me();const ut={iconURL:d,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},pt=document.querySelector(".social-list");ge(pt,ut,he);
//# sourceMappingURL=commonHelpers2.js.map
