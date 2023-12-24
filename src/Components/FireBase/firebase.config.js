// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkPGvtt_E-JA_ElqGAOtEpj5UYRaWyZss",
  authDomain: "gadget-world-6b934.firebaseapp.com",
  projectId: "gadget-world-6b934",
  storageBucket: "gadget-world-6b934.appspot.com",
  messagingSenderId: "831518288309",
  appId: "1:831518288309:web:7318de9750a4f98366d1fc",
  measurementId: "G-XPTL1CB0E6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);