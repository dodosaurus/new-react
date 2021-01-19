import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJyPu83l3ckIDk5uU_w33qOwlingo6uRs",
    authDomain: "dodosaurus-jojoplan.firebaseapp.com",
    databaseURL: "https://dodosaurus-jojoplan-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dodosaurus-jojoplan",
    storageBucket: "dodosaurus-jojoplan.appspot.com",
    messagingSenderId: "1094635239692",
    appId: "1:1094635239692:web:9a252eb28e7ce995783129",
    measurementId: "G-G058B3DMEP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;