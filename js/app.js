import { renderHome } from "./views/home.view.js";
import { renderMovies } from "./views/movies.view.js";
import { renderSeries } from "./views/series.view.js";

const app = document.getElementById("app");

function router() {
  const route = location.hash || "#/";

  app.innerHTML = "";

  if (route === "#/movies") {
    renderMovies(app);
  } else if (route === "#/series") {
    renderSeries(app);
  } else {
    renderHome(app);
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
