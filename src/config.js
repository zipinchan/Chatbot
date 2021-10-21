import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Todos from "./components/Todos/Todos";
import Phone from "./components/Widgets/Phone";
import Safety from './components/Widgets/Safety';
import Google from './components/Widgets/Google';
import Microphone from './Microphone';
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
    createChatBotMessage("Click for voice", {
      widget:"microphone"
    })
    ],

    botName:"NerdyBot",
    customComponents: {
      botAvatar:(props) =>  <BotAvatar {...props} /> 
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
      todos:[]
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
        mapStateToProps: [
          "lowerCaseMessage"
        ],
      },
      {
        widgetName: "microphone",
        widgetFunc: (props) => <Microphone {...props} />,
      }
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