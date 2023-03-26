import { React, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { getAllPosts, getAllTodos, getAllUsers } from '../utils';
import UsersComp from './Users';

const HomepageComp = () => {
  const [search, setSearch] = useState('');
  const [addIsClicked, setAddIsClicked] = useState(false)


  const dispatch = useDispatch()

  useEffect(() => {
    async function getUsers() {
      let allUsers = await getAllUsers();
      dispatch({ type: "LOAD_USERS", payload: allUsers })
      let allTodos = await getAllTodos();
      dispatch({ type: "LOAD_TODOS", payload: allTodos })

      let allPosts = await getAllPosts();
      dispatch({ type: "LOAD_POSTS", payload: allPosts })
    }
    getUsers();
  }, [dispatch])


  const changeAddIsClicked = (isClicked) => {
    setAddIsClicked(isClicked)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Link to='/'><button type="button" style={{ backgroundColor: 'burlywood', float: 'right' }} onClick={() => setAddIsClicked(true)}>Homepage</button></Link><br />
      <div style={{
        border: `1px solid gray`, borderRadius: "25px", margin: ".5rem .8rem .5rem .8rem", padding: '10px', width: "600px"
      }}>
        Search < input type="text" onChange={(e) => { setSearch(e.target.value) }} />
        <Link to='add_user'><button type="button" style={{ backgroundColor: 'burlywood', float: 'right' }} onClick={() => setAddIsClicked(true)}>Add</button></Link>
        <UsersComp filter={search} addIsClicked={addIsClicked} changeAddIsClicked={changeAddIsClicked} />
      </div >
      <Outlet />
    </div>
  )
}

export default HomepageComp