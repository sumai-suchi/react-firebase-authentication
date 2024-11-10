// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxYh1RL-RWMyzv3OPRSII8Mpo0XQCz-5c",
  authDomain: "simple-firebase-c30f0.firebaseapp.com",
  projectId: "simple-firebase-c30f0",
  storageBucket: "simple-firebase-c30f0.firebasestorage.app",
  messagingSenderId: "285505479365",
  appId: "1:285505479365:web:7f7f6bd81f1d4f9d96c6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;