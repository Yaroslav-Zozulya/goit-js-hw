const btnIncrementEl = document.querySelector('[data-action="increment"]');
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const counterTextEl = document.querySelector("#value");

let counterValue = 0;

const incrementFn = () => {
  if (btnDecrementEl.hasAttribute("disabled")) {
    btnDecrementEl.removeAttribute("disabled");
  }

  counterValue += 1;
  counterTextEl.textContent = counterValue;
};

const decrementFn = () => {
  counterValue -= 1;
  counterTextEl.textContent = counterValue;

  if (Number(counterTextEl.textContent) === 0) {
    btnDecrementEl.setAttribute("disabled", "");
  }
};

btnIncrementEl.addEventListener("click", incrementFn);

btnDecrementEl.addEventListener("click", decrementFn);
