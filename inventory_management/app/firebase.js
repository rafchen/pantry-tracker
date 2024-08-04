import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

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
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

export { firestore };