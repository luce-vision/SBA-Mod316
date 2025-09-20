// Caching DOM Elements for later use

const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const statusLine = document.querySelector("p");
const filtersContainer = document.getElementById("filters");

console.log(taskInput);

// Data Helpers

// App state
let tasks = [];
let currentFilter = "all";
let nextId = 1;

// Task object
function newTask(taskText) {
  const text = taskText;
  return {
    id: nextId++,
    text: text,
    done: false,
  };
}

// Adding task to array
function addTaskToArray(task) {
  tasks.push(task);
}

// Status line
function getCounts() {
  const total = tasks.length;
  const completed = tasks.filter(function (t) {
    return t.done;
  }).length;
  const remaining = total - completed;
  return { total, completed, remaining };
}

// Displaying tasks on page

function render() {
    taskList.taskcontent = "";
    
}

// Dark Mode Button
document.getElementById("darkModeButton").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// "Active Filter Button" status change event
document.getElementById("activeButton").addEventListener("click", () => {
  document.getElementById("status").textContent = "Active filter selected!";
});
