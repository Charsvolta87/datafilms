import { getCatalog } from "../data/catalog.service.js";

export async function renderMovies(app) {
  app.innerHTML = "<p>Cargando...</p>";

  const data = await getCatalog();
  const movies = data.filter(i => i.type === "movie");

  app.innerHTML = `
    <h2>Películas</h2>
    <div class="grid">
      ${movies.map(movie => `
        <div class="card">
          <h3>${movie.title}</h3>
          <small>${movie.year}</small>
          <p>${movie.genre.join(", ")}</p>
        </div>
      `).join("")}
    </div>
  `;
}
