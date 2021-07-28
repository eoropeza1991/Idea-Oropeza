import firebase from "firebase/app";
import "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBTD4XDRS3ZZke2yymLVuq_PmmKtuKgHd4",
    authDomain: "parrandapp-8a30b.firebaseapp.com",
    projectId: "parrandapp-8a30b",
    storageBucket: "parrandapp-8a30b.appspot.com",
    messagingSenderId: "534017159718",
    appId: "1:534017159718:web:61879bacabd1cb39e46ce7",
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();;

  export const itemsCollection = firebase.firestore(app).collection("parrandapp-products");
  export const itemsCollection2 = firebase.firestore(app).collection("orders");

  