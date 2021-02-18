let cnt = 0;
let addButton = document.querySelector('.add-button')
let tasksList = document.querySelector('.tasks-box')
let newTask = document.querySelector('.new-task')
addButton.addEventListener('click', click);


function click() {


    cnt++;
    let addTask = newTask.value.trim();
    newTask.value = "";
    if (addTask === "") {
        return;
    }
    let taskText = document.createElement('span');
    taskText.innerHTML = addTask;


    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() { // Cross-out
        if (this.checked) {
            this.parentNode.className = 'task-item done';
        } else
            this.parentNode.className = 'task-item undone';
    });


    let removeTask = document.createElement('img')
    removeTask.className = 'bin-img';
    removeTask.src = 'static/img/bin.png';
    removeTask.addEventListener('click', function() {
        this.parentNode.remove();
    });


    let item = document.createElement('div');
    item.className = 'task-item'
    item.appendChild(checkbox)
    item.appendChild(taskText);
    item.appendChild(removeTask);
    tasksList.appendChild(item);

}