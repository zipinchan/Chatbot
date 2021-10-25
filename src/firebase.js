import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, onValue, push, child } from 'firebase/database';

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

  // onValue(starCountRef, (snapshot) => {
  //   const data = snapshot.val();
  //   updateStarCount(postElement, data);
  // });

  const getArraySize = (table) => {
    onValue(ref(db, `${table}/`), (snapshot) => {
      // console.log(snapshot.size)
      return(snapshot.size)
    });
  }

  function getChat(){
    let msg = 'erm';

    onValue(ref(db, `chats/`), (snapshot) => {
      msg = 'hello'
      // console.log(snapshot.val().message)
    });

    return msg;
  }

  function writeUserData(fname, lname, email, feedback) {
    const newPostKey = push(child(ref(db), 'chats')).key;

    set(ref(db, `feedback/${newPostKey}` ), {
        firstname: fname,
        lastname: lname,
        email: email,
        feedback: feedback
    })
  }

  function chatDB(message) {
    const newPostKey = push(child(ref(db), 'chats')).key;

    set(ref(db, `chats/`), {
        message: message
    })
  }



export {
  db,
  writeUserData,
  chatDB,
  getChat
 };
