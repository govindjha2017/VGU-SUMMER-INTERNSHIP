import React from 'react'
import Card from './Card'
import "./style.css";

const App1 = () => {
    const users = [
        {
            name:"rahul",
            age:45,
            city:"Delhi"
        },
        {
            name:"ajay",
            age:31,
            city:"Noida"
        },
        {
            name:"rohit",
            age:40,
            city:"Mumbai"
        },
    ]
  return (
    <>
        {/* <Card user={users[0]}/>
        <Card user={users[1]}/>
        <Card user={users[2]}/> */}
        {
            users.map((item,ind)=>{
              return <Card key={ind} user={item} />
            })
        }
    </>
  )
}

export default App1