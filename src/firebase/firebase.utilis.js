import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSIq0xSaLdq0_Y_P1LUc962vsnlAAK8mQ",
    authDomain: "crwn-db-9b83d.firebaseapp.com",
    databaseURL: "https://crwn-db-9b83d.firebaseio.com",
    projectId: "crwn-db-9b83d",
    storageBucket: "crwn-db-9b83d.appspot.com",
    messagingSenderId: "80828907398",
    appId: "1:80828907398:web:c0c87a7140c2124bbf7607",
    measurementId: "G-9B8XZKK4RD"
  };
 export const createUserProfileDocument = async (userAuth, additionalData) =>
    {
    	if (!userAuth) return;

    	const userRef = firestore.doc(`users/${userAuth.uid}`);
    	const snapShot = userRef.get();

    	if (!snapShot.exists) {
          const {displayName, email} = userAuth;
          const createAt = new Date();
          try{
                await userRef.set({
                	displayName,
                	email,
                	createAt, 
                	...additionalData
                })
          }catch(error){
          	console.log('error creating user ', error.message);
          }
    	}
    	return userRef;
    }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 