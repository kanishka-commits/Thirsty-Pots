// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2umcBHp2WuwP-WlQHaToOWRFVNqgNQ_I",
  authDomain: "water-your-plant--crush.firebaseapp.com",
  projectId: "water-your-plant--crush",
  storageBucket: "water-your-plant--crush.firebasestorage.app",
  messagingSenderId: "576886051617",
  appId: "1:576886051617:web:1a4e191b0379a903db6460",
  measurementId: "G-0TL88GWGVN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);