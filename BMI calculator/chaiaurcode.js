const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value) / 100;
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");

  if (height < 0) {
    results.innerHTML = `<span>height must not be 0</span>`;
  } else if (height === "" || isNaN(height)) {
    results.innerHTML = `<span>height must not be empty</span>`;
  } else if (weight < 0) {
    results.innerHTML = `<span>weight must not be 0</span>`;
  } else if (weight === "" || isNaN(weight)) {
    results.innerHTML = `<span>weight must not be empty</span>`;
  } else {
    const BMI = (weight / height ** 2).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
