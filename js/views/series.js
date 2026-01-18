import { series } from "../data/series.js";

export function renderSeries(app) {
  app.innerHTML = `
    <h2>Series</h2>
    <div class="grid">
      ${series.map(show => `
        <div class="card">
          <h3>${show.title}</h3>
          <small>${show.year}</small>
          <p>${show.seasons} temporadas · ${show.episodes} episodios</p>
          <a href="#/title/${show.id}">Ver ficha</a>
        </div>
      `).join("")}
    </div>
  `;
}
