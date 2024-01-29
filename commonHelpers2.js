var ge=Object.defineProperty;var me=(t,e,s)=>e in t?ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var p=(t,e,s)=>(me(t,typeof e!="symbol"?e+"":e,s),s),I=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var i=(t,e,s)=>(I(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},L=(t,e,s,a)=>(I(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var b=(t,e,s)=>(I(t,e,"access private method"),s);import{D as _,B as F,i as u,m as z,a as he,c as xe,s as ve}from"./assets/handle-menu-buttons-94826a1d.js";import{i as Q}from"./assets/vendor-0a7943b3.js";const ye="Muscles",X="filters",U="exercises",Se=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case X:e=12;break;case U:e=6;break;default:e=8;break}return e},Z=(t,e={},s=1,a="")=>{let r={};return e&&(r={...e}),t===U&&a&&(r={...r,keyword:a}),r={...r,page:s,limit:Se(X)},`${t}?${new URLSearchParams(r).toString()}`};async function Ce(t,e){const s=new _(F),a=Z("filters",t,e);try{return await s.objectGetRequest(a)}catch{}}function Le(t=[]){return t.reduce((e,{imgUrl:s,name:a,filter:r})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${r}"/>
          <div class="filter-label">
          <p class="filter-name">${a}</p>
          <p class="filter-type">${r}</p>            
          </div>
      </li>
      `,"")}function D(t,e){return`<div class="rating-container">
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
              </div>`}const w=(t,e,s)=>{e.textContent="",e.classList.add("visually-hidden");let a="";t.length,a=s(t,D),a=s(t,D),e.innerHTML="",e.insertAdjacentHTML("beforeend",a),e.classList.remove("visually-hidden")},be=(t,e)=>w(e,t,Le),Ee="/dynamics/assets/bi-x-octagon-73f29380.svg",we="/dynamics/assets/bi_check-45de7d45.svg";function M(t){Q.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ee}`,iconColor:"#fafafb"})}function ke(t){Q.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${we}`,iconColor:"#fafafb"})}async function ee(t={},e=1,s=""){const a=new _(F),r=Z(U,t,e,s);try{return await a.objectGetRequest(r)}catch{}}function te(t=[],e){return t.reduce((s,{_id:a,bodyPart:r,equipment:n,time:m,target:q,burnedCalories:A,gifUrl:pe,name:R,filter:Y,popularity:V,rating:fe})=>s+`
       <li class="exercise-card data-id="${a}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${e(fe,u)}
            </div>
            <button type="submit" class="ex-card-start-btn" data-id="${a}">
              Start
              <span class="arrow-icon-span">
                <svg
                  class="arrow-icon"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="${u}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${u}#icon-running-man"></use>
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
                  <span class="ex-card-text-part">${r}</span>
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
      `,"")}const Te=(t,e)=>w(e,t,te);var o,S,g,d,P,se,C,H;class $e{constructor({galleryHandle:e,filter:s,dotsSelector:a,dotDefaultClass:r,dotActiveClass:n}){l(this,P);l(this,C);p(this,"currentPage",1);p(this,"totalPages",0);l(this,o,void 0);l(this,S,10);l(this,g,"pagination-dot");l(this,d,"active-paggination-dot");p(this,"galleryHandle");p(this,"filter",{filter:""});p(this,"keyWord","");this.galleryHandle=e,this.filter=s,L(this,d,n),L(this,g,r),L(this,o,document.querySelector(a)),i(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,a=0){this.galleryHandle=e,this.totalPages=a>i(this,S)?i(this,S):a,this.filter=s,b(this,P,se).call(this)}reset(e,s,a=1,r="",n=0){this.galleryHandle=e,this.totalPages=n,this.currentPage=a,this.filter=s,this.keyWord=r,b(this,C,H).call(this)}destroy(){i(this,o).removeEventListener("click",this.onDotsClick.bind(this)),b(this,C,H).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(i(this,g)))return;const a=parseInt(s.dataset.ind,10);this.currentPage=a,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=i(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(i(this,d))}),e[this.currentPage-1].classList.add(i(this,d))}}o=new WeakMap,S=new WeakMap,g=new WeakMap,d=new WeakMap,P=new WeakSet,se=function(){i(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${i(this,g)}" data-ind="${s+1}">${s+1}</li>
      `;i(this,o).innerHTML=e,i(this,o).children[this.currentPage-1].classList.add(i(this,d))},C=new WeakSet,H=function(){i(this,o).innerHTML=""};const ae=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Pe(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const N="filter-button-active";let f={};const E=document.querySelector(".exercise-filter-title"),re=document.querySelector(".filters-buttons"),G=document.querySelector(".exercise-filters-list"),k=document.querySelector(".exercises-gallery"),j=document.querySelector(".form-for-searching-input"),qe=document.querySelector(".searching-input");re.addEventListener("click",Ae);G.addEventListener("click",Re);j.addEventListener("submit",Me);const c=new $e({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Ae(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;j.classList.add("visually-hidden"),c.reset(x,e,1,0),Ne(),x({filter:e}),De(t.target)}function x(t={filter:ye}){Ce(t,c.currentPage).then(e=>{const s=e.results;ae(k),be(G,s);const a=e.totalPages?e.totalPages:0;c.init(x,t,a)}).catch(e=>{console.log(e.message)})}function Re(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},a=e.querySelector(".filter-name"),r=e.querySelector(".filter-type");if(j.classList.remove("visually-hidden"),r&&r){const n=a.textContent.toLowerCase(),m=r.textContent.toLowerCase();if(m==="")return;s[m]=n}_e(a.textContent),c.reset(v,s,1,0),v(s)}function v(t){ee(t,c.currentPage).then(e=>{ae(G),Te(k,e.results);const s=e.totalPages?e.totalPages:0;c.init(v,t,s)}).catch(e=>{console.log(e.message),M(`Error fetching images: ${e.message}`)})}function Ie(){f=re.querySelector("BUTTON"),f&&f.classList.add(N)}function De(t){f&&f.classList.remove(N),t&&t.classList.add(N),f=t}function Oe(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Be(){return qe.value.trim().toLowerCase()}function Me(t){t.preventDefault();const e=Be(),s=Oe();c.reset(v,s,1,e,0),He(s,e)}function He(t,e){ee(t,c.currentPage,e).then(s=>{s.results.length===0?w([],k,Pe):w(s.results,k,te);const a=s.totalPages?s.totalPages:0;c.init(v,t,a)}).catch(s=>{console.log(s.message)})}function Ne(){E.textContent.indexOf("/")!==-1&&(E.textContent=E.textContent.split("/")[0])}function _e(t){const e=` / 
  <span class="chapter-text">${t}</span>`;E.insertAdjacentHTML("beforeend",e)}Ie();x();const Fe="Escape",Ue="modal-backdrop",Ge=".exercise-close-btn",je=".exercises-gallery",We="ex-card-start-btn",ie="is-open",Ye=".exercise-favorite-btn",Ve=".exercise-raiting-btn",ne="Remove from",oe="Add to favorites",Je=".modal-rating";function Ke(t={}){const{_id:e,bodyPart:s,equipment:a,time:r,target:n,burnedCalories:m,gifUrl:q,name:A,filter:pe,popularity:R,rating:Y,description:V}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${u}#con-close"></use>
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
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${R}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${m}/${r} m</p>
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
                  <use href="${u}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const ze=(t,e)=>{const s=Ke(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function Qe(t){const e=new _(F);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function T(t,e){const s=e.childNodes[0];s.nodeValue=t}function Xe(t,e){const a=(JSON.parse(localStorage.getItem("favorites"))||[]).some(r=>r._id===t);T(a?ne:oe,e)}const Ze="favorites";function et(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function tt(t,e){const s=et(t),a=JSON.parse(localStorage.getItem("favorites"))||[],r=a.findIndex(n=>n.name===s.name);r!==-1?(a.splice(r,1),T(oe,e)):(a.push(s),T(ne,e)),localStorage.setItem(Ze,JSON.stringify(a))}const st=(t,e)=>t<e?"#EEA10C":"#7E847F",at=t=>{const e=parseInt(t.textContent);let s="";for(let a=0;a<5;a++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${st(a,e)}"
      >
        <use href="${u}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)};let O,h,B,$,y=document.querySelector("."+Ue);y&&y.addEventListener("click",nt);const J=document.querySelector(je);J&&J.addEventListener("click",rt);async function rt(t){t.preventDefault();const e=t.target;if(e.classList.contains(We)){$=e.dataset.id;try{const s=await Qe($);s&&(ze(s,y),it())}catch(s){console.log(s.message)}}}function W(t){window.removeEventListener("keydown",ce),y.classList.remove(ie)}function it(){y.classList.add(ie),window.addEventListener("keydown",ce),O=document.querySelector(Ge),O&&O.addEventListener("click",W),h=document.querySelector(Ye),h&&h.addEventListener("click",K),Xe($,h);const t=document.querySelector(Je);at(t),B=document.querySelector(Ve),B&&B.addEventListener("click",K)}function ce(t){t.code===Fe&&W()}function nt(t){t.currentTarget===t.target&&W()}function K(t){tt($,h)}const le=document.querySelector(".footer-subscription"),ot=le.querySelector(".input-footer");le.addEventListener("submit",ct);function ct(t){t.preventDefault();const e=ot.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(a=>{a.status>=200&&a.status<300&&ke("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),a.status===409&&M("Subscription already exists")}).catch(a=>{console.log(a),M("Sorry! Something is wrong")})}const de=document.querySelectorAll(".button-home"),ue=document.querySelectorAll(".button-favorites");z(de,ue);ue.forEach(t=>{t.addEventListener("click",e=>{z([t],de)})});he();const lt={iconURL:u,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},dt=document.querySelector(".social-list");xe(dt,lt,ve);
//# sourceMappingURL=commonHelpers2.js.map
