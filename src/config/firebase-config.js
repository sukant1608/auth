import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDROqVzHdXMezuSDPFRRZywTvZlILjjWQE",
  authDomain: "auth-ec7f8.firebaseapp.com",
  projectId: "auth-ec7f8",
  storageBucket: "auth-ec7f8.appspot.com",
  messagingSenderId: "729811195209",
  appId: "1:729811195209:web:e511d896066d635b753698",
  measurementId: "G-9RVZZFE71K",
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();
export { auth, googleProvider, facebookProvider };
