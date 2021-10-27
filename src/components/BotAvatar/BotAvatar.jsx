import React from 'react';
import '../../../../Chatbot/src/components/BotAvatar/BotAvatar.css';
import Avatar from "../../../../Chatbot/src/components/icons/bot.jpg";

const BotAvatar = () => {
    return (
    <div className="nerdy-bot-avatar"> 
     <img alt = "BotAvatar" src = {Avatar} />
     </div>
   
    )
}

export default BotAvatar;