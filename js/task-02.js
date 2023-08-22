const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const content = document.querySelector("#ingredients");
ingredients.forEach((elem) => {
  const list = document.createElement("li");
  list.textContent = elem;
  list.classList.add("item");
  content.append(list);
});
