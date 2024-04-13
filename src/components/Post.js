import React, {useState} from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
import Comments from './Comment';
import PostButton from './PostButtons';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import "../style/Post.css";

function Post({post}) {

    const [showComments, setShowComments] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };

  //  console.log(PostData);


    return (
        <div className="post">
              
            <div className="post__header">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="post__avatar" src={post.profUri} alt="User" />
                    </ListItemAvatar>
                    <ListItemText primary={post.name} secondary="Unlock new growth opportunities wit..." />
                </ListItem>

                <ListItem>
                    <ListItemText primary="" secondary="Normalize challenging yourself and moving out of your comfort zone." />
                </ListItem>

                {/* <img
                    className="post__image"
                    src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D"
                    alt="Post pic"
                /> */}
               <img
                    className="post__image"
                    src={post.imageUri}
                    alt="Post pic"
                />
                <ListItem>
                <PostButton toggleComments={toggleComments} toggleLike={toggleLike} isLiked={isLiked} />
                </ListItem>

                {/* <div className="post__comments">
                    <Comments />
                </div> */}

{showComments && (
                <form className="post__form">
                <TextField
                label="add comment"
                size="small"
                variant="outlined"
                className="post__input"
                placeholder="add comment"
                InputProps={{
                    style: {
                        borderRadius: "25px",

                    },
                    endAdornment: (
                        <IconButton color="primary">
                            <SendIcon />
                        </IconButton>
                    )
                }}
            />

                </form>
)}

                {showComments && (
                    <div className="post__comments">
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                        <Comments />
                    </div>
                )}

                   
            </div>
          
        </div>
    )
}

export default Post
