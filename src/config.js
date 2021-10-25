import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Todos from "./components/Todos/Todos";
import Phone from "./components/Widgets/Phone";
import Safety from './components/Widgets/Safety';
import Google from './components/Widgets/Google';
import GoogleSearch from './components/Widgets/googleSearch';
import "./config.css";

/* import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList"; */



const config = {
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", ),
    createChatBotMessage("or",),
    createChatBotMessage("Click here for some safety tips", {
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
        widgetName: "todos",
        widgetFunc: (props) => <Todos {...props}/>, //check todos.jsx
        mapStateToProps: ["todos"],
      },
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
        widgetName: "googleSearch",
        widgetFunc: (props) => <GoogleSearch {...props} />,
        mapStateToProps: ["userInput"],
      },
    ]


  /* widgets: [
       {
         widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
       },
       {
         widgetName: "linklist",
         widgetFunc:(props) => <LinkList {...props}/>,
         props: {
          options: [
            {
              text: "Introduction to JS",
              url:
                "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            },
          ],

           },
        },
    ], */
  };

export default config;