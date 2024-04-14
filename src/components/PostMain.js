import React from 'react';
import Post from './Post';
import postData from './PostData';
import "../style/Post.css";

function PostMain() {
    return (
        <div className='post2'>
    
    {postData.map((post, index) => (
               <Post key={index} post={post} />
           ))}
       
        </div>
     
    );
}

export default PostMain;
