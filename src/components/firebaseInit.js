import firebase from "firebase";
import 'firebase/firestore';
import firebaseConfig from "@/components/firebaseConfig";

let firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();