const categoryChildren = [...document.querySelector("#categories").children];
console.log(`Number of categories: ${categoryChildren.length}\n\n`);

categoryChildren.forEach((element) => {
  const elementTitle = element.querySelector("h2");
  console.log(`Category: ${elementTitle.textContent}`);
  const elementCategoryCount = element.querySelector("ul").children;
  console.log(`Elements: ${elementCategoryCount.length}\n\n`);
});
