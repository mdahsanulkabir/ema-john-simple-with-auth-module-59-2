import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJg_Yz3lNzFV9fAnVjyLhSi95udjAnwrk",
  authDomain: "ema-john-simple-2-28399.firebaseapp.com",
  projectId: "ema-john-simple-2-28399",
  storageBucket: "ema-john-simple-2-28399.appspot.com",
  messagingSenderId: "821733826414",
  appId: "1:821733826414:web:cb4cf21a3039f689cc6b7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;