// Firebase CDN (compatible con GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Configuración de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyCGIkqTCq8tXbclZVNUnEmPUgNgVRXz_H0",
  authDomain: "datafilms-d3160.firebaseapp.com",
  projectId: "datafilms-d3160",
  storageBucket: "datafilms-d3160.appspot.com",
  messagingSenderId: "554321965868",
  appId: "1:554321965868:web:2420b38a02e9e8b981b289"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);
