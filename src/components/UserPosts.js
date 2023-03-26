import React, { useEffect, useState } from 'react'
import AddPostComp from './AddPost';
import PostComp from './Post';


const UserPostsComp = ({ userId, postDisplayHidden, posts }) => {
  const [userPosts, setUserPosts] = useState([]);
  const [addPostDisplay, setAddPostDisplay] = useState('');


  useEffect(() => {
    setUserPosts(posts);
    setAddPostDisplay(postDisplayHidden)
  }, [postDisplayHidden, posts])



  const handleAddPostDisplay = (isHidden) => {
    setAddPostDisplay(isHidden);
  }


  return (
    <div>
      {!addPostDisplay ? <div>Posts - User {userId} <button type="button" style={{ float: 'right', backgroundColor: 'burlywood' }} onClick={() => setAddPostDisplay(true)}>Add</button></div>
        :
        <div>New Post - User {userId}</div>
      }

      <div style={{ border: '1px solid black', height: '500px', overflow: 'auto' }}>
        {!addPostDisplay ?
          userPosts.map(post => {
            return (
              <PostComp key={post.id} postData={post} />
            )
          })
          :
          <AddPostComp handleAddPostDisplay={handleAddPostDisplay} userId={userId} />
        }
      </div>
    </div>
  )
}

export default UserPostsComp