import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBEWp46jzaDRIGSsvJ2Y-RogI_Ow7cIoVs",
  authDomain: "coffeeshop-36.firebaseapp.com",
  projectId: "coffeeshop-36",
  storageBucket: "coffeeshop-36.appspot.com",
  messagingSenderId: "20345314563",
  appId: "1:20345314563:web:ecca2a365afcb9f99f9d36"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)