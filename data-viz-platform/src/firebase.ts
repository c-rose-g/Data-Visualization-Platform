// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT_3fNb7PvbfZGBrhOicY0CRbpQCOaVJE",
  authDomain: "answersai-demo-54ede.firebaseapp.com",
  projectId: "answersai-demo-54ede",
  storageBucket: "answersai-demo-54ede.firebasestorage.app",
  messagingSenderId: "746471072892",
  appId: "1:746471072892:web:8b5fb0991f9a358a5d95f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
