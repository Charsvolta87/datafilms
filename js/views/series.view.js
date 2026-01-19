import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";
import { renderFilters, applyFilters } from "../components/filters.js";
import { renderSortButton, applySort } from "../components/sort.js";

export async function renderSeries(container) {
  const data = (await getCatalog()).filter(i => i.type === "series");

  container.innerHTML = `
    <h2>Series</h2>
    ${renderSortButton()}
    ${renderFilters()}
    <div class="grid" id="seriesGrid"></div>
  `;

  const grid = document.getElementById("seriesGrid");

  function render(list) {
    grid.innerHTML = "";
    list.forEach(item => grid.appendChild(createCard(item)));
  }

  applySort(data, sorted => {
  applyFilters(sorted, render, {
    searchFields: ["title", "actors", "director"]
  });
});

}
