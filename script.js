// Select necessary elements
const taskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const newTask = document.createElement('li');

  // Use local images by referencing the correct relative path to the images folder
  const taskIcon = `<img src="done.png" class="icon" alt="Task icon">`;
const deleteIcon = `<button class="delete-btn"><img src="delete.png" alt="Delete icon"></button>`;

  newTask.innerHTML = `${taskIcon} ${taskText} ${deleteIcon}`;

  // Add event listener to the delete button
  newTask.querySelector('.delete-btn').addEventListener('click', function() {
    removeTask(newTask);
  });

  // Toggle completed class when clicking on the task itself
  newTask.addEventListener('click', function() {
    newTask.classList.toggle('completed');
  });

  // Add the task to the task list
  taskList.appendChild(newTask);

  // Clear input field after adding the task
  taskInput.value = '';
}

// Function to remove a task
function removeTask(task) {
  task.remove();
}
