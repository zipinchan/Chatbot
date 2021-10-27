import React from 'react';
import './BotAvatar.css';
import Avatar from "../icons/bot.jpg";

const BotAvatar = () => {
    return (
    <div className="nerdy-bot-avatar"> 
     <img alt = "BotAvatar" src = {Avatar} />
     </div>
   
    )
}

export default BotAvatar;