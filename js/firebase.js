// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGIkqTCq8tXbclZVNUnEmPUgNgVRXz_H0",
  authDomain: "datafilms-d3160.firebaseapp.com",
  projectId: "datafilms-d3160",
  storageBucket: "datafilms-d3160.firebasestorage.app",
  messagingSenderId: "554321965868",
  appId: "1:554321965868:web:2420b38a02e9e8b981b289",
  measurementId: "G-8Q50LGWKHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);