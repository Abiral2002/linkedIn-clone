import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFodAqu9LE39NYgzUePSdKKvJc_IUu8CM",
  authDomain: "linkin-clone-dca41.firebaseapp.com",
  projectId: "linkin-clone-dca41",
  storageBucket: "linkin-clone-dca41.appspot.com",
  messagingSenderId: "942899177006",
  appId: "1:942899177006:web:d4dc5e5dbe1b0c3c2de1bf",
  measurementId: "G-8GJD3N2V8L"
};

const firebaseApp=initializeApp(firebaseConfig)
const db=getFirestore(firebaseApp)
const auth=getAuth(firebaseApp)

export {db, auth}
