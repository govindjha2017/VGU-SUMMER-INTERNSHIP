import { useState } from "react";

// function Counter(){
//     let count=0;
//     return(
//         <>
//             <h3>{count}</h3>
//             <button>increase</button>
//         </>
//     )
// }

 
let Counter = ()=>{
    // let count=0;
    let [count,setCount] = useState(0)
    let increase = ()=>{
        console.log("clicked")
        // count++;
        // console.log(count);
        setCount(count+1);
    }
    return(
        <>
            <h3>{count}</h3>
            <button onClick={increase}>increase</button>
        </>
    )
}

export default Counter;