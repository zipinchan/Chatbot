import React from 'react';
import "./Phone.css";

const Phone = (props) => {
    const options = [
      { text: "Apple", 
        handler: props.actionProvider.appStoreHandler, 
        id: 1,
        },

      { text: "Samsung", 
        handler: props.actionProvider.playStoreHandler, 
        id: 2,
        },

      { text: "Huawei", 
        handler: props.actionProvider.appGalleryHandler, 
        id: 3,
        },

      { text: "Xiaomi", 
        handler: props.actionProvider.playStoreHandler, 
        id: 4,
        },

      { text: "Oppo", 
        handler: props.actionProvider.playStoreHandler, 
        id: 5,
        },

      { text: "Others", 
      handler: props.actionProvider.playStoreHandler, 
      id: 6,
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
    
    export default Phone;