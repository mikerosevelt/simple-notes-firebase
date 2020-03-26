import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB58cNifEwhqBN3RUf8kwApojGj3VJy0kQ",
    authDomain: "simple-notes-firebase-6fdf7.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-6fdf7.firebaseio.com",
    projectId: "simple-notes-firebase-6fdf7",
    storageBucket: "simple-notes-firebase-6fdf7.appspot.com",
    messagingSenderId: "453174806857",
    appId: "1:453174806857:web:b120480d2e713141e93298",
    measurementId: "G-JZT7KTJHR3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;