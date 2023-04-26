const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elAllIngredients = [];
ingredients.forEach((ingredient) => {
  const elIngredient = document.createElement("li");
  elIngredient.textContent = ingredient;
  elIngredient.classList.add("item");
  elAllIngredients.push(elIngredient);
});
const elList = document.querySelector("#ingredients");
elList.prepend(...elAllIngredients);
