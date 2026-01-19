import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";
import { renderFilters, applyFilters } from "../components/filters.js";
import { renderSortButton, applySort } from "../components/sort.js";

export async function renderHome(container) {
  const data = await getCatalog();

  container.innerHTML = `
    <h2>Catálogo</h2>
    ${renderSortButton()}
    ${renderFilters()}
    <div class="grid" id="homeGrid"></div>
  `;

  const grid = document.getElementById("homeGrid");

  function render(list) {
    grid.innerHTML = "";
    list.forEach(item => grid.appendChild(createCard(item)));
  }

  applyFilters(actors, render, {
  searchFields: ["name"],
  extraFilter: (actor, value) =>
    actor.works.some(w =>
      w.toLowerCase().includes(value)
    )
});


}

