import{e as f,m as c,a as u}from"./assets/handle-menu-buttons-6a804bbc.js";function m(e,s,t){return`<div><button data-id="${t}" class="favorites-button-remove" type="button">
  <svg data-id="${t}" class="favorites-icon-trash">
  <use href="${s}#icon-trash-favotites"></use>
</svg>
  </button></div>`}function i(){return`<div class="favortes-no-exercises">
  <div class="favortes-no-exercises-found-img">
      </div>
  <p class="favortes-no-exercises-found-text">
    It appears that you haven't added any exercises to your favorites
    yet. To get started, you can add exercises that you like to your
    favorites for easier access in the future.
  </p>
</div>`}const o=document.querySelector(".favorites-list-exercises-likes"),n=[];if(localStorage.length>2)try{n.push(JSON.parse(localStorage.getItem("favorites")));const e=n.flatMap(t=>t),s=f(e,m);o.insertAdjacentHTML("beforeend",s),o.addEventListener("click",t=>{const r=t.target.dataset.id;r&&(document.querySelector(`.exercise-card[data-id="${r}"]`).remove(),e.map(a=>{if(a._id===r){const v=e.indexOf(a);e.splice(v,1),localStorage.setItem("favorites",JSON.stringify(e)),e.length||(localStorage.removeItem("favorites"),o.insertAdjacentHTML("beforeend",i()))}}))})}catch(e){console.log(e.message)}else o.insertAdjacentHTML("beforeend",i());const d=document.querySelectorAll(".button-home"),l=document.querySelectorAll(".button-favorites");c(l,d);l.forEach(e=>{e.addEventListener("click",s=>{c([e],d)})});u();
//# sourceMappingURL=commonHelpers.js.map
