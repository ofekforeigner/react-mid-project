import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddTodoComp = ({ handleAddTodoDisplay, userId }) => {
  const [todoTitle, setTodoTitle] = useState('');


  const storeData = useSelector(state => state)
  const dispatch = useDispatch()

  const handleCancelClick = () => {
    handleAddTodoDisplay(false);
  }

  const addTodo = () => {
    let id = 0;
    if (storeData.todos.length > 0) {
      id = storeData.todos[storeData.todos.length - 1].id;
    }

    const obj = {
      userId: +userId,
      id: +id + 1,
      title: todoTitle,
      completed: false
    }
    dispatch({ type: "ADD_TODO", payload: obj })
  }

  return (
    <div style={{ margin: ".5rem .8rem .5rem .8rem", padding: '30px' }}>
      Title: <input type="text" style={{ padding: '5px' }} onChange={e => setTodoTitle(e.target.value)} /><br />
      <button type="button" style={{ float: 'right', backgroundColor: 'burlywood' }} onClick={handleCancelClick}>Cancel</button>
      <button type="button" style={{ float: 'right', backgroundColor: 'burlywood', marginRight: '5px' }} onClick={addTodo}>Add</button>
    </div>
  )
}

export default AddTodoComp