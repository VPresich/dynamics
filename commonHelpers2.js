var fe=Object.defineProperty;var ge=(t,e,s)=>e in t?fe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>(ge(t,typeof e!="symbol"?e+"":e,s),s),M=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var o=(t,e,s)=>(M(t,e,"read from private field"),s?s.call(t):e.get(t)),c=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},v=(t,e,s,r)=>(M(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var u=(t,e,s)=>(M(t,e,"access private method"),s);import"./assets/styles-c3ebc9ef.js";import{i as te}from"./assets/vendor-0a7943b3.js";const P="https://energyflow.b.goit.study/api/";var T,d,b;class A{constructor(e){c(this,d);c(this,T,"");v(this,T,e)}async objectGetRequest(e){return u(this,d,b).call(this,e)}async objectCreateRequest(e,s){return u(this,d,b).call(this,e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(e,s){return u(this,d,b).call(this,`${e}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(e,s){return u(this,d,b).call(this,`${e}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}}T=new WeakMap,d=new WeakSet,b=async function(e,s={}){try{const r=await fetch(o(this,T)+e,s);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};const me=document.querySelector(".js-quote"),z="quote",X="date",he=new A(P);ye();async function ye(){try{const{quote:t,author:e}=await xe();be({quote:t,author:e})}catch(t){console.error("Error fetching or displaying quote:",t)}}async function xe(){const t=localStorage.getItem(X),e=localStorage.getItem(z),r=new Date().toISOString().split("T")[0];if(t===r&&e){const n=JSON.parse(e);if(n.quote&&n.author)return n}const a=await ve();return localStorage.setItem(X,r),localStorage.setItem(z,JSON.stringify(a)),a}async function ve(){const{quote:t,author:e}=await he.objectGetRequest("quote");return{quote:t,author:e}}function be({quote:t,author:e}){me.innerHTML=`
    <p class="quote-text">${t}</p>
    <h3 class="quote-author">${e}</h3>
  `}const Se="Muscles",se="filters",G="exercises",Le=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case se:e=12;break;case G:e=6;break;default:e=8;break}return e},re=(t,e={},s=1,r="")=>{let a={};return e&&(a={...e}),t===G&&r&&(a={...a,keyword:r}),a={...a,page:s,limit:Le(se)},`${t}?${new URLSearchParams(a).toString()}`};async function we(t,e){const s=new A(P),r=re("filters",t,e);try{return await s.objectGetRequest(r)}catch{}}function Ce(t=[]){return t.reduce((e,{imgUrl:s,name:r,filter:a})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${r}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}const Te=document.querySelector(".return-to-the-top-btn"),Ee=document.querySelector(".return-to-the-top-small-btn"),ke=document.querySelector(".return-to-the-top-big-btn");function qe(){window.innerWidth<=1440?Ee.classList.remove("visually-hidden"):ke.classList.remove("visually-hidden")}qe();Te.addEventListener("click",t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})});const W=(t,e,s)=>{e.innerHTML="",t.length||console.log("Sorry, there are no data matching your search query. Please, try again!");const r=s(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",r),e.classList.remove("visually-hidden")},$e=(t,e)=>W(e,t,Ce),De="/dynamics/assets/bi-x-octagon-73f29380.svg",Re="/dynamics/assets/bi_check-45de7d45.svg";function N(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${De}`,iconColor:"#fafafb"})}function Ie(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Re}`,iconColor:"#fafafb"})}async function ae(t={},e=1,s=""){const r=new A(P),a=re(G,t,e,s);try{return await r.objectGetRequest(a)}catch{}}const m="/dynamics/assets/symbols-99c7e837.svg";function Oe(t=[]){return t.reduce((e,{_id:s,bodyPart:r,equipment:a,time:n,target:l,burnedCalories:x,gifUrl:q,name:$,filter:D,popularity:V,rating:B})=>e+`
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
      `,"")}const ne=(t,e)=>W(e,t,Oe);var i,E,y,p,O,oe,k,_;class Pe{constructor({galleryHandle:e,filter:s,dotsSelector:r,dotDefaultClass:a,dotActiveClass:n}){c(this,O);c(this,k);g(this,"currentPage",1);g(this,"totalPages",0);c(this,i,void 0);c(this,E,10);c(this,y,"pagination-dot");c(this,p,"active-paggination-dot");g(this,"galleryHandle");g(this,"filter",{filter:""});g(this,"keyWord","");this.galleryHandle=e,this.filter=s,v(this,p,n),v(this,y,a),v(this,i,document.querySelector(r)),o(this,i).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,r=0){this.galleryHandle=e,this.totalPages=r>o(this,E)?o(this,E):r,this.filter=s,u(this,O,oe).call(this)}reset(e,s,r=1,a="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=r,this.filter=s,this.keyWord=a,u(this,k,_).call(this)}destroy(){o(this,i).removeEventListener("click",this.onDotsClick.bind(this)),u(this,k,_).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(o(this,y)))return;const r=parseInt(s.dataset.ind,10);this.currentPage=r,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=o(this,i).querySelectorAll("li");e.forEach(s=>{s.classList.remove(o(this,p))}),e[this.currentPage-1].classList.add(o(this,p))}}i=new WeakMap,E=new WeakMap,y=new WeakMap,p=new WeakMap,O=new WeakSet,oe=function(){o(this,i).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${o(this,y)}" data-ind="${s+1}">${s+1}</li>
      `;o(this,i).innerHTML=e,o(this,i).children[this.currentPage-1].classList.add(o(this,p))},k=new WeakSet,_=function(){o(this,i).innerHTML=""};const Y=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Ae(t){return`
  <li class="error-message">
            <p class="ex-no-elements">
              Unfortunately, no <span class="grey-text">results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
            </p>
          </li> 
  `}const U="filter-button-active";let h={};const R=document.querySelector(".exercise-filter-title"),ie=document.querySelector(".filters-buttons"),Q=document.querySelector(".exercise-filters-list"),L=document.querySelector(".exercises-gallery"),J=document.querySelector(".form-for-searching-input"),Be=document.querySelector(".searching-input");ie.addEventListener("click",Me);Q.addEventListener("click",Fe);J.addEventListener("submit",je);const f=new Pe({galleryHandle:w,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Me(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;J.classList.add("visually-hidden"),f.reset(w,e,1,0),We(),w({filter:e}),Ne(t.target)}function w(t={filter:Se}){we(t,f.currentPage).then(e=>{const s=e.results;Y(L),$e(Q,s),f.init(w,t,e.totalPages)}).catch(e=>{console.log(e.message)})}function Fe(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},r=e.querySelector(".filter-name"),a=e.querySelector(".filter-type");if(J.classList.remove("visually-hidden"),a&&a){const n=r.textContent.toLowerCase(),l=a.textContent.toLowerCase();if(l==="")return;s[l]=n}Ye(r.textContent),f.reset(j,s,1,0),j(s)}function j(t){ae(t,f.currentPage).then(e=>{Y(Q),ne(L,e.results),f.init(j,t,e.totalPages)}).catch(e=>{console.log(e.message),N(`Error fetching images: ${e.message}`)})}function He(){h=ie.querySelector("BUTTON"),h&&h.classList.add(U)}function Ne(t){h&&h.classList.remove(U),t&&t.classList.add(U),h=t}function _e(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ue(){return Be.value.trim().toLowerCase()}function je(t){t.preventDefault();const e=Ue(),s=_e();Ge(s,e)}function Ge(t,e){ae(t,f.currentPage,e).then(s=>{if(!s.results){console.log(s.results),W([],L,Ae);return}return s}).then(s=>{Y(L),ne(L,s.results)}).catch(s=>{console.log(s.message)})}function We(){R.textContent.indexOf("/")!==-1&&(R.textContent=R.textContent.split("/")[0])}function Ye(t){const e=` / 
  <span class="chapter-text">${t}</span>`;R.insertAdjacentHTML("beforeend",e)}He();w();const Qe="Escape",Je="modal-backdrop",Ke=".exercise-close-btn",Ve=".exercises-gallery",ze="ex-card-start-btn",ce="is-open",Xe=".exercise-favorite-btn",Ze=".exercise-raiting-btn",le="Remove from",ue="Add to favorites";function et(t={}){const{_id:e,bodyPart:s,equipment:r,time:a,target:n,burnedCalories:l,gifUrl:x,name:q,filter:$,popularity:D,rating:V,description:B}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${m}#con-close"></use>
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
                    <p class="exercise-param-value exercise-param-popularuty">${D}</p>
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

      `}const tt=(t,e)=>{const s=et(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function st(t){const e=new A(P);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function rt(t,e){(JSON.parse(localStorage.getItem("favorites"))||[]).some(a=>a._id===t)?e.textContent=le:e.textContent=ue}const at="favorites";function nt(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function ot(t,e){const s=nt(t),r=JSON.parse(localStorage.getItem("favorites"))||[],a=r.findIndex(n=>n.name===s.name);a!==-1?(r.splice(a,1),e.textContent=ue):(r.push(s),e.textContent=le),localStorage.setItem(at,JSON.stringify(r))}let F,S,H,I,C=document.querySelector("."+Je);C&&C.addEventListener("click",lt);const Z=document.querySelector(Ve);Z&&Z.addEventListener("click",it);async function it(t){t.preventDefault();const e=t.target;if(e.classList.contains(ze)){I=e.dataset.id;try{const s=await st(I);s&&(tt(s,C),ct())}catch(s){console.log(s.message)}}}function K(t){window.removeEventListener("keydown",de),C.classList.remove(ce)}function ct(){C.classList.add(ce),F=document.querySelector(Ke),F&&F.addEventListener("click",K),S=document.querySelector(Xe),S&&S.addEventListener("click",ee),rt(I,S),H=document.querySelector(Ze),H&&H.addEventListener("click",ee),window.addEventListener("keydown",de)}function de(t){t.code===Qe&&K()}function lt(t){t.currentTarget===t.target&&K()}function ee(t){ot(I,S)}const pe=document.querySelector(".footer-subscription"),ut=pe.querySelector(".input-footer");pe.addEventListener("submit",dt);function dt(t){t.preventDefault();const e=ut.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(r=>{r.status>=200&&r.status<300&&Ie("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),r.status===409&&N("Subscription already exists")}).catch(r=>{console.log(r),N("Sorry! Something is wrong")})}const pt=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function ft(t,e=[]){const{iconURL:s,iconContainerClass:r,iconLinkClass:a,iconClass:n}=t;return e.reduce((l,{url:x,id:q,label:$,hrefTag:D})=>l+`
        <li class="${r}">
            <a class="${a}" target="_blank" rel="noopener" href="${x}">
            <svg class="${n}" aria-label="${$}" id=${q}>
                <use href="${s}#${D}"></use>
            </svg>
            </a>
        </li>
      `,"")}function gt(t,e,s=[]){const r=ft(e,s);t.innerHTML="",t.insertAdjacentHTML("beforeend",r)}const mt={iconURL:m,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},ht=document.querySelector(".social-list");gt(ht,mt,pt);
//# sourceMappingURL=commonHelpers2.js.map
