import React from 'react';
import MessageBox from './MessageBox';
import MessageInput from './MessageInput';
import MessageHead from './MessageHead'

function MessageMain({onPickClick}) {
    return (
        <div className='message_main'>
         <MessageHead onPickClick={onPickClick}/>
         <MessageBox />
         <MessageInput />
        </div>
     
    );
}

export default MessageMain;
