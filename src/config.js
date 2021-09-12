import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";
import Todos from "./components/Todos/Todos";
import Phone from "./LearningOptions";

/* import LearningOptions from "./LearningOptions";
import LinkList from "./LinkList"; */

const config = {
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?", ),
    ],
    botName:"NerdyBot",
    customComponents: {
      botAvatar:(props) =>  <BotAvatar {...props} /> 
    },
    customStyles: {
      botMessageBox:{
        backgroundColor: "green",
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