var Le=Object.defineProperty;var Te=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>(Te(t,typeof e!="symbol"?e+"":e,s),s),N=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(N(t,e,"read from private field"),s?s.call(t):e.get(t)),l=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},T=(t,e,s,n)=>(N(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var R=(t,e,s)=>(N(t,e,"access private method"),s);import{D as M,B as _,e as Z,i as y,m as ee,a as Re,c as Ae,s as we}from"./assets/handle-menu-buttons-ce4740b3.js";import{i as te}from"./assets/vendor-32231325.js";const ke="Muscles",se="filters",W="exercises",Ie=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case se:e=12;break;case W:e=6;break;default:e=8;break}return e},ne=(t,e={},s=1,n="")=>{let r={};return e&&(r={...e}),t===W&&n&&(r={...r,keyword:n}),r={...r,page:s,limit:Ie(se)},`${t}?${new URLSearchParams(r).toString()}`};async function Pe(t,e){const s=new M(_),n=ne("filters",t,e);try{return await s.objectGetRequest(n)}catch{}}function qe(t=[]){return t.reduce((e,{imgUrl:s,name:n,filter:r})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${r}"/>
          <div class="filter-label">
          <p class="filter-name">${n}</p>
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
              </div>`}const P=(t,e,s)=>{e.textContent="",e.classList.add("visually-hidden");let n="";t.length,n=s(t,D),n=s(t,D),e.innerHTML="",e.insertAdjacentHTML("beforeend",n),e.classList.remove("visually-hidden")},$e=(t,e)=>P(e,t,qe),Oe="/dynamics/assets/bi-x-octagon-73f29380.svg",Me="/dynamics/assets/bi_check-45de7d45.svg";function u(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Oe}`,iconColor:"#fafafb"})}function z(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Me}`,iconColor:"#fafafb"})}async function re(t={},e=1,s=""){const n=new M(_),r=ne(W,t,e,s);try{return await n.objectGetRequest(r)}catch{}}const _e=(t,e)=>P(e,t,Z);var o,S,p,d,O,ae,C,G;class Ne{constructor({galleryHandle:e,filter:s,dotsSelector:n,dotDefaultClass:r,dotActiveClass:i}){l(this,O);l(this,C);f(this,"currentPage",1);f(this,"totalPages",0);l(this,o,void 0);l(this,S,10);l(this,p,"pagination-dot");l(this,d,"active-paggination-dot");f(this,"galleryHandle");f(this,"filter",{filter:""});f(this,"keyWord","");this.galleryHandle=e,this.filter=s,T(this,d,i),T(this,p,r),T(this,o,document.querySelector(n)),a(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,n=0){this.galleryHandle=e,this.totalPages=n>a(this,S)?a(this,S):n,this.filter=s,R(this,O,ae).call(this)}reset(e,s,n=1,r="",i=0){this.galleryHandle=e,this.totalPages=i,this.currentPage=n,this.filter=s,this.keyWord=r,R(this,C,G).call(this)}destroy(){a(this,o).removeEventListener("click",this.onDotsClick.bind(this)),R(this,C,G).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(a(this,p)))return;const n=parseInt(s.dataset.ind,10);this.currentPage=n,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=a(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(a(this,d))}),e[this.currentPage-1].classList.add(a(this,d))}}o=new WeakMap,S=new WeakMap,p=new WeakMap,d=new WeakMap,O=new WeakSet,ae=function(){a(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${a(this,p)}" data-ind="${s+1}">${s+1}</li>
      `;a(this,o).innerHTML=e,a(this,o).children[this.currentPage-1].classList.add(a(this,d))},C=new WeakSet,G=function(){a(this,o).innerHTML=""};const ie=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function De(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const U="filter-button-active";let g={};const A=document.querySelector(".exercise-filter-title"),oe=document.querySelector(".filters-buttons"),V=document.querySelector(".exercise-filters-list"),q=document.querySelector(".exercises-gallery"),J=document.querySelector(".form-for-searching-input"),Be=document.querySelector(".searching-input");oe.addEventListener("click",Fe);V.addEventListener("click",He);J.addEventListener("submit",We);const c=new Ne({galleryHandle:b,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Fe(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;J.classList.add("visually-hidden"),c.reset(b,e,1,0),Ve(),b({filter:e}),Ue(t.target)}function b(t={filter:ke}){Pe(t,c.currentPage).then(e=>{const s=e.results;ie(q),$e(V,s);const n=e.totalPages?e.totalPages:0;c.init(b,t,n)}).catch(e=>{console.log(e.message)})}function He(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},n=e.querySelector(".filter-name"),r=e.querySelector(".filter-type");if(J.classList.remove("visually-hidden"),r&&r){const i=n.textContent.toLowerCase(),L=r.textContent.toLowerCase();if(L==="")return;s[L]=i}Je(n.textContent),c.reset(x,s,1,0),x(s)}function x(t){re(t,c.currentPage).then(e=>{ie(V),_e(q,e.results);const s=e.totalPages?e.totalPages:0;c.init(x,t,s)}).catch(e=>{console.log(e.message),u(`Error fetching images: ${e.message}`)})}function Ge(){g=oe.querySelector("BUTTON"),g&&g.classList.add(U)}function Ue(t){g&&g.classList.remove(U),t&&t.classList.add(U),g=t}function je(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ye(){return Be.value.trim().toLowerCase()}function We(t){t.preventDefault();const e=Ye();if(e===""){z("Please fill in the search field");return}const s=je();c.reset(x,s,1,e,0),ze(s,e)}function ze(t,e){re(t,c.currentPage,e).then(s=>{s.results.length===0?P([],q,De):P(s.results,q,Z);const n=s.totalPages?s.totalPages:0;c.init(x,t,n)}).catch(s=>{console.log(s.message)})}function Ve(){A.textContent.indexOf("/")!==-1&&(A.textContent=A.textContent.split("/")[0])}function Je(t){const e=` / 
  <span class="chapter-text">${t}</span>`;A.insertAdjacentHTML("beforeend",e)}Ge();b();const Ke="Escape",ce="modal-backdrop",Qe=".exercise-close-btn",le=".exercises-gallery",Xe="gallery-start",ue="is-open",Ze=".exercise-favorite-btn",et=".exercise-raiting-btn",de="Remove from",fe="Add to favorites",tt=".modal-rating";function st(t={}){const{_id:e,bodyPart:s,equipment:n,time:r,target:i,burnedCalories:L,gifUrl:be,name:xe,filter:Dt,popularity:Ee,rating:Se,description:Ce}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${y}#icon-x"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${be}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${xe}</p>
                <p class="modal-rating">${Se}</p>
              </div>
              <div class="exercise-params-container">
                <ul class="exercise-params">
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Target</p>
                    <p class="exercise-param-value exercise-param-target">${i}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Body part</p>
                    <p class="exercise-param-value exercise-param-bodypart">${s}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Equipment</p>
                    <p class="exercise-param-value exercise-param-equipment">${n}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${Ee}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${L}/${r} m</p>
              </div>
              <p class="exercise-description">${Ce}</p>
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
                  <use href="${y}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const nt=(t,e)=>{const s=st(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function rt(t){const e=new M(_);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function $(t,e){const s=e.childNodes[0];s.nodeValue=t}function at(t,e){const n=(JSON.parse(localStorage.getItem("favorites"))||[]).some(r=>r._id===t);$(n?de:fe,e)}const it="favorites";function ot(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function ct(t,e){const s=ot(t),n=JSON.parse(localStorage.getItem("favorites"))||[],r=n.findIndex(i=>i.name===s.name);r!==-1?(n.splice(r,1),$(fe,e)):(n.push(s),$(de,e)),localStorage.setItem(it,JSON.stringify(n))}const lt=(t,e)=>t<e?"#EEA10C":"#7E847F",ut=t=>{const e=parseInt(t.textContent);let s="";for(let n=0;n<5;n++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${lt(n,e)}"
      >
        <use href="${y}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)},dt="exercises",ft=".rating-form-send-btn",gt=".stars-container",mt=".star-btn.rating-form-btn",pt=".rating-form-email-input",ht=".rating-form-comment";function vt(t={}){return`
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
    >
      <use href="${y}"></use>
    </svg>
  </button>
  <div class="rating-stars-container">
    <p class="rating-label">Rating</p>
    <div class="stars-container">
     
    </div>
  </div>
  <form class="give-rating-form">
    <input
      type="email"
      class="rating-form-email-input"
      name="email-input"
      placeholder="Email"
    />
    <textarea
      name="comment"
      id="comment-textarea"
      class="rating-form-comment"
      placeholder="Your comment"
    ></textarea>
    <button class="rating-form-send-btn">Send</button>
  </form>
</div>
      `}const yt=(t,e)=>{const s=vt(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};function bt(t={}){const{exerciseRating:e}=t;return`
  
  <p class="rating-number">${e}.0</p>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="1"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="../img/icons/symbols.svg#icon-star" fill="${e>=1&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="2"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="../img/icons/symbols.svg#icon-star" fill="${e>=2&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="3"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="../img/icons/symbols.svg#icon-star" fill="${e>=3&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="4"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="../img/icons/symbols.svg#icon-star" fill="${e>=4&&"#EEA10C"}"></use>
    </svg>
  </button>
  <button
    type="button"
    class="star-btn rating-form-btn"
    data-starnumber="5"
  >
    <svg
      class="star-btn-icon"
      width="24"
      height="24"
      aria-label="star icon"
    >
      <use href="../img/icons/symbols.svg#icon-star" fill="${e>=5&&"#EEA10C"}"></use>
    </svg>
  </button>
      `}const ge=(t,e)=>{const s=bt(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function xt(t){const e=new M(_);try{return await e.objectPatchRequest(dt,t)}catch(s){throw s}}let j,B,w,k,Y,h=0,I,Et=document.querySelector("."+ce);const Q=document.querySelector(le);function St(t,e){t.preventDefault(),e&&(Y=e,yt({exerciseRating:h},Et),j=document.querySelector(gt),ge({exerciseRating:h},j),Ct())}function Ct(){B=document.querySelector(ft),B&&B.addEventListener("click",At),w=document.querySelector(pt),w&&w.addEventListener("input",Tt),k=document.querySelector(ht),k&&k.addEventListener("input",Rt),me()}function Lt(t){h=t.getAttribute("data-starnumber"),ge({exerciseRating:h},j),me()}function me(){const t=document.querySelectorAll(mt);t&&t.forEach(function(e){e.addEventListener("click",()=>{Lt(e)})})}function Tt(t){w.textContent=t.target.value,I=t.target.value}function Rt(t){k.textContent=t.target.value,t.target.value}function At(t){if(t.preventDefault(),!h){u("Please select a rating");return}if(!I){u("Please enter a email");return}if(!wt(I)){u("please enter a valid email address");return}let e={id:Y,rate:Number(h),email:I};xt(e).then(s=>{console.log(s),z("Success")}).catch(s=>{console.log(s),u("err")}),Q&&Q.querySelectorAll(`[data-id="${Y}"]`)[0].click()}const wt=t=>String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);let F,v,H,m,E=document.querySelector("."+ce);E&&E.addEventListener("click",Pt);const X=document.querySelector(le);X&&X.addEventListener("click",kt);async function kt(t){t.preventDefault();const e=t.target;if(e.classList.contains(Xe)){if(m=e.dataset.id,e.nodeName!=="BUTTON"){let s=e.closest("button");console.log(s.dataset.id),m=s.dataset.id}try{const s=await rt(m);s&&(nt(s,E),It())}catch(s){console.log(s.message)}}}function K(t){window.removeEventListener("keydown",pe),E.classList.remove(ue)}function It(){E.classList.add(ue),window.addEventListener("keydown",pe),F=document.querySelector(Qe),F&&F.addEventListener("click",K),v=document.querySelector(Ze),v&&v.addEventListener("click",qt),at(m,v);const t=document.querySelector(tt);ut(t),H=document.querySelector(et),H&&H.addEventListener("click",$t)}function pe(t){t.code===Ke&&K()}function Pt(t){t.currentTarget===t.target&&K()}function qt(t){ct(m,v)}function $t(t){St(t,m)}const he=document.querySelector(".footer-subscription"),Ot=he.querySelector(".input-footer");he.addEventListener("submit",Mt);function Mt(t){t.preventDefault();const e=Ot.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(n=>{n.status>=200&&n.status<300&&z("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),n.status===409&&u("Subscription already exists")}).catch(n=>{console.log(n),u("Sorry! Something is wrong")})}const ve=document.querySelectorAll(".button-home"),ye=document.querySelectorAll(".button-favorites");ee(ve,ye);ye.forEach(t=>{t.addEventListener("click",e=>{ee([t],ve)})});Re();const _t={iconURL:y,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Nt=document.querySelector(".social-list");Ae(Nt,_t,we);
//# sourceMappingURL=commonHelpers2.js.map
