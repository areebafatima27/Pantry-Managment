import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4Zp2xbCztxNtZE8buUjyHLsECsBwBdU0",
  authDomain: "inventory-management-9d2d3.firebaseapp.com",
  projectId: "inventory-management-9d2d3",
  storageBucket: "inventory-management-9d2d3.appspot.com",
  messagingSenderId: "117652441048",
  appId: "1:117652441048:web:282e4eb8170c19ea3154ad",
  measurementId: "G-L66E8SJ78W",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
