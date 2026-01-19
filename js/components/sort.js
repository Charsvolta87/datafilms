let currentSort = "alpha"; // siempre alfabético al cargar

export function renderSortButton() {
  return `
    <div class="sort-box">
      <button id="sortBtn">🔤 A–Z</button>
    </div>
  `;
}

export function applySort(data, render) {
  const btn = document.getElementById("sortBtn");

  const modes = [
    { id: "alpha", label: "🔤 A–Z" },
    { id: "year", label: "📅 Año" },
    { id: "created", label: "🆕 Últimos" }
  ];

  // 🔥 FORZAR orden inicial SIEMPRE
  currentSort = "alpha";
  btn.textContent = modes.find(m => m.id === currentSort).label;
  render(sortData(data));

  btn.addEventListener("click", () => {
    const index = modes.findIndex(m => m.id === currentSort);
    currentSort = modes[(index + 1) % modes.length].id;
    btn.textContent = modes.find(m => m.id === currentSort).label;
    render(sortData(data));
  });
}

function sortData(data) {
  const list = [...data];

  switch (currentSort) {
    case "alpha":
      return list.sort((a, b) =>
        (a.title || "").localeCompare(b.title || "")
      );

    case "year":
      return list.sort((a, b) =>
        (b.year || 0) - (a.year || 0)
      );

    case "created":
      return list.sort((a, b) =>
        (b.createdAt || 0) - (a.createdAt || 0)
      );

    default:
      return list;
  }
}
