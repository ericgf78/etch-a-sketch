const canvasContainer = document.querySelector("#innerContainer");
const slider = document.querySelector("#slider");
const pencil = document.querySelector("#pencil");
const brush = document.querySelector("#brush");
const unicorn = document.querySelector("#unicorn");
const colorInput = document.querySelector("#colorInput")
let selectedColor = "#6a97d2";
let currentColor = "rgba(0, 0, 0, 1)";
let sliderValue = slider.value;
let gridSize = 10;
let unicornOn = false;

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (FFFFFF in hexadecimal)
  const randomNum = Math.floor(Math.random() * 16777215); 
  // Convert the number to a hexadecimal string
  let hexColor = randomNum.toString(16);
  // Pad the string with leading zeros if necessary to ensure 6 characters
  hexColor = hexColor.padStart(6, '0'); 
  return `#${hexColor}`;
}


function selectColor(color) {
    selectedColor = color;
    currentColor = selectedColor;
}



function generateGrid(size) {
  sliderDisplay.innerHTML = `Size: ${slider.value} X ${slider.value}`;
  canvasContainer.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
      const gridDiv = document.createElement("div");
      const itemSize = 100 / size;
      gridDiv.classList.add("gridDiv");
      gridDiv.style.flexBasis = `${itemSize}%`;
      canvasContainer.appendChild(gridDiv);
      gridDiv.addEventListener("mouseover", function (e) {
        if (unicornOn == true) {
             e.target.style.background = getRandomHexColor();  
               
        }
        else {
            let newOpacity = Number(e.target.style.opacity) + 0.1; 
            e.target.style.background = currentColor;
            e.target.style.opacity = Math.min(newOpacity, 1);
            console.log(e.target.style.opacity);
        }
      });
    }
}


generateGrid(sliderValue);

pencil.addEventListener("click", () => {
    unicornOn = false;
    currentColor = "rgba(0, 0, 0, 1)";
});
brush.addEventListener("click", () => {
    
    unicornOn = false;
    currentColor = selectedColor;
    colorInput.click()
});
unicorn.addEventListener("click", () => {
    unicornOn = true;
});
