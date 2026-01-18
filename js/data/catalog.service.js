import {
  db,
  ref,
  push,
  set,
  get,
  child,
  update,
  remove
} from "../firebase.js";

const COLLECTION = "catalog";

/* CREAR */
export async function addTitle(data) {
  const newRef = push(ref(db, COLLECTION));
  await set(newRef, {
    ...data,
    createdAt: Date.now()
  });
}

/* LEER */
export async function getCatalog() {
  const snapshot = await get(child(ref(db), COLLECTION));

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  return Object.keys(data)
    .map(id => ({
      id,
      ...data[id]
    }))
    .sort((a, b) => b.createdAt - a.createdAt);
}

/* EDITAR */
export async function updateTitle(id, data) {
  const itemRef = ref(db, `${COLLECTION}/${id}`);
  await update(itemRef, data);
}

/* BORRAR */
export async function deleteTitle(id) {
  const itemRef = ref(db, `${COLLECTION}/${id}`);
  await remove(itemRef);
}

export async function getTitleById(id) {
  const snapshot = await get(child(ref(db), `catalog/${id}`));
  if (!snapshot.exists()) return null;
  return snapshot.val();
}
