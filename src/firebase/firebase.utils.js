import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSE4ApEiZ5fKRRbSTdmh_AMzu4CLl__IA",
    authDomain: "crown-db-1cc36.firebaseapp.com",
    databaseURL: "https://crown-db-1cc36.firebaseio.com",
    projectId: "crown-db-1cc36",
    storageBucket: "crown-db-1cc36.appspot.com",
    messagingSenderId: "407320887529",
    appId: "1:407320887529:web:7d96226d8f68c73b51f078"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;