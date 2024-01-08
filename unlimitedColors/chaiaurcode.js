const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

const randomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function changeColor() {
  document.querySelector("body").style.backgroundColor = `${randomColor()}`;
}

let intervalId;
const start = () => {
  if (!intervalId) {
    intervalId = setInterval(changeColor, 2000);
  }
};

const stop = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startBtn.addEventListener("click", start);

stopBtn.addEventListener("click", stop);
