const inputPassEl = document.querySelector("#validation-input");
console.log(inputPassEl.dataset.length);
inputPassEl.addEventListener("blur", () => {
  if (inputPassEl.value.length >= inputPassEl.dataset.length) {
    inputPassEl.classList.add("valid");
    inputPassEl.classList.remove("invalid");
  } else {
    inputPassEl.classList.add("invalid");
    inputPassEl.classList.remove("valid");
  }
});
