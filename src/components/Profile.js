import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';
import "../style/Post.css"; // Import your CSS file for styling

function Profile() {
    return (
        <div className="user_profile">
            {/* Profile Header */}
            <div className="profile__header">
                {/* Avatar and Name */}
                <ListItem className="profile__item_avatar">
                    <ListItemAvatar className="profile__avatar">
                        <Avatar src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" alt="User" />
                    </ListItemAvatar>
                </ListItem>

                {/* profile info */}

                <ListItem className="profile__item">
                    <ListItemText 
                        primary={<span className="profile__name">John Kamau</span>} 
                        secondary="Software Engineer || Backend Developer" 
                        className="profile__text"
                    />
                </ListItem>

                {/* Bio Information */}
                <ListItem className="profile__item">
                    <ListItemText 
                        primary="Bio Information" 
                        secondary={
                            <div>
                                <p>Email: john@example.com</p>
                                <p>Phone: 123-456-7890</p>
                                <p>Bio: Normalize challenging yourself and moving out of your comfort zone.</p>
                            </div>
                        } 
                        className="profile__text"
                    />
                </ListItem>
            </div>
        </div>
    )
}

export default Profile;
