let arr = [23,54,13,92,17,76];

let reduceVal = arr.reduce((acc,item,ind,arr)=>{
    // console.log(ind);
    // console.log(item);
    // console.log(acc);
    return ind*10;
},"Hello")

console.log(reduceVal);