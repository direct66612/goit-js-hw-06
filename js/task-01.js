const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach((categorie) => {
  const titles = categorie.querySelectorAll("h2");
  titles.forEach((title) => console.log(`Category: ${title.textContent}`));
  console.log(`Elements:${categorie.querySelectorAll("ul li").length}`);
});
