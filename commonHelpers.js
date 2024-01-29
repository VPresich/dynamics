import{m as l,a as g}from"./assets/handle-menu-buttons-aa7c4817.js";import{a as d}from"./assets/vendor-0a7943b3.js";const p=document.querySelector(".favorites-quote-day-title"),y=d.create({baseURL:"https://energyflow.b.goit.study/api"});y.get("/quote ").then(e=>{p.insertAdjacentHTML("beforeend",` <p class="favorites-quote-day-text">
                ${e.data.quote}
                </p>
                    <p class="favorites-quote-day-text-autor">${e.data.author}</p>`)}).catch(e=>console.log(e));const i=document.querySelector(".favorites-list-exercises-likes");d.create({baseURL:"https://energyflow.b.goit.study/api"});const n=[];if(localStorage.length>2)try{n.push(JSON.parse(localStorage.getItem("favorites")));const e=n.flatMap(s=>s),o=m(e);i.insertAdjacentHTML("beforeend",o),e.map(s=>console.log(s._id)),i.addEventListener("click",s=>{const t=s.target.id;t&&(document.querySelector(`.list-exercises-favorites[data-listId="${t}"]`).remove(),e.map(a=>{if(a._id===t){const c=e.indexOf(a);e.splice(c,1),localStorage.setItem("favorites",JSON.stringify(e)),e.length||(localStorage.removeItem("favorites"),i.insertAdjacentHTML("beforeend",`<div class="favortes-no-exercises">
                  <div class="favortes-no-exercises-found-img">
                  
                      </div>
                  
                  <p class="favortes-no-exercises-found-text">
                    It appears that you haven't added any exercises to your favorites
                    yet. To get started, you can add exercises that you like to your
                    favorites for easier access in the future.
                  </p>
                </div>`))}}))})}catch{console.log("Parse form storage error")}else i.insertAdjacentHTML("beforeend",`<div class="favortes-no-exercises">
    <div class="favortes-no-exercises-found-img">
    
        </div>
    
    <p class="favortes-no-exercises-found-text">
      It appears that you haven't added any exercises to your favorites
      yet. To get started, you can add exercises that you like to your
      favorites for easier access in the future.
    </p>
  </div>`);function m(e){return e.reduce((s,{bodyPart:t,burnedCalories:a,name:c,target:u,_id:r})=>s+` <li data-listId="${r}" class="list-exercises-favorites">
            <div class="list-exercises-favorites-category">
                <div>
                    <p class="exercises-favorites-name-category">WORKOUT</p>
                    <button id="${r}" class="favorites-button-remove" type="button">
                    <svg id="${r}" class="favorites-icon-trash">
                    <use id="${r}"
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
                        >${a} / 3 min
                    </li>
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Body part: </span
                        >${t}
                    </li>
                    <li class="favorites-list-characteristic">
                        <span class="favorites-characteristic-criteria"
                            >Target: </span
                        >${u}
                    </li>
                </ul>
            </div>
        </li>`,"")}const v=document.querySelectorAll(".button-home"),f=document.querySelectorAll(".button-favorites");l(f,v);f.forEach(e=>{e.addEventListener("click",o=>{l([e],v)})});g();
//# sourceMappingURL=commonHelpers.js.map
