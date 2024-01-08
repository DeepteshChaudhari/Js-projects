const output = document.querySelector("#counter-value");
const decreaseBtn = document.querySelector("#decrement-btn");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increment-btn");

let counter = 0;
increaseBtn.addEventListener("click", function () {
  counter++;
  output.innerHTML = `${counter}`;
});

decreaseBtn.addEventListener("click", function () {
  counter--;
  output.innerHTML = `${counter}`;
});

resetBtn.addEventListener("click", function () {
  counter = 0;
  output.innerHTML = `${counter}`;
});
