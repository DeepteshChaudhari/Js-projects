const output = document.querySelector("#output");
const btn = document.querySelector("button");
let word = document.querySelector("#input"),
  value;
async function getData() {
  let response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  let data = await response.json();
  console.log(data);
  let name = data[0].word;
  let defination = data[0].meanings[0].definitions[0].definition;

  let div = document.createElement("div");
  output.appendChild(div);

  let h1 = document.createElement("h1");
  h1.innerText = `${name}`;
  div.appendChild(h1);

  let h2 = document.createElement("h2");
  h2.innerText = `${defination}`;
  div.appendChild(h2);
}

function search() {
  if (word === Number) {
    alert("input must be text");
  } else {
    getData();
  }
}

btn.addEventListener("click", search);
