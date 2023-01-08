const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validateInput);

function validateInput() {
  Number(inputEl.value.length) === Number(inputEl.dataset.length)
    ? changeClass("invalid", "valid")
    : changeClass("valid", "invalid");
}

// function validateInput() {
//   if (Number(inputEl.value.length) === Number(inputEl.dataset.length)) {
//     changeClass("invalid", "valid");
//     return
//   }
//   changeClass("valid", "invalid");
// }

function changeClass(a, b) {
  inputEl.classList.remove(a);
  inputEl.classList.add(b);

  // body
}
