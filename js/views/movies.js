import { movies } from "../data/movies.js";
import { getStoredData } from "../data/storage.js";

export function renderMovies(app) {
  const stored = getStoredData().filter(i => i.type === "movie");
  const all = [...movies, ...stored];

  app.innerHTML = `
    <h2>Películas</h2>
    <div class="grid">
      ${all.map(movie => `
        <div class="card">
          <h3>${movie.title}</h3>
          <small>${movie.year}</small>
          <p>${movie.genre.join(", ")}</p>
        </div>
      `).join("")}
    </div>
  `;
}
