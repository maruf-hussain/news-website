// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfaJgufDVG1ykXwYmVo5q6fuarU8dEuqk",
  authDomain: "news-website-965f4.firebaseapp.com",
  projectId: "news-website-965f4",
  storageBucket: "news-website-965f4.appspot.com",
  messagingSenderId: "1040748447377",
  appId: "1:1040748447377:web:80320e415bf3ec00f3a130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;