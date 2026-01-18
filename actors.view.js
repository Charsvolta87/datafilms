import { getActors, getTitlesByActor } from "../data/actor.service.js";
import { createCard } from "../components/card.js";

export async function renderActors(container) {
  const actors = await getActors();

  container.innerHTML = `
    <h2>Actores</h2>
    <div class="list">
      ${actors.map(a => `
        <div class="actor-item" data-name="${a.name}">
          ${a.name}
        </div>
      `).join("")}
    </div>
    <div id="actorDetail"></div>
  `;

  document.querySelectorAll(".actor-item").forEach(el => {
    el.onclick = async () => {
      const name = el.dataset.name;
      const titles = await getTitlesByActor(name);

      document.getElementById("actorDetail").innerHTML = `
        <h3>${name}</h3>
        <div class="grid">
          ${titles.map(t => createCard(t).outerHTML).join("")}
        </div>
      `;
    };
  });
}
