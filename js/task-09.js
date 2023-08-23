function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const result = document.querySelector(".color");
button.addEventListener("click", function () {
  document.body.style.backgroundColor = getRandomHexColor();
  result.innerHTML = getRandomHexColor();
});
