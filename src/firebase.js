import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from 'firebase/database';

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
  const db = getDatabase(app);


  function writeUserData(fname, lname, email, feedback) {
    function makeid (length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

    const result = makeid(10);

    set(ref(db, `feedback/${result}` ), {
        firstname: fname,
        lastname: lname,
        email: email,
        feedback: feedback
    })
  }



export {
  db,
  writeUserData,
 };
