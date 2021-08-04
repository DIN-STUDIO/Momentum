const toDoForm = document.querySelector("#todoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todoList")

const greet = document.querySelector("#greeting")
let savingTodo = []
const TODOS_KEY = "todoItems"

function saveTodo() {
    localStorage.setItem("todoItems", JSON.stringify(savingTodo))
}

function deleteButton(event) {
    const li = event.target.parentElement
    li.remove()
    savingTodo = savingTodo.filter((items) => items.id != parseInt(li.id))
    saveTodo()
    console.log(li.id)
}

function paintTodo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo.text
    li.id = newTodo.id
    
    const button = document.createElement("button")  
    button.innerText = "Delete"

    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)

    button.addEventListener("click", deleteButton)
}

function handelToDo(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    let todoObj = {
        text : newTodo,
        id : Date.now()
    }
    savingTodo.push(todoObj)
    paintTodo(todoObj)
    saveTodo()    
}

toDoForm.addEventListener("submit", handelToDo)

const savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos != null) {
    const parseTodos = JSON.parse(savedTodos)   // "parseTodos" is an array!
    savingTodo = parseTodos
    parseTodos.forEach(paintTodo);
}
