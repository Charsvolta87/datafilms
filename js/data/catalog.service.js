import { db, ref, push, set, get, child } from "../firebase.js";

const COLLECTION = "catalog";

/* Guardar título */
export async function addTitle(data) {
  const newRef = push(ref(db, COLLECTION));
  await set(newRef, {
    ...data,
    createdAt: Date.now()
  });
}

/* Obtener todo el catálogo */
export async function getCatalog() {
  const snapshot = await get(child(ref(db), COLLECTION));

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  return Object.keys(data).map(id => ({
    id,
    ...data[id]
  })).sort((a, b) => b.createdAt - a.createdAt);
}
