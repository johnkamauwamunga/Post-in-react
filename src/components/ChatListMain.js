import React from 'react';
import MessageData from './MessageData';
import ChatList from './ChatList';

function Home() {
    return (
        <div className='post1'>
    
        {MessageData.map((message, index) =>(
        <ChatList key={index} message={message}/>
      ))}
       
        </div>
     
    );
}

export default Home;
