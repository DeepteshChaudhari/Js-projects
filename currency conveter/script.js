let btn = document.querySelector("button");

async function currencyConverter() {
  let inputCurrency = document.querySelector("#currencyFrom").value;
  let outputCurrency = document.querySelector("#currencyTo").value;
  let count = document.querySelector("#inputCurrencyFrom").value;
  let first = document.querySelector("#first");
  let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${inputCurrency}.json`;

  let response = await fetch(url);
  let data = await response.json();
  let cur = data[inputCurrency][outputCurrency];

  let output = document.createElement("div");
  output.classList.add("output");
  output.innerHTML = `<h1>${count} : ${inputCurrency} is equal to ${outputCurrency} : ${
    count * cur
  }</h1>`;
  first.appendChild(output);
}
function handleEvent() {
  if (!document.querySelector(".output")) {
    currencyConverter();
  } else {
    document.querySelector(".output").remove();
    currencyConverter();
  }
}
btn.addEventListener("click", handleEvent);
