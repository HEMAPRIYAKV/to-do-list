const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const prioritySelect = document.getElementById('prioritySelect');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;

  if (taskText === '') return alert("Task can't be empty!");

  const taskItem = document.createElement('li');
  taskItem.className = `task-item priority-${priority}`;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'task-actions';

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '✏️';
  editBtn.title = "Edit";

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.title = "Delete";

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(span);
  taskItem.appendChild(actions);
  taskList.appendChild(taskItem);

  taskInput.value = '';
  prioritySelect.value = 'low';

  // Complete Task
  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed');
  });

  // Edit Task
  editBtn.addEventListener('click', () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== '') {
      span.textContent = newText.trim();
    }
  });

  // Delete Task
  deleteBtn.addEventListener('click', () => {
    if (confirm("Are you sure to delete this task?")) {
      taskList.removeChild(taskItem);
    }
  });
});
