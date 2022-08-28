// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnGV7bflEe0fHHF5TH1Kv95_0ER1xgi-U",
  authDomain: "clone-b7c3d.firebaseapp.com",
  projectId: "clone-b7c3d",
  storageBucket: "clone-b7c3d.appspot.com",
  messagingSenderId: "443373364970",
  appId: "1:443373364970:web:ad44f01a71b4eaf8a39993",
  measurementId: "G-08YJSES09T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
