function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//   const randomColor = getRandomHexColor();
// console.log(randomColor);

const changeColor = document.querySelector(".change-color");
changeColor.addEventListener("click",(e) => {
  const spanEl = document.querySelector(".color");
  const bodyElement = document.body;
  const newColor = getRandomHexColor();
  const textSpan = document.querySelector(".color")
  bodyElement.style.backgroundColor = newColor;
  const randomColor = getRandomHexColor();
spanEl.textContent = randomColor;
  console.log(randomColor);
});