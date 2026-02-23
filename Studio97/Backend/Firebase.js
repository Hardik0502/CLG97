// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe621-88qqBEh6sdSbBGnyaOEDty0yR4Q",
  authDomain: "studio97-d6122.firebaseapp.com",
  projectId: "studio97-d6122",
  storageBucket: "studio97-d6122.firebasestorage.app",
  messagingSenderId: "398834826260",
  appId: "1:398834826260:web:d324c0108447665ec97b01",
  measurementId: "G-B3GNG1044H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

