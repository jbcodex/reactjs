import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDTPD2DD7JbTotnLEsY-iGevbqryp2BF9Y",
  authDomain: "alunos-5910b.firebaseapp.com",
  projectId: "alunos-5910b",
  storageBucket: "alunos-5910b.appspot.com",
  messagingSenderId: "690612936330",
  appId: "1:690612936330:web:bffe8dcaca14e70e999773"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}
