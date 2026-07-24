import React, { createContext } from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'


import { UserContext } from './context/UserContext'



const App = () => {
    const user = {
        name:'Govind Jha',
        age:27,
        city:'Noida'
    }
  return (
     <>
        <Navbar/>
        <UserContext.Provider value={user}>
            <div>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>} ></Route>
                    <Route path='/project' element={<Project/>}></Route>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                    <Route path='*' element={<NotFound/>}></Route>
                </Routes>
            </div>
        </UserContext.Provider>
     </>
  )
}

export default App