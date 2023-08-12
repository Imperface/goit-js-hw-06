const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;
  ulEl.append(liEl);
});
