function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//looking for elements
const divEl = document.querySelector("#boxes");
const buttonCreateDiv = document.querySelector("[data-create]");
const buttonDestroyDiv = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("#controls input");
let divCount = inputEl.value;

//create eventListener
buttonCreateDiv.addEventListener("click", createBoxes);
buttonDestroyDiv.addEventListener("click", destroyBoxes);

//create render function
function createBoxes() {
  //check empty block
  if (divEl.children.length !== 0) {
    alert("Shapes have already been created, clean up before using again!");
    return;
  }
  //create array for join to string
  let divArrayMarkup = [];

  //initialization width, height
  let initialWidth = 30;
  let initialHeight = 30;

  //update input number
  divCount = inputEl.value;

  //creating element markup
  for (let i = 0; i < divCount; i += 1) {
    let tempStr = `<div style = "margin: 0 auto; display: flex; justify-content: center; align-items:center; width: ${initialWidth}px; height: ${initialHeight}px; background-color: ${getRandomHexColor()}">${
      i + 1 // check count of element
    }</div>`;

    // push element to array
    divArrayMarkup.push(tempStr);

    //update width, height
    initialWidth += 10;
    initialHeight += 10;
  }
  //add markup to HTML
  divEl.insertAdjacentHTML("beforeend", divArrayMarkup.join(""));
}

function destroyBoxes() {
  divEl.innerHTML = "";
  divCount = 0;
  inputEl.value = 0;
}
