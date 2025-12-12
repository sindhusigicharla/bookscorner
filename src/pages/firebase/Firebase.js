// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvjcRpwPe-MTG3vQBUN7pHOGiQOt4N_0M",
  authDomain: "bookscorner-e7fef.firebaseapp.com",
  projectId: "bookscorner-e7fef",
  storageBucket: "bookscorner-e7fef.firebasestorage.app",
  messagingSenderId: "309864169320",
  appId: "1:309864169320:web:cb474f59181a222be820dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};