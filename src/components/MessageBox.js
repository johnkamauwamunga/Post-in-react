import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar,TextField } from '@material-ui/core';
import "../style/Post.css"; // Import your CSS file for styling
import Comments from './Comment';

function MessageBox() {
    return (
        <div className="Message_box">
            {/* Profile Header */}
            <div className="post__header">
                {/* Avatar and Name */}
             
                <ListItem className="profile__item">
                <div className="post__comments">
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                      
                    </div>

                </ListItem>

                {/* Bio Information */}
             
            </div>
        </div>
    )
}

export default MessageBox;
