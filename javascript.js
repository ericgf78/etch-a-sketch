const canvasContainer = document.querySelector("#innerContainer");
const slider = document.querySelector("#slider");
const pencil = document.querySelector("#pencil");
const brush = document.querySelector("#brush");
const unicorn = document.querySelector("#unicorn");
const colorInput = document.querySelector("#colorInput")
let selectedColor = "#6a97d2";
let currentColor = "rgba(112, 112, 112, 1)";
let pencilOn = true;
let brushOn = false;
let unicornOn = false;
let sliderValue = slider.value;
let gridSize = 10;

function selectColor(color) {
    selectedColor = color;
    currentColor = selectedColor;
}

function generateGrid(size) {
  sliderDisplay.innerHTML = `Size: ${slider.value} X ${slider.value}`;
  canvasContainer.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
      brushOn = false;
      unicornOn = false;
      const gridDiv = document.createElement("div");
      const itemSize = 100 / size;
      gridDiv.classList.add("gridDiv");
      gridDiv.style.flexBasis = `${itemSize}%`;
      canvasContainer.appendChild(gridDiv);
      gridDiv.addEventListener("mouseover", function (e) {
        e.target.style.background = currentColor;
      });
    }
}

generateGrid(sliderValue);

pencil.addEventListener("click", () => {
    currentColor = "rgba(112, 112, 112, 1)";
});
brush.addEventListener("click", () => {
    console.log(selectedColor);
    currentColor = selectedColor;
    colorInput.click()
});
unicorn.addEventListener("click", () => {
    currentColor = "rgba(112, 112, 112, 1)";
});
