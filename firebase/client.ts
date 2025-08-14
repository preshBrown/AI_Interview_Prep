import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYss8d6UF1MnkBRiP7cR7fNpSKXh93AdE",
  authDomain: "prepwise-28c9f.firebaseapp.com",
  projectId: "prepwise-28c9f",
  storageBucket: "prepwise-28c9f.firebasestorage.app",
  messagingSenderId: "551595329577",
  appId: "1:551595329577:web:8a22658abd2e837ed33438",
  measurementId: "G-SVN65X9ZX1"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApps();

export const auth = getAuth(app);
export const db = getFirestore(app);