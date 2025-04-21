// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCXRrX2x1OM9SzwtVIzNz0ufP1atDSAXc",
  authDomain: "woodmetal-store.firebaseapp.com",
  projectId: "woodmetal-store",
  storageBucket: "woodmetal-store.firebasestorage.app",
  messagingSenderId: "844221007951",
  appId: "1:844221007951:web:6c590ece45b2df5884823a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
