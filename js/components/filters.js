export function renderFilters(options = {}) {
  const { hideType = false } = options;

  return `
    <div class="filters">
      <input
        type="text"
        id="searchInput"
        placeholder="Buscar título, actor o director..."
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
    searchFields = ["title"],
    extraFilter = null
  } = options;

  const searchInput = document.getElementById("searchInput");
  const typeFilter = document.getElementById("typeFilter");

  function matchesSearch(item, value) {
    return searchFields.some(field => {
      const fieldValue = item[field];

      if (!fieldValue) return false;

      if (Array.isArray(fieldValue)) {
        return fieldValue.some(v =>
          v.toLowerCase().includes(value)
        );
      }

      return fieldValue.toLowerCase().includes(value);
    });
  }

  function filter() {
    let filtered = [...data];

    const searchValue = searchInput?.value.toLowerCase() || "";
    const typeValue = typeFilter?.value || "";

    if (searchValue) {
      filtered = filtered.filter(item => {
        const mainMatch = matchesSearch(item, searchValue);
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
