

// function abc(p){
//     var x=50;
//     console.log(x);
// }

// let add = (a,b)=>{
//     return a+b;
// }

// abc(add);

// // abc=> HOF 
// // add=> CALL BACK FUNCTION

function fun(){
    var p=()=>{
        console.loog("inside P");
    }

    return p;
}