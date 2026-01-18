import { actors } from "../data/actors.js";

export function renderActor(app, id) {
  const actor = actors.find(a => a.id === id);

  if (!actor) {
    app.innerHTML = "<p>Actor no encontrado</p>";
    return;
  }

  app.innerHTML = `
    <h2>${actor.name}</h2>
    <p>Año de nacimiento: ${actor.birthYear}</p>
  `;
}
