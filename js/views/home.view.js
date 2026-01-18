import { getCatalog } from "../data/catalog.service.js";
import { createCard } from "../components/card.js";

export async function renderHome(container) {
  const titles = await getCatalog();

  container.innerHTML = `
    <h2>Últimos agregados</h2>
    <div class="grid" id="homeGrid"></div>
  `;

  const grid = document.getElementById("homeGrid");

  titles.slice(0, 10).forEach(item => {
    grid.appendChild(createCard(item));
  });
}
