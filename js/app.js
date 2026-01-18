import { renderHome } from "./views/home.js";
import { renderMovies } from "./views/movies.js";
import { renderSeries } from "./views/series.js";
import { renderTitle } from "./views/title.js";
import { renderActor } from "./views/actor.js";

const app = document.getElementById("app");

function router() {
  const route = location.hash.slice(2).split("/");

  app.innerHTML = "";

  switch (route[0]) {
    case "":
      renderHome(app);
      break;
    case "movies":
      renderMovies(app);
      break;
    case "series":
      renderSeries(app);
      break;
    case "title":
      renderTitle(app, route[1]);
      break;
    case "actor":
      renderActor(app, route[1]);
      break;
    default:
      app.innerHTML = "<h2>Página no encontrada</h2>";
  }
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
