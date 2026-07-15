const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/VGU")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected!")
    })

const userSChema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

const Users = mongoose.model("Users",userSChema);


////////////  INSERT DOCUMENT ////////////////

// Users.insertOne({
//     username:"rahul",
//     password:"rahul@123",
//     age:35,
//     city:'Pune'
// }).then(()=>{console.log("Document created successfully!")})

// Users.insertMany([
//     {
//         username:"ajay",
//         password:"ajay@123",
//         age:45,
//         city:"Delhi"
//     },
//     {
//         username:"teena",
//         password:"teena@123",
//         age:26,
//         city:"Noida"
//     },
//     {
//         username:"lokesh",
//         password:"lokesh@123",
//         age:19,
//         city:"Jaipur"
//     }
// ]).then(()=>{console.log("Document created!")})


//////////      Document READ          //////////////

// Users.find({})
//     .then((data)=>{console.log(data)});

// Users.find({city:"Delhi"})
//     .then((data)=>{console.log(data)});

// Users.findOne({city:"Delhi"})
//     .then((data)=>{console.log(data)});

// Users.findById("6a5754286bfb7032f5b8a77f")
//     .then((data)=>{console.log(data)})



//////////       Documnet UPDATE ///////////////

// Users.updateOne({},{password:"pass123"})
//     .then(()=>{console.log("Updated!")})

// Users.updateMany({},{password:"pass123"})
//     .then(()=>{console.log("Updated!")})

// Users.updateOne({username:"ajay"},{password:"ajay@123"})
//     .then(()=>{console.log("Updated!")})

// Users.findByIdAndUpdate("6a5754286bfb7032f5b8a77e",{age:20})
//     .then(()=>{console.log("Updated!")})


///////////  Document DELETE ////////////////////

// Users.deleteOne({})
//     .then(()=>{console.log("DELETED")})

// Users.findByIdAndDelete("6a5754286bfb7032f5b8a77f")
//     .then(()=>{console.log("DELETED")})

// Users.deleteMany({})
//     .then(()=>{console.log("Deleted")})

// lt lte gt gte

Users.deleteMany({age:{$lt:25}})
    .then(()=>{
        console.log("DELETED")
    })


app.get("/",(req,res)=>{
    res.send("Working fine!")
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})