import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG-8pbJGQfgiF4zRaNohrPBXxsVutE7f8",
    authDomain: "gunareactapplication.firebaseapp.com",
    databaseURL: "https://gunareactapplication.firebaseio.com",
    projectId: "gunareactapplication",
    storageBucket: "gunareactapplication.appspot.com",
    messagingSenderId: "576300888118",
    appId: "1:576300888118:web:201090a0d8eb9817a82897",
    measurementId: "G-VGMCF6H1PD"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

 
  

 const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
        
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data(),
        
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

  export {signInWithGoogle,generateUserDocument};