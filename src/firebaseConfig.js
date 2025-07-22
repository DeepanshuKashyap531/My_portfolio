// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDle1w2nNzxhCFSdXYKpFi7qKBByvxgU_I",
  authDomain: "portfolio-f25df.firebaseapp.com",
  projectId: "portfolio-f25df",
  storageBucket: "portfolio-f25df.firebasestorage.app",
  messagingSenderId: "322484875939",
  appId: "1:322484875939:web:b872fa4c8c0646a65a8516",
  measurementId: "G-S753L54JVJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
