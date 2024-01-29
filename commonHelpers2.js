var ge=Object.defineProperty;var he=(t,e,s)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var h=(t,e,s)=>(he(t,typeof e!="symbol"?e+"":e,s),s),H=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var o=(t,e,s)=>(H(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},v=(t,e,s,r)=>(H(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(H(t,e,"access private method"),s);import"./assets/styles-c3ebc9ef.js";import{i as se}from"./assets/vendor-0a7943b3.js";const P="https://energyflow.b.goit.study/api/";var T,d,b;class M{constructor(e){c(this,d);c(this,T,"");v(this,T,e)}async objectGetRequest(e){return u(this,d,b).call(this,e)}async objectCreateRequest(e,s){return u(this,d,b).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return u(this,d,b).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return u(this,d,b).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}T=new WeakMap,d=new WeakSet,b=async function(e,s={}){try{const r=await fetch(o(this,T)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const me=document.querySelector(".js-quote"),X="quote",Z="date",ye=new M(P);xe();async function xe(){try{const{quote:t,author:e}=await ve();Se({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function ve(){const t=localStorage.getItem(Z),e=localStorage.getItem(X),r=new Date().toISOString().split("T")[0];if(t===r&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const a=await be();return localStorage.setItem(Z,r),localStorage.setItem(X,JSON.stringify(a)),a}async function be(){const{quote:t,author:e}=await ye.objectGetRequest("quote");return{quote:t,author:e}}function Se({quote:t,author:e}){me.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const Le="Muscles",re="filters",W="exercises",we=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case re:e=12;break;case W:e=6;break;default:e=8;break}return e},ae=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===W&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:we(re)},`${t}?${new URLSearchParams(a).toString()}`};async function Ce(t,e){const s=new M(P),r=ae("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function Te(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const Ee=document.querySelector(".return-to-the-top-btn"),ke=document.querySelector(".return-to-the-top-small-btn"),qe=document.querySelector(".return-to-the-top-big-btn");function $e(){window.innerWidth<=1440?ke.classList.remove("visually-hidden"):qe.classList.remove("visually-hidden")}$e();Ee.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const Y=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},Re=(t,e)=>Y(e,t,Te),De="/dynamics/assets/bi-x-octagon-73f29380.svg",Ie="/dynamics/assets/bi_check-45de7d45.svg";function _(t){se.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${De}`,iconColor:"#fafafb"})}function Oe(t){se.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ie}`,iconColor:"#fafafb"})}async function ne(t={},e=1,s=""){const r=new M(P),a=ae(W,t,e,s);try{return await r.objectGetRequest(a)}catch{}}const f="/dynamics/assets/symbols-99c7e837.svg";function Ae(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:a,time:n,target:l,burnedCalories:x,gifUrl:q,name:$,filter:R,popularity:z,rating:B})=>e+`
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
                  <use href="${f}#icon-star"></use>
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
                  <use href="${f}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${f}#icon-running-man"></use>
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
      `,"")}const oe=(t,e)=>Y(e,t,Ae);var i,E,y,p,A,ie,k,U;class Pe{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){c(this,A);c(this,k);h(this,"currentPage",1);h(this,"totalPages",0);c(this,i,void 0);c(this,E,10);c(this,y,"pagination-dot");c(this,p,"active-paggination-dot");h(this,"galleryHandle");h(this,"filter",{filter:""});h(this,"keyWord","");this.galleryHandle=e,this.filter=s,v(this,p,n),v(this,y,a),v(this,i,document.querySelector(r)),o(this,i).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>o(this,E)?o(this,E):r,this.filter=s,u(this,A,ie).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,u(this,k,U).call(this)}destroy(){o(this,i).removeEventListener("click",this.onDotsClick.bind(this)),u(this,k,U).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(o(this,y)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=o(this,i).querySelectorAll("li");e.forEach(s=>{s.classList.remove(o(this,p))}),e[this.currentPage-1].classList.add(o(this,p))}}i=new WeakMap,E=new WeakMap,y=new WeakMap,p=new WeakMap,A=new WeakSet,ie=function(){o(this,i).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${o(this,y)}" data-ind="${s+1}">${s+1}</li>
      `;o(this,i).innerHTML=e,o(this,i).children[this.currentPage-1].classList.add(o(this,p))},k=new WeakSet,U=function(){o(this,i).innerHTML=""};const Q=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Me(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const j="filter-button-active";let m={};const D=document.querySelector(".exercise-filter-title"),ce=document.querySelector(".filters-buttons"),J=document.querySelector(".exercise-filters-list"),L=document.querySelector(".exercises-gallery"),K=document.querySelector(".form-for-searching-input"),Be=document.querySelector(".searching-input");ce.addEventListener("click",He);J.addEventListener("click",Ne);K.addEventListener("submit",Ge);const g=new Pe({galleryHandle:w,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function He(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;K.classList.add("visually-hidden"),g.reset(w,e,1,0),Ye(),w({filter:e}),_e(t.target)}function w(t={filter:Le}){Ce(t,g.currentPage).then(e=>{const s=e.results;Q(L),Re(J,s),g.init(w,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function Ne(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(K.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),l=a.textContent.toLowerCase();if(l==="")return;s[l]=n}Qe(r.textContent),g.reset(G,s,1,0),G(s)}function G(t){ne(t,g.currentPage).then(e=>{Q(J),oe(L,e.results),g.init(G,t,e.totalPages)}).catch(e=>{console.log(e.message),_(`Error fetching images: ${e.message}`)})}function Fe(){m=ce.querySelector("BUTTON"),m&&m.classList.add(j)}function _e(t){m&&m.classList.remove(j),t&&t.classList.add(j),m=t}function Ue(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function je(){return Be.value.trim().toLowerCase()}function Ge(t){t.preventDefault();const e=je(),s=Ue();We(s,e)}function We(t,e){ne(t,g.currentPage,e).then(s=>{if(!s.results){console.log(s.results),Y([],L,Me);return}return s}).then(s=>{Q(L),oe(L,s.results)}).catch(s=>{console.log(s.message)})}function Ye(){D.textContent.indexOf("/")!==-1&&(D.textContent=D.textContent.split("/")[0])}function Qe(t){const e=` / 
  <span class="chapter-text">${t}</span>`;D.insertAdjacentHTML("beforeend",e)}Fe();w();const Je="Escape",Ke="modal-backdrop",Ve=".exercise-close-btn",ze=".exercises-gallery",Xe="ex-card-start-btn",le="is-open",Ze=".exercise-favorite-btn",et=".exercise-raiting-btn",ue="Remove from",de="Add to favorites",tt=".modal-rating";function st(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:l,gifUrl:x,name:q,filter:$,popularity:R,rating:z,description:B}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${f}#con-close"></use>
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
                <p class="exercise-name">${q}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${R}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${l}/${a} m</p>
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
                  <use href="${f}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const rt=(t,e)=>{const s=st(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function at(t){const e=new M(P);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function I(t,e){const s=e.childNodes[0];s.nodeValue=t}function nt(t,e){const r=(JSON.parse(localStorage.getItem("favorites"))||[]).some(a=>a._id===t);I(r?ue:de,e)}const ot="favorites";function it(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function ct(t,e){const s=it(t),r=JSON.parse(localStorage.getItem("favorites"))||[],a=r.findIndex(n=>n.name===s.name);a!==-1?(r.splice(a,1),I(de,e)):(r.push(s),I(ue,e)),localStorage.setItem(ot,JSON.stringify(r))}const lt=(t,e)=>t<e?"#EEA10C":"#7E847F",ut=t=>{const e=parseInt(t.textContent);let s="";for(let r=0;r<5;r++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${lt(r,e)}"
      >
        <use href="${f}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)};let N,S,F,O,C=document.querySelector("."+Ke);C&&C.addEventListener("click",ft);const ee=document.querySelector(ze);ee&&ee.addEventListener("click",dt);async function dt(t){t.preventDefault();const e=t.target;if(e.classList.contains(Xe)){O=e.dataset.id;try{const s=await at(O);s&&(rt(s,C),pt())}catch(s){console.log(s.message)}}}function V(t){window.removeEventListener("keydown",pe),C.classList.remove(le)}function pt(){C.classList.add(le),window.addEventListener("keydown",pe),N=document.querySelector(Ve),N&&N.addEventListener("click",V),S=document.querySelector(Ze),S&&S.addEventListener("click",te),nt(O,S);const t=document.querySelector(tt);ut(t),F=document.querySelector(et),F&&F.addEventListener("click",te)}function pe(t){t.code===Je&&V()}function ft(t){t.currentTarget===t.target&&V()}function te(t){ct(O,S)}const fe=document.querySelector(".footer-subscription"),gt=fe.querySelector(".input-footer");fe.addEventListener("submit",ht);function ht(t){t.preventDefault();const e=gt.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&Oe("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&_("Subscription already exists")}).catch(r=>{console.log(r),_("Sorry! Something is wrong")})}const mt=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function yt(t,e=[]){const{iconURL:s,iconContainerClass:r,iconLinkClass:a,iconClass:n}=t;return e.reduce((l,{url:x,id:q,label:$,hrefTag:R})=>l+`
        <li class="${r}">
            <a class="${a}" target="_blank" rel="noopener" href="${x}">
            <svg class="${n}" aria-label="${$}" id=${q}>
                <use href="${s}#${R}"></use>
            </svg>
            </a>
        </li>
      `,"")}function xt(t,e,s=[]){const r=yt(e,s);t.innerHTML="",t.insertAdjacentHTML("beforeend",r)}const vt={iconURL:f,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},bt=document.querySelector(".social-list");xt(bt,vt,mt);
//# sourceMappingURL=commonHelpers2.js.map
