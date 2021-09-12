import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


