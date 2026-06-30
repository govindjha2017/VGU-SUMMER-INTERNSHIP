let pr = new Promise((res,rej)=>{
    setTimeout(() => {
        res("Promise resolved Data");
        // rej("Rejectd MSG!")
    }, 5000);
})

console.log("Start")
pr
    .then((x)=>{
        console.log("Inside .then");
        console.log(x);
    })
    .catch((y)=>{
        console.log("Inside .catch")
        console.log(y);
    })

console.log("END")
 