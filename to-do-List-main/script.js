const inputtdl = document.querySelector(".textarea");
const buttontdl = document.querySelector(".buttoninput");
const listtdl = document.querySelector(".todolist");

function clickButton(e) {
  e.preventDefault();
  addTodo();
}

// // adding todoList
function addTodo() {
  const itemall = document.createElement("div");
  itemall.classList.add("itemall");

  const item = document.createElement("p");
  item.classList.add("item");
  item.innerText = inputtdl.value;
  itemall.appendChild(item);

  if (inputtdl.value === "") {
    alert("please write something to add in Todo List");
  } else {
    const checkbutton = document.createElement("button");
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkbutton.classList.add("check-button");
    itemall.appendChild(checkbutton);

    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashbutton.classList.add("trash-button");
    itemall.appendChild(trashbutton);

    const time = document.createElement("p");
    time.classList.add("time");
    time.innerText = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    itemall.appendChild(time);

    listtdl.appendChild(itemall);
    inputtdl.value = "";
  }
}

// checking and delete todoList
function okdel(e) {
  const item = e.target;

  // check
  if (item.classList[0] === "check-button") {
    const todolist = item.parentElement;
    todolist.style.textDecoration =
      todolist.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  }

  // delete
  if (item.classList[0] === "trash-button") {
    const todolist = item.parentElement;
    todolist.remove();
  }
}

buttontdl.addEventListener("click", clickButton);
listtdl.addEventListener("click", okdel);
