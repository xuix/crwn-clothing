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
export const createUserProfileDocument = async(userAuth, additionalData)=>{

if (!userAuth) return;


//const userRef = firestore.doc('users/22222')
console.log('########### userAuth = ',userAuth);

const userRef = firestore.collection('users').doc(userAuth.uid);

 console.log('########### firestore ref = ',userRef);
 const snapShot = await userRef.get();

 console.log('########### firestore snapshot  = ',snapShot);

 if (!snapShot.exists){

  console.log('snapshot does not exist')
  const {displayName,email} = userAuth;
  const createdAt = new Date();
try {
  await userRef.set({displayName,email,createdAt,...additionalData})
  
} catch (error) {console.log('Error updating database',error)}

 }



 else{console.log('snapshot found ')}




return userRef
}





  firebase.initializeApp(config);
  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;


