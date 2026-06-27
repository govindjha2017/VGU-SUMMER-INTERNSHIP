let arr = [13,92,57,8,17,87,13];

// console.log(arr.length)


let mapArr = arr.map((item,ind,arr)=>{
    // console.log(item,ind,arr);
    console.log(ind);
    return item-5;
});

console.log(mapArr);