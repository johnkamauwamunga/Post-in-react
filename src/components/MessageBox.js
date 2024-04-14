import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar,TextField } from '@material-ui/core';
import "../style/Post.css"; // Import your CSS file for styling
import Comments from './Comment';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function MessageBox({onPickClick}) {
    return (
        <div className="Message_box">
            {/* Profile Header */}
            <div className="post__header">
                {/* Avatar and Name */}
                <ListItem className="post__avatar">

                {/* <ListItemAvatar button onClick={() => onPickClick()}>
        <Avatar alt="Remy Sharp" src={message.profUri} />
      </ListItemAvatar> */}
                    <ListItemAvatar className="post__avatar"  button onClick={() => onPickClick()}>
                        <Avatar src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" alt="User" />
                    </ListItemAvatar>

                    <ListItem>
                    <ListItemText primary="John Kamau" secondary="" />
                </ListItem>
                </ListItem>

                {/* profile info */}

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
                <ListItem className="profile__item">
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
        </div>
    )
}

export default MessageBox;
