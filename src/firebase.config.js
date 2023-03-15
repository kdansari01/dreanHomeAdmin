import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBa1-0N4iDkHVj0O14yOhsZXkQXKUXAYH4",
  authDomain: "dreamhouseadmin-91a7b.firebaseapp.com",
  databaseURL: "https://dreamhouseadmin-91a7b-default-rtdb.firebaseio.com",
  projectId: "dreamhouseadmin-91a7b",
  storageBucket: "dreamhouseadmin-91a7b.appspot.com",
  messagingSenderId: "349735803360",
  appId: "1:349735803360:web:8ac2714b2bb952817b7385",
  measurementId: "G-4KWKH6F0MF",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
