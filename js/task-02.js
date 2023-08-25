const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const content = document.querySelector("#ingredients");
const array = [];
ingredients.forEach((elem) => {
  const list = document.createElement("li");
  list.textContent = elem;
  list.classList.add("item");
  array.push(list);
});
content.append(...array);
