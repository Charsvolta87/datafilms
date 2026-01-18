import { addTitle } from "./data/catalog.service.js";

const form = document.getElementById("adminForm");
const typeSelect = document.getElementById("type");
const seriesFields = document.getElementById("seriesFields");

typeSelect.addEventListener("change", () => {
  seriesFields.style.display =
    typeSelect.value === "series" ? "block" : "none";
});

form.addEventListener("submit", async e => {
  e.preventDefault();

  const item = {
    type: typeSelect.value,
    title: document.getElementById("title").value.trim(),
    year: Number(document.getElementById("year").value),
    genre: document.getElementById("genre").value.split(",").map(g => g.trim()),
    actors: document.getElementById("actors").value.split(",").map(a => a.trim()),
    director: document.getElementById("director").value.trim(),
    notes: document.getElementById("notes").value.trim(),
    seasons: Number(document.getElementById("seasons").value) || null,
    episodes: Number(document.getElementById("episodes").value) || null,
    status: "watching"
  };

  try {
    await addTitle(item);
    alert("Guardado en Firebase ✅");
    form.reset();
  } catch (err) {
    alert("Error al guardar ❌");
    console.error(err);
  }
});
