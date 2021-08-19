import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGKIc1RkSssHCLmmVeT9lN24pXqfspCTg",
  authDomain: "linkedin-clone-5f662.firebaseapp.com",
  projectId: "linkedin-clone-5f662",
  storageBucket: "linkedin-clone-5f662.appspot.com",
  messagingSenderId: "431472693518",
  appId: "1:431472693518:web:6c4b8891ba98299783875f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
