import React from 'react';
import Post from './Post';
import postData from './PostData';
import ChatListMain from './ChatListMain';
import Profile from './Profile';
import "../style/Post.css";

function Home() {
    return (
        <>
        
      

<div className="container">
    {/* first panel */}
  <div className="left-panel">
    < ChatListMain />
  </div>

  {/* posts */}
  <div className="center-panel">
  
            {postData.map((post, index) => (
               <Post key={index} post={post} />
           ))}
        
  </div>

  {/* profile */}
  <div className="right-panel">
    <Profile />
    <Profile />
  </div>
</div>

       
        </>
     
    );
}

export default Home;
