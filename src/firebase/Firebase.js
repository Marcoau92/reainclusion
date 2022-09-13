// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD84u7UmKV6WcukHy44CahsYrwEi8xD28U",
  authDomain: "reainclusion2022.firebaseapp.com",
  projectId: "reainclusion2022",
  storageBucket: "reainclusion2022.appspot.com",
  messagingSenderId: "387733242315",
  appId: "1:387733242315:web:d97bf15c53dca41578364e",
  measurementId: "G-1XZ3XW2Z5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);