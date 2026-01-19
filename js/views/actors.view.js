import { getCatalog } from "../data/catalog.service.js";

export async function renderActors(container) {
  const catalog = await getCatalog();

  const actorsMap = {};

  catalog.forEach(item => {
    if (!item.actors) return;

    item.actors.forEach(actor => {
      if (!actorsMap[actor]) {
        actorsMap[actor] = [];
      }

      actorsMap[actor].push({
        id: item.id,
        title: item.title,
        type: item.type,
        year: item.year
      });
    });
  });

  const actors = Object.keys(actorsMap).sort();

  container.innerHTML = `
    <h2>Actores</h2>
    <div class="actors-list">
      ${actors.map(actor => `
        <div class="actor-card">
          <div class="actor-header">${actor}</div>
          <div class="actor-body">
            <ul>
              ${actorsMap[actor].map(work => `
                <li>
                  ${work.title}
                  <span class="badge">${work.type}</span>
                  ${work.year ? `(${work.year})` : ""}
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}
