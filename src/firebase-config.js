import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkhIMHTRZEdelFkVe_yLWdhdT41JffkfA",
    authDomain: "react-auth-dfe09.firebaseapp.com",
    projectId: "react-auth-dfe09",
    storageBucket: "react-auth-dfe09.appspot.com",
    messagingSenderId: "711856989114",
    appId: "1:711856989114:web:64401b7c6187864c53f383"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);