import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar,TextField } from '@material-ui/core';
import "../style/Post.css"; // Import your CSS file for styling
import Comments from './Comment';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function MessageHead({onPickClick}) {
    return (
   
            <div className="message__header">
                {/* Avatar and Name */}
                <ListItem className="post__avatar">

             
                    <ListItemAvatar className="post__avatar"  button onClick={() => onPickClick()}>
                        <Avatar src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" alt="User" />
                    </ListItemAvatar>

                    <ListItem>
                    <ListItemText primary="John Kamau" secondary="" />
                </ListItem>
                </ListItem>

            </div>
    )
}

export default MessageHead;
