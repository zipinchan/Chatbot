import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

var firebaseApp = {

    apiKey: "AIzaSyDbYfpeRu5oE06jnd9XDE-rLEVMjiZggd8",
    authDomain: "nerdybot.firebaseapp.com",
    projectId: "nerdybot",
    storageBucket: "nerdybot.appspot.com",
    messagingSenderId: "701446586938",
    appId: "1:701446586938:web:d35fcb72b8ba84323feb03",
    measurementId: "G-72C2CVV4F1"
  };


  const app = initializeApp(firebaseApp);
  const analytics = getAnalytics(app);

var db = getDatabase(app);

export { db };