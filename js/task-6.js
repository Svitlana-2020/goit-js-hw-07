function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elInput = document.querySelector('input[type="number"]')
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const divBoxes = document.getElementById('boxes');

createButton.addEventListener("click", () => {
    const amount = Number(elInput.value);
    console.log(amount);
        
    if (amount > 1 && amount < 100) {
        createBoxes(amount)}
    });
        
function createBoxes(amount) {
    const array = Array.from({ length: amount });
const newdivBox = array.map((element, i) => {
    const newSize = 30 + i * 10;
    const newColor = getRandomHexColor();
return `<div style="width: ${newSize}px; height: ${newSize}px; background-color: ${newColor};">
</div>`
}).join("");
divBoxes.innerHTML = newdivBox;         
        }

        destroyButton.addEventListener("click", () => {
            divBoxes.innerHTML = "";
        })