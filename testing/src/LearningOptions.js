import React from 'react';
import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
      { text: "Knowledge Based", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 1,
        },

      { text: "Guidance Based", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 2,
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
    
    export default LearningOptions;