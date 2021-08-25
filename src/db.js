import firebase from "firebase/app";
import "firebase/database";


const config = {
  apiKey: "AIzaSyBR2L4zh-PnAzBR01bil7aP2OQK3OCBEuU",
  authDomain: "chat-app-4a614.firebaseapp.com",
  databaseURL: "https://chat-app-4a614-default-rtdb.firebaseio.com/",
  projectId: "chat-app-4a614",
  storageBucket: "chat-app-4a614.appspot.com",
  messagingSenderId: "551814778466",
  appId: "1:551814778466:web:ef8adbf33c16f586088b3b"
};

const db = firebase.initializeApp(config);
export default db;