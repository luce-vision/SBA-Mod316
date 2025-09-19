// Caching DOM Elements for later use

const taskInput = document.getElementById("task")
const addTaskButton = document.getElementById("addTask")
const taskList = document.getElementById("taskList")
const statusLine = document.querySelector("p")
const filtersContainer = document.getElementById("filters")

console.log(taskInput)

// Data Model

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
    done: false      
  };
}

// Adding task to array
function addTaskToArray(task) {
  tasks.push(task); 
}

// Status line
function getCounts() {
  const total = tasks.length;
  const completed = tasks.filter(t => t.done).length;
  const remaining = total - completed;
  return { total, completed, remaining };
}


