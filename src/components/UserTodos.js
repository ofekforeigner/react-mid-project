import React, { useEffect, useState } from 'react'
import AddTodoComp from './AddTodo';
import TodoComp from './Todo'

const UserTodosComp = ({ userId, todoDisplayHidden, todos }) => {
  const [userTodos, setUserTodos] = useState([]);
  const [addTodoDisplay, setAddTodoDisplay] = useState('');


  useEffect(() => {
    setUserTodos(todos);
    setAddTodoDisplay(todoDisplayHidden)
  }, [todoDisplayHidden, todos])



  const handleAddTodoDisplay = (isHidden) => {
    setAddTodoDisplay(isHidden);
  }


  return (
    <div>
      {!addTodoDisplay ? <div>Todos - User {userId} <button type="button" style={{ float: 'right', backgroundColor: 'burlywood' }} onClick={() => setAddTodoDisplay(true)}>Add</button></div>
        :
        <div>New Todo - User {userId}</div>
      }
      <div style={{ border: '1px solid black', height: '500px', overflow: 'auto' }}>
        {!addTodoDisplay ?
          userTodos.map(td => {
            return (
              <TodoComp key={td.id} todoData={td} />
            )
          })
          :
          <AddTodoComp handleAddTodoDisplay={handleAddTodoDisplay} userId={userId} />
        }
      </div>
    </div>
  )
}

export default UserTodosComp