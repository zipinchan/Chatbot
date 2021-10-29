import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Phone from "./components/Widgets/Phone";
import Safety from './components/Widgets/Safety';
import Google from './components/Widgets/Google';
import Install from './components/Widgets/Install';
import Tng from './components/Widgets/Tng';
import Youtube from './components/Widgets/Youtube';
import "./config.css";


const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?"),
    createChatBotMessage("Type \"mic\" everytime you want to use your mic :)", {
      widget:"safetyTips"
    }),
    ],

    botName:"NerdyBot",
    customComponents: {
      botAvatar:(props) =>  <BotAvatar {...props} /> ,
      header: () => <div style ={{ 
        backgroundColor: "#043469", 
        padding: "10px", 
        color:"#90B860", 
        
      }}> Talk to NerdyBot! </div>
    },
    
    customStyles: {
      botMessageBox:{
        backgroundColor: "#028A0F",
      },

      chatButton: {
        backgroundColor:"green",
      },

    },
    
    state:{
    },

   

    widgets:[

      {
        widgetName: "phone",
       widgetFunc: (props) => <Phone {...props} />,
      },
      {
        widgetName: "safetyTips",
        widgetFunc: (props) => <Safety {...props} />,
      },
      {
        widgetName: "google",
        widgetFunc: (props) => <Google {...props} />,
      },

      {
        widgetName: "install",
        widgetFunc: (props) => <Install {...props} />,
      },

      {
        widgetName: "tng",
        widgetFunc: (props) => <Tng {...props} />,
      },

      {
        widgetName: "youtube",
        widgetFunc: (props) => <Youtube {...props} />,
      }

    ]

  };

export default config;