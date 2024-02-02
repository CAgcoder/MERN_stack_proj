// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-54ef2.firebaseapp.com",
  projectId: "mern-estate-54ef2",
  storageBucket: "mern-estate-54ef2.appspot.com",
  messagingSenderId: "500775980383",
  appId: "1:500775980383:web:2ed1f585263873ce82baea",
  measurementId: "G-W570L13Q5F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);