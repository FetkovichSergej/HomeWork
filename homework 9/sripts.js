let ul;
window.onload = () => {
    ul = document.getElementById("toDoList");
};
function getToDo() {
    let textInput = document.getElementById("toDo");
    let toDoName = textInput.value;
    if (toDoName == "") {
        alert("Вы ничего не ввели");
    } else {
        let li = document.createElement("li");
        let btn = document.createElement("input");
        let btnChange = document.createElement("button");
        let text = document.createElement("span");
        let deleteTask = document.createElement("button");
        let breaks = document.createElement("br");
        deleteTask.innerHTML = "Удалить запись";
        deleteTask.onclick = () => {
            li.remove();
        };
        btnChange.innerHTML = "Изменить";
        btn.type = "checkbox";
        btn.innerHTML = "Выполнено?";
        btn.onclick = () => {
            btn.parentElement.classList.toggle("checked_task");
        };
        btnChange.onclick = () => {
            text.innerHTML = prompt("Введите  новую задачу");
        };
        text.innerHTML = toDoName;
        li.appendChild(btn);
        li.appendChild(text);
        li.appendChild(breaks);
        li.appendChild(btnChange);
        li.appendChild(deleteTask);
        ul.appendChild(li);
    }
}

function deleteAllTasks() {
    const list = document.getElementById("toDoList");
    list.querySelectorAll("li").forEach((li) => list.removeChild(li));
}
