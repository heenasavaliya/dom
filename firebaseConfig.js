// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL4Qepdwn36ZfXkRK0mdH0DD8SFKQiEdM",
  authDomain: "demo1-20a41.firebaseapp.com",
  projectId: "demo1-20a41",
  storageBucket: "demo1-20a41.appspot.com",
  messagingSenderId: "678114561097",
  appId: "1:678114561097:web:c208f760771cea68614398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
export{auth , firestore};