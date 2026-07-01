
const head = document.getElementById("head");
console.log(head);

head.style.color="red";
head.style.border="2px solid black"

// element.style.csspropertyname=propertyValue
// x.style.display="flex";

const paragraph = document.getElementsByTagName('p');
console.log(paragraph);

for(let elem of paragraph){
    // console.log(elem);
    elem.style.color="green";
    elem.style.border="1px solid blue";
    elem.style.padding="10px";
}


const para = document.getElementsByClassName("para");
console.log(para);

for(let elem of para){
    elem.style.backgroundColor="teal";
    elem.style.color="red"
}


const img = document.getElementsByTagName("img")[0];
console.log(img);

img.setAttribute("src","https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

img.style.height="300px"

img.setAttribute("class","qwer");
img.setAttribute("id","asdf");

console.log(img.getAttribute("class"));
img.removeAttribute("id");

const abc = document.getElementById("abc");
abc.style.border="2px solid red";

// abc.setAttribute("class","one");
// abc.setAttribute("class","two");
// abc.setAttribute("class","one two");

// classList=> add , remove , toggle

abc.classList.add("one");
abc.classList.add("two");

abc.classList.remove("two");

abc.classList.toggle("two");
abc.classList.toggle("two");
abc.classList.toggle("two");


// const h2 = document.querySelector("h2");
// console.log(h2);

const headElem = document.querySelector("#head");
console.log(headElem);

// const paraElem = document.querySelector(".para");
// console.log(paraElem);

const paraElem = document.querySelectorAll(".para");
console.log(paraElem);