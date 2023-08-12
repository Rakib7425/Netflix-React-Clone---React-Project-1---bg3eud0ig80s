import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjGE8gjYzL1bN7nflrZ6O6RHGrMealwlo",
    authDomain: "netflix-clone-b2a45.firebaseapp.com",
    projectId: "netflix-clone-b2a45",
    storageBucket: "netflix-clone-b2a45.appspot.com",
    messagingSenderId: "784182305143",
    appId: "1:784182305143:web:a2f07731eea4e342fe4172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);