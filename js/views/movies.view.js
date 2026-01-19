import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";
import { renderFilters, applyFilters } from "../components/filters.js";
import { renderSortButton, applySort } from "../components/sort.js";

export async function renderMovies(container) {
  const originalData = (await getCatalog()).filter(
    i => i.type === "movie"
  );

  container.innerHTML = `
    <h2>Películas</h2>
    ${renderSortButton()}
    ${renderFilters()}
    <div class="grid" id="moviesGrid"></div>
  `;

  const grid = document.getElementById("moviesGrid");

  function render(list) {
    grid.innerHTML = "";
    list.forEach(item => grid.appendChild(createCard(item)));
  }

  applySort(data, sortedData => {
  applyFilters(sortedData, render, {
    searchFields: ["title", "actors", "director"]
  });
});
}

