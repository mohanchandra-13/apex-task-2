document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to create a new list item
    function createTaskItem(taskText) {
        // Create the list item element
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        // Create the span for the task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Add an event listener to the remove button
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        // Append the span and button to the list item
        listItem.appendChild(taskSpan);
        listItem.appendChild(removeBtn);

        return listItem;
    }

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTaskItem = createTaskItem(taskText);
            taskList.appendChild(newTaskItem);
            taskInput.value = ''; // Clear the input field
        }
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key press in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});