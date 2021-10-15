import React from 'react';
import "./Phone.css";

const Google = (props) => {
    const options = [
        {
            name:"Search Google",
           // handler: () => props.actionProvider.handler(googleHandler), 
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