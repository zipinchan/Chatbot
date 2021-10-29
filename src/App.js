import React, { useState } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Chatbot from 'react-chatbot-kit' 
import ActionProvider from './components/Chatbot/ActionProvider';
import MessageParser from './components/Chatbot/MessageParser';
import config from './config';
import Home from './components/Home';
import Navbar from './components/partial/Navbar';
import Footer from './components/partial/Footer';
import About from './components/About';
import Registration from './components/Registration';
import Feedback from './components/Feedback';

// import React, { useState } from 'react';
// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
// import Chatbot from 'react-chatbot-kit' 
// import ActionProvider from '/src/components/Chatbot/ActionProvider';
// import MessageParser from '/src/components/Chatbot/MessageParser';
// import config from './config';
// import Home from '/src/components/Home';
// import Navbar from '/src/components/partial/Navbar';
// import Footer from '/src/components/partial/Footer';
// import About from '/src/components/About';
// import Registration from '/src/components/Registration';
// import Feedback from '/src/components/Feedback';

function App() {

  const [showBot, toggleBot] = useState(false);

  return (

    <div className="App-header">
        
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/register' component={Registration}/>
            <Route path='/feedback' component={Feedback}/>
          </Switch>


        <Footer/>
      </Router>


      {showBot && (

        <div className="app-chatbot-container">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}  />
       </div> 

        )}


        <button
          className="app-chatbot-button"
          onClick={() => toggleBot((prev) => !prev)}
        >
          <div class="overlay">
            <div class ="text"> Click me! </div>
          </div>
          <svg viewBox="0 0 640 512" className="app-chatbot-button-icon">
          </svg>
        </button>


    </div>
  );
}

export default App;
