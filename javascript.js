let container = document.querySelector('#container');

function userPrompt(){
    container.replaceChildren();
    let userInput = prompt("Enter grid size. Max 100");
    let prompInt = parseInt(userInput);
    let cellSelec = prompInt * prompInt;
    for(let i = 0; i < cellSelec; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        }
        for(let i = 0; i < grid.length; i++){
            grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = "blue";});
        }
container.style.setProperty("--grid-template-columns", `repeat(${prompInt}, 1fr)`);
container.style.setProperty("--grid-template-rows", `repeat(${prompInt}, 1fr)`);
}

//Grid creation
for(let i = 0; i < 256; i++) {
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
}

//Grid coloring
var grid = document.getElementsByClassName("grid")
for(let i = 0; i < grid.length; i++){
    grid[i].addEventListener("mousedown", function(){grid[i].style.backgroundColor = "blue";});
    grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = "blue";});
}



