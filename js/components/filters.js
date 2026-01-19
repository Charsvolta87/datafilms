export function renderFilters(options = {}) {
  const { hideType = false } = options;

  return `
    <div class="filters">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar..."
      />

      ${
        hideType
          ? ""
          : `
            <select id="typeFilter">
              <option value="">Todos</option>
              <option value="movie">Películas</option>
              <option value="series">Series</option>
            </select>
          `
      }

      <select id="directorFilter">
        <option value="">Todos los directores</option>
      </select>
    </div>
  `;
}

export function applyFilters(data, render, options = {}) {
  const {
    searchKey = "title",
    extraFilter = null
  } = options;

  const searchInput = document.getElementById("searchInput");
  const typeFilter = document.getElementById("typeFilter");
  const directorFilter = document.getElementById("directorFilter");

  // 🔹 Llenar directores UNA SOLA VEZ
  if (directorFilter) {
    const directors = [...new Set(
      data
        .map(item => item.director)
        .filter(Boolean)
    )].sort();

    directors.forEach(director => {
      const option = document.createElement("option");
      option.value = director;
      option.textContent = director;
      directorFilter.appendChild(option);
    });
  }

  function filter() {
    let filtered = [...data];

    const searchValue = searchInput?.value.toLowerCase() || "";
    const typeValue = typeFilter?.value || "";
    const directorValue = directorFilter?.value || "";

    if (searchValue) {
      filtered = filtered.filter(item => {
        const mainMatch =
          item[searchKey]?.toLowerCase().includes(searchValue);

        const extraMatch = extraFilter
          ? extraFilter(item, searchValue)
          : false;

        return mainMatch || extraMatch;
      });
    }

    if (typeValue) {
      filtered = filtered.filter(item => item.type === typeValue);
    }

    // 🎥 Filtro por director
    if (directorValue) {
      filtered = filtered.filter(
        item => item.director === directorValue
      );
    }

    render(filtered);
  }

  searchInput?.addEventListener("input", filter);
  typeFilter?.addEventListener("change", filter);
  directorFilter?.addEventListener("change", filter);

  render(data);
}
