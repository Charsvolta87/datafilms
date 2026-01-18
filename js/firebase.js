import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  child,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGIkqTCq8tXbclZVNUnEmPUgNgVRXz_H0",
  authDomain: "datafilms-d3160.firebaseapp.com",
  databaseURL: "https://datafilms-d3160-default-rtdb.firebaseio.com",
  projectId: "datafilms-d3160",
  storageBucket: "datafilms-d3160.appspot.com",
  messagingSenderId: "554321965868",
  appId: "1:554321965868:web:2420b38a02e9e8b981b289"
};

const app = initializeApp(firebaseConfig);

// Realtime Database
export const db = getDatabase(app);
export { ref, push, set, get, child, update, remove };
