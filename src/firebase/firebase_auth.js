// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjFA5UfJkHeOoGkbNvbJWxt6NvPDFUZyg",
    authDomain: "inbocadb.firebaseapp.com",
    databaseURL: "https://inbocadb-default-rtdb.firebaseio.com",
    projectId: "inbocadb",
    storageBucket: "inbocadb.appspot.com",
    messagingSenderId: "594838390905",
    appId: "1:594838390905:web:ab36240cb5ba6440afaca8",
    measurementId: "G-TML0JJ2BLB"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);