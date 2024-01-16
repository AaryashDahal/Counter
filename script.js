const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("Counter");
let count = 0;


function inc() {
    
    
    
     count += 1;

   counter.innerHTML= count;
}


increase.addEventListener("click", inc);
 
function dec() {
    
    
    
    count -= 1;

  counter.innerHTML= count;
}


decrease.addEventListener("click", dec);

function zer() {
    
    
    
    count = 0;

  counter.innerHTML= count;
}


reset.addEventListener("click", zer);
