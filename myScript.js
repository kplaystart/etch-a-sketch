//const board = document.getElementById('#board')
document.getElementById("btn").addEventListener("click", defaultGrid);

function defaultGrid(){

let userInput = document.getElementById("input").value **2;

for (i=0; i< userInput; i++){
  
  let myDiv = document.querySelector("#board");
let littleDivs = document.createElement("div");
littleDivs.classList.add("mystyle");
myDiv.appendChild(littleDivs);
 
}  
   
}
defaultGrid();




    //document.getElementById("demo").innerHTML = myFunction();


    //document.getElementsByClassName("mystyle").width=("2");
    //document.getElementsByClassName("mystyle").height=("200");

//const btn = document.querySelector("#btn");
//let userInput = prompt;

//btn.addEventListener("click", () => {})



