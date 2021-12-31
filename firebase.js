import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNtH0qmIVuueUgmuHF8Rc3OZfPnPMLOOo",
  authDomain: "idea-box-ea779.firebaseapp.com",
  projectId: "idea-box-ea779",
  storageBucket: "idea-box-ea779.appspot.com",
  messagingSenderId: "492890121839",
  appId: "1:492890121839:web:4a6746b1649d55c5728f9a"
};

firebase.initializeApp(firebaseConfig)