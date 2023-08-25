function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
btnCreate.addEventListener("click", () => {
  let boxPush = createBox(input.value);
  boxes.append(...boxPush);
});
btnDestroy.addEventListener("click", destroyBoxes);
function createBox(amount) {
  const array = [];
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    array.push(div);
  }
  return array;
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
