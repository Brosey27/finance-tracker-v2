// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXGwsR3i8sPA2hvSQXQkelPZyj9pEjLw4",
  authDomain: "finance-tracker-1c1b1.firebaseapp.com",
  projectId: "finance-tracker-1c1b1",
  storageBucket: "finance-tracker-1c1b1.appspot.com",
  messagingSenderId: "623989629060",
  appId: "1:623989629060:web:5abd589077237d7526e2d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };