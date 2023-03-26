import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddPostComp = ({ handleAddPostDisplay, userId }) => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');



  const storeData = useSelector(state => state)
  const dispatch = useDispatch()



  const handleCancelClick = () => {
    handleAddPostDisplay(false);
  }


  const addPost = () => {
    let id = 0;
    if (storeData.posts.length > 0) {
      id = storeData.posts[storeData.posts.length - 1].id;
    }

    const obj = {
      userId: +userId,
      id: +id + 1,
      title: postTitle,
      body: postBody
    }
    dispatch({ type: "ADD_POST", payload: obj })
  }

  return (
    <div style={{ margin: ".5rem .8rem .5rem .8rem", padding: '30px' }}>
      Title: <br /><input type="text" style={{ padding: '5px' }} onChange={e => setPostTitle(e.target.value)} /><br />
      Body: <br /><input type="text" style={{ padding: '5px' }} onChange={e => setPostBody(e.target.value)} /><br />
      <button type="button" style={{ float: 'right', backgroundColor: 'burlywood' }} onClick={handleCancelClick}>Cancel</button>
      <button type="button" style={{ float: 'right', backgroundColor: 'burlywood', marginRight: '5px' }} onClick={addPost}>Add</button>
    </div>
  )
}

export default AddPostComp