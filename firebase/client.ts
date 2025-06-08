// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjkgISGvzHVuOup7Wso6uFrkAQmvHoPaY",
  authDomain: "prepwise-b67a4.firebaseapp.com",
  projectId: "prepwise-b67a4",
  storageBucket: "prepwise-b67a4.firebasestorage.app",
  messagingSenderId: "423708517510",
  appId: "1:423708517510:web:8d0cd51f74ad93b340dd07",
  measurementId: "G-QNVYS5FR9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);