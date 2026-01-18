import { getCatalog } from "../data/catalog.service.js";

export async function renderSeries(app) {
  app.innerHTML = "<p>Cargando...</p>";

  const data = await getCatalog();
  const series = data.filter(i => i.type === "series");

  app.innerHTML = `
    <h2>Series</h2>
    <div class="grid">
      ${series.map(show => `
        <div class="card">
          <h3>${show.title}</h3>
          <small>${show.year}</small>
          <p>${show.seasons || "?"} temporadas</p>
        </div>
      `).join("")}
    </div>
  `;
}
