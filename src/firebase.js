import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from 'firebase/database';

var firebaseApp = {

    apiKey: "AIzaSyDbYfpeRu5oE06jnd9XDE-rLEVMjiZggd8",
    authDomain: "nerdybot.firebaseapp.com",
    databaseURL: "https://nerdybot-default-rtdb.firebaseio.com",
    projectId: "nerdybot",
    storageBucket: "nerdybot.appspot.com",
    messagingSenderId: "701446586938",
    appId: "1:701446586938:web:d35fcb72b8ba84323feb03",
    measurementId: "G-72C2CVV4F1"

  };


  const app = initializeApp(firebaseApp);
  //const analytics = getAnalytics(app);

  const db = getDatabase(app);

  function writeUserData(fname, lname, email, feedback) {
    set(ref(db, 'feedback/' ), {
        firstname: fname,
        lastname: lname,
        email: email,
        feedback: feedback
    })
    }



export { db, writeUserData };