import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBIIlS4peph3xEWk7kzDb6j1lFDl-CvYVY",
    authDomain: "imessage-clone-943f6.firebaseapp.com",
    projectId: "imessage-clone-943f6",
    storageBucket: "imessage-clone-943f6.appspot.com",
    messagingSenderId: "30158243347",
    appId: "1:30158243347:web:f16fc7e6cd2d82af1b21e6",
    measurementId: "G-W29EYH51N8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;