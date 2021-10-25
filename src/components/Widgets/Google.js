import React from 'react';
import "./Phone.css";
import Options from "../Widgets/Options/Options";



const Google = (props) => {
    const options = [
        {
           text:"Search Google",
           handler: props.actionProvider.googleSearch, 
           id: 1,
        }
    ];

    
    // return <Options options={options} title="Parking options" {...props} />;

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