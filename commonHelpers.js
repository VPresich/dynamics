import{m as l,a as u}from"./assets/handle-menu-buttons-928543f0.js";import{a as g}from"./assets/vendor-0a7943b3.js";const a=document.querySelector(".favorites-list-exercises-likes");g.create({baseURL:"https://energyflow.b.goit.study/api"});const n=[];if(localStorage.length>2)try{n.push(JSON.parse(localStorage.getItem("favorites")));const e=n.flatMap(s=>s),o=m(e);a.insertAdjacentHTML("beforeend",o),e.map(s=>console.log(s._id)),a.addEventListener("click",s=>{const t=s.target.id;t&&(document.querySelector(`.list-exercises-favorites[data-listId="${t}"]`).remove(),e.map(r=>{if(r._id===t){const c=e.indexOf(r);e.splice(c,1),localStorage.setItem("favorites",JSON.stringify(e)),e.length||(localStorage.removeItem("favorites"),a.insertAdjacentHTML("beforeend",`<div class="favortes-no-exercises">
                  <div class="favortes-no-exercises-found-img">
                  
                      </div>
                  
                  <p class="favortes-no-exercises-found-text">
                    It appears that you haven't added any exercises to your favorites
                    yet. To get started, you can add exercises that you like to your
                    favorites for easier access in the future.
                  </p>
                </div>`))}}))})}catch{console.log("Parse form storage error")}else a.insertAdjacentHTML("beforeend",`<div class="favortes-no-exercises">
    <div class="favortes-no-exercises-found-img">
    
        </div>
    
    <p class="favortes-no-exercises-found-text">
      It appears that you haven't added any exercises to your favorites
      yet. To get started, you can add exercises that you like to your
      favorites for easier access in the future.
    </p>
  </div>`);function m(e){return e.reduce((s,{bodyPart:t,burnedCalories:r,name:c,target:f,_id:i})=>s+` <li data-listId="${i}" class="list-exercises-favorites">
            <div class="list-exercises-favorites-category">
                <div>
                    <p class="exercises-favorites-name-category">WORKOUT</p>
                    <button id="${i}" class="favorites-button-remove" type="button">
                    <svg id="${i}" class="favorites-icon-trash">
                    <use id="${i}"
                        xlink:href="./img/icons/symbols.svg#icon-trash-favotites"
                    ></use>
                </svg>
                    </button>
                </div>

                <button
                    type="submit"
                    class="exercises-favorites-but-start"
                >
                Start<svg class="favorites-icon-arrow">
                <use
                    xlink:href="./img/icons/symbols.svg#icon-arrow"
                ></use>
            </svg>
                </button>
            </div>
            <div class="list-exercises-favorites-name">
                <svg class="favorites-social-icon-run" width="24" height="24">
                <use
                href="./img/icons/symbols.svg#favorites=icon-run-exercises"
            ></use>
                </svg>
                <p class="exercises-favorites-name">${c}</p>
            </div>
            <div class="list-exercises-favorites-conteiner">
                <ul class="list-exercises-favorites-characteristic">
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Burned calories: </span
                        >${r} / 3 min
                    </li>
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Body part: </span
                        >${t}
                    </li>
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Target: </span
                        >${f}
                    </li>
                </ul>
            </div>
        </li>`,"")}const v=document.querySelectorAll(".button-home"),d=document.querySelectorAll(".button-favorites");l(d,v);d.forEach(e=>{e.addEventListener("click",o=>{l([e],v)})});u();
//# sourceMappingURL=commonHelpers.js.map
