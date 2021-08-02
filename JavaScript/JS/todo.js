const toDoForm = document.querySelector("#todoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todoList")

const greet = document.querySelector("#greeting")
const savingTodo = []

function saveTodo() {
    localStorage.setItem("todoItems", JSON.stringify(savingTodo))
}

function deleteButton(event) {
    const li = event.target.parentElement
    li.remove()
}

function paintTodo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    
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
    savingTodo.push(newTodo)
    paintTodo(newTodo)
    saveTodo()

    // console.log(savingTodo)

    
    const abcd = localStorage.getItem("todoItems")
    greet.innerText = "To Do is " + abcd
    
}
toDoForm.addEventListener("submit", handelToDo)
