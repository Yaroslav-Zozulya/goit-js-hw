const categories = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  console.log(`-----------------------------`);
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
