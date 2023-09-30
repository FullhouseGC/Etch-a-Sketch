let container = document.querySelector('#container');
var grid = document.getElementsByClassName("grid")
function randomRgb() {
    return Math.floor(Math.random() * 255);
  }

//Custom grid creation with coloring 
function sliderValue(){
    container.replaceChildren();
    let slider = document.getElementById("myRange").value;
    let cellSelec = slider * slider;
    for(let i = 0; i < cellSelec; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        }
        for(let i = 0; i < grid.length; i++){
            grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = "blue";});
        }
    container.style.setProperty("--grid-template-columns", `repeat(${slider}, 1fr)`);
    container.style.setProperty("--grid-template-rows", `repeat(${slider}, 1fr)`);

}

//Rainbow color
function rainbow(){
    for(let i = 0; i < grid.length; i++){
        grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`});
    }
}

//Initial 16x 16 grid creation
for(let i = 0; i < 256; i++) {
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);
}

//Initial grid coloring
var grid = document.getElementsByClassName("grid")
for(let i = 0; i < grid.length; i++){
    grid[i].addEventListener("mousedown", function(){grid[i].style.backgroundColor = "blue";});
    grid[i].addEventListener("mouseenter", function(){grid[i].style.backgroundColor = "blue";});
}


