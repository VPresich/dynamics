import{K as u,e as f,o as v,m as i,a as g}from"./assets/handle-menu-buttons-7493e057.js";import"./assets/vendor-32231325.js";function m(e,s,t){return`<div><button data-id="${t}" class="favorites-button-remove" type="button">
  <svg data-id="${t}" class="favorites-icon-trash">
  <use href="${s}#icon-trash-favotites"></use>
</svg>
  </button></div>`}function y(){return`<div class="favortes-no-exercises">
  <div class="favortes-no-exercises-found-img">
      </div>
  <p class="favortes-no-exercises-found-text">
    It appears that you haven't added any exercises to your favorites
    yet. To get started, you can add exercises that you like to your
    favorites for easier access in the future.
  </p>
</div>`}function x(e,s){document.querySelector(`.exercise-card[data-id="${s}"]`).remove(),e.map(t=>{if(t._id===s){const o=e.indexOf(t);e.splice(o,1),localStorage.setItem("favorites",JSON.stringify(e)),e.length||(localStorage.removeItem(KEY_LOCALSTORAGE),favoriteslistExercises.insertAdjacentHTML("beforeend",getFavortesNoExercises()))}})}const a=document.querySelector(".favorites-list-exercises-likes"),r=[];if(localStorage.length>2)try{r.push(JSON.parse(localStorage.getItem(u)));const e=r.flatMap(t=>t),s=f(e,m);a.insertAdjacentHTML("beforeend",s),a.addEventListener("click",t=>{if(t.target.classList.contains("gallery-start")){v(t);return}const o="favorites-icon-trash",l=t.target,d=t.target.dataset.id;l.getAttribute("class")===o&&x(e,d)})}catch(e){console.log(e.message)}else a.insertAdjacentHTML("beforeend",y());const c=document.querySelectorAll(".button-home"),n=document.querySelectorAll(".button-favorites");i(n,c);n.forEach(e=>{e.addEventListener("click",s=>{i([e],c)})});g();
//# sourceMappingURL=commonHelpers.js.map
