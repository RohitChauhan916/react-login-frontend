import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDeFFj2Ow3n0FN7wdj1LoGaayMe7V6NRwA",
    authDomain: "fir-69d58.firebaseapp.com",
    databaseURL: "https://fir-69d58.firebaseio.com",
    projectId: "fir-69d58",
    storageBucket: "fir-69d58.appspot.com",
    messagingSenderId: "1015600848547"
  };

  const fire = firebase.initializeApp(config);

  export default fire;
