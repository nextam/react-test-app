// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx5gzVVHWsp03XCyl5uUoudsBE1Mys5iY",
  authDomain: "react-test-app-ca3c1.firebaseapp.com",
  projectId: "react-test-app-ca3c1",
  storageBucket: "react-test-app-ca3c1.appspot.com",
  messagingSenderId: "347395524021",
  appId: "1:347395524021:web:83b3fdc4bffe6ac5da05fc",
  measurementId: "G-9080ETGN9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export {db, auth, analytics, storage};