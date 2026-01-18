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
    </div>
  `;

  const header = wrapper.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    const isOpen = wrapper.classList.contains("open");

    // cerrar otros
    document
      .querySelectorAll(".accordion-item.open")
      .forEach(el => el.classList.remove("open"));

    // toggle actual
    if (!isOpen) wrapper.classList.add("open");
  });

  return wrapper;
}
