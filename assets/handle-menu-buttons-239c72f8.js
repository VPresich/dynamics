var R=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var B=(e,t,s)=>(R(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},D=(e,t,s,a)=>(R(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var d=(e,t,s)=>(R(e,t,"access private method"),s);import{i as J}from"./vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const I="https://energyflow.b.goit.study/api/";var y,i,m;class _{constructor(t){$(this,i);$(this,y,"");D(this,y,t)}async objectGetRequest(t){return d(this,i,m).call(this,t)}async objectCreateRequest(t,s){return d(this,i,m).call(this,t,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(t,s){return d(this,i,m).call(this,`${t}/${s}`,{method:"DELETE"})}async ojectUpdateRequest(t,s){return d(this,i,m).call(this,`${t}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectPatchRequest(t,s){const{id:a,...r}=s;return d(this,i,m).call(this,`${t}/${a}/rating`,{method:"PATCH",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}})}}y=new WeakMap,i=new WeakSet,m=async function(t,s={}){try{const a=await fetch(B(this,y)+t,s);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){console.log(a.message)}};const ae=document.querySelector(".js-quote"),F="quote",j="date",re=new _(I);ne();async function ne(){try{const{quote:e,author:t}=await oe();ie({quote:e,author:t})}catch(e){console.error("Error fetching or displaying quote:",e)}}async function oe(){const e=localStorage.getItem(j),t=localStorage.getItem(F),a=new Date().toISOString().split("T")[0];if(e===a&&t){const n=JSON.parse(t);if(n.quote&&n.author)return n}const r=await ce();return localStorage.setItem(j,a),localStorage.setItem(F,JSON.stringify(r)),r}async function ce(){const{quote:e,author:t}=await re.objectGetRequest("quote");return{quote:e,author:t}}function ie({quote:e,author:t}){ae.innerHTML=`
    <p class="quote-text">${e}</p>
    <h3 class="quote-author">${t}</h3>
  `}const o="/dynamics/assets/symbols-4ad092cf.svg";function rt(e=[],t){return e.reduce((s,{_id:a,bodyPart:r,equipment:n,time:c,target:p,burnedCalories:f,gifUrl:T,name:g,filter:M,popularity:N,rating:se})=>s+`
       <li class="exercise-card" data-id="${a}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${t(se,o,a)}
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
                  <use href="${o}#icon-arrow" class="gallery-start"></use></svg
              ></span>
            </button>
          </div>

          <div class="ex-card-name-container">
            <div class="runner-icon-container">
              <svg class="runner-icon" width="24" height="24" aria-label="runner icon">
                <use href="${o}#icon-running-man"></use>
              </svg>
            </div>
            <h3 class="ex-card-name exercise-param">${g}</h3>
          </div>

          <div class="ex-card-details">
            <ul class="ex-card-details-list">
              <li class="ex-card-details-item">
                <p class="ex-card-details-text exercise-param">
                  Burned calories:
                  <span class="ex-card-text-part">${f}</span>
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
      `,"")}const le="favorites",ue="Escape",K="modal-backdrop",de=".exercise-close-btn",Y=".exercises-gallery",me="gallery-start",Q="is-open",pe=".exercise-favorite-btn",fe=".exercise-raiting-btn",z="Remove from",V="Add to favorites",ge=".modal-rating";function be(e={}){const{_id:t,bodyPart:s,equipment:a,time:r,target:n,burnedCalories:c,gifUrl:p,name:f,filter:T,popularity:g,rating:M,description:N}=e;return`
        <div class="exercise-window">
          <div class="exercise-container">
            <button class="exercise-close-btn" type="button">
              <svg
                class="exercise-close-icon"
                width="28"
                height="28"
                aria-label="Close icon"
              >
                <use href="${o}#icon-x"></use>
              </svg>
            </button>
            <div class="exercise-image-wrapper">
              <img
                src="${p}"
                alt=""
                class="exercise-image-modal"
              />
            </div>
            <div class="exercise-info-wrapper">
              <div class="exercise-name-and-rating-container">
                <p class="exercise-name">${f}</p>
                <p class="modal-rating">${M}</p>
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
                    <p class="exercise-param-value exercise-param-popularuty">${g}</p>
                  </li>
                </ul>
                <p class="exercise-calories">Burned calories</p>
                <p class="exercise-calories-value">${c}/${r} m</p>
              </div>
              <p class="exercise-description">${N}</p>
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
                  <use href="${o}#icon-heart"></use>
                  </svg>
                </button>
                <button class="exercise-raiting-btn" type="submit" data="${t}">
                  Give a rating
                </button>
              </div>
            </div>
          </div>
        </div>   

      `}const he=(e,t)=>{const s=be(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function ve(e){const t=new _(I);try{return await t.objectGetRequest(`exercises/${e}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function C(e,t){const s=t.childNodes[0];s.nodeValue=e}function ye(e,t){const a=(JSON.parse(localStorage.getItem("favorites"))||[]).some(r=>r._id===e);C(a?z:V,t)}function xe(e){return{_id:e,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function Se(e,t){const s=xe(e),a=JSON.parse(localStorage.getItem("favorites"))||[],r=a.findIndex(n=>n.name===s.name);r!==-1?(a.splice(r,1),C(V,t)):(a.push(s),C(z,t)),localStorage.setItem(le,JSON.stringify(a))}const Ee=(e,t)=>e<t?"#EEA10C":"#7E847F",Ce=e=>{const t=parseInt(e.textContent);let s="";for(let a=0;a<5;a++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${Ee(a,t)}"
      >
        <use href="${o}#icon-star"></use>
      </svg>`;e.insertAdjacentHTML("beforeend",s)},Le="exercises",Te=".rating-form-send-btn",Re=".stars-container",$e=".star-btn.rating-form-btn",we=".rating-form-email-input",Ae=".rating-form-comment";function ke(e={}){return`
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
    >
      <use href="${o}"></use>
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
      `}const Oe=(e,t)=>{const s=ke(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};function qe(e={}){const{exerciseRating:t}=e;return`
  
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
      <use href="${o}#icon-star" fill="${t>=1&&"#EEA10C"}"></use>
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
      <use href="${o}#icon-star"  fill="${t>=2&&"#EEA10C"}"></use>
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
      <use href="${o}#icon-star"  fill="${t>=3&&"#EEA10C"}"></use>
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
      <use href="${o}#icon-star" fill="${t>=4&&"#EEA10C"}"></use>
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
      <use href="${o}#icon-star" fill="${t>=5&&"#EEA10C"}"></use>
    </svg>
  </button>
      `}const W=(e,t)=>{const s=qe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function Ie(e){const t=new _(I);try{return await t.objectPatchRequest(Le,e)}catch(s){throw s}}const _e="/dynamics/assets/bi-x-octagon-73f29380.svg",Me="/dynamics/assets/bi_check-45de7d45.svg";function x(e){J.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${_e}`,iconColor:"#fafafb"})}function Ne(e){J.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Me}`,iconColor:"#fafafb"})}let O,w,S,E,q,u=0,h,Be=document.querySelector("."+K);const P=document.querySelector(Y);function De(e,t){e.preventDefault(),t&&(q=t,Oe({exerciseRating:u},Be),O=document.querySelector(Re),W({exerciseRating:u},O),Fe())}function Fe(){w=document.querySelector(Te),w&&w.addEventListener("click",Ge),S=document.querySelector(we),S&&S.addEventListener("input",Pe),E=document.querySelector(Ae),E&&E.addEventListener("input",Ue),Z()}function je(e){u=e.getAttribute("data-starnumber"),W({exerciseRating:u},O),Z()}function Z(){const e=document.querySelectorAll($e);e&&e.forEach(function(t){t.addEventListener("click",()=>{je(t)})})}function Pe(e){S.textContent=e.target.value,h=e.target.value}function Ue(e){E.textContent=e.target.value,e.target.value}function Ge(e){if(e.preventDefault(),!u){x("Please select a rating");return}if(!h){x("Please enter a email");return}if(!He(h)){x("please enter a valid email address");return}let t={id:q,rate:Number(u),email:h};Ie(t).then(s=>{Ne("Success"),Je(),L(),console.log(s),P&&P.querySelectorAll(`button,[data-id="${q}"]`)[0].click()}).catch(s=>(console.log(s),x("err")))}const He=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);function Je(){u=0,h=""}let A,b,k,l,v=document.querySelector("."+K);v&&v.addEventListener("click",Qe);const U=document.querySelector(Y);U&&U.addEventListener("click",Ke);async function Ke(e){e.preventDefault();const t=e.target;if(t.classList.contains(me)&&(t.nodeName!=="BUTTON"?l=t.closest("button").dataset.id:l=t.dataset.id,!!l))try{const s=await ve(l);s&&(he(s,v),Ye())}catch(s){console.log(s.message)}}function L(e){window.removeEventListener("keydown",X),v.classList.remove(Q)}function Ye(){v.classList.add(Q),window.addEventListener("keydown",X),A=document.querySelector(de),A&&A.addEventListener("click",L),b=document.querySelector(pe),b&&b.addEventListener("click",ze),ye(l,b);const e=document.querySelector(ge);Ce(e),k=document.querySelector(fe),k&&k.addEventListener("click",Ve)}function X(e){e.code===ue&&L()}function Qe(e){e.currentTarget===e.target&&L()}function ze(e){Se(l,b)}function Ve(e){De(e,l)}const G=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function We(e,t=[]){const{iconURL:s,iconContainerClass:a,iconLinkClass:r,iconClass:n}=e;return t.reduce((c,{url:p,id:f,label:T,hrefTag:g})=>c+`
        <li class="${a}">
            <a class="${r}" target="_blank" rel="noopener" href="${p}">
            <svg class="${n}" aria-label="${T}" id=${f}>
                <use href="${s}#${g}"></use>
            </svg>
            </a>
        </li>
      `,"")}function H(e,t,s=[]){const a=We(t,s);e.innerHTML="",e.insertAdjacentHTML("beforeend",a)}const nt=()=>{const e={iconURL:o,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link",iconClass:"social-list-icon"},t=document.querySelector(".social-list-header");H(t,e,G);const s={iconURL:o,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link-menu",iconClass:"social-list-icon-menu"},a=document.querySelector(".social-list-menu");H(a,s,G)},Ze=document.querySelector(".js-open-menu-btn"),ee=document.querySelector(".js-mobile-menu"),Xe=document.querySelector(".js-mobile-menu-close-btn"),te="is-open";Ze.addEventListener("click",()=>{ee.classList.add(te)});Xe.addEventListener("click",()=>{ee.classList.remove(te)});function et(e){e.classList.add("active-btn"),e.classList.remove("btn")}function tt(e){e.classList.remove("active-btn"),e.classList.add("btn")}function ot(e,t){Array.from(e).forEach(s=>{et(s)}),Array.from(t).forEach(s=>{tt(s)})}export{I as B,_ as D,le as K,nt as a,Ne as b,x as c,H as d,rt as e,o as i,ot as m,Ke as o,G as s};
//# sourceMappingURL=handle-menu-buttons-239c72f8.js.map
