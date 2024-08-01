// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwqppvSFqwEX5jQUP-IjV_1erTlQbdYFs",
  authDomain: "inventory-management-82335.firebaseapp.com",
  projectId: "inventory-management-82335",
  storageBucket: "inventory-management-82335.appspot.com",
  messagingSenderId: "403173871173",
  appId: "1:403173871173:web:721b77a570727f44b2dd2c",
  measurementId: "G-90SVM21ER6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};