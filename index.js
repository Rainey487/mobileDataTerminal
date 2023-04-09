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

document.querySelector('#signUpForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.querySelector('#signUpForm [name="email"]').value;
    const password = document.querySelector('#signUpForm [name="password"]').value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User created successfully
            const user = userCredential.user;
            alert('User created successfully!');
            // TODO: Redirect to a success page or sign the user in
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
});