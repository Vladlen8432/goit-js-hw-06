"use strict"

const categoriesList = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;

  const subcategoriesItem = categoryItem.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${subcategoriesItem}`);
});
