var me=Object.defineProperty;var ge=(t,e,s)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>(ge(t,typeof e!="symbol"?e+"":e,s),s),I=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(I(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},C=(t,e,s,r)=>(I(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var L=(t,e,s)=>(I(t,e,"access private method"),s);import{D as _,B as F,i as d,m as z,a as he,c as xe,s as ve}from"./assets/handle-menu-buttons-ebbd8bc3.js";import{i as Q}from"./assets/vendor-0a7943b3.js";const ye="Muscles",X="filters",U="exercises",Se=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case X:e=12;break;case U:e=6;break;default:e=8;break}return e},Z=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===U&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:Se(X)},`${t}?${new URLSearchParams(a).toString()}`};async function Ce(t,e){const s=new _(F),r=Z("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function Le(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}function P(t,e){return`<div class="rating-container">
                <p class="ex-card-rating">${t}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${e}#icon-star"></use>
                </svg>
              </div>`}const E=(t,e,s)=>{e.textContent="",e.classList.add("visually-hidden");let r="";t.length,r=s(t,P),r=s(t,P),e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},be=(t,e)=>E(e,t,Le),Ee="/dynamics/assets/bi-x-octagon-73f29380.svg",we="/dynamics/assets/bi_check-45de7d45.svg";function B(t){Q.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ee}`,iconColor:"#fafafb"})}function ke(t){Q.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${we}`,iconColor:"#fafafb"})}async function ee(t={},e=1,s=""){const r=new _(F),a=Z(U,t,e,s);try{return await r.objectGetRequest(a)}catch{}}function te(t=[],e){return t.reduce((s,{_id:r,bodyPart:a,equipment:n,time:g,target:q,burnedCalories:A,gifUrl:pe,name:R,filter:Y,popularity:V,rating:fe})=>s+`
       <li class="exercise-card data-id="${r}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${e(fe,d)}
            </div>
            <button type="submit" class="ex-card-start-btn" data-id="${r}">
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
            <h3 class="ex-card-name exercise-param">${R}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${A}</span>
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
                  <span class="ex-card-text-part">${q}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const Te=(t,e)=>E(e,t,te);var o,y,m,l,$,se,S,M;class $e{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){c(this,$);c(this,S);p(this,"currentPage",1);p(this,"totalPages",0);c(this,o,void 0);c(this,y,10);c(this,m,"pagination-dot");c(this,l,"active-paggination-dot");p(this,"galleryHandle");p(this,"filter",{filter:""});p(this,"keyWord","");this.galleryHandle=e,this.filter=s,C(this,l,n),C(this,m,a),C(this,o,document.querySelector(r)),i(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>i(this,y)?i(this,y):r,this.filter=s,L(this,$,se).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,L(this,S,M).call(this)}destroy(){i(this,o).removeEventListener("click",this.onDotsClick.bind(this)),L(this,S,M).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,m)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,l))}),e[this.currentPage-1].classList.add(i(this,l))}}o=new WeakMap,y=new WeakMap,m=new WeakMap,l=new WeakMap,$=new WeakSet,se=function(){i(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,m)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,o).innerHTML=e,i(this,o).children[this.currentPage-1].classList.add(i(this,l))},S=new WeakSet,M=function(){i(this,o).innerHTML=""};const re=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function qe(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const H="filter-button-active";let f={};const b=document.querySelector(".exercise-filter-title"),ae=document.querySelector(".filters-buttons"),G=document.querySelector(".exercise-filters-list"),w=document.querySelector(".exercises-gallery"),j=document.querySelector(".form-for-searching-input"),Ae=document.querySelector(".searching-input");ae.addEventListener("click",Re);G.addEventListener("click",Ie);j.addEventListener("submit",Me);const u=new $e({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Re(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;j.classList.add("visually-hidden"),u.reset(x,e,1,0),Ne(),x({filter:e}),De(t.target)}function x(t={filter:ye}){Ce(t,u.currentPage).then(e=>{const s=e.results;re(w),be(G,s),u.init(x,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function Ie(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(j.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),g=a.textContent.toLowerCase();if(g==="")return;s[g]=n}_e(r.textContent),u.reset(N,s,1,0),N(s)}function N(t){ee(t,u.currentPage).then(e=>{re(G),Te(w,e.results),u.init(N,t,e.totalPages)}).catch(e=>{console.log(e.message),B(`Error fetching images: ${e.message}`)})}function Pe(){f=ae.querySelector("BUTTON"),f&&f.classList.add(H)}function De(t){f&&f.classList.remove(H),t&&t.classList.add(H),f=t}function Oe(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Be(){return Ae.value.trim().toLowerCase()}function Me(t){t.preventDefault();const e=Be(),s=Oe();He(s,e)}function He(t,e){ee(t,u.currentPage,e).then(s=>{s.results.length===0?E([],w,qe):E(s.results,w,te)}).catch(s=>{console.log(s.message)})}function Ne(){b.textContent.indexOf("/")!==-1&&(b.textContent=b.textContent.split("/")[0])}function _e(t){const e=` / 
  <span class="chapter-text">${t}</span>`;b.insertAdjacentHTML("beforeend",e)}Pe();x();const Fe="Escape",Ue="modal-backdrop",Ge=".exercise-close-btn",je=".exercises-gallery",We="ex-card-start-btn",ie="is-open",Ye=".exercise-favorite-btn",Ve=".exercise-raiting-btn",ne="Remove from",oe="Add to favorites",Je=".modal-rating";function Ke(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:g,gifUrl:q,name:A,filter:pe,popularity:R,rating:Y,description:V}=t;return`
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
                <p class="exercise-name">${A}</p>
                <p class="modal-rating">${Y}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${R}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${g}/${a} m</p>
              </div>
              <p class="exercise-description">${V}</p>
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
                  <use href="${d}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const ze=(t,e)=>{const s=Ke(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Qe(t){const e=new _(F);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function k(t,e){const s=e.childNodes[0];s.nodeValue=t}function Xe(t,e){const r=(JSON.parse(localStorage.getItem("favorites"))||[]).some(a=>a._id===t);k(r?ne:oe,e)}const Ze="favorites";function et(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function tt(t,e){const s=et(t),r=JSON.parse(localStorage.getItem("favorites"))||[],a=r.findIndex(n=>n.name===s.name);a!==-1?(r.splice(a,1),k(oe,e)):(r.push(s),k(ne,e)),localStorage.setItem(Ze,JSON.stringify(r))}const st=(t,e)=>t<e?"#EEA10C":"#7E847F",rt=t=>{const e=parseInt(t.textContent);let s="";for(let r=0;r<5;r++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${st(r,e)}"
      >
        <use href="${d}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)};let D,h,O,T,v=document.querySelector("."+Ue);v&&v.addEventListener("click",nt);const J=document.querySelector(je);J&&J.addEventListener("click",at);async function at(t){t.preventDefault();const e=t.target;if(e.classList.contains(We)){T=e.dataset.id;try{const s=await Qe(T);s&&(ze(s,v),it())}catch(s){console.log(s.message)}}}function W(t){window.removeEventListener("keydown",ce),v.classList.remove(ie)}function it(){v.classList.add(ie),window.addEventListener("keydown",ce),D=document.querySelector(Ge),D&&D.addEventListener("click",W),h=document.querySelector(Ye),h&&h.addEventListener("click",K),Xe(T,h);const t=document.querySelector(Je);rt(t),O=document.querySelector(Ve),O&&O.addEventListener("click",K)}function ce(t){t.code===Fe&&W()}function nt(t){t.currentTarget===t.target&&W()}function K(t){tt(T,h)}const le=document.querySelector(".footer-subscription"),ot=le.querySelector(".input-footer");le.addEventListener("submit",ct);function ct(t){t.preventDefault();const e=ot.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&ke("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&B("Subscription already exists")}).catch(r=>{console.log(r),B("Sorry! Something is wrong")})}const de=document.querySelectorAll(".button-home"),ue=document.querySelectorAll(".button-favorites");z(de,ue);ue.forEach(t=>{t.addEventListener("click",e=>{z([t],de)})});he();const lt={iconURL:d,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},dt=document.querySelector(".social-list");xe(dt,lt,ve);
//# sourceMappingURL=commonHelpers2.js.map
