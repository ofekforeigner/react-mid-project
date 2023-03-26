import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const UserComp = ({ userData, onUpdate, onDelete, onIdClick, userDivColor }) => {
  const [userId, setUserId] = useState(userData.id)
  const [userFullName, setUserFullName] = useState(userData.name)
  const [userEmail, setUserEmail] = useState(userData.email)
  const [userStreet, setUserStreet] = useState(userData.address.street)
  const [userCity, setUserCity] = useState(userData.address.city)
  const [userZipcode, setUserZipcode] = useState(userData.address.zipcode)

  const [onHover, setOnHover] = useState(false)

  const [userBorderColor, setUserBorderColor] = useState('');


  const storeData = useSelector(state => state)

  useEffect(() => {
    setUserId(userData.id)
    setUserFullName(userData.name)
    setUserEmail(userData.email)
    setUserStreet(userData.address.street)
    setUserCity(userData.address.city)
    setUserZipcode(userData.address.zipcode)
  }, [storeData.currentId, storeData.todos, userData]);


  useEffect(() => {
    const incompleteTodos = storeData.todos.filter(td => td.completed === false && td.userId === +userData.id);
    if (!incompleteTodos || incompleteTodos.length === 0) {
      setUserBorderColor('green');
    } else {
      setUserBorderColor('red');
    }
  }, [storeData.todos, userData.id]);



  const handleOnUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(userId, userFullName, userEmail, userStreet, userCity, userZipcode);
  };

  const handleDelete = () => {
    onDelete(userId);
  };

  const handleOnIdClick = () => {
    onIdClick(userId);
  }

  return (
    <div style={{ border: `2px solid ${userBorderColor}`, borderRadius: '5px', backgroundColor: userDivColor, margin: ".5rem .8rem .5rem .8rem", padding: '10px' }} >
      <Link to={`${userId}`} onClick={handleOnIdClick}>ID: {userId}</Link><br /><br />
      Name: <input type="text" value={userFullName} onChange={(e) => { setUserFullName(e.target.value) }} /><br /><br />
      Email: <input type="text" value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} /><br /><br />
      <div>
        <button type="button" style={{ backgroundColor: 'lightgray', border: 'none' }} onMouseOver={(e) => { setOnHover(true) }} onClick={(e) => { setOnHover(false) }}>Other Data</button>
        {onHover &&
          <div style={{ border: `2px solid black`, borderRadius: "5px", margin: ".5rem .8rem .5rem .8rem", padding: '10px', backgroundColor: "#f1f1f1" }}>
            Street: <input type="text" value={userStreet} onChange={(e) => { setUserStreet(e.target.value) }} /><br />
            City: <input type="text" value={userCity} onChange={(e) => { setUserCity(e.target.value) }} /><br />
            Zip Code: <input type="text" value={userZipcode} onChange={(e) => { setUserZipcode(e.target.value) }} />
          </div>
        }
        <div style={{ textAlign: 'right' }}>
          <button type="button" style={{ backgroundColor: 'burlywood', marginRight: '5px' }} onClick={handleOnUpdateSubmit}>Update</button>
          <Link to='/'><button type="button" style={{ backgroundColor: 'burlywood' }} onClick={handleDelete}>Delete</button></Link>
        </div>
      </div>
    </div >
  )
}

export default UserComp