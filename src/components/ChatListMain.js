import React from 'react';
import MessageData from './MessageData';
import ChatList from './ChatList';

function ChatListMain({onChatListItemClick, onPickClick}) {
    return (
        <div className='post1'>
    
        {MessageData.map((message, index) =>(
        <ChatList key={index} message={message} onChatListItemClick={onChatListItemClick} onPickClick={onPickClick} />
      ))}
       
        </div>
     
    );
}

export default ChatListMain;
