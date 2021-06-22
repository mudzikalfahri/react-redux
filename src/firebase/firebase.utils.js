import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBJNTQp_D-MtOZIncXE48pKvc69WuwVDVc",
    authDomain: "revut-db.firebaseapp.com",
    projectId: "revut-db",
    storageBucket: "revut-db.appspot.com",
    messagingSenderId: "149403023412",
    appId: "1:149403023412:web:e8fa933eaf14055f123261",
    measurementId: "G-JC8T8NGCQJ"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;