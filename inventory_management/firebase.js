// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU3Dett4M5ITgVywL0B-JZwW2Sz3OVEvo",
  authDomain: "inventory-management-3bb59.firebaseapp.com",
  projectId: "inventory-management-3bb59",
  storageBucket: "inventory-management-3bb59.appspot.com",
  messagingSenderId: "769408448635",
  appId: "1:769408448635:web:7a0e0f860bf67d0d408ade",
  measurementId: "G-KB2HZB8MZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}