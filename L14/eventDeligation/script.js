const container = document.querySelector(".container");

container.addEventListener("click",(e)=>{
    console.log("Clicked!")
    console.log(e.target);
})