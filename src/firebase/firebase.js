// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaet6WZpSgNEMUZfz3u281c4Y2Yg38Al0",
  authDomain: "cerropatagonia-ecf13.firebaseapp.com",
  projectId: "cerropatagonia-ecf13",
  storageBucket: "cerropatagonia-ecf13.appspot.com",
  messagingSenderId: "627576463456",
  appId: "1:627576463456:web:8e9392394356936e41a305",
  measurementId: "G-ZEBQRSSHC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);