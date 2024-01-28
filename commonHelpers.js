import"./assets/styles-c3ebc9ef.js";import{a as l}from"./assets/vendor-0a7943b3.js";const d=document.querySelector(".favorites-quote-day-title"),f=l.create({baseURL:"https://energyflow.b.goit.study/api"});f.get("/quote ").then(e=>{d.insertAdjacentHTML("beforeend",` <p class="favorites-quote-day-text">
                ${e.data.quote}
                </p>
                    <p class="favorites-quote-day-text-autor">${e.data.author}</p>`)}).catch(e=>console.log(e));const i=document.querySelector(".favorites-list-exercises-likes");l.create({baseURL:"https://energyflow.b.goit.study/api"});const n=[];if(localStorage.length>2)try{n.push(JSON.parse(localStorage.getItem("favorites")));const e=n.flatMap(s=>s),c=u(e);i.insertAdjacentHTML("beforeend",c),e.map(s=>console.log(s._id)),i.addEventListener("click",s=>{const t=s.target.id;t&&(document.querySelector(`.list-exercises-favorites[data-listId="${t}"]`).remove(),e.map(a=>{if(a._id===t){const o=e.indexOf(a);e.splice(o,1),localStorage.setItem("favorites",JSON.stringify(e)),e.length||(localStorage.removeItem("favorites"),i.insertAdjacentHTML("beforeend",`<div class="favortes-no-exercises">
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
  </div>`);function u(e){return e.reduce((s,{bodyPart:t,burnedCalories:a,name:o,target:v,_id:r})=>s+` <li data-listId="${r}" class="list-exercises-favorites">
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
                <p class="exercises-favorites-name">${o}</p>
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
                        >${v}
                    </li>
                </ul>
            </div>
        </li>`,"")}
//# sourceMappingURL=commonHelpers.js.map
