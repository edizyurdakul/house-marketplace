// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg3BdUTn8rSqiDaRaVw14aLfMz7_PYGGM",
  authDomain: "newhome-ediz.firebaseapp.com",
  projectId: "newhome-ediz",
  storageBucket: "newhome-ediz.appspot.com",
  messagingSenderId: "105954009644",
  appId: "1:105954009644:web:1dcab68bcc89c3c678e789",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFireStore();
