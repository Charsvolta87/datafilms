async function router() {
  const route = location.hash.slice(2).split("/");
  app.innerHTML = "";

  switch (route[0]) {
    case "":
      renderHome(app);
      break;
    case "movies":
      await renderMovies(app);
      break;
    case "series":
      await renderSeries(app);
      break;
    default:
      app.innerHTML = "<h2>Página no encontrada</h2>";
  }
}
