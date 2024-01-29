var Re=Object.defineProperty;var we=(t,e,s)=>e in t?Re(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var f=(t,e,s)=>(we(t,typeof e!="symbol"?e+"":e,s),s),F=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var r=(t,e,s)=>(F(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},T=(t,e,s,a)=>(F(t,e,"write to private field"),a?a.call(t,s):e.set(t,s),s);var R=(t,e,s)=>(F(t,e,"access private method"),s);import{D as M,B as _,i as l,m as ne,a as ke,c as Ae,s as $e}from"./assets/handle-menu-buttons-7897746b.js";import{i as re}from"./assets/vendor-0a7943b3.js";const qe="Muscles",ie="filters",J="exercises",Ie=t=>{let e=8;const s=window.innerWidth;if(s>=1440)e=12;else if(s>=768)switch(t){case ie:e=12;break;case J:e=6;break;default:e=8;break}return e},oe=(t,e={},s=1,a="")=>{let n={};return e&&(n={...e}),t===J&&a&&(n={...n,keyword:a}),n={...n,page:s,limit:Ie(ie)},`${t}?${new URLSearchParams(n).toString()}`};async function Pe(t,e){const s=new M(_),a=oe("filters",t,e);try{return await s.objectGetRequest(a)}catch{}}function Oe(t=[]){return t.reduce((e,{imgUrl:s,name:a,filter:n})=>e+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${n}"/>
          <div class="filter-label">
          <p class="filter-name">${a}</p>
          <p class="filter-type">${n}</p>            
          </div>
      </li>
      `,"")}function H(t,e){return`<div class="rating-container">
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
              </div>`}const q=(t,e,s)=>{e.textContent="",e.classList.add("visually-hidden");let a="";t.length,a=s(t,H),a=s(t,H),e.innerHTML="",e.insertAdjacentHTML("beforeend",a),e.classList.remove("visually-hidden")},Me=(t,e)=>q(e,t,Oe),_e="/dynamics/assets/bi-x-octagon-73f29380.svg",Ne="/dynamics/assets/bi_check-45de7d45.svg";function d(t){re.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${_e}`,iconColor:"#fafafb"})}function K(t){re.show({message:t,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ne}`,iconColor:"#fafafb"})}async function ce(t={},e=1,s=""){const a=new M(_),n=oe(J,t,e,s);try{return await a.objectGetRequest(n)}catch{}}function le(t=[],e){return t.reduce((s,{_id:a,bodyPart:n,equipment:i,time:y,target:N,burnedCalories:B,gifUrl:Le,name:D,filter:ee,popularity:te,rating:Te})=>s+`
       <li class="exercise-card" data-id="${a}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${e(Te,l)}
            </div>
            <button type="submit" class="ex-card-start-btn gallery-start" data-id="${a}">
              Start
              <span class="arrow-icon-span gallery-start">
                <svg
                  class="arrow-icon gallery-start"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="${l}#icon-arrow" class="gallery-start"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${l}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${D}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${B}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Body part:
                  <span class="ex-card-text-part">${n}</span>
                </p>
              </li>
              <li class="ex-card-details-item exercise-param">
                <p class="ex-card-details-text">
                  Target:
                  <span class="ex-card-text-part">${N}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const Be=(t,e)=>q(e,t,le);var o,C,h,g,O,ue,L,Y;class De{constructor({galleryHandle:e,filter:s,dotsSelector:a,dotDefaultClass:n,dotActiveClass:i}){u(this,O);u(this,L);f(this,"currentPage",1);f(this,"totalPages",0);u(this,o,void 0);u(this,C,10);u(this,h,"pagination-dot");u(this,g,"active-paggination-dot");f(this,"galleryHandle");f(this,"filter",{filter:""});f(this,"keyWord","");this.galleryHandle=e,this.filter=s,T(this,g,i),T(this,h,n),T(this,o,document.querySelector(a)),r(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(e,s,a=0){this.galleryHandle=e,this.totalPages=a>r(this,C)?r(this,C):a,this.filter=s,R(this,O,ue).call(this)}reset(e,s,a=1,n="",i=0){this.galleryHandle=e,this.totalPages=i,this.currentPage=a,this.filter=s,this.keyWord=n,R(this,L,Y).call(this)}destroy(){r(this,o).removeEventListener("click",this.onDotsClick.bind(this)),R(this,L,Y).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(e){console.log(e.message)}}onDotsClick(e){const s=e.target;if(!s.classList.contains(r(this,h)))return;const a=parseInt(s.dataset.ind,10);this.currentPage=a,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const e=r(this,o).querySelectorAll("li");e.forEach(s=>{s.classList.remove(r(this,g))}),e[this.currentPage-1].classList.add(r(this,g))}}o=new WeakMap,C=new WeakMap,h=new WeakMap,g=new WeakMap,O=new WeakSet,ue=function(){r(this,o).innerHTML="";let e="";for(let s=0;s<this.totalPages;s+=1)e+=`
       <li class="${r(this,h)}" data-ind="${s+1}">${s+1}</li>
      `;r(this,o).innerHTML=e,r(this,o).children[this.currentPage-1].classList.add(r(this,g))},L=new WeakSet,Y=function(){r(this,o).innerHTML=""};const de=t=>{t.innerHTML="",t.classList.add("visually-hidden")};function Fe(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const W="filter-button-active";let m={};const w=document.querySelector(".exercise-filter-title"),ge=document.querySelector(".filters-buttons"),Q=document.querySelector(".exercise-filters-list"),I=document.querySelector(".exercises-gallery"),X=document.querySelector(".form-for-searching-input"),He=document.querySelector(".searching-input");ge.addEventListener("click",Ue);Q.addEventListener("click",Ge);X.addEventListener("submit",Ve);const c=new De({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Ue(t){if(t.target.tagName!=="BUTTON")return;t.preventDefault();const e=t.target.dataset.filter;X.classList.add("visually-hidden"),c.reset(x,e,1,0),Ke(),x({filter:e}),Ye(t.target)}function x(t={filter:qe}){Pe(t,c.currentPage).then(e=>{const s=e.results;de(I),Me(Q,s);const a=e.totalPages?e.totalPages:0;c.init(x,t,a)}).catch(e=>{console.log(e.message)})}function Ge(t){t.preventDefault(),t.target;const e=t.target.closest("li");if(!e)return;const s={},a=e.querySelector(".filter-name"),n=e.querySelector(".filter-type");if(X.classList.remove("visually-hidden"),n&&n){const i=a.textContent.toLowerCase(),y=n.textContent.toLowerCase();if(y==="")return;s[y]=i}Qe(a.textContent),c.reset(E,s,1,0),E(s)}function E(t){ce(t,c.currentPage).then(e=>{de(Q),Be(I,e.results);const s=e.totalPages?e.totalPages:0;c.init(E,t,s)}).catch(e=>{console.log(e.message),d(`Error fetching images: ${e.message}`)})}function je(){m=ge.querySelector("BUTTON"),m&&m.classList.add(W)}function Ye(t){m&&m.classList.remove(W),t&&t.classList.add(W),m=t}function We(){const t=document.querySelector(".filter-button-active"),e=document.querySelector(".chapter-text"),s={};return s[t.dataset.filter.toLowerCase()]=e.textContent.toLowerCase(),s}function ze(){return He.value.trim().toLowerCase()}function Ve(t){t.preventDefault();const e=ze();if(e===""){K("Please fill in the search field");return}const s=We();c.reset(E,s,1,e,0),Je(s,e)}function Je(t,e){ce(t,c.currentPage,e).then(s=>{s.results.length===0?q([],I,Fe):q(s.results,I,le);const a=s.totalPages?s.totalPages:0;c.init(E,t,a)}).catch(s=>{console.log(s.message)})}function Ke(){w.textContent.indexOf("/")!==-1&&(w.textContent=w.textContent.split("/")[0])}function Qe(t){const e=` / 
  <span class="chapter-text">${t}</span>`;w.insertAdjacentHTML("beforeend",e)}je();x();const Xe="Escape",fe="modal-backdrop",Ze=".exercise-close-btn",me=".exercises-gallery",et="gallery-start",pe="is-open",tt=".exercise-favorite-btn",st=".exercise-raiting-btn",he="Remove from",ve="Add to favorites",at=".modal-rating";function nt(t={}){const{_id:e,bodyPart:s,equipment:a,time:n,target:i,burnedCalories:y,gifUrl:N,name:B,filter:Le,popularity:D,rating:ee,description:te}=t;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${l}#icon-x"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${N}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${B}</p>
                <p class="modal-rating">${ee}</p>
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
                    <p class="exercise-param-value exercise-param-equipment">${a}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${D}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${y}/${n} m</p>
              </div>
              <p class="exercise-description">${te}</p>
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
                  <use href="${l}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${e}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const rt=(t,e)=>{const s=nt(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function it(t){const e=new M(_);try{return await e.objectGetRequest(`exercises/${t}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function P(t,e){const s=e.childNodes[0];s.nodeValue=t}function ot(t,e){const a=(JSON.parse(localStorage.getItem("favorites"))||[]).some(n=>n._id===t);P(a?he:ve,e)}const ct="favorites";function lt(t){return{_id:t,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function ut(t,e){const s=lt(t),a=JSON.parse(localStorage.getItem("favorites"))||[],n=a.findIndex(i=>i.name===s.name);n!==-1?(a.splice(n,1),P(ve,e)):(a.push(s),P(he,e)),localStorage.setItem(ct,JSON.stringify(a))}const dt=(t,e)=>t<e?"#EEA10C":"#7E847F",gt=t=>{const e=parseInt(t.textContent);let s="";for(let a=0;a<5;a++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${dt(a,e)}"
      >
        <use href="${l}#icon-star"></use>
      </svg>`;t.insertAdjacentHTML("beforeend",s)},ft="exercises",mt=".rating-form-send-btn",pt=".stars-container",ht=".star-btn.rating-form-btn",vt=".rating-form-email-input",yt=".rating-form-comment";function bt(t={}){return`
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
    >
      <use href="${l}"></use>
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
      `}const xt=(t,e)=>{const s=bt(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};function Et(t={}){const{exerciseRating:e}=t;return`
  
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
      `}const ye=(t,e)=>{const s=Et(t);e.innerHTML="",e.insertAdjacentHTML("beforeend",s)};async function St(t){const e=new M(_);try{return await e.objectPatchRequest(ft,t)}catch(s){throw s}}let z,U,k,A,V,v=0,$,Ct=document.querySelector("."+fe);const se=document.querySelector(me);function Lt(t,e){t.preventDefault(),e&&(V=e,xt({exerciseRating:v},Ct),z=document.querySelector(pt),ye({exerciseRating:v},z),Tt())}function Tt(){U=document.querySelector(mt),U&&U.addEventListener("click",At),k=document.querySelector(vt),k&&k.addEventListener("input",wt),A=document.querySelector(yt),A&&A.addEventListener("input",kt),be()}function Rt(t){v=t.getAttribute("data-starnumber"),ye({exerciseRating:v},z),be()}function be(){const t=document.querySelectorAll(ht);t&&t.forEach(function(e){e.addEventListener("click",()=>{Rt(e)})})}function wt(t){k.textContent=t.target.value,$=t.target.value}function kt(t){A.textContent=t.target.value,t.target.value}function At(t){if(t.preventDefault(),!v){d("Please select a rating");return}if(!$){d("Please enter a email");return}if(!$t($)){d("please enter a valid email address");return}let e={id:V,rate:Number(v),email:$};St(e).then(s=>{console.log(s),K("Success")}).catch(s=>{console.log(s),d("err")}),se&&se.querySelectorAll(`[data-id="${V}"]`)[0].click()}const $t=t=>String(t).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);let G,b,j,p,S=document.querySelector("."+fe);S&&S.addEventListener("click",Pt);const ae=document.querySelector(me);ae&&ae.addEventListener("click",qt);async function qt(t){t.preventDefault();const e=t.target;if(e.classList.contains(et)){if(p=e.dataset.id,e.nodeName!=="BUTTON"){let s=e.closest("button");console.log(s.dataset.id),p=s.dataset.id}try{const s=await it(p);s&&(rt(s,S),It())}catch(s){console.log(s.message)}}}function Z(t){window.removeEventListener("keydown",xe),S.classList.remove(pe)}function It(){S.classList.add(pe),window.addEventListener("keydown",xe),G=document.querySelector(Ze),G&&G.addEventListener("click",Z),b=document.querySelector(tt),b&&b.addEventListener("click",Ot),ot(p,b);const t=document.querySelector(at);gt(t),j=document.querySelector(st),j&&j.addEventListener("click",Mt)}function xe(t){t.code===Xe&&Z()}function Pt(t){t.currentTarget===t.target&&Z()}function Ot(t){ut(p,b)}function Mt(t){Lt(t,p)}const Ee=document.querySelector(".footer-subscription"),_t=Ee.querySelector(".input-footer");Ee.addEventListener("submit",Nt);function Nt(t){t.preventDefault();const e=_t.value.trim(),s={method:"POST",body:JSON.stringify({email:e}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(a=>{a.status>=200&&a.status<300&&K("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),a.status===409&&d("Subscription already exists")}).catch(a=>{console.log(a),d("Sorry! Something is wrong")})}const Se=document.querySelectorAll(".button-home"),Ce=document.querySelectorAll(".button-favorites");ne(Se,Ce);Ce.forEach(t=>{t.addEventListener("click",e=>{ne([t],Se)})});ke();const Bt={iconURL:l,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Dt=document.querySelector(".social-list");Ae(Dt,Bt,$e);
//# sourceMappingURL=commonHelpers2.js.map
