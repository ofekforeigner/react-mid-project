import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUserComp from './components/AddUser'
import HomepageComp from './components/Homepage'
import SelectedUserComp from './components/SelectedUser'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomepageComp />} >
          <Route path=':id' element={<SelectedUserComp />} />
          <Route path='add_user' element={<AddUserComp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App