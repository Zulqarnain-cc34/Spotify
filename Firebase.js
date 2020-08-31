import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUgWfWtQ5xRd3jp_f78zdHXon8YIU2Xj4",
  authDomain: "spotify-ae707.firebaseapp.com",
  databaseURL: "https://spotify-ae707.firebaseio.com",
  projectId: "spotify-ae707",
  storageBucket: "spotify-ae707.appspot.com",
  messagingSenderId: "1057272592699",
  appId: "1:1057272592699:web:6632bec5ffd76d39929f1e",
  measurementId: "G-WRS2N6YVVB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
