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
    divBoxes.innerHTML = "";
            for (let i = 0; i < amount; i++) {
                const newSize = 30 + i * 10;
                const newDiv = document.createElement('div');
            newDiv.style.width = `${newSize}px`;
            newDiv.style.height = `${newSize}px`;
            newDiv.style.backgroundColor = getRandomHexColor();
            divBoxes.append(newDiv);
            console.log(newDiv);
            }           
        }

        destroyButton.addEventListener("click", () => {
            divBoxes.innerHTML = "";
        })