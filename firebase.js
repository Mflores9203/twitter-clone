// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBseGZmxV-PWndv2opROKYjtlrFhIeQZTQ",
  authDomain: "twitter-clone-ef1d0.firebaseapp.com",
  projectId: "twitter-clone-ef1d0",
  storageBucket: "twitter-clone-ef1d0.appspot.com",
  messagingSenderId: "274899344079",
  appId: "1:274899344079:web:bdf19ccdebde3be90435ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)