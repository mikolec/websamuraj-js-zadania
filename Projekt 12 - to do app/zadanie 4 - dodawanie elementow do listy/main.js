const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h1 span");
// const listItems = document.querySelectorAll("li.task");
const listItems = document.getElementsByClassName("task"); //HTMLCollection jest update'owane na żywo
const input = document.querySelector("input");

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, index) => {
    toDoElement.dataset.index = index;
    ul.appendChild(toDoElement);
  });
};

const removeTask = e => {
  //e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.index;
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
};

const addTask = e => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = titleTask + " <button> Usuń </button>";
  toDoList.push(task);
  renderList();

  ul.appendChild(task);
  input.value = "";
  // const liItems = document.querySelectorAll("li.task").length;
  // taskNumber.textContent = liItems;
  taskNumber.textContent = listItems.length;
  task.querySelector("button").addEventListener("click", removeTask);
  //"li: last-child button"
};

form.addEventListener("submit", addTask);
