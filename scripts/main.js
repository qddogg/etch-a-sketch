const body = document.querySelector('body');
const cont = document.createElement('div');
cont.classList.add('gridContainer');
body.appendChild(cont);

const btn = document.querySelector('button');

let gridSize = prompt("Enter grid size", "");
btn.addEventListener('click',() =>{
    deletegrid();
    gridSize = prompt("Enter grid size", "");
    drawGrid(gridSize);
});

const gridArray = [];

function drawGrid (gridSize){
    cont.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < Math.pow(gridSize, 2); i++){
        gridArray[i] = document.createElement('div');
        gridArray[i].classList.add('gridElement');
        cont.appendChild(gridArray[i]);
        gridArray[i].addEventListener('mouseover', e => e.target.style.backgroundColor = 'black');
        //gridArray[i].addEventListener('mouseover', e => e.target.style.backgroundColor = `hsl(0, 0%, ${gridLightness[i] -= 10}%)`);
    }
}

function deletegrid(){
    for (let i = 0; i < Math.pow(gridSize, 2); i++){
        cont.removeChild(gridArray[i]);  
        //gridArray[i].addEventListener('mouseover', e => e.target.style.backgroundColor = `hsl(0, 0%, ${gridLightness[i] -= 10}%)`);
    }
}

drawGrid(gridSize);











// let gridLightness = [];

// for (let i = 0; i < Math.pow(gridSize, 2); i++){
//     gridLightness[i] = 100;
// }








