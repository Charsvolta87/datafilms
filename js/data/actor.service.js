import {
  ref,
  get
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

import { db } from "../firebase.js";

/* Todos los actores */
export async function getActors() {
  const snapshot = await get(ref(db, "actors"));
  const data = snapshot.val() || {};

  return Object.entries(data).map(([id, actor]) => ({
    id,
    ...actor
  }));
}

/* Películas de un actor */
export async function getTitlesByActor(name) {
  const snapshot = await get(ref(db, "catalog"));
  const data = snapshot.val() || {};

  return Object.values(data).filter(item =>
    item.actors?.includes(name)
  );
}
