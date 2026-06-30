console.log("Start");
function abc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let arr = [31,56,14];
            resolve(arr)
        },5000)
    })
}
console.log("Hello");
setTimeout(()=>{
    console.log("World");
},5000);
abc()
    .then((x)=>{
        console.log("inside .then");
        let y =  x.filter((item)=>{
            if(item%2==0){
                return true;
            }
        }).reduce((acc,item)=>{
            return acc+item;
        },0)
        console.log(y);
    })
    .catch((x)=>{
        console.log("inside.cath");
        console.log(x);
    })

console.log("END");