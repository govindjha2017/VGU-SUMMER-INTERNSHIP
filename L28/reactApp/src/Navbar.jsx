import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

const Navbar = () => {
  const user = useContext(UserContext);
  console.log(user) // undefined because we can't provide value for this component
  return (
    <div className='nav'>
         
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/project">Project</Link>
        
    </div>
  )
}

export default Navbar