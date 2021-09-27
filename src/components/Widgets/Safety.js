import React from 'react';
import "./Phone";


const Safety = (props) => {
    const options = [
      { text: "Tips", 
        handler: props.actionProvider.safetyHandler, 
        id: 1,
        },
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
    
    export default Safety;