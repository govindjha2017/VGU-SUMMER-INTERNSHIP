// const btn = document.getElementById("btn");
// const btn = document.querySelector("#btn");
const btn = document.querySelectorAll("#btn")[0];

console.log(btn);

btn.addEventListener("click",(e)=>{
    console.log("Clicked");
    // btn.style.color="red";
    // btn.style.backgroundColor="blue"
    console.log(e.target);
})

const head = document.getElementById("head");
head.addEventListener("mouseenter",(e)=>{
    // console.log(e.target);
    e.target.style.border="2px solid red";
    e.target.style.backgroundColor="teal";
})

head.addEventListener("mouseleave",(e)=>{
    // console.log(e.target);
    e.target.style.border="";
    e.target.style.backgroundColor="";
})

let x = document.getElementById("doubleClick");
console.log(x);

x.addEventListener('dblclick',(e)=>{
    e.target.style.color="blue";
})

const para = document.querySelector("p");

para.addEventListener("copy",(e)=>{
    console.log("Text copied !!");
    window.alert("Copy karta hai !")
    e.target.innerText = "Lo kar lo copy ab";
})