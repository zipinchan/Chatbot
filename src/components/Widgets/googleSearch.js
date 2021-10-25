// import React from "react";

// import Link from "./Link";

// const GoogleLink = () => {
//   const getUrl = () => {
//     return `https://www.google.com/search?q=${userInput}`;
//   };

//   return (
//     <Link url={getUrl()} title={"search on Google"} />
//   );
// };

import React from "react";
import { initializeApp } from "firebase/app";

import Link from "./Link";
// import {db, getChat} from '../../firebase';
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
const db = getDatabase(app);

const getMsg = () => {
  onValue(ref(db, `chats/`), (snapshot) => {
    console.log(snapshot.val().message)
    // const data = snapshot.val();
  });
};


const GoogleLink = ({userInput}) => {


  const getUrl = () => {
    return `https://www.google.com/search?q=${'hi'}`;
  };

  return <Link url={getUrl()} title={"book parking on Avinor.no"} />;
};



export default GoogleLink;
