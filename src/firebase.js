import firebase from 'firebase/app'
import 'firebase/firestore'
import './App.scss';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAhy20ir3toiqe3S1ZzQUbG4B9BQZfWIm8",
    authDomain: "todoist-clone-d83a7.firebaseapp.com",
    projectId: "todoist-clone-d83a7",
    storageBucket: "todoist-clone-d83a7.appspot.com",
    messagingSenderId: "424729196183",
    appId: "1:424729196183:web:93f0aa7a7afd5f3e809bd2"
});

export {firebaseConfig as firebase};