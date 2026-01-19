import { renderHome } from "./views/home.view.js";
import { renderMovies } from "./views/movies.view.js";
import { renderSeries } from "./views/series.view.js";
import { renderActors } from "./views/actors.view.js";

const app = document.getElementById("app");

function router() {
  const route = location.hash || "#/";

  app.innerHTML = "";

  switch (route) {
    case "#/movies":
      renderMovies(app);
      break;

    case "#/series":
      renderSeries(app);
      break;

    case "#/actors":
      renderActors(app);
      break;

    case "#/":
    default:
      renderHome(app);
      break;
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
