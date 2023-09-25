let container = document.querySelector('#container');
var grid = document.getElementsByClassName("grid")

//Custom grid creation with coloring EventListener
function userPrompt(){
    container.replaceChildren();
    let userInput = prompt("Enter grid size. Max 100");
    let prompInt = parseInt(userInput);
    let cellSelec = prompInt * prompInt;
    if(prompInt > 100 || prompInt === 1){
        return alert("Max is 100, minimum is 2")
    }
    else{
    for(let i = 0; i < cellSelec; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        }
        for(let i = 0; i < grid.length; i++){
            grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = "blue";});
        }
    }
container.style.setProperty("--grid-template-columns", `repeat(${prompInt}, 1fr)`);
container.style.setProperty("--grid-template-rows", `repeat(${prompInt}, 1fr)`);
}

//Initial 16x 16 grid creation
for(let i = 0; i < 256; i++) {
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
}

//Initial grid coloring EventListener
var grid = document.getElementsByClassName("grid")
for(let i = 0; i < grid.length; i++){
    grid[i].addEventListener("mousedown", function(){grid[i].style.backgroundColor = "blue";});
    grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = "blue";});
}