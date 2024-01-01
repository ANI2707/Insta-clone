import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT8Yytg-5gux6qLZqerp8186MPC13mNe8",
  authDomain: "insta-clone-da06d.firebaseapp.com",
  projectId: "insta-clone-da06d",
  storageBucket: "insta-clone-da06d.appspot.com",
  messagingSenderId: "42165317301",
  appId: "1:42165317301:web:2a5ae270657bab265ed8fc",
  measurementId: "G-JY8M53RBNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
