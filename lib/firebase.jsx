
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAkkvTGOlZgkvh0tZ78VWYwhqGSvWAt_ck",
  authDomain: "deepnirablogg.firebaseapp.com",
  projectId: "deepnirablogg",
  storageBucket: "deepnirablogg.appspot.com",
  messagingSenderId: "261805329535",
  appId: "1:261805329535:web:cfe0a5848cc0be59a6434a",
  measurementId: "G-JBT3PCLVW1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore();
export const auth = getAuth();
