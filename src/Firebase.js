// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAiT51hYgwtmg2FXuqkBywZclfbQdCWPm4",
  authDomain: "hackwave-fe4ac.firebaseapp.com",
  projectId: "hackwave-fe4ac",
  storageBucket: "hackwave-fe4ac.appspot.com",
  messagingSenderId: "256664562203",
  appId: "1:256664562203:web:c0993ceb71cdff9e5c26be",
  measurementId: "G-FNBPY2EL07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage=getStorage(app);
export { analytics, app, auth, db, storage };

