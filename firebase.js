import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
     apiKey: "AIzaSyBylk9wJK7qcFs9AgXs717SeAamrmJNsIg",
     authDomain: "facebook-clone-ba855.firebaseapp.com",
     projectId: "facebook-clone-ba855",
     storageBucket: "facebook-clone-ba855.appspot.com",
     messagingSenderId: "999940893384",
     appId: "1:999940893384:web:32f24c758ef8820db553fd",
     measurementId: "G-9CQDYP5J3H"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = app.firestore();
const storage = app.storage();

export { db, storage };

