const ingredientsList = document.querySelector('#ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const markup = ingredients.map(ingredient => {
  const item = document.createElement('li');
  console.log(item);
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});

ingredientsList.append(...markup);
