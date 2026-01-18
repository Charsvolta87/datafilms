export function renderFilters() {
  return `
    <div class="filters">
      <input type="text" id="fText" placeholder="Buscar por título">
      <input type="text" id="fGenre" placeholder="Género">
      <input type="text" id="fActor" placeholder="Actor">
      <input type="number" id="fYear" placeholder="Año">
    </div>
  `;
}

export function applyFilters(data, render) {
  const fText = document.getElementById("fText");
  const fGenre = document.getElementById("fGenre");
  const fActor = document.getElementById("fActor");
  const fYear = document.getElementById("fYear");

  function filter() {
    let result = data;

    if (fText.value)
      result = result.filter(i =>
        i.title.toLowerCase().includes(fText.value.toLowerCase())
      );

    if (fGenre.value)
      result = result.filter(i =>
        i.genre?.some(g =>
          g.toLowerCase().includes(fGenre.value.toLowerCase())
        )
      );

    if (fActor.value)
      result = result.filter(i =>
        i.actors?.some(a =>
          a.toLowerCase().includes(fActor.value.toLowerCase())
        )
      );

    if (fYear.value)
      result = result.filter(i => i.year == fYear.value);

    render(result);
  }

  [fText, fGenre, fActor, fYear].forEach(i =>
    i.addEventListener("input", filter)
  );
}
