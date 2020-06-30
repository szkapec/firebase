import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 



const config = {
    apiKey: "AIzaSyB2yUCjGTDlnfvUHfwCjBkVy6nI_iIGe1E",
    authDomain: "app-react-redux-firebase.firebaseapp.com",
    databaseURL: "https://app-react-redux-firebase.firebaseio.com",
    projectId: "app-react-redux-firebase",
    storageBucket: "app-react-redux-firebase.appspot.com",
    messagingSenderId: "898635106940",
    appId: "1:898635106940:web:6d21b1c9bba9577d59d7f9",
    measurementId: "G-X5Z8KHX7K0"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;