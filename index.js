import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA0NjB60bOcTWz1DDFt-pbR5pzyTZxzLnY",
    authDomain: "roleplay-community.firebaseapp.com",
    projectId: "roleplay-community",
    storageBucket: "roleplay-community.appspot.com",
    messagingSenderId: "823891967200",
    appId: "1:823891967200:web:252c129429b46d0b206485"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });