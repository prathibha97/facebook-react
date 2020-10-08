import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBMe3Z81-yh9FQ3T_QuqS3zE2GMUe3hseg",
  authDomain: "facebook-react-27e26.firebaseapp.com",
  databaseURL: "https://facebook-react-27e26.firebaseio.com",
  projectId: "facebook-react-27e26",
  storageBucket: "facebook-react-27e26.appspot.com",
  messagingSenderId: "499584262356",
  appId: "1:499584262356:web:6f3e0c869a47ccf7a35b41",
  measurementId: "G-4ZDQZWSKJN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
