
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithPopup,

} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

const firebaseConfig = {
    apiKey: "AIzaSyC9wEJv3gxAQlM7_ePCU8gRTAz9S-Isufg",
    authDomain: "fir-project-fd9fc.firebaseapp.com",
    projectId: "fir-project-fd9fc",
    storageBucket: "fir-project-fd9fc.firebasestorage.app",
    messagingSenderId: "585999060345",
    appId: "1:585999060345:web:9be3e1e59cf5556616b3a8",
    measurementId: "G-GG5HBS5RFD"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const getGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

export const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const LoggedIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const reset = async (email) => {
    return await sendPasswordResetEmail(auth, email);
};
