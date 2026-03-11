import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAehN_j1GlikVa6_nhv51wS9nXYZSXU8S4",
  authDomain: "fir-database-c1a70.firebaseapp.com",
  databaseURL: "https://fir-database-c1a70-default-rtdb.firebaseio.com/",
  projectId: "fir-database-c1a70",
  storageBucket: "fir-database-c1a70.firebasestorage.app",
  messagingSenderId: "545438900379",
  appId: "1:545438900379:web:3481e15d60ffddc6cae63e"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
