// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAFYtdwXYMtkh0WXYSamtlKlYQ8K-JyYJ8",
  authDomain: "quiz-app-b6379.firebaseapp.com",
  projectId: "quiz-app-b6379",
  storageBucket: "quiz-app-b6379.firebasestorage.app",
  messagingSenderId: "215246822691",
  appId: "1:215246822691:web:2cdaf2adb54ae4f8278096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
