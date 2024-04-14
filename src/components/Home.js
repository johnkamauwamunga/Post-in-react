import React,{useState} from 'react';
import Post from './Post';
import postData from './PostData';
import ChatListMain from './ChatListMain';
import Profile from './Profile';
import "../style/Post.css";
import MessageBox from './MessageBox';
import PostMain from './PostMain';

function Home() {

  const [showMessageBox, setShowMessageBox] = useState(false);
  const [showChatList, setShowChatList] = useState(true);

  const handleChatListItemClick = () => {
    setShowMessageBox(true);
    setShowChatList(false);
  };

  const handleBack =() => {
    setShowChatList(true);
    setShowMessageBox(false);
  }

    return (
        <>
        
      

<div className="container">
    {/* first panel */}
  {/* <div className="left-panel">
    < ChatListMain />
  </div> */}

<div className="left-panel">
        {showMessageBox ? (
          <MessageBox onPickClick={handleBack}/>
        ) : (
          <ChatListMain onChatListItemClick={handleChatListItemClick} />
        )}
      </div>

  {/* posts */}
  <div className="center-panel">
  <PostMain />    
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
