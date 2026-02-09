
import { initializeApp } from "firebase/app";
import  { getfirestore } from 'firebase/firestore'

// Firebase config
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
export const db = getfirestore(app);