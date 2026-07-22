import React from 'react'

const Card = ({user}) => {
  return (
    <>
        <div className="box">
            <h2>Name: {user.name} </h2>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
        </div>
    </>
  )
}

export default Card