let canvasContainer = document.querySelector("#innerContainer");
let slider = document.querySelector('#slider');
let sliderValue = slider.value;
let gridSize = 10;

function createGridDiv(divSize) {
    const gridDiv = document.createElement("div");
    const itemSize = 100 / divSize;
    gridDiv.classList.add("gridDiv");
    gridDiv.style.flexBasis = `${itemSize}%`;
    canvasContainer.appendChild(gridDiv);
    
}

function generateGrid(size) { 
    sliderDisplay.innerHTML = `Size: ${slider.value}`;
    canvasContainer.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        createGridDiv(size);
       
    }     
}

generateGrid(sliderValue);

