import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDhJzy-t7oOymZGnYLvgInjQRROjL47ZZw",
  authDomain: "project-c-71-a8912.firebaseapp.com",
  projectId: "project-c-71-a8912",
  storageBucket: "project-c-71-a8912.appspot.com",
  messagingSenderId: "800449260443",
  appId: "1:800449260443:web:6dee96c6bbffe4a9decf3e"
};
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
