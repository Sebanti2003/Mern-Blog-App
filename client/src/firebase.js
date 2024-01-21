
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mern-blog-e613a.firebaseapp.com",
  projectId: "mern-blog-e613a",
  storageBucket: "mern-blog-e613a.appspot.com",
  messagingSenderId: "458213972879",
  appId: "1:458213972879:web:8b2faa5269679c41a549fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
