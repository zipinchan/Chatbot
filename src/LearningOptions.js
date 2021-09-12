import React from 'react';
import "./LearningOptions.css";

const LearningOptions = (props) => {
    const options = [
      { text: "Apple", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 1,
        },

      { text: "Samsung", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 2,
        },

      { text: "Huawei", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 3,
        },

      { text: "Xiaomi", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 4,
        },

      { text: "Oppo", 
        handler: props.actionProvider.handleJavascriptList, 
        id: 5,
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