// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs7RVQD26V1hmCjkZDTy3F5lWuRpY3Kig",
  authDomain: "ideahub-2c12c.firebaseapp.com",
  projectId: "ideahub-2c12c",
  storageBucket: "ideahub-2c12c.firebasestorage.app",
  messagingSenderId: "173796858979",
  appId: "1:173796858979:web:a4c3851f8e1b065aef6c56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
