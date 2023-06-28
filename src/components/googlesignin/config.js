// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHfx5K3Wg5_v-lqBafjsqXSI8rsGZl_4o",
  authDomain: "library-68771.firebaseapp.com",
  projectId: "library-68771",
  storageBucket: "library-68771.appspot.com",
  messagingSenderId: "184081704656",
  appId: "1:184081704656:web:dfcc4d6ee100fb465260d5",
  measurementId: "G-2ZDSL189QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}