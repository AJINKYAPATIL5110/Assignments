function addTask(priority = false) {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.innerHTML = `${taskText} <button onclick="removeTask(this)">Remove</button>`;

    if (priority) {
        taskList.insertBefore(newTask, taskList.firstChild);
    } else {
        taskList.appendChild(newTask);
    }

    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
