import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ThumbUp, Share, Comment } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function PostButtons({toggleComments, toggleLike, isLiked }) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
        <ListItem alignItems="flex-start">
        <ListItemText
                    primary={
                        <React.Fragment>
                           
                            {/* <IconButton color="secondary" sx={{ width: '10px', height: '10px'}}>
                                <ThumbUp /> <strong>like</strong>
                            </IconButton> */}

                              <IconButton color={isLiked ? "primary" : "secondary"} onClick={toggleLike}>
                                <ThumbUp sx={{ fontSize: '16px', color: isLiked ? "primary" : "inherit" }} /> 
                                <strong style={{ fontWeight: 'normal', fontSize: '14px' }}>{isLiked ? "Liked" : "Like" }</strong>
                            </IconButton>

                            <IconButton color="secondary" onClick={toggleComments}>
                                <Comment sx={{ fontSize: '16px' }} /><small style={{ fontWeight: 'normal', fontSize: '14px' }}>10</small>
                            </IconButton>

                            <IconButton color="secondary">
                                <Share sx={{ fontSize: '16px' }} /><strong style={{ fontWeight: 'normal', fontSize: '14px' }}>share</strong>
                            </IconButton>
                        </React.Fragment>
                    }
                
                />
           
        </ListItem>
        <Divider variant="inset" component="li" />  
    </List>
    )
}

export default PostButtons
