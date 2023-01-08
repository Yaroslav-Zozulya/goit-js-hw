const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", addTextFromInput);

function addTextFromInput() {
  outputEl.textContent = inputEl.value.trim();
  if (!inputEl.value.trim()) {
    outputEl.textContent = "Anonymous";
  }
}
