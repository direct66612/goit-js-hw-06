const input = document.querySelector("#name-input");
const result = document.querySelector("#name-output");
input.addEventListener("input", function () {
  if (input.value === "") {
    result.innerHTML = "Anonymous";
  } else {
    result.innerHTML = input.value;
  }
});
