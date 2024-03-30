document.getElementById("btn").addEventListener("click", clearGrid);
document.getElementById("btn").addEventListener("click", createGrid);
document.getElementById("white").addEventListener("click", clearGrid);
document.getElementById("white").addEventListener("click", whiteColor);
document.getElementById("rainbow").addEventListener("click", clearGrid);
document.getElementById("rainbow").addEventListener("click", rainbowColor);
document.getElementById("black").addEventListener("click", clearGrid);
document.getElementById("black").addEventListener("click", blackColor);
document.getElementById("reset").addEventListener("click", clearGrid);
document.getElementById("reset").addEventListener("click", resetGrid);


function resetGrid(){
  let squares = document.getElementById("input").value
  let userInput = document.getElementById("input").value **2;
  
  
  for (i=0; i< userInput; i++){
  
  let myDiv = document.querySelector("#board");
  let littleDivs = document.createElement("div");
  $(littleDivs).width(400/squares);
  $(littleDivs).height(400/squares);
  littleDivs.style.aspectRatio = '1/1'
  littleDivs.classList.add("newgrid");
  //THIS BIT ADDS THE COLOR BLACK//
  littleDivs.addEventListener("mouseover", () => {
  littleDivs.style.backgroundColor = "pink"  });
  
  myDiv.appendChild(littleDivs);
  }
}



function blackColor(){

  let squares = document.getElementById("input").value
  let userInput = document.getElementById("input").value **2;
  
  
  for (i=0; i< userInput; i++){
  
  let myDiv = document.querySelector("#board");
  let littleDivs = document.createElement("div");
  $(littleDivs).width(400/squares);
  $(littleDivs).height(400/squares);
  littleDivs.style.aspectRatio = '1/1'
  littleDivs.classList.add("newgrid");
  //THIS BIT ADDS THE COLOR BLACK//
  littleDivs.addEventListener("mouseover", () => {
  littleDivs.style.backgroundColor = "black"  });
  
  myDiv.appendChild(littleDivs);
  }
}




function rainbowColor(){

  let squares = document.getElementById("input").value
  let userInput = document.getElementById("input").value **2;
  
  
  for (i=0; i< userInput; i++){
  
  let myDiv = document.querySelector("#board");
  let littleDivs = document.createElement("div");
  $(littleDivs).width(400/squares);
  $(littleDivs).height(400/squares);
  littleDivs.style.aspectRatio = '1/1'
  littleDivs.classList.add("newgrid");
  //THIS BIT ADDS THE COLOR BLACK//
  littleDivs.addEventListener("mouseover", () => {
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    littleDivs.style.backgroundColor = color;
  
   });
  
  myDiv.appendChild(littleDivs);
  }
}





function whiteColor(){

  let squares = document.getElementById("input").value
  let userInput = document.getElementById("input").value **2;
  
  
  for (i=0; i< userInput; i++){
  
  let myDiv = document.querySelector("#board");
  let littleDivs = document.createElement("div");
  $(littleDivs).width(400/squares);
  $(littleDivs).height(400/squares);
  littleDivs.style.aspectRatio = '1/1'
  littleDivs.classList.add("newgrid");
  //THIS BIT ADDS THE COLOR BLACK//
  littleDivs.addEventListener("mouseover", () => {
  littleDivs.style.backgroundColor = "white"  });
  
  myDiv.appendChild(littleDivs);
  }
}

//CREATES A NEW GRID ACCORDING TO INPUT UPON CLICKING THE BUTTON//

function createGrid(){

  let squares = document.getElementById("input").value
  let userInput = document.getElementById("input").value **2;
  
  
  for (i=0; i< userInput; i++){
  
  let myDiv = document.querySelector("#board");
  let littleDivs = document.createElement("div");
  $(littleDivs).width(400/squares);
  $(littleDivs).height(400/squares);
  littleDivs.style.aspectRatio = '1/1'
  littleDivs.classList.add("newgrid");
  //THIS BIT ADDS THE COLOR BLACK//
  littleDivs.addEventListener("mouseover", () => {
  littleDivs.style.backgroundColor = "pink"  });
  
  myDiv.appendChild(littleDivs);
  }
}

  createGrid()
 


function clearGrid ()
 
{
  
        const deleteGrid = document.getElementById("board");

        while (deleteGrid.firstChild) {
            deleteGrid.removeChild(deleteGrid.firstChild);
        
      }

    }
  

