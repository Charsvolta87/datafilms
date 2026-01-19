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

  function filter() {
    let filtered = [...data];

    const searchValue = searchInput?.value.toLowerCase() || "";
    const typeValue = typeFilter?.value || "";

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

    render(filtered);
  }

  searchInput?.addEventListener("input", filter);
  typeFilter?.addEventListener("change", filter);

  render(data);
}
