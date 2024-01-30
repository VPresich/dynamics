var Le=Object.defineProperty;var Te=(t,e,s)=>e in t?Le(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var m=(t,e,s)=>(Te(t,typeof e!="symbol"?e+"":e,s),s),D=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(D(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},R=(t,e,s,n)=>(D(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s);var A=(t,e,s)=>(D(t,e,"access private method"),s);import{D as M,B as _,e as Z,i as c,m as ee,a as Re,c as Ae,s as we}from"./assets/handle-menu-buttons-ce4740b3.js";import{i as te}from"./assets/vendor-32231325.js";const ke="Muscles",se="filters",z="exercises",$e=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case se:e=12;break;case z:e=6;break;default:e=8;break}return e},ne=(t,e={},s=1,n="")=>{let r={};return e&&(r={...e}),t===z&&n&&(r={...r,keyword:n}),r={...r,page:s,limit:$e(se)},`${t}?${new URLSearchParams(r).toString()}`};async function Ie(t,e){const s=new M(_),n=ne("filters",t,e);try{return await s.objectGetRequest(n)}catch{}}function Pe(t=[]){return t.reduce((e,{imgUrl:s,name:n,filter:r})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${r}"/>
          <div class="filter-label">
          <p class="filter-name">${n}</p>
          <p class="filter-type">${r}</p>            
          </div>
      </li>
      `,"")}function B(t,e){return`<div class="rating-container">
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
              </div>`}const I=(t,e,s)=>{e.textContent="",e.classList.add("visually-hidden");let n="";t.length,n=s(t,B),n=s(t,B),e.innerHTML="",e.insertAdjacentHTML("beforeend",n),e.classList.remove("visually-hidden")},qe=(t,e)=>I(e,t,Pe),Oe="/dynamics/assets/bi-x-octagon-73f29380.svg",Me="/dynamics/assets/bi_check-45de7d45.svg";function d(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Oe}`,iconColor:"#fafafb"})}function V(t){te.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Me}`,iconColor:"#fafafb"})}async function re(t={},e=1,s=""){const n=new M(_),r=ne(z,t,e,s);try{return await n.objectGetRequest(r)}catch{}}const _e=(t,e)=>I(e,t,Z);var o,C,v,f,O,ae,L,U;class Ne{constructor({galleryHandle:e,filter:s,dotsSelector:n,dotDefaultClass:r,dotActiveClass:i}){u(this,O);u(this,L);m(this,"currentPage",1);m(this,"totalPages",0);u(this,o,void 0);u(this,C,10);u(this,v,"pagination-dot");u(this,f,"active-paggination-dot");m(this,"galleryHandle");m(this,"filter",{filter:""});m(this,"keyWord","");this.galleryHandle=e,this.filter=s,R(this,f,i),R(this,v,r),R(this,o,document.querySelector(n)),a(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,n=0){this.galleryHandle=e,this.totalPages=n>a(this,C)?a(this,C):n,this.filter=s,A(this,O,ae).call(this)}reset(e,s,n=1,r="",i=0){this.galleryHandle=e,this.totalPages=i,this.currentPage=n,this.filter=s,this.keyWord=r,A(this,L,U).call(this)}destroy(){a(this,o).removeEventListener("click",this.onDotsClick.bind(this)),A(this,L,U).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(a(this,v)))return;const n=parseInt(s.dataset.ind,10);this.currentPage=n,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=a(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(a(this,f))}),e[this.currentPage-1].classList.add(a(this,f))}}o=new WeakMap,C=new WeakMap,v=new WeakMap,f=new WeakMap,O=new WeakSet,ae=function(){a(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${a(this,v)}" data-ind="${s+1}">${s+1}</li>
      `;a(this,o).innerHTML=e,a(this,o).children[this.currentPage-1].classList.add(a(this,f))},L=new WeakSet,U=function(){a(this,o).innerHTML=""};const ie=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function De(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const j="filter-button-active";let p={};const w=document.querySelector(".exercise-filter-title"),oe=document.querySelector(".filters-buttons"),J=document.querySelector(".exercise-filters-list"),P=document.querySelector(".exercises-gallery"),K=document.querySelector(".form-for-searching-input"),Be=document.querySelector(".searching-input");oe.addEventListener("click",Fe);J.addEventListener("click",He);K.addEventListener("submit",We);const l=new Ne({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Fe(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;K.classList.add("visually-hidden"),l.reset(x,e,1,0),Ve(),x({filter:e}),Ue(t.target)}function x(t={filter:ke}){Ie(t,l.currentPage).then(e=>{const s=e.results;ie(P),qe(J,s);const n=e.totalPages?e.totalPages:0;l.init(x,t,n)}).catch(e=>{console.log(e.message)})}function He(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},n=e.querySelector(".filter-name"),r=e.querySelector(".filter-type");if(K.classList.remove("visually-hidden"),r&&r){const i=n.textContent.toLowerCase(),T=r.textContent.toLowerCase();if(T==="")return;s[T]=i}Je(n.textContent),l.reset(E,s,1,0),E(s)}function E(t){re(t,l.currentPage).then(e=>{ie(J),_e(P,e.results);const s=e.totalPages?e.totalPages:0;l.init(E,t,s)}).catch(e=>{console.log(e.message),d(`Error fetching images: ${e.message}`)})}function Ge(){p=oe.querySelector("BUTTON"),p&&p.classList.add(j)}function Ue(t){p&&p.classList.remove(j),t&&t.classList.add(j),p=t}function je(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function Ye(){return Be.value.trim().toLowerCase()}function We(t){t.preventDefault();const e=Ye();if(e===""){V("Please fill in the search field");return}const s=je();l.reset(E,s,1,e,0),ze(s,e)}function ze(t,e){re(t,l.currentPage,e).then(s=>{s.results.length===0?I([],P,De):I(s.results,P,Z);const n=s.totalPages?s.totalPages:0;l.init(E,t,n)}).catch(s=>{console.log(s.message)})}function Ve(){w.textContent.indexOf("/")!==-1&&(w.textContent=w.textContent.split("/")[0])}function Je(t){const e=` / 
  <span class="chapter-text">${t}</span>`;w.insertAdjacentHTML("beforeend",e)}Ge();x();const Ke="Escape",ce="modal-backdrop",Qe=".exercise-close-btn",le=".exercises-gallery",Xe="gallery-start",ue="is-open",Ze=".exercise-favorite-btn",et=".exercise-raiting-btn",de="Remove from",fe="Add to favorites",tt=".modal-rating";function st(t={}){const{_id:e,bodyPart:s,equipment:n,time:r,target:i,burnedCalories:T,gifUrl:ye,name:xe,filter:Bt,popularity:Ee,rating:Se,description:Ce}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${c}#icon-x"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${ye}"
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
                <p class="exercise-calories-value">${T}/${r} m</p>
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
                  <use href="${c}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const nt=(t,e)=>{const s=st(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function rt(t){const e=new M(_);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function q(t,e){const s=e.childNodes[0];s.nodeValue=t}function at(t,e){const n=(JSON.parse(localStorage.getItem("favorites"))||[]).some(r=>r._id===t);q(n?de:fe,e)}const it="favorites";function ot(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function ct(t,e){const s=ot(t),n=JSON.parse(localStorage.getItem("favorites"))||[],r=n.findIndex(i=>i.name===s.name);r!==-1?(n.splice(r,1),q(fe,e)):(n.push(s),q(de,e)),localStorage.setItem(it,JSON.stringify(n))}const lt=(t,e)=>t<e?"#EEA10C":"#7E847F",ut=t=>{const e=parseInt(t.textContent);let s="";for(let n=0;n<5;n++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${lt(n,e)}"
      >
        <use href="${c}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)},dt="exercises",ft=".rating-form-send-btn",gt=".stars-container",mt=".star-btn.rating-form-btn",pt=".rating-form-email-input",ht=".rating-form-comment";function vt(t={}){return`
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
    >
      <use href="${c}"></use>
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
      `}const bt=(t,e)=>{const s=vt(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};function yt(t={}){const{exerciseRating:e}=t;return`
  
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
      <use href="${c}#icon-star" fill="${e>=1&&"#EEA10C"}"></use>
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
      <use href="${c}#icon-star"  fill="${e>=2&&"#EEA10C"}"></use>
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
      <use href="${c}#icon-star"  fill="${e>=3&&"#EEA10C"}"></use>
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
      <use href="${c}#icon-star" fill="${e>=4&&"#EEA10C"}"></use>
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
      <use href="${c}#icon-star" fill="${e>=5&&"#EEA10C"}"></use>
    </svg>
  </button>
      `}const ge=(t,e)=>{const s=yt(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function xt(t){const e=new M(_);try{return await e.objectPatchRequest(dt,t)}catch(s){throw s}}let Y,F,k,$,W,g=0,y,Et=document.querySelector("."+ce);const Q=document.querySelector(le);function St(t,e){t.preventDefault(),e&&(W=e,bt({exerciseRating:g},Et),Y=document.querySelector(gt),ge({exerciseRating:g},Y),Ct())}function Ct(){F=document.querySelector(ft),F&&F.addEventListener("click",At),k=document.querySelector(pt),k&&k.addEventListener("input",Tt),$=document.querySelector(ht),$&&$.addEventListener("input",Rt),me()}function Lt(t){g=t.getAttribute("data-starnumber"),ge({exerciseRating:g},Y),me()}function me(){const t=document.querySelectorAll(mt);t&&t.forEach(function(e){e.addEventListener("click",()=>{Lt(e)})})}function Tt(t){k.textContent=t.target.value,y=t.target.value}function Rt(t){$.textContent=t.target.value,t.target.value}function At(t){if(t.preventDefault(),!g){d("Please select a rating");return}if(!y){d("Please enter a email");return}if(!wt(y)){d("please enter a valid email address");return}let e={id:W,rate:Number(g),email:y};xt(e).then(s=>{V("Success"),kt(),N(),console.log(s),Q&&Q.querySelectorAll(`button,[data-id="${W}"]`)[0].click()}).catch(s=>(console.log(s),d("err")))}const wt=t=>String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);function kt(){g=0,y=""}let H,b,G,h,S=document.querySelector("."+ce);S&&S.addEventListener("click",Pt);const X=document.querySelector(le);X&&X.addEventListener("click",$t);async function $t(t){t.preventDefault();const e=t.target;if(e.classList.contains(Xe)){if(h=e.dataset.id,e.nodeName!=="BUTTON"){let s=e.closest("button");console.log(s.dataset.id),h=s.dataset.id}try{const s=await rt(h);s&&(nt(s,S),It())}catch(s){console.log(s.message)}}}function N(t){window.removeEventListener("keydown",pe),S.classList.remove(ue)}function It(){S.classList.add(ue),window.addEventListener("keydown",pe),H=document.querySelector(Qe),H&&H.addEventListener("click",N),b=document.querySelector(Ze),b&&b.addEventListener("click",qt),at(h,b);const t=document.querySelector(tt);ut(t),G=document.querySelector(et),G&&G.addEventListener("click",Ot)}function pe(t){t.code===Ke&&N()}function Pt(t){t.currentTarget===t.target&&N()}function qt(t){ct(h,b)}function Ot(t){St(t,h)}const he=document.querySelector(".footer-subscription"),Mt=he.querySelector(".input-footer");he.addEventListener("submit",_t);function _t(t){t.preventDefault();const e=Mt.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(n=>{n.status>=200&&n.status<300&&V("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),n.status===409&&d("Subscription already exists")}).catch(n=>{console.log(n),d("Sorry! Something is wrong")})}const ve=document.querySelectorAll(".button-home"),be=document.querySelectorAll(".button-favorites");ee(ve,be);be.forEach(t=>{t.addEventListener("click",e=>{ee([t],ve)})});Re();const Nt={iconURL:c,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Dt=document.querySelector(".social-list");Ae(Dt,Nt,we);
//# sourceMappingURL=commonHelpers2.js.map
