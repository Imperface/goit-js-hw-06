const buttonDecrementEl = document.querySelector(
  'button[data-action = "decrement"]'
);
const buttonIncrementEl = document.querySelector(
  'button[data-action = "increment"]'
);
let counterValue = 0;
let spanEl = document.querySelector("#value");
buttonDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  spanEl.textContent = counterValue;
});
buttonIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  spanEl.textContent = counterValue;
});
