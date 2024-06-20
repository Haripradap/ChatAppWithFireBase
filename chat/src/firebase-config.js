// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjmifzoPy2WO0hYyktQNouCi1u85_0d7E",
  authDomain: "chat-app-5ce8a.firebaseapp.com",
  projectId: "chat-app-5ce8a",
  storageBucket: "chat-app-5ce8a.appspot.com",
  messagingSenderId: "979046880911",
  appId: "1:979046880911:web:d924b40a85d09bf58442fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);