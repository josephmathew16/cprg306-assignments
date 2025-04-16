// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLGJTfsa8Q5JaX2C2Z0y7EDGIDlvi0Ytw",
  authDomain: "cprg306-assignments-6774e.firebaseapp.com",
  projectId: "cprg306-assignments-6774e",
  storageBucket: "cprg306-assignments-6774e.firebasestorage.app",
  messagingSenderId: "160487870792",
  appId: "1:160487870792:web:68289a529d01c6d2fea37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
