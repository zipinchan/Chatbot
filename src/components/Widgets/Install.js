import React from 'react';
import "./Phone.css";


const Install = (props) => {
    const options = [
      { text: "How to install apps",
      handler: props.actionProvider.phoneHandler, 
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

    export default Install;
