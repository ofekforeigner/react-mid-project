import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const TodoComp = ({ todoData }) => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    setTitle(todoData.title);
    setCompleted(todoData.completed);
  }, [todoData])



  const handleMarkCompleted = () => {
    const obj = {
      userId: parseInt(todoData.userId),
      id: +todoData.id,
      title: title,
      completed: true
    }
    dispatch({ type: "MARK_COMPLETED", payload: obj })
  }

  return (
    <div style={{ border: '1px solid purple', margin: ".5rem .8rem .5rem .8rem", padding: '10px', display: 'grid', gridTemplateRows: 'auto auto auto' }}>
      Title: <div style={{ padding: '5px', fontSize: 'smaller' }}>{title}</div><br />
      Completed: <div style={{ padding: '5px', fontSize: 'smaller' }}>{completed.toString()}
        {!completed && <button type="button" style={{ float: 'right', backgroundColor: 'burlywood' }} onClick={handleMarkCompleted}>Mark Completed</button>}</div>
    </div>
  )
}

export default TodoComp