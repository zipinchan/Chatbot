import React from 'react';
import "./Phone.css";
import lowerCaseMessage from "../Chatbot/MessageParser"

const searchHandler = () => {
  window.open('https://www.google.com/search?q=' + lowerCaseMessage);
}

const Google = (props) => {
    const options = [
        {
            text:"Search Google",
           handler: searchHandler, 
            id: 1,
        }
    ];
    const optionsMarkup = options.map((option) => (
      <button
        className="learning-option-button"
        key={option.id}
        onClick={option.handler}
      >
        {option.text}
      </button>
    ));
  
    return <div className="learning-options-container">{optionsMarkup}</div>;
  };
    

export default Google;