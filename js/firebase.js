// Firebase CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGIkqTCq8tXbclZVNUnEmPUgNgVRXz_H0",
  authDomain: "datafilms-d3160.firebaseapp.com",
  projectId: "datafilms-d3160",
  storageBucket: "datafilms-d3160.appspot.com",
  messagingSenderId: "554321965868",
  appId: "1:554321965868:web:2420b38a02e9e8b981b289"
};

const app = initializeApp(firebaseConfig);

// 👇 COMPATIBLE CON BRAVE / ADBLOCK / VPN
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});
