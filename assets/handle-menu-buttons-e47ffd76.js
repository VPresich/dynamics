var T=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var B=(e,t,s)=>(T(e,t,"read from private field"),s?s.call(e):t.get(e)),R=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},D=(e,t,s,a)=>(T(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s);var d=(e,t,s)=>(T(e,t,"access private method"),s);import{i as H}from"./vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const O="https://energyflow.b.goit.study/api/";var x,i,m;class q{constructor(t){R(this,i);R(this,x,"");D(this,x,t)}async objectGetRequest(t){return d(this,i,m).call(this,t)}async objectCreateRequest(t,s){return d(this,i,m).call(this,t,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectDeleteRequest(t,s){return d(this,i,m).call(this,`${t}/${s}`,{method:"DELETE"})}async objectUpdateRequest(t,s){return d(this,i,m).call(this,`${t}/${s.id}`,{method:"PUT",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})}async objectPatchRequest(t,s){const{id:a,...n}=s;return d(this,i,m).call(this,`${t}/${a}/rating`,{method:"PATCH",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})}}x=new WeakMap,i=new WeakSet,m=async function(t,s={}){try{const a=await fetch(B(this,x)+t,s);if(!a.ok)throw new Error(`HTTP error, status: ${a.status}`);return a.json()}catch(a){throw a}};const ce=document.querySelector(".js-quote"),F="quote",j="date",ie=new q(O);le();async function le(){try{const{quote:e,author:t}=await ue();me({quote:e,author:t})}catch(e){console.error("Error fetching or displaying quote:",e)}}async function ue(){const e=localStorage.getItem(j),t=localStorage.getItem(F),a=new Date().toISOString().split("T")[0];if(e===a&&t){const r=JSON.parse(t);if(r.quote&&r.author)return r}const n=await de();return localStorage.setItem(j,a),localStorage.setItem(F,JSON.stringify(n)),n}async function de(){const{quote:e,author:t}=await ie.objectGetRequest("quote");return{quote:e,author:t}}function me({quote:e,author:t}){ce.innerHTML=`
    <p class="quote-text">${e}</p>
    <h3 class="quote-author">${t}</h3>
  `}const o="/dynamics/assets/symbols-4ad092cf.svg";function rt(e=[],t){return e.reduce((s,{_id:a,bodyPart:n,equipment:r,time:c,target:p,burnedCalories:f,gifUrl:L,name:g,filter:M,popularity:N,rating:oe})=>s+`
       <li class="exercise-card" data-id="${a}">
          <div class="exercice-card-top-line">
            <div class="ex-card-top-left-part">
              <p class="ex-card-workout exercise-param">workout</p>
              ${t(oe,o,a)}
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
                  <span class="ex-card-text-part">${n}</span>
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
      `,"")}const pe="favorites",fe="Escape",J="modal-backdrop",ge=".exercise-close-btn",be=".exercises-gallery",ve="gallery-start",K="is-open",he=".exercise-favorite-btn",ye=".exercise-raiting-btn",Y="Remove from",Q="Add to favorites",xe=".modal-rating";function Ee(e={}){const{_id:t,bodyPart:s,equipment:a,time:n,target:r,burnedCalories:c,gifUrl:p,name:f,filter:L,popularity:g,rating:M,description:N}=e;return`
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
                    <p class="exercise-param-value exercise-param-target">${r}</p>
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
                <p class="exercise-calories-value">${c}/${n} m</p>
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

      `}const z=(e,t)=>{const s=Ee(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function V(e){const t=new q(O);try{return await t.objectGetRequest(`exercises/${e}`)}catch(s){console.log("Error fetching exercise data:",s.message)}}function C(e,t){const s=t.childNodes[0];s.nodeValue=e}function Se(e,t){const a=(JSON.parse(localStorage.getItem("favorites"))||[]).some(n=>n._id===e);C(a?Y:Q,t)}function Ce(e){return{_id:e,name:document.querySelector(".exercise-name").textContent,bodyPart:document.querySelector(".exercise-param-bodypart").textContent,burnedCalories:document.querySelector(".exercise-calories-value").textContent.split("/")[0],target:document.querySelector(".exercise-param-target").textContent}}function Le(e,t){const s=Ce(e),a=JSON.parse(localStorage.getItem("favorites"))||[],n=a.findIndex(r=>r.name===s.name);n!==-1?(a.splice(n,1),C(Q,t)):(a.push(s),C(Y,t)),localStorage.setItem(pe,JSON.stringify(a))}const Te=(e,t)=>e<t?"#EEA10C":"#7E847F",Re=e=>{const t=parseInt(e.textContent);let s="";for(let a=0;a<5;a++)s+=`
      <svg
        class="exercise-star"
        width="18"
        height="18"
        aria-label="Star icon"
        fill="${Te(a,t)}"
      >
        <use href="${o}#icon-star"></use>
      </svg>`;e.insertAdjacentHTML("beforeend",s)},$e="exercises",we=".rating-form-send-btn",Ae=".close-rating-form-btn",ke=".stars-container",Oe=".star-btn.rating-form-btn",qe=".rating-form-email-input",Ie=".rating-form-comment",_e=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);function Me(e={}){return`
  <div class="rating-form-container">
  <div class="rating-form-content">
  <button type="button" class="close-rating-form-btn rating-form-btn">
    <svg
      class="close-rating-form-icon"
      width="24"
      height="24"
      aria-label="close icon"
      stroke="rgba(27, 27, 27, 1)"
      fill="rgba(27, 27, 27, 1)"
    >
      <use href="${o}#icon-x"></use>
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
</div>
      `}const Ne=(e,t)=>{const s=Me(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};function Be(e={}){const{exerciseRating:t}=e;return`
  
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
      `}const W=(e,t)=>{const s=Be(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)};async function De(e){const t=new q(O);try{return await t.objectPatchRequest($e,e)}catch(s){throw s}}const Fe="/dynamics/assets/bi-x-octagon-73f29380.svg",je="/dynamics/assets/bi_check-45de7d45.svg";function b(e){H.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Fe}`,iconColor:"#fafafb"})}function Pe(e){H.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${je}`,iconColor:"#fafafb"})}let k,$,E,S,I,u=0,h,Z=document.querySelector("."+J);function Ue(e,t){e.preventDefault(),t&&(I=t,Ne({exerciseRating:u},Z),k=document.querySelector(ke),W({exerciseRating:u},k),Ge())}function Ge(){$=document.querySelector(we),$&&$.addEventListener("click",Ye),E=document.querySelector(qe),E&&E.addEventListener("input",Je),S=document.querySelector(Ie),S&&S.addEventListener("input",Ke);const e=document.querySelector(Ae);e&&e.addEventListener("click",ee),X()}function He(e){u=e.getAttribute("data-starnumber"),W({exerciseRating:u},k),X()}function X(){const e=document.querySelectorAll(Oe);e&&e.forEach(function(t){t.addEventListener("click",()=>{He(t)})})}function Je(e){E.textContent=e.target.value,h=e.target.value}function Ke(e){S.textContent=e.target.value,e.target.value}function Ye(e){if(e.preventDefault(),!u){b("Please select a rating");return}if(!h){b("Please enter a email");return}if(!_e(h)){b("please enter a valid email address");return}let t={id:I,rate:Number(u),email:h};De(t).then(s=>{Pe("Success"),te(),ee()}).catch(s=>{b("err: ",s.message)})}function ee(e){te(),V(I).then(t=>{z(t,Z),se()}).catch(t=>{b("err: ",t.message)})}function te(){u=0,h=""}let w,v,A,l,y=document.querySelector("."+J);y&&y.addEventListener("click",ze);const P=document.querySelector(be);P&&P.addEventListener("click",Qe);async function Qe(e){e.preventDefault();const t=e.target;if(t.classList.contains(ve)&&(t.nodeName!=="BUTTON"?l=t.closest("button").dataset.id:l=t.dataset.id,!!l))try{const s=await V(l);s&&(z(s,y),se())}catch(s){console.log(s.message)}}function _(e){window.removeEventListener("keydown",ae),y.classList.remove(K)}function se(){y.classList.add(K),window.addEventListener("keydown",ae),w=document.querySelector(ge),w&&w.addEventListener("click",_),v=document.querySelector(he),v&&v.addEventListener("click",Ve),Se(l,v);const e=document.querySelector(xe);Re(e),A=document.querySelector(ye),A&&A.addEventListener("click",We)}function ae(e){e.code===fe&&_()}function ze(e){e.currentTarget===e.target&&_()}function Ve(e){Le(l,v)}function We(e){Ue(e,l)}const U=[{url:"https://www.facebook.com/goITclub/",id:"#facebook",label:"facebook icon",hrefTag:"icon-facebook"},{url:"https://www.instagram.com/goitclub/",id:"#instagram",label:"instagram icon",hrefTag:"icon-instagram"},{url:"https://www.youtube.com/c/GoIT",id:"#youtube",label:"youtube icon",hrefTag:"icon-youtube"}];function Ze(e,t=[]){const{iconURL:s,iconContainerClass:a,iconLinkClass:n,iconClass:r}=e;return t.reduce((c,{url:p,id:f,label:L,hrefTag:g})=>c+`
        <li class="${a}">
            <a class="${n}" target="_blank" rel="noopener" href="${p}">
            <svg class="${r}" aria-label="${L}" id=${f}>
                <use href="${s}#${g}"></use>
            </svg>
            </a>
        </li>
      `,"")}function G(e,t,s=[]){const a=Ze(t,s);e.innerHTML="",e.insertAdjacentHTML("beforeend",a)}const ot=()=>{const e={iconURL:o,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link",iconClass:"social-list-icon"},t=document.querySelector(".social-list-header");G(t,e,U);const s={iconURL:o,iconContainerClass:"social-list-item",iconLinkClass:"social-list-link-menu",iconClass:"social-list-icon-menu"},a=document.querySelector(".social-list-menu");G(a,s,U)},Xe=document.querySelector(".js-open-menu-btn"),ne=document.querySelector(".js-mobile-menu"),et=document.querySelector(".js-mobile-menu-close-btn"),re="is-open";Xe.addEventListener("click",()=>{ne.classList.add(re)});et.addEventListener("click",()=>{ne.classList.remove(re)});function tt(e){e.classList.add("active-btn"),e.classList.remove("btn")}function st(e){e.classList.remove("active-btn"),e.classList.add("btn")}function ct(e,t){Array.from(e).forEach(s=>{tt(s)}),Array.from(t).forEach(s=>{st(s)})}export{O as B,q as D,pe as K,ot as a,Pe as b,b as c,G as d,rt as e,o as i,ct as m,Qe as o,U as s,_e as v};
//# sourceMappingURL=handle-menu-buttons-e47ffd76.js.map
