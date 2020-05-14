import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDYzJDc_094Ojqzx2K_bXuTcjgG3zE-xuk",
    authDomain: "movieapp-4130e.firebaseapp.com",
    databaseURL: "https://movieapp-4130e.firebaseio.com",
    projectId: "movieapp-4130e",
    storageBucket: "movieapp-4130e.appspot.com",
    messagingSenderId: "294019740893",
    appId: "1:294019740893:web:6f471d264e51500a7c1734",
    measurementId: "G-EP42ST46YX"
};


export const myFirebase = firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
