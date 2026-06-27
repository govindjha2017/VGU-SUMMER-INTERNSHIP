let arr = [13,92,57,8,17,87,13];

let filterArr = arr.filter((item,ind,arr)=>{
    if(item%2==0){
        return true;
    }
})

console.log(filterArr);