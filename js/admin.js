import {
  addTitle,
  updateTitle,
  getTitleById
} from "./data/catalog.service.js";

const form = document.getElementById("adminForm");
const typeSelect = document.getElementById("type");
const seriesFields = document.getElementById("seriesFields");

const params = new URLSearchParams(location.search);
const editId = params.get("id");

/* Mostrar campos de serie */
typeSelect.addEventListener("change", () => {
  seriesFields.style.display =
    typeSelect.value === "series" ? "block" : "none";
});

/* MODO EDICIÓN */
if (editId) {
  document.querySelector("h1").textContent = "✏️ Editar título";

  const data = await getTitleById(editId);
  if (data) {
    typeSelect.value = data.type;
    document.getElementById("title").value = data.title;
    document.getElementById("year").value = data.year;
    document.getElementById("genre").value = data.genre?.join(", ") || "";
    document.getElementById("actors").value = data.actors?.join(", ") || "";
    document.getElementById("director").value = data.director || "";
    document.getElementById("notes").value = data.notes || "";
    document.getElementById("seasons").value = data.seasons || "";
    document.getElementById("episodes").value = data.episodes || "";

    seriesFields.style.display =
      data.type === "series" ? "block" : "none";
  }
}

/* SUBMIT */
form.addEventListener("submit", async e => {
  e.preventDefault();

  const item = {
    type: typeSelect.value,
    title: title.value.trim(),
    year: Number(year.value),
    genre: genre.value.split(",").map(g => g.trim()).filter(Boolean),
    actors: actors.value.split(",").map(a => a.trim()).filter(Boolean),
    director: director.value.trim(),
    notes: notes.value.trim(),
    seasons: Number(seasons.value) || null,
    episodes: Number(episodes.value) || null
  };

  try {
    if (editId) {
      await updateTitle(editId, item);
      alert("Cambios guardados ✅");
    } else {
      await addTitle(item);
      alert("Título agregado ✅");
    }

    location.href = "index.html#/";
  } catch (err) {
    console.error(err);
    alert("Error al guardar ❌");
  }
});

form.querySelector("button").textContent =
  editId ? "Guardar cambios" : "Guardar";
