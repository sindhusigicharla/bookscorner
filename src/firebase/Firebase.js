import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace these with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyD_YOUR_API_KEY_HERE",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefghijk"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get auth instance
export const auth = getAuth(app);
export default app;
