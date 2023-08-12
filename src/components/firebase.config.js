import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDevzYE5vUC_p6HpFCbARmbnHaxrQuoyfo",

  authDomain: "foodshop-f97d4.firebaseapp.com",

  databaseURL: "https://foodshop-f97d4-default-rtdb.firebaseio.com",

  projectId: "foodshop-f97d4",

  storageBucket: "foodshop-f97d4.appspot.com",

  messagingSenderId: "944968617866",

  appId: "1:944968617866:web:e4c601b000823e54204273",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);



export { app, firestore, storage };
