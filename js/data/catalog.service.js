import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { db } from "../firebase.js";

const COLLECTION = "catalog";

/* Guardar título */
export async function addTitle(data) {
  await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: Date.now()
  });
}

/* Obtener TODO el catálogo */
export async function getCatalog() {
  const q = query(
    collection(db, COLLECTION),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
