const decrement = document.querySelector('button[data-action ="decrement"]');
const increment = document.querySelector('button[data-action ="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;
decrement.addEventListener("click", function addNumber() {
  counterValue -= 1;
  value.innerHTML = counterValue;
});
increment.addEventListener("click", function removeNumber() {
  counterValue += 1;
  value.innerHTML = counterValue;
});
