const canvasContainer = document.querySelector("#innerContainer");
const slider = document.querySelector('#slider');
const pencil = document.querySelector("#pencil");
const brush = document.querySelector("#brush");
const unicorn = document.querySelector("#unicorn");
let pencilOn = true;
let brushOn = false;
let unicornOn = false;
let sliderValue = slider.value;
let gridSize = 10;


function generateGrid(size) { 
    sliderDisplay.innerHTML = `Size: ${slider.value} X ${slider.value}` ;
    canvasContainer.innerHTML = '';
   
    if (pencilOn == true) {
        for (let i = 0; i < size * size; i++) {
            brushOn = false;
            unicornOn = false;
            const gridDiv = document.createElement("div");
            const itemSize = 100 / size;
            gridDiv.classList.add("gridDiv");
            gridDiv.style.flexBasis = `${itemSize}%`;
            canvasContainer.appendChild(gridDiv);
            gridDiv.addEventListener('mouseover', function(e) {e.target.style.background = 'rgba(112, 112, 112, 1)';});
        }
    }    
    if (brushOn == true) {    
        for (let i = 0; i < size * size; i++) {
            pencilOn = false;
            unicornOn = false;
            const gridDiv = document.createElement("div");
            const itemSize = 100 / size;
            gridDiv.classList.add("gridDiv");
            gridDiv.style.flexBasis = `${itemSize}%`;
            canvasContainer.appendChild(gridDiv);
            gridDiv.addEventListener('mouseover', function(e) {e.target.style.background = 'rgba(25, 220, 255, 1)';});
        }        
       
    }
    if (unicornOn == true) {    
        for (let i = 0; i < size * size; i++) {
            pencilOn = false;
            brushOn = false;
            const gridDiv = document.createElement("div");
            const itemSize = 100 / size;
            gridDiv.classList.add("gridDiv");
            gridDiv.style.flexBasis = `${itemSize}%`;
            canvasContainer.appendChild(gridDiv);
            gridDiv.addEventListener('mouseover', function(e) {e.target.style.background = 'rgba(25, 220, 255, 1)';});
        }        
       
    }         
}




generateGrid(sliderValue);
pencil.addEventListener("click", () => {pencilOn = true; brushOn = false; unicornOn = false; generateGrid(sliderValue);});
brush.addEventListener("click", () => {brushOn = true; pencilOn = false; unicornOn = false; generateGrid(sliderValue);});
unicorn.addEventListener("click", () => {unicornOn = true; brushOn = false; pencilOn = false; generateGrid(sliderValue);});





