let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let arr = [33,45,62,12];
        resolve(arr)
    },5000)
})
console.log("Start");
async function handllePromise(){
    console.log("world");
    let x = await pr;
    console.log("console after resolved");
    console.log(x);
}

console.log("Hello");
handllePromise();
console.log("END");