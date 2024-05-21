// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMH9f6cB8PHi8iyKSMA0g6ioai0LLGs5k",
  authDomain: "login-efb59.firebaseapp.com",
  projectId: "login-efb59",
  storageBucket: "login-efb59.appspot.com",
  messagingSenderId: "352809559914",
  appId: "1:352809559914:web:64de0af96bce23f3552713",
  measurementId: "G-HQWC8F96H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;