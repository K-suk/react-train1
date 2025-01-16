import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0XCSOYLo3YQdvP5E-vMkD9tR33DRaFjU",
  authDomain: "react-tutorial2-22d0c.firebaseapp.com",
  projectId: "react-tutorial2-22d0c",
  storageBucket: "react-tutorial2-22d0c.firebasestorage.app",
  messagingSenderId: "555667023761",
  appId: "1:555667023761:web:f16f753a3a5096acde5c30",
  measurementId: "G-W5DXWZ328M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
