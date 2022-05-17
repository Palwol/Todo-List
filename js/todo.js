const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const savedTodos = localStorage.getItem(TODOS_KEY);
let toDos = [];

if (savedTodos) {
    toDos = JSON.parse(savedTodos);
    toDos.forEach(paintTodo);
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteTodo() {
    toDos = toDos.filter(el => el.id !== this.id);
    saveToDos();
    this.parentElement.remove();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.id = `check${newTodo.id}`;
    const label = document.createElement("label");
    label.setAttribute("for",check.id);
    const span = document.createElement("span");
    span.innerText = newTodo.value;
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "x";
    closeBtn.id = newTodo.id;
    li.appendChild(check);
    li.appendChild(label);
    li.appendChild(span);
    li.appendChild(closeBtn);
    closeBtn.addEventListener("click",deleteTodo);
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        id: Date.now().toString(),
        value: toDoInput.value
    };
    toDoInput.value = "";
    toDos.push(newTodo);
    saveToDos();
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit",handleToDoSubmit);