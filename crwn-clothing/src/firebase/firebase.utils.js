import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBekC8COu9kZdqBQWfiRrEM6atufu-qZc0",
    authDomain: "crwn-clothing-50686.firebaseapp.com",
    databaseURL: "https://crwn-clothing-50686.firebaseio.com",
    projectId: "crwn-clothing-50686",
    storageBucket: "crwn-clothing-50686.appspot.com",
    messagingSenderId: "532644710705",
    appId: "1:532644710705:web:b797e7a103a2eaaca90810",
    measurementId: "G-4GYXLKWX9H"
  };

  firebase.initializeApp(config);
  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;


