import React from 'react';
import "./Phone.css";
import "../Chatbot/MessageParser"



const Google = (props) => {
    const options = [
        {
           text:"Search Google",
           handler: props.actionProvider.searchHandler(), 
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