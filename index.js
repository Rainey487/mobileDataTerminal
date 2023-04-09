import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    // Your Firebase configuration here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUpForm = document.getElementById('signUpForm');
const emailInput = signUpForm.email;
const passwordInput = signUpForm.password;
const identifierInput = signUpForm.identifier;

const signUp = async (email, password, identifier) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
        const userDocRef = doc(collection(db, 'users'), uid);
        await setDoc(userDocRef, {
            email: email,
            identifier: identifier
        });
        console.log('User created with uid:', uid);
    } catch (error) {
        console.error(error);
    }
};

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    const identifier = identifierInput.value;
    signUp(email, password, identifier);
});
