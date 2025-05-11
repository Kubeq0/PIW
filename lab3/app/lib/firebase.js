// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Oa3F3TSCKygqYhfh-QBZ35o7sHJ3PFU",
  authDomain: "lab3-eda5c.firebaseapp.com",
  projectId: "lab3-eda5c",
  storageBucket: "lab3-eda5c.firebasestorage.app",
  messagingSenderId: "518993078028",
  appId: "1:518993078028:web:6330582b2171b72f6b8b29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();