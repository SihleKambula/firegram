import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBfR2m6dDge0_SE0zKsWvnxPN_l5AIuvbo",
  authDomain: "wolf-firegram.firebaseapp.com",
  databaseURL: "https://wolf-firegram.firebaseio.com",
  projectId: "wolf-firegram",
  storageBucket: "wolf-firegram.appspot.com",
  messagingSenderId: "1098768738014",
  appId: "1:1098768738014:web:e53033f4a0d51bed79044f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectStore, timestamp };
