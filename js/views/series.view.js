import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";
import { renderFilters, applyFilters } from "../components/filters.js";

export async function renderSeries(container) {
  const data = (await getCatalog()).filter(i => i.type === "series");

  container.innerHTML = `
    <h2>Series</h2>
    ${renderFilters()}
    <div class="grid" id="seriesGrid"></div>
  `;

  const grid = document.getElementById("seriesGrid");

  function render(list) {
    grid.innerHTML = "";
    list.forEach(item => grid.appendChild(createCard(item)));
  }

  render(data);
  applyFilters(data, render);
}
