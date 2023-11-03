import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP7V2KxVmoJ1-5P1kTxQiA3RGVOGheJ20",
  authDomain: "ntwitter-reloaded.firebaseapp.com",
  projectId: "ntwitter-reloaded",
  storageBucket: "ntwitter-reloaded.appspot.com",
  messagingSenderId: "916757456802",
  appId: "1:916757456802:web:00fa3d70c0487c9d47b4fb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);