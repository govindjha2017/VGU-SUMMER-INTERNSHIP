import React, { useEffect, useState } from 'react'

const App = () => {
    let [count,setCount] = useState(0);

    let handleClick = ()=>{
         setCount(count+1);
    }

    // useEffect(()=>{
    //     console.log("count is",count)
    //     console.log("Effect")
    // })

    // useEffect(()=>{
    //     console.log("count is",count)
    //     console.log("Effect")
    // },[])

    useEffect(()=>{
        console.log("count is",count)
        console.log("Effect");
        document.title=`count is ${count}`
    },[count])

  return (
     <>
        <h2>Learning React Hooks</h2>
        <h3>Count: {count}</h3>
        <button onClick={handleClick}>Click me</button>
     </>
  )
}

export default App