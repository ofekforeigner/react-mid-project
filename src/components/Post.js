import React from 'react'

const PostComp = ({ postData }) => {
  return (
    <div style={{ border: '1px solid purple', margin: ".5rem .8rem .5rem .8rem", padding: '10px', display: 'grid', gridTemplateRows: 'auto auto auto' }}>
      Title: <div style={{ padding: '5px', fontSize: 'smaller' }}>{postData.title}</div><br />
      Body: <div style={{ padding: '5px', fontSize: 'smaller' }}>{postData.body}</div>
    </div>
  )
}

export default PostComp