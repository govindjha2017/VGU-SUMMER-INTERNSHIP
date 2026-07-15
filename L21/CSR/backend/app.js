const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const todos = ["Game","Dance","music","cricket"];
app.use(express.json())

app.get("/todos",(req,res)=>{
    res.json({todos});
})


app.post("/todos",(req,res)=>{
     
    let data = req.body.todo;
    todos.push(data);
    
    res.json({msg:"Todo created succesfully"})
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT)
})