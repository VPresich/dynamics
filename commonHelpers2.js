var Te=Object.defineProperty;var we=(e,t,s)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var g=(e,t,s)=>(we(e,typeof t!="symbol"?t+"":t,s),s),F=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},R=(e,t,s,n)=>(F(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s);var T=(e,t,s)=>(F(e,t,"access private method"),s);import{D as M,B as _,i as l,m as ae,a as ke,c as Ae,s as $e}from"./assets/handle-menu-buttons-928543f0.js";import{i as re}from"./assets/vendor-0a7943b3.js";const qe="Muscles",ie="filters",J="exercises",Ie=e=>{let t=8;const s=window.innerWidth;if(s>=1440)t=12;else if(s>=768)switch(e){case ie:t=12;break;case J:t=6;break;default:t=8;break}return t},oe=(e,t={},s=1,n="")=>{let a={};return t&&(a={...t}),e===J&&n&&(a={...a,keyword:n}),a={...a,page:s,limit:Ie(ie)},`${e}?${new URLSearchParams(a).toString()}`};async function Pe(e,t){const s=new M(_),n=oe("filters",e,t);try{return await s.objectGetRequest(n)}catch{}}function Oe(e=[]){return e.reduce((t,{imgUrl:s,name:n,filter:a})=>t+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${a}"/>
          <div class="filter-label">
          <p class="filter-name">${n}</p>
          <p class="filter-type">${a}</p>            
          </div>
      </li>
      `,"")}function H(e,t){return`<div class="rating-container">
                <p class="ex-card-rating">${e}</p>
                <svg
                  class="rating-star-icon"
                  width="18"
                  height="18"
                  aria-label="star icon"
                  fill = "#EEA10C";
                >
                  <use href="${t}#icon-star"></use>
                </svg>
              </div>`}const q=(e,t,s)=>{t.textContent="",t.classList.add("visually-hidden");let n="";e.length,n=s(e,H),n=s(e,H),t.innerHTML="",t.insertAdjacentHTML("beforeend",n),t.classList.remove("visually-hidden")},Me=(e,t)=>q(t,e,Oe),_e="/dynamics/assets/bi-x-octagon-73f29380.svg",Ne="/dynamics/assets/bi_check-45de7d45.svg";function d(e){re.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${_e}`,iconColor:"#fafafb"})}function K(e){re.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ne}`,iconColor:"#fafafb"})}async function ce(e={},t=1,s=""){const n=new M(_),a=oe(J,e,t,s);try{return await n.objectGetRequest(a)}catch{}}function le(e=[],t){return e.reduce((s,{_id:n,bodyPart:a,equipment:i,time:v,target:N,burnedCalories:D,gifUrl:Le,name:B,filter:ee,popularity:te,rating:Re})=>s+`
       <li class="exercise-card data-id="${n}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${t(Re,l)}
            </div>
            <button type="submit" class="ex-card-start-btn" data-id="${n}">
              Start
              <span class="arrow-icon-span">
                <svg
                  class="arrow-icon"
                  width="16"
                  height="16"
                  aria-label="arrow icon"
                  stroke="black"
                >
                  <use href="${l}#icon-arrow"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${l}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${B}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${D}</span>
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
                  <span class="ex-card-text-part">${N}</span>
                </p>
              </li>
            </ul>
          </div>
        </li>
      `,"")}const De=(e,t)=>q(t,e,le);var o,C,p,f,O,ue,L,Y;class Be{constructor({galleryHandle:t,filter:s,dotsSelector:n,dotDefaultClass:a,dotActiveClass:i}){u(this,O);u(this,L);g(this,"currentPage",1);g(this,"totalPages",0);u(this,o,void 0);u(this,C,10);u(this,p,"pagination-dot");u(this,f,"active-paggination-dot");g(this,"galleryHandle");g(this,"filter",{filter:""});g(this,"keyWord","");this.galleryHandle=t,this.filter=s,R(this,f,i),R(this,p,a),R(this,o,document.querySelector(n)),r(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(t,s,n=0){this.galleryHandle=t,this.totalPages=n>r(this,C)?r(this,C):n,this.filter=s,T(this,O,ue).call(this)}reset(t,s,n=1,a="",i=0){this.galleryHandle=t,this.totalPages=i,this.currentPage=n,this.filter=s,this.keyWord=a,T(this,L,Y).call(this)}destroy(){r(this,o).removeEventListener("click",this.onDotsClick.bind(this)),T(this,L,Y).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(t){console.log(t.message)}}onDotsClick(t){const s=t.target;if(!s.classList.contains(r(this,p)))return;const n=parseInt(s.dataset.ind,10);this.currentPage=n,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const t=r(this,o).querySelectorAll("li");t.forEach(s=>{s.classList.remove(r(this,f))}),t[this.currentPage-1].classList.add(r(this,f))}}o=new WeakMap,C=new WeakMap,p=new WeakMap,f=new WeakMap,O=new WeakSet,ue=function(){r(this,o).innerHTML="";let t="";for(let s=0;s<this.totalPages;s+=1)t+=`
       <li class="${r(this,p)}" data-ind="${s+1}">${s+1}</li>
      `;r(this,o).innerHTML=t,r(this,o).children[this.currentPage-1].classList.add(r(this,f))},L=new WeakSet,Y=function(){r(this,o).innerHTML=""};const de=e=>{e.innerHTML="",e.classList.add("visually-hidden")};function Fe(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const W="filter-button-active";let m={};const w=document.querySelector(".exercise-filter-title"),fe=document.querySelector(".filters-buttons"),Q=document.querySelector(".exercise-filters-list"),I=document.querySelector(".exercises-gallery"),X=document.querySelector(".form-for-searching-input"),He=document.querySelector(".searching-input");fe.addEventListener("click",Ge);Q.addEventListener("click",Ue);X.addEventListener("submit",Ve);const c=new Be({galleryHandle:x,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function Ge(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault();const t=e.target.dataset.filter;X.classList.add("visually-hidden"),c.reset(x,t,1,0),Ke(),x({filter:t}),Ye(e.target)}function x(e={filter:qe}){Pe(e,c.currentPage).then(t=>{const s=t.results;de(I),Me(Q,s);const n=t.totalPages?t.totalPages:0;c.init(x,e,n)}).catch(t=>{console.log(t.message)})}function Ue(e){e.preventDefault(),e.target;const t=e.target.closest("li");if(!t)return;const s={},n=t.querySelector(".filter-name"),a=t.querySelector(".filter-type");if(X.classList.remove("visually-hidden"),a&&a){const i=n.textContent.toLowerCase(),v=a.textContent.toLowerCase();if(v==="")return;s[v]=i}Qe(n.textContent),c.reset(y,s,1,0),y(s)}function y(e){ce(e,c.currentPage).then(t=>{de(Q),De(I,t.results);const s=t.totalPages?t.totalPages:0;c.init(y,e,s)}).catch(t=>{console.log(t.message),d(`Error fetching images: ${t.message}`)})}function je(){m=fe.querySelector("BUTTON"),m&&m.classList.add(W)}function Ye(e){m&&m.classList.remove(W),e&&e.classList.add(W),m=e}function We(){const e=document.querySelector(".filter-button-active"),t=document.querySelector(".chapter-text"),s={};return s[e.dataset.filter.toLowerCase()]=t.textContent.toLowerCase(),s}function ze(){return He.value.trim().toLowerCase()}function Ve(e){e.preventDefault();const t=ze();if(t===""){K("Please fill in the search field");return}const s=We();c.reset(y,s,1,t,0),Je(s,t)}function Je(e,t){ce(e,c.currentPage,t).then(s=>{s.results.length===0?q([],I,Fe):q(s.results,I,le);const n=s.totalPages?s.totalPages:0;c.init(y,e,n)}).catch(s=>{console.log(s.message)})}function Ke(){w.textContent.indexOf("/")!==-1&&(w.textContent=w.textContent.split("/")[0])}function Qe(e){const t=` / 
  <span class="chapter-text">${e}</span>`;w.insertAdjacentHTML("beforeend",t)}je();x();const Xe="Escape",ge="modal-backdrop",Ze=".exercise-close-btn",me=".exercises-gallery",et="ex-card-start-btn",pe="is-open",tt=".exercise-favorite-btn",st=".exercise-raiting-btn",he="Remove from",ve="Add to favorites",nt=".modal-rating";function at(e={}){const{_id:t,bodyPart:s,equipment:n,time:a,target:i,burnedCalories:v,gifUrl:N,name:D,filter:Le,popularity:B,rating:ee,description:te}=e;return`
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
                <p class="exercise-name">${D}</p>
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
                    <p class="exercise-param-value exercise-param-equipment">${n}</p>
                  </li>
                  <li class="exercise-params-card">
                    <p class="exercise-param-name">Popular</p>
                    <p class="exercise-param-value exercise-param-popularuty">${B}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${v}/${a} m</p>
              </div>
              <p class="exercise-description">${te}</p>
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
                  <use href="${l}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const rt=(e,t)=>{const s=at(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function it(e){const t=new M(_);try{return await t.objectGetRequest(`exercises/${e}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function P(e,t){const s=t.childNodes[0];s.nodeValue=e}function ot(e,t){const n=(JSON.parse(localStorage.getItem("favorites"))||[]).some(a=>a._id===e);P(n?he:ve,t)}const ct="favorites";function lt(e){return{_id:e,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function ut(e,t){const s=lt(e),n=JSON.parse(localStorage.getItem("favorites"))||[],a=n.findIndex(i=>i.name===s.name);a!==-1?(n.splice(a,1),P(ve,t)):(n.push(s),P(he,t)),localStorage.setItem(ct,JSON.stringify(n))}const dt=(e,t)=>e<t?"#EEA10C":"#7E847F",ft=e=>{const t=parseInt(e.textContent);let s="";for(let n=0;n<5;n++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${dt(n,t)}"
      >
        <use href="${l}#icon-star"></use>
      </svg>`;e.insertAdjacentHTML("beforeend",s)},gt="exercises",mt=".rating-form-send-btn",pt=".stars-container",ht=".star-btn.rating-form-btn",vt=".rating-form-email-input",bt=".rating-form-comment";function xt(e={}){return`
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
      `}const yt=(e,t)=>{const s=xt(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};function Et(e={}){const{exerciseRating:t}=e;return`
  
  <p class="rating-number">${t}.0</p>
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
      <use href="../img/icons/symbols.svg#icon-star" fill="${t>=1&&"#EEA10C"}"></use>
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
      <use href="../img/icons/symbols.svg#icon-star" fill="${t>=2&&"#EEA10C"}"></use>
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
      <use href="../img/icons/symbols.svg#icon-star" fill="${t>=3&&"#EEA10C"}"></use>
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
      <use href="../img/icons/symbols.svg#icon-star" fill="${t>=4&&"#EEA10C"}"></use>
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
      <use href="../img/icons/symbols.svg#icon-star" fill="${t>=5&&"#EEA10C"}"></use>
    </svg>
  </button>
      `}const be=(e,t)=>{const s=Et(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function St(e){const t=new M(_);try{return await t.objectPatchRequest(gt,e)}catch(s){throw s}}let z,G,k,A,V,h=0,$,Ct=document.querySelector("."+ge);const se=document.querySelector(me);function Lt(e,t){e.preventDefault(),t&&(V=t,yt({exerciseRating:h},Ct),z=document.querySelector(pt),be({exerciseRating:h},z),Rt())}function Rt(){G=document.querySelector(mt),G&&G.addEventListener("click",At),k=document.querySelector(vt),k&&k.addEventListener("input",wt),A=document.querySelector(bt),A&&A.addEventListener("input",kt),xe()}function Tt(e){h=e.getAttribute("data-starnumber"),be({exerciseRating:h},z),xe()}function xe(){const e=document.querySelectorAll(ht);e&&e.forEach(function(t){t.addEventListener("click",()=>{Tt(t)})})}function wt(e){k.textContent=e.target.value,$=e.target.value}function kt(e){A.textContent=e.target.value,e.target.value}function At(e){if(e.preventDefault(),!h){d("Please select a rating");return}if(!$){d("Please enter a email");return}if(!$t($)){d("please enter a valid email address");return}let t={id:V,rate:Number(h),email:$};St(t).then(s=>{console.log(s),K("Success")}).catch(s=>{console.log(s),d("err")}),se&&se.querySelectorAll(`[data-id="${V}"]`)[0].click()}const $t=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);let U,b,j,E,S=document.querySelector("."+ge);S&&S.addEventListener("click",Pt);const ne=document.querySelector(me);ne&&ne.addEventListener("click",qt);async function qt(e){e.preventDefault();const t=e.target;if(t.classList.contains(et)){E=t.dataset.id;try{const s=await it(E);s&&(rt(s,S),It())}catch(s){console.log(s.message)}}}function Z(e){window.removeEventListener("keydown",ye),S.classList.remove(pe)}function It(){S.classList.add(pe),window.addEventListener("keydown",ye),U=document.querySelector(Ze),U&&U.addEventListener("click",Z),b=document.querySelector(tt),b&&b.addEventListener("click",Ot),ot(E,b);const e=document.querySelector(nt);ft(e),j=document.querySelector(st),j&&j.addEventListener("click",Mt)}function ye(e){e.code===Xe&&Z()}function Pt(e){e.currentTarget===e.target&&Z()}function Ot(e){ut(E,b)}function Mt(e){Lt(e,E)}const Ee=document.querySelector(".footer-subscription"),_t=Ee.querySelector(".input-footer");Ee.addEventListener("submit",Nt);function Nt(e){e.preventDefault();const t=_t.value.trim(),s={method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(n=>{n.status>=200&&n.status<300&&K("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),n.status===409&&d("Subscription already exists")}).catch(n=>{console.log(n),d("Sorry! Something is wrong")})}const Se=document.querySelectorAll(".button-home"),Ce=document.querySelectorAll(".button-favorites");ae(Se,Ce);Ce.forEach(e=>{e.addEventListener("click",t=>{ae([e],Se)})});ke();const Dt={iconURL:l,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Bt=document.querySelector(".social-list");Ae(Bt,Dt,$e);
//# sourceMappingURL=commonHelpers2.js.map
