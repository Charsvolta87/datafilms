import { movies } from "../data/movies.js";
import { series } from "../data/series.js";
import { actors } from "../data/actors.js";

export function renderTitle(app, id) {
  const item = [...movies, ...series].find(t => t.id === id);

  if (!item) {
    app.innerHTML = "<p>Título no encontrado</p>";
    return;
  }

  const cast = item.actors
    .map(a => actors.find(act => act.id === a))
    .map(a => `<a href="#/actor/${a.id}">${a.name}</a>`)
    .join(", ");

  app.innerHTML = `
    <h2>${item.title}</h2>
    <p>Año: ${item.year}</p>
    <p>Género: ${item.genre.join(", ")}</p>
    ${item.seasons ? `<p>Temporadas: ${item.seasons}</p>` : ""}
    ${item.episodes ? `<p>Episodios: ${item.episodes}</p>` : ""}
    <p>Actores: ${cast}</p>
  `;
}
