import { getCatalog } from "../data/catalog.service.js";
import { renderFilters, applyFilters } from "../components/filters.js";

export async function renderActors(container) {
  const catalog = await getCatalog();

  const actorsMap = {};

  catalog.forEach(item => {
    if (!Array.isArray(item.actors)) return;

    item.actors.forEach(actor => {
      if (!actorsMap[actor]) {
        actorsMap[actor] = {
          name: actor,
          works: []
        };
      }

      actorsMap[actor].works.push(item.title);
    });
  });

  const actors = Object.values(actorsMap).sort((a, b) =>
  a.name.localeCompare(b.name)
);

  container.innerHTML = `
    <h2>Actores</h2>
    ${renderFilters({ hideType: true })}
    <div class="grid" id="actorsGrid"></div>
  `;

  const grid = document.getElementById("actorsGrid");

  function render(list) {
    grid.innerHTML = "";

    list.forEach(actor => {
      const card = document.createElement("div");
      card.className = "accordion-item";

      card.innerHTML = `
        <div class="accordion-header">
          <span class="accordion-title">${actor.name}</span>
          <span class="accordion-icon">▸</span>
        </div>
        <div class="accordion-body">
          <p><strong>Participaciones:</strong> ${actor.works.length}</p>
          <ul>
            ${actor.works.map(w => `<li>${w}</li>`).join("")}
          </ul>
        </div>
      `;

      card.querySelector(".accordion-header").addEventListener("click", () => {
        card.classList.toggle("open");
      });

      grid.appendChild(card);
    });
  }

  applyFilters(actors, render, {
    searchFields: ["name"],
    extraFilter: (actor, value) =>
      actor.works.some(work =>
        work.toLowerCase().includes(value)
      )
  });

}
