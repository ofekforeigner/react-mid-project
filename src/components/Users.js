import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import UserComp from './User';


const UsersComp = ({ filter, addIsClicked, changeAddIsClicked }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const [isAddClicked, setIsAddClicked] = useState('');


  const storeData = useSelector(state => state)
  const dispatch = useDispatch()


  // Will run once - at the component creation (Mounting)
  useEffect(() => {
    setUsers(storeData.users)
    setIsAddClicked(addIsClicked)
  }, [addIsClicked, storeData.users]);


  // Will run when filter or users is changing
  useEffect(() => {
    const searchedUsers = users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()) || u.email.toLowerCase().includes(filter.toLowerCase()));
    setFilteredUsers(searchedUsers);
  }, [filter, users]);


  // Update User
  const onUpdate = (id, name, email, street, city, zipcode) => {
    const obj = {
      id,
      name,
      email,
      address: {
        street,
        city,
        zipcode
      }
    }
    dispatch({ type: "UPDATE_USER", payload: obj })
  };


  // Delete user
  const onDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id })
  };



  const onIdClick = (uid) => {
    setUserId(uid)
    changeAddIsClicked(false);
  }

  return (
    <div>
      {filteredUsers.length > 0 ?
        filteredUsers.map((fu) => {
          if (userId === +fu.id && !isAddClicked) {
            return (
              <UserComp key={fu.id} userData={fu} onUpdate={onUpdate} onDelete={onDelete} onIdClick={onIdClick} userDivColor='antiquewhite' />
            )
          }
          return (
            <UserComp key={fu.id} userData={fu} onUpdate={onUpdate} onDelete={onDelete} onIdClick={onIdClick} userDivColor='white' />
          )
        })
        :
        users.map((fu) => {
          return (
            <UserComp key={fu.id} userData={fu} onUpdate={onUpdate} onDelete={onDelete} userDivColor='white' />
          )
        })
      }
    </div>
  )
}

export default UsersComp