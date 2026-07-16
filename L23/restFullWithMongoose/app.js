const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Products = require("./models/product");
const path = require("path");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}))

mongoose.connect("mongodb://localhost:27017/VGU-Ecom")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected")
    })

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/products",async (req,res)=>{
    const products = await Products.find({});
    // console.log(products)
    res.render("index",{products})
})

app.get("/product/new",(req,res)=>{
    res.render("new")
})

app.post("/products",async (req,res)=>{
    const {name,image,price,desc} = req.body;
    await Products.create({name,image,price,desc});
    res.redirect("/products")
})

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT)
})