
// let pr = new Promise((resolve, reject) => {
//     reject()
// })

// console.log(pr);


// let pr = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         // resolve()
//         reject()
//     },4000)
// })

// console.log(pr);


let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        //  resolve("Promise resolved data");
        // reject("Promise rejected Data");

        let arrData = [7.8,9.1,9.6,8.4,6.9]
        resolve(arrData);
    },4000)
})

console.log(pr);