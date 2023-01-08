const inputFontSizeControlEl = document.querySelector(
  "input#font-size-control"
);
const textEl = document.querySelector("#text");
textEl.style.fontSize = "56px";
inputFontSizeControlEl.addEventListener("input", changeFontSize);

function changeFontSize() {
  textEl.style.fontSize = `${inputFontSizeControlEl.value}px`;
}
