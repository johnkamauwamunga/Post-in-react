import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar,TextField } from '@material-ui/core';
import "../style/Post.css"; // Import your CSS file for styling

import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function MessageInput() {
    return (
        <div className="Message_input">
            {/* Profile Header */}
         

                {/* message input */}
                <ListItem className="">
                <form className="post__form">
                <TextField
                label="add comment"
                size="small"
                variant="outlined"
                className="post__input"
                placeholder="Send Message"
                InputProps={{
                    style: {
                        borderRadius: "25px",

                    },
                    endAdornment: (
                        <IconButton color="Secondary">
                            <SendIcon />
                        </IconButton>
                    )
                }}
            />

            </form>
                </ListItem>
            </div>
    
    )
}

export default MessageInput;
