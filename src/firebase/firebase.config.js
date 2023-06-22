// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_EgrjR6FLE_uJrEzzs57FR0LLKcsknzw",
  authDomain: "foodies-client-side.firebaseapp.com",
  projectId: "foodies-client-side",
  storageBucket: "foodies-client-side.appspot.com",
  messagingSenderId: "17444145391",
  appId: "1:17444145391:web:13a14034085b70cca9b31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;