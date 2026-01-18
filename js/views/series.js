import { series } from "../data/series.js";
import { getStoredData } from "../data/storage.js";

export function renderSeries(app) {
  const stored = getStoredData().filter(i => i.type === "series");
  const all = [...series, ...stored];

  app.innerHTML = `
    <h2>Series</h2>
    <div class="grid">
      ${all.map(show => `
        <div class="card">
          <h3>${show.title}</h3>
          <small>${show.year}</small>
          <p>${show.seasons || "?"} temporadas</p>
        </div>
      `).join("")}
    </div>
  `;
}
