import firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyBLzmT9D1FqQGIi7Bms2EzZRrLs8SRPvaU",
  authDomain: "attendance-61ba7.firebaseapp.com",
  databaseURL: "https://attendance-61ba7-default-rtdb.firebaseio.com",
  projectId: "attendance-61ba7",
  storageBucket: "attendance-61ba7.appspot.com",
  messagingSenderId: "288247059888",
  appId: "1:288247059888:web:0f3e4d5ca23f6261da7275",
  measurementId: "G-2K88RGQDKV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();