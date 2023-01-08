const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", onCreateBtnClick);

destroyBtnEl.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(inputEl.value);
}

function onDestroyBtnClick() {
  boxesEl.innerHTML = "";
}

function createBoxes(amount) {
  if (!amount) {
    alert("Please, enter a number!");
    return;
  }

  let markup = "";
  let size = 30;

  for (let i = 1; i <= amount; i += 1) {
    markup += `<div style="background-color:${getRandomHexColor()};  width:${size}px; height:${size}px; margin: 5px"></div>`;

    size += 10;
  }

  boxesEl.insertAdjacentHTML("beforeend", markup);
  inputEl.value = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
