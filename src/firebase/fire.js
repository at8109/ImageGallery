
import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyDQg1OMkYaMiMQbYjE-93oo_DyRCdl9Dec",
    authDomain: "react-firegram-4f773.firebaseapp.com",
    databaseURL: "https://react-firegram-4f773.firebaseio.com",
    projectId: "react-firegram-4f773",
    storageBucket: "react-firegram-4f773.appspot.com",
    messagingSenderId: "426784876075",
    appId: "1:426784876075:web:48b405c08e5587b77c2c6e"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;