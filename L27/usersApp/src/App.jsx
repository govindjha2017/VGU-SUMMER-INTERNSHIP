import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from "./Card";
import "./style.css"

const App = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
       async function fetchData(){
            // let res = await fetch('https://dummyjson.com/users');
            // let data = await res.json();
            // console.log(data.users);

            let res = await axios.get("https://dummyjson.com/users");
            console.log(res.data.users);

            setUsers(res.data.users);
        }

        fetchData()
    },[])

  return (
     <>
        <h2>Users Page</h2>
        <div className="container">
            {users.map((item,ind)=>{
            return <Card key={ind} item={item} />
         })}
        </div>
     </>
  )
}

export default App