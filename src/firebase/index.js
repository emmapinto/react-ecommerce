import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkOixvBSHPOE-Ln5jwrqAiZ0i0gxpkfyA",
    authDomain: "react-ecommerce-74067.firebaseapp.com",
    projectId: "react-ecommerce-74067",
    storageBucket: "react-ecommerce-74067.appspot.com",
    messagingSenderId: "209046536358",
    appId: "1:209046536358:web:1fb2a6f064afaf259eb467"
  };

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
