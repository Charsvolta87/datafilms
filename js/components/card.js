export function createCard(item) {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${item.title}</h3>
    <p><strong>Año:</strong> ${item.year}</p>
    <p><strong>Género:</strong> ${item.genre?.join(", ") || "-"}</p>
    <p><strong>Actores:</strong> ${item.actors?.join(", ") || "-"}</p>
    ${item.type === "series"
      ? `<p><strong>Temporadas:</strong> ${item.seasons || "-"}</p>`
      : ""}
  `;

  return div;
}
