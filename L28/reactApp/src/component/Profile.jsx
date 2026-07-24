import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Profile = () => {
    const user = useContext(UserContext)
    console.log(user)
  return (
    <div>
        <h3>Profile</h3>
        <div>
            <h3>user name : {user.name}</h3>
            <p>age: {user.age}</p>
            <p>city : {user.city}</p>
        </div>
    </div>
  )
}

export default Profile