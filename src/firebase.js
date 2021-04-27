import firebase from "firebase";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_Api_key,
    authDomain: "project-2191352264872281873.firebaseapp.com",
    projectId: "project-2191352264872281873",
    storageBucket: "project-2191352264872281873.appspot.com",
    messagingSenderId: "724155176070",
    appId: "1:724155176070:web:325e252a8f7b0de081ed07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };