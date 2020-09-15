import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCoaSZGNXYSTM4gcD3wE3ixBkGNI-HY1GI",
  authDomain: "whatsapp-clone-3aea3.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-3aea3.firebaseio.com",
  projectId: "whatsapp-clone-3aea3",
  storageBucket: "whatsapp-clone-3aea3.appspot.com",
  messagingSenderId: "417041195512",
  appId: "1:417041195512:web:0d976f1dc929f4c0ea360d",
  measurementId: "G-LEV87J2LRH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const  provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;