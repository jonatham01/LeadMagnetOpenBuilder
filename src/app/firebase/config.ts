// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl_BWjaADH1hGxEPHrwGDy0p-qk2o93fo",
  authDomain: "marketplaceproject-c30bc.firebaseapp.com",
  databaseURL: "https://marketplaceproject-c30bc-default-rtdb.firebaseio.com",
  projectId: "marketplaceproject-c30bc",
  storageBucket: "marketplaceproject-c30bc.appspot.com",
  messagingSenderId: "998774714865",
  appId: "1:998774714865:web:1a949466288047ed5a5450"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth:Auth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );