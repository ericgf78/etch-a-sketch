let canvasContainer = document.querySelector("#innerContainer");

function createGridDiv(divSize) {
    const gridDiv = document.createElement("div");
    const itemSize = 100 / divSize;
    gridDiv.classList.add("gridDiv");
    gridDiv.style.flexBasis = `${itemSize}%`;
    canvasContainer.appendChild(gridDiv);
    
}

function generateGrid(size) { 
    for (let i = 0; i < size * size; i++) {
        createGridDiv(size);
       
    }     
}

generateGrid(16);