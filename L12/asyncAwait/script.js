
// async function fun(){
//     return "HEllO";
// }

// let x = fun();
// console.log(x);


// async function abc(){

// }

// let y= abc();
// console.log(y);




let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise Data")
    },4000)
})


// pr
//     .then((x)=>{
//         console.log(x);
//     })


async function handlePromise(){
    let x = await pr;
    console.log(x);
}

handlePromise();