// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSlHU1svohsuP1nASh6xxpv_4xNFe0W1A",
  authDomain: "netflixgpt-45aa6.firebaseapp.com",
  projectId: "netflixgpt-45aa6",
  storageBucket: "netflixgpt-45aa6.appspot.com",
  messagingSenderId: "353162851170",
  appId: "1:353162851170:web:7a2dc5fb230b0ce213723b",
  measurementId: "G-EXBLCEH6YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();