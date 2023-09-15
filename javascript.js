let container = document.querySelector('#container');

//Grid creation
let userInput = 144;
for(let i = 0; i < userInput; i++) {
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

