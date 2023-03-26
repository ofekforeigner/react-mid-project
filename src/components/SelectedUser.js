import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import UserPostsComp from './UserPosts';
import UserTodosComp from './UserTodos';


const SelectedUserComp = () => {
  const [addTodoDisplay, setAddTodoDisplay] = useState('');
  const [addPostDisplay, setAddPostDisplay] = useState('');
  const [userTodos, setUserTodos] = useState([])
  const [userPosts, setUserPosts] = useState([])

  const params = useParams();

  const storeData = useSelector(state => state)


  // will render everytime params.id or storeData.posts or storeData.todos 
  useEffect(() => {
    let todos = storeData.todos.filter(todo => todo.userId === +params.id)
    setUserTodos(todos);

    let posts = storeData.posts.filter(todo => todo.userId === +params.id)
    setUserPosts(posts);

    setAddTodoDisplay(false);
    setAddPostDisplay(false);
  }, [params.id, storeData.posts, storeData.todos])



  return (
    <div style={{
      margin: ".5rem .8rem .5rem .8rem", padding: '10px', width: "600px"
    }}>
      <div>
        <UserTodosComp userId={params.id} todoDisplayHidden={addTodoDisplay} todos={userTodos} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <UserPostsComp userId={params.id} postDisplayHidden={addPostDisplay} posts={userPosts} />
      </div>
    </div>
  )
}

export default SelectedUserComp