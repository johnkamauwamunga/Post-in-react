import React,{useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import "../style/Post.css";
import ListItemButton from '@mui/material/ListItemButton';

export default function ChatList({message, onChatListItemClick}) {



  return (
    <List className="chatlist" sx={{ width: '100%',maxWidth: 360, bgcolor: 'background.paper' }}>
     
     {/* <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        > */}

      <ListItem alignItems="flex-start"
          button
          onClick={() => onChatListItemClick()}
      >
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={message.profUri} />
      </ListItemAvatar>
        <ListItemText
          primary= {message.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              
              </Typography>
              {message.msg}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      {/* </ListItemButton> */}
    </List>
  );
}