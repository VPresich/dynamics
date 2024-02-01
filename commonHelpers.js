import{K as r,e as u,o as f,m as c,a as v}from"./assets/handle-menu-buttons-e47ffd76.js";import"./assets/vendor-32231325.js";function g(e,s,t){return`<div><button data-id="${t}" class="favorites-button-remove" type="button">
  <svg data-id="${t}" class="favorites-icon-trash">
  <use href="${s}#icon-trash-favotites"></use>
</svg>
  </button></div>`}function n(){return`<div class="favortes-no-exercises">
  <div class="favortes-no-exercises-found-img">
      </div>
  <p class="favortes-no-exercises-found-text">
    It appears that you haven't added any exercises to your favorites
    yet. To get started, you can add exercises that you like to your
    favorites for easier access in the future.
  </p>
</div>`}function m(e,s){document.querySelector(`.exercise-card[data-id="${s}"]`).remove(),e.map(t=>{if(t._id===s){const a=e.indexOf(t);e.splice(a,1),localStorage.setItem(r,JSON.stringify(e)),e.length||(localStorage.removeItem(r),o.insertAdjacentHTML("beforeend",n()))}})}const o=document.querySelector(".favorites-list-exercises-likes"),i=[];if(localStorage.length>2)try{i.push(JSON.parse(localStorage.getItem(r)));const e=i.flatMap(t=>t),s=u(e,g);o.insertAdjacentHTML("beforeend",s),o.addEventListener("click",t=>{if(t.target.classList.contains("gallery-start")){f(t);return}const a=t.target.dataset.id;t.target.classList.contains("favorites-icon-trash")&&m(e,a)})}catch(e){console.log(e.message)}else o.insertAdjacentHTML("beforeend",n());const l=document.querySelectorAll(".button-home"),d=document.querySelectorAll(".button-favorites");c(d,l);d.forEach(e=>{e.addEventListener("click",s=>{c([e],l)})});v();
//# sourceMappingURL=commonHelpers.js.map
