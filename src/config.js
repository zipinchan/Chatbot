import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../../Chatbot/src/components/BotAvatar/BotAvatar";
import Phone from "../../Chatbot/src/components/Widgets/Phone";
import Safety from '../../Chatbot/src/components/Widgets/Safety';
import Google from '../../Chatbot/src/components/Widgets/Google';
import "../../Chatbot/src/config.css";


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