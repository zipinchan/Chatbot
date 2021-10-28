import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ActionProvider from './components/Chatbot/ActionProvider';
import { createChatBotMessage } from "react-chatbot-kit"; 
import MessageParser from './components/Chatbot/MessageParser'; 

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  const ActionProviderInstance = new ActionProvider(createChatBotMessage);
  const messageParser = new MessageParser();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
