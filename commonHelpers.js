import"./assets/styles-f8daa94f.js";import{a as e}from"./assets/vendor-0a7943b3.js";const o=document.querySelector(".favorites-quote-day-title"),a=e.create({baseURL:"https://energyflow.b.goit.study/api"});a.get("/quote ").then(t=>{o.insertAdjacentHTML("beforeend",` <p class="favorites-quote-day-text">
                ${t.data.quote}
                </p>
                    <p class="favorites-quote-day-text-autor">${t.data.author}</p>`)}).catch(t=>console.log(t));
//# sourceMappingURL=commonHelpers.js.map
