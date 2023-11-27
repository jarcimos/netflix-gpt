// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGu7JZryigcw_Vo1wDtWVjl40RwZk5NVY",
  authDomain: "netflixgpt-2ebb6.firebaseapp.com",
  projectId: "netflixgpt-2ebb6",
  storageBucket: "netflixgpt-2ebb6.appspot.com",
  messagingSenderId: "244158977913",
  appId: "1:244158977913:web:4e67043f8f141ef76e81a8",
  measurementId: "G-RZK75YLGC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();