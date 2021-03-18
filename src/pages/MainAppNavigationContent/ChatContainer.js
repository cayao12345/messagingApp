import React from "react";
import "./ChatContainer.css";
import ChatContainerElements from './ChatContainerElements'

const ChatContainer = ({allCurrentUser,changingUsername,allMessages,setAllMessages}) => {


    return (
    <div className="chatContainer">
        {
            allCurrentUser.map((data,index)=>{
               return <ChatContainerElements key={index} data={data} changingUsername={changingUsername} 
               allMessages={allMessages} setAllMessages={setAllMessages}
               />
            })
        }
    </div>
  
  
  )};
export default ChatContainer;
