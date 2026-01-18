import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";
import { renderFilters, applyFilters } from "../components/filters.js";

export async function renderMovies(container) {
  const data = (await getCatalog()).filter(i => i.type === "movie");

  container.innerHTML = `
    <h2>Películas</h2>
    ${renderFilters()}
    <div class="grid" id="moviesGrid"></div>
  `;

  const grid = document.getElementById("moviesGrid");

  function render(list) {
    grid.innerHTML = "";
    list.forEach(item => grid.appendChild(createCard(item)));
  }

  render(data);
  applyFilters(data, render);
}
