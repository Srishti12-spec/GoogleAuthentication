// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA15hYftFwZeftincU2YIeoed1XyTSdnRI",
  authDomain: "sign-in-66439.firebaseapp.com",
  projectId: "sign-in-66439",
  storageBucket: "sign-in-66439.appspot.com",
  messagingSenderId: "1073201458043",
  appId: "1:1073201458043:web:6e92edcb84c35a9794abde"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}