import React from 'react';
import "../src/components/Widgets/Phone.css";

const Microphone = (props) => {
    const options = [
      { text: "voice",
        handler: () => props.actionProvider.userMessage(),
        id: 1,
        } ];




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
    
        export default Microphone;
    