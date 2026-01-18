export function renderHome(app) {
  app.innerHTML = `
    <h2>Bienvenido 👋</h2>
    <p>Este es tu organizador personal de películas y series.</p>

    <div class="grid">
      <div class="card">
        <h3>🎬 Películas</h3>
        <a href="#/movies">Ver películas</a>
      </div>

      <div class="card">
        <h3>📺 Series</h3>
        <a href="#/series">Ver series</a>
      </div>
    </div>
  `;
}
