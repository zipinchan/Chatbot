import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Phone from "./components/Widgets/Phone";
import Safety from './components/Widgets/Safety';
import Google from './components/Widgets/Google';
import "./config.css";


const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", ),
    createChatBotMessage("or", {
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
      todos:[],
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

    ]

  };

export default config;