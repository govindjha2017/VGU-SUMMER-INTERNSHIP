// console.log("Start");


// // setTimeout(()=>{
// //     console.log("Mid");
// // },4000)

// window.setTimeout(()=>{
//     console.log("Mid");
// },4000)

// console.log("END");

// console.log(window)



// console.log("Start");

// setTimeout(()=>{
//     console.log("MID")
// },0)

// console.log("END");


let x = setInterval(()=>{
    console.log("Hello")
},1000);

setTimeout(()=>{
    clearInterval(x)
},5000)