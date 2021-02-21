import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBpGqnfAROdkPVycqgRSBEsXxtcJCodDmM",
    authDomain: "slack-clone-3eff8.firebaseapp.com",
    projectId: "slack-clone-3eff8",
    storageBucket: "slack-clone-3eff8.appspot.com",
    messagingSenderId: "260733081109",
    appId: "1:260733081109:web:97c1105000e5ebd876601c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };