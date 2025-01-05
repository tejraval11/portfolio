import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFC8ehKYcICcogCanAN_SVMwyF_lmZHGU",
  authDomain: "portfolio-6da2b.firebaseapp.com",
  projectId: "portfolio-6da2b",
  storageBucket: "portfolio-6da2b.firebasestorage.app",
  messagingSenderId: "533824387734",
  appId: "1:533824387734:web:a1e7c5be16fe690b69e0b7",
  measurementId: "G-4C6H81HE7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);

export { db };
