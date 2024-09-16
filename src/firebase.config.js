import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD4oxfjfCaGzr7sQCZwGbmjvUOe8Vt8JKo",
  authDomain: "tanushri-25e73.firebaseapp.com",
  projectId: "tanushri-25e73",
  storageBucket: "tanushri-25e73.appspot.com",
  messagingSenderId: "886947996270",
  appId: "1:886947996270:web:e31241717540e13b537c7f",
  measurementId: "G-Y66RDH1JD1"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
