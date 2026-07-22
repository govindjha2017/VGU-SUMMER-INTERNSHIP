import React from 'react'

const Card = ({item}) => {
     
  return (
     <div className="card">
         <img src={item.image}></img>
         <h2>Name: {item.firstName+" " +item.lastName}</h2>
         <p>Age: {item.age}</p>
         <p>Email: {item.email}</p>
         <p>Phone: {item.phone}</p>
         <p>bloodGroup: {item.bloodGroup}</p>
         <p>Gender: {item.gender}</p>
     </div>
  )
}

export default Card