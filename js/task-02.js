"use strict"

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const html = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

  ingredientsList.innerHTML = html;