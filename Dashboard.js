const todoInput = document.getElementById('newTask');
const todoList = document.getElementById('todoList');
const addTaskBtn = document.getElementById('addTaskBtn');
const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

addTaskBtn.onClick = addTask;
navLinks.forEach(link => link.onclick = e => showPage(e.target.dataset.page, e.preventDefault()))

function addTask() {
    if (!todoInput.value.trim()) return;

    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.value = todoInput.value;

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.addEventListener('click', () => updateTask(input));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(todoItem));

    todoItem.appendChild(input);
    todoItem.appendChild(updateBtn);
    todoItem.appendChild(deleteBtn);
    
    todoList.appendChild(todoItem);
    todoInput.value = '';
}

function updateTask(input) {
    input.focus();
}

function deleteTask(todoItem) {
    todoItem.remove();
}

// Page navigation
const showPage = id =>{
    pages.forEach(page => page.style.dispaly = 'none');
    document.getElementById(id).style.display = 'block';
}
// Initialize the home page as default
showPage('home');
