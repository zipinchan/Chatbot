import React from 'react'
import Chatbot from 'react-chatbot-kit' 
import ActionProvider from './components/Chatbot/ActionProvider';
import MessageParser from './components/Chatbot/MessageParser';
import config from './config';

function App() {
    return (
      <div className="App">
        <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </header>
      </div>
    );
  }
  
  
  
  
  export default App;
  