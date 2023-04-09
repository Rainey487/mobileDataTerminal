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


const newSignUp = (email, password, identifier) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const uid = user.uid;
            firebase.firestore().collection('users').doc(uid).set({
                identifier: identifier,
                email: email
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}

const signUpForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = signUpForm.email.value;
    const password = signUpForm.password.value;
    const identifier = signUpForm.identifier.value;
    newSignUp(email, password, identifier);
});
