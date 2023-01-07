const spanEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  spanEl.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
