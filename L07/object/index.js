 
// let obj = {
//     FirstName:"Akash",
//     lastNAme: "kumar",
//     "age":20,
//     city:"Noida",
//     "IsGraduated": false,
//     marks:[6.1,8.5,9.1,8.8],
// }

// console.log(obj);

// obj => city

// console.log(obj.city)
// console.log(obj.IsGraduated);
// console.log(obj.marks[2]);

// console.log(obj.FirstName);
// console.log(obj.lastNAme);
// console.log(obj.age);



let obj = {
    "Full name": "Akash kumar",
    age:20,
    "city":"Noida",
    IsGraduated: false,
    marks:[6.1,8.5,9.1,8.8],
    i:"abc"
}

// console.log(obj["Full name"])

// console.log(obj.city);
// console.log(obj["city"]);

// for in loop

for(let i in obj){
    // console.log(i);
    // console.log(obj.i);
    console.log(obj[i]);
}