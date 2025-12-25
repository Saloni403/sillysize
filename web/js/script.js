let ourallcatg = document.querySelector(".ourallcatg")
let categorymenu = document.querySelector(".categorymenu")
let categorymenuclosebtn = document.querySelector(".categorymenuclosebtn");

ourallcatg.addEventListener("click", ()=>{
    categorymenu.style.left="0"; 
    document.body.style.overflow="hidden";
})

categorymenuclosebtn.addEventListener("click",()=>{
    categorymenu.style.left="-350px";
     document.body.style.overflow="auto"; 
})