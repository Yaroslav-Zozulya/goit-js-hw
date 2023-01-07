const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", validateInput);

function validateInput() {
  if (Number(inputEl.value.length) >= inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
    return;
  }
  inputEl.classList.remove("valid");
  inputEl.classList.add("invalid");
}
