import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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

const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from submitting normally

    const email = signUpForm.email.value;
    const password = signUpForm.password.value;

    // Call createUserWithEmailAndPassword method
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            window.location.replace("main.html"); // redirect to main.html
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(error);
            // ... you can show an error message to the user
        });
});



signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });