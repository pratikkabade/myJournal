// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6_nk4tlbsLaV1AzMTitJrR8XO4GmSomo",
    authDomain: "quickstart-projtut.firebaseapp.com",
    projectId: "quickstart-projtut",
    storageBucket: "quickstart-projtut.appspot.com",
    messagingSenderId: "473509015721",
    appId: "1:473509015721:web:0ce730b6e695bbd734b9b8",
    measurementId: "G-H9KMF8MX9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app)

export const journalCollectionRef = collection(db, "journal")
