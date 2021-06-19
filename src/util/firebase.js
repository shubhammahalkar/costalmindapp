import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD-MqdMCsnqCM8ChGKGWSKfL-bT5VSYyZ8",
    authDomain: "developer-c8c37.firebaseapp.com",
    databaseURL: "https://developer-c8c37-default-rtdb.firebaseio.com",
    projectId: "developer-c8c37",
    storageBucket: "developer-c8c37.appspot.com",
    messagingSenderId: "1072803264962",
    appId: "1:1072803264962:web:c20ef9e3bd19349f167e5b",
    measurementId: "G-3XVNWBN7JZ"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();