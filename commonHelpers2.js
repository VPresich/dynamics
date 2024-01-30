var Q=Object.defineProperty;var J=(e,t,s)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var d=(e,t,s)=>(J(e,typeof t!="symbol"?t+"":t,s),s),E=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var r=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},v=(e,t,s,i)=>(E(e,t,"write to private field"),i?i.call(e,s):t.set(e,s),s);var L=(e,t,s)=>(E(e,t,"access private method"),s);import{D as M,B as $,e as I,c as k,b as F,m as R,a as V,d as X,s as z,i as K}from"./assets/handle-menu-buttons-2c56571f.js";import"./assets/vendor-32231325.js";const Z="Muscles",U="filters",D="exercises",tt=e=>{let t=8;const s=window.innerWidth;if(s>=1440)t=12;else if(s>=768)switch(e){case U:t=12;break;case D:t=6;break;default:t=8;break}return t},B=(e,t={},s=1,i="")=>{let n={};return t&&(n={...t}),e===D&&i&&(n={...n,keyword:i}),n={...n,page:s,limit:tt(U)},`${e}?${new URLSearchParams(n).toString()}`};async function et(e,t){const s=new M($),i=B("filters",e,t);try{return await s.objectGetRequest(i)}catch{}}function st(e=[]){return e.reduce((t,{imgUrl:s,name:i,filter:n})=>t+`
      <li class="filter-card" data-filter">
          <img src="${s}" alt="Image of: ${n}"/>
          <div class="filter-label">
          <p class="filter-name">${i}</p>
          <p class="filter-type">${n}</p>            
          </div>
      </li>
      `,"")}function b(e,t){return`<div class="rating-container">
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
              </div>`}const P=(e,t,s)=>{t.textContent="",t.classList.add("visually-hidden");let i="";e.length,i=s(e,b),i=s(e,b),t.innerHTML="",t.insertAdjacentHTML("beforeend",i),t.classList.remove("visually-hidden")},it=(e,t)=>P(t,e,st);async function N(e={},t=1,s=""){const i=new M($),n=B(D,e,t,s);try{return await i.objectGetRequest(n)}catch{}}const nt=(e,t)=>P(t,e,I);var o,p,h,u,x,O,m,w;class rt{constructor({galleryHandle:t,filter:s,dotsSelector:i,dotDefaultClass:n,dotActiveClass:c}){l(this,x);l(this,m);d(this,"currentPage",1);d(this,"totalPages",0);l(this,o,void 0);l(this,p,10);l(this,h,"pagination-dot");l(this,u,"active-paggination-dot");d(this,"galleryHandle");d(this,"filter",{filter:""});d(this,"keyWord","");this.galleryHandle=t,this.filter=s,v(this,u,c),v(this,h,n),v(this,o,document.querySelector(i)),r(this,o).addEventListener("click",this.onDotsClick.bind(this))}init(t,s,i=0){this.galleryHandle=t,this.totalPages=i>r(this,p)?r(this,p):i,this.filter=s,L(this,x,O).call(this)}reset(t,s,i=1,n="",c=0){this.galleryHandle=t,this.totalPages=c,this.currentPage=i,this.filter=s,this.keyWord=n,L(this,m,w).call(this)}destroy(){r(this,o).removeEventListener("click",this.onDotsClick.bind(this)),L(this,m,w).call(this)}async updateGallery(){try{await this.galleryHandle(this.filter,this.currentPage,this.keyWord,this.totalPages)}catch(t){console.log(t.message)}}onDotsClick(t){const s=t.target;if(!s.classList.contains(r(this,h)))return;const i=parseInt(s.dataset.ind,10);this.currentPage=i,this.updateDisplayDots(),this.updateGallery()}updateDisplayDots(){const t=r(this,o).querySelectorAll("li");t.forEach(s=>{s.classList.remove(r(this,u))}),t[this.currentPage-1].classList.add(r(this,u))}}o=new WeakMap,p=new WeakMap,h=new WeakMap,u=new WeakMap,x=new WeakSet,O=function(){r(this,o).innerHTML="";let t="";for(let s=0;s<this.totalPages;s+=1)t+=`
       <li class="${r(this,h)}" data-ind="${s+1}">${s+1}</li>
      `;r(this,o).innerHTML=t,r(this,o).children[this.currentPage-1].classList.add(r(this,u))},m=new WeakSet,w=function(){r(this,o).innerHTML=""};const j=e=>{e.innerHTML="",e.classList.add("visually-hidden")};function ot(){return`<p class="ex-no-elements">
              Unfortunately,  <span class="grey-text"> no results</span> were
              found. You may want to consider other search options to find the
              exercise you are looking for. Our range is wide and you have the
              opportunity to find more options that suit your needs.
          </p>`}const q="filter-button-active";let f={};const C=document.querySelector(".exercise-filter-title"),G=document.querySelector(".filters-buttons"),T=document.querySelector(".exercise-filters-list"),S=document.querySelector(".exercises-gallery"),A=document.querySelector(".form-for-searching-input"),at=document.querySelector(".searching-input");G.addEventListener("click",ct);T.addEventListener("click",lt);A.addEventListener("submit",gt);const a=new rt({galleryHandle:g,dotsSelector:".pagination-dots",dotDefaultClass:"pagination-dot",dotActiveClass:"active-pagination-dot"});function ct(e){if(e.target.tagName!=="BUTTON")return;e.preventDefault();const t=e.target.dataset.filter;A.classList.add("visually-hidden"),a.reset(g,t,1,0),pt(),g({filter:t}),dt(e.target)}function g(e={filter:Z}){et(e,a.currentPage).then(t=>{const s=t.results;j(S),it(T,s);const i=t.totalPages?t.totalPages:0;a.init(g,e,i)}).catch(t=>{console.log(t.message)})}function lt(e){e.preventDefault(),e.target;const t=e.target.closest("li");if(!t)return;const s={},i=t.querySelector(".filter-name"),n=t.querySelector(".filter-type");if(A.classList.remove("visually-hidden"),n&&n){const c=i.textContent.toLowerCase(),H=n.textContent.toLowerCase();if(H==="")return;s[H]=c}mt(i.textContent),a.reset(y,s,1,0),y(s)}function y(e){N(e,a.currentPage).then(t=>{j(T),nt(S,t.results);const s=t.totalPages?t.totalPages:0;a.init(y,e,s)}).catch(t=>{console.log(t.message),k(`Error fetching images: ${t.message}`)})}function ut(){f=G.querySelector("BUTTON"),f&&f.classList.add(q)}function dt(e){f&&f.classList.remove(q),e&&e.classList.add(q),f=e}function ft(){const e=document.querySelector(".filter-button-active"),t=document.querySelector(".chapter-text"),s={};return s[e.dataset.filter.toLowerCase()]=t.textContent.toLowerCase(),s}function ht(){return at.value.trim().toLowerCase()}function gt(e){e.preventDefault();const t=ht();if(t===""){F("Please fill in the search field");return}const s=ft();a.reset(y,s,1,t,0),yt(s,t)}function yt(e,t){N(e,a.currentPage,t).then(s=>{s.results.length===0?P([],S,ot):P(s.results,S,I);const i=s.totalPages?s.totalPages:0;a.init(y,e,i)}).catch(s=>{console.log(s.message)})}function pt(){C.textContent.indexOf("/")!==-1&&(C.textContent=C.textContent.split("/")[0])}function mt(e){const t=` / 
  <span class="chapter-text">${e}</span>`;C.insertAdjacentHTML("beforeend",t)}ut();g();const W=document.querySelector(".footer-subscription"),vt=W.querySelector(".input-footer");W.addEventListener("submit",Lt);function Lt(e){e.preventDefault();const t=vt.value.trim(),s={method:"POST",body:JSON.stringify({email:t}),headers:{"Content-Type":"application/json"}};fetch("https://energyflow.b.goit.study/api/subscription",s).then(i=>{i.status>=200&&i.status<300&&F("We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being."),i.status===409&&k("Subscription already exists")}).catch(i=>{console.log(i),k("Sorry! Something is wrong")})}const Y=document.querySelectorAll(".button-home"),_=document.querySelectorAll(".button-favorites");R(Y,_);_.forEach(e=>{e.addEventListener("click",t=>{R([e],Y)})});V();const Ct={iconURL:K,iconContainerClass:"social-item-footer",iconLinkClass:"social-link-footer",iconClass:"social-icon"},Pt=document.querySelector(".social-list");X(Pt,Ct,z);
//# sourceMappingURL=commonHelpers2.js.map
