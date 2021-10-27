import React from 'react';
import ReactDOM from 'react-dom';
import '../../Chatbot/src/index.css';
import App from '../../Chatbot/src/App';
import * as serviceWorker from '../../Chatbot/src/serviceWorker';
import ActionProvider from '../../Chatbot/src/components/Chatbot/ActionProvider';
import { createChatBotMessage } from "react-chatbot-kit"; 
import MessageParser from '../../Chatbot/src/components/Chatbot/MessageParser'; 

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
