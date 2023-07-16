// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU455dPbQRfZbTJgoUIWZrkICSOMjzyGw",
  authDomain: "bangla-clint-site.firebaseapp.com",
  projectId: "bangla-clint-site",
  storageBucket: "bangla-clint-site.appspot.com",
  messagingSenderId: "1000544229453",
  appId: "1:1000544229453:web:5c48bf36f415939b29e404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;