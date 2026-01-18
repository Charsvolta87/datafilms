import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";
import { renderFilters, applyFilters } from "../components/filters.js";
import { renderSortButton, applySort } from "../components/sort.js";

export async function renderHome(container) {
  const titles = (await getCatalog()).filter(i => i.type === "home");

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

  applySort(data, render);
  applyFilters(data, render);

  titles.slice(0, 10).forEach(item => {
    grid.appendChild(createCard(item));
  });
}
