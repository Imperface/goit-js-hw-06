const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");
spanEl.style.fontSize = `${inputRangeEl.value}px`; //*default value of input for span
inputRangeEl.addEventListener("input", () => {
  spanEl.style.fontSize = `${inputRangeEl.value}px`;
});
