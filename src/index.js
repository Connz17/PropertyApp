import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm9UIHHJbDG9jo6EnDkFv2aXGWhuK0c2M",
  authDomain: "property-management-app-d6b42.firebaseapp.com",
  databaseURL: "https://property-management-app-d6b42-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "property-management-app-d6b42",
  storageBucket: "property-management-app-d6b42.appspot.com",
  messagingSenderId: "26353600067",
  appId: "1:26353600067:web:52948cc81c688845d1b6f6",
  measurementId: "G-WCRTY0KJV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Auth and db references
const auth = getAuth(app);
const db = getDatabase(app);

// onAuthStateChanged = (auth, user => {
//   if (user != null) {
//     console.log( user + "logged in");
//   } else {
//     console.log("no user");
//   }
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
