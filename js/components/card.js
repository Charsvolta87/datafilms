import { deleteTitle } from "../data/catalog.service.js";

export function createCard(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "accordion-item";

  wrapper.innerHTML = `
    <div class="accordion-header">
      <span class="accordion-title">${item.title}</span>
      <span class="accordion-icon">▸</span>
    </div>

    <div class="accordion-body">
      <p><strong>Año:</strong> ${item.year || "-"}</p>
      <p><strong>Género:</strong> ${item.genre?.join(", ") || "-"}</p>
      <p><strong>Actores:</strong> ${item.actors?.join(", ") || "-"}</p>
      <p><strong>Director:</strong> ${item.director || "-"}</p>

      ${
        item.type === "series"
          ? `
            <p><strong>Temporadas:</strong> ${item.seasons || "-"}</p>
            <p><strong>Episodios:</strong> ${item.episodes || "-"}</p>
          `
          : ""
      }

      ${item.notes ? `<p><strong>Notas:</strong> ${item.notes}</p>` : ""}

      <div class="card-actions">
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
      </div>
    </div>
  `;

  /* Accordion */
  const header = wrapper.querySelector(".accordion-header");
  header.onclick = () => {
    const open = wrapper.classList.contains("open");
    document.querySelectorAll(".accordion-item.open")
      .forEach(el => el.classList.remove("open"));
    if (!open) wrapper.classList.add("open");
  };

  /* Borrar */
  wrapper.querySelector(".delete").onclick = async (e) => {
    e.stopPropagation();
    if (confirm("¿Eliminar este título?")) {
      await deleteTitle(item.id);
      location.reload();
    }
  };

  /* Editar (placeholder) */
  wrapper.querySelector(".edit").onclick = (e) => {
    e.stopPropagation();
    location.href = `admin.html?id=${item.id}`;
  };

  return wrapper;
}
