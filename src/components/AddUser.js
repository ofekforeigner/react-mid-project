import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const AddUserComp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const storeData = useSelector(state => state)


  const dispatch = useDispatch()

  const addUser = () => {
    const id = storeData.users[storeData.users.length - 1].id;
    const obj = {
      id: +id + 1,
      name,
      email,
      address: {
        street: '',
        city: '',
        zipcode: ''
      }
    }
    dispatch({ type: "ADD_USER", payload: obj })
  }

  return (
    <div style={{ margin: ".5rem .8rem .5rem .8rem", padding: '30px' }}>
      Add New User <br />
      <div style={{ margin: ".5rem .8rem .5rem .8rem", padding: '30px', border: '1px solid black' }}>
        Name: <br /><input type="text" style={{ padding: '5px' }} onChange={e => setName(e.target.value)} /><br />
        Email: <br /><input type="text" style={{ padding: '5px' }} onChange={e => setEmail(e.target.value)} /><br /><br />
        <Link to='/'><button type="button" style={{ float: 'right', backgroundColor: 'burlywood' }}>Cancel</button></Link>
        <button type="button" style={{ float: 'right', backgroundColor: 'burlywood', marginRight: '5px' }} onClick={addUser}>Add</button>
      </div>
    </div >
  )
}

export default AddUserComp