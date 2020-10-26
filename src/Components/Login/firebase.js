import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBCBKenOanC9nNaLyUa0RkGvqBQKsrOKBI",
  authDomain: "fir-ba4c3.firebaseapp.com",
  databaseURL: "https://fir-ba4c3.firebaseio.com",
  projectId: "fir-ba4c3",
  storageBucket: "fir-ba4c3.appspot.com",
  messagingSenderId: "90425701558",
  appId: "1:90425701558:web:35749f0578564a01cf2217",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };