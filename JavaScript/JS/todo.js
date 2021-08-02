const toDoForm = document.querySelector("#todoForm")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todoList")

function handelToDo(event) {
    event.preventDefault()
    const inputText = toDoInput.value
    toDoInput.value = ""
    console.log(inputText)
}
toDoForm.addEventListener("submit", handelToDo)