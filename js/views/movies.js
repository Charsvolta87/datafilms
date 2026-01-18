import { movies } from "../data/movies.js";

export function renderMovies(app) {
  app.innerHTML = `
    <h2>Películas</h2>
    <div class="grid">
      ${movies.map(movie => `
        <div class="card">
          <h3>${movie.title}</h3>
          <small>${movie.year}</small>
          <p>${movie.genre.join(", ")}</p>
          <a href="#/title/${movie.id}">Ver ficha</a>
        </div>
      `).join("")}
    </div>
  `;
}
