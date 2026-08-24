const button = document.querySelector("changeTextBtn");
const heading = document.querySelector(".hero-text h2");

button.addEventListener("click", function(){
    heading.textContent = "You clicked the button" ;
});