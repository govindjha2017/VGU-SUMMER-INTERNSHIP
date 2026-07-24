import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  let handleClick = ()=>{
    //logic
    //api call login 
    //res verify / something went worng
    navigate('/dashboard')
  }
  return (
    <div>
        <h1>This is my home page</h1>
        <input type='text' placeholder='Username'></input>
        <br></br>
        <input type='text' placeholder='Passowrd'></input>
        <br></br>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home