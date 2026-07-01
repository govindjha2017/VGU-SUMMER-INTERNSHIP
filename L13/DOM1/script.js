// const list = document.getElementsByTagName("li");
// console.log(list);

// const list = document.querySelector("li");
// console.log(list);

// const list = document.querySelectorAll("li");
// console.log(list);

// const favCity = document.getElementById("favCity");
const favCity = document.querySelector("#favCity");
const favCity2 = document.querySelectorAll("#favCity");

console.log(favCity);
// console.log(favCity2);

favCity.style.border="2px solid blue";

console.log(favCity.previousElementSibling);
console.log(favCity.nextElementSibling);

favCity.previousElementSibling.style.color="green";
favCity.nextElementSibling.style.color="green";

favCity.nextElementSibling.nextElementSibling.style.backgroundColor="grey";

favCity.parentElement.style.border="2px solid red";


const ul = document.querySelector("ul");


// const x = ul.children;
// console.log(x);

const y = ul.children[1];
y.style.backgroundColor="yellow";


const p = document.querySelector('p');
// p.innerText="Hello"
// p.innerHTML="Kuchh bhi"
p.innerText="<h1>Hello</h1>"
// p.innerHTML="<h1>Hello</h1>"
 
// console.log(p);


const paragraph = document.createElement("p");
paragraph.innerText="Javascript"
console.log(paragraph);

const div = document.querySelector('div');
// div.append(paragraph);
// div.append("hello");
div.appendChild(paragraph);
div.appendChild("Hello")