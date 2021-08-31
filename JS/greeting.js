const loginForm = document.querySelector("#form")
const loginInput = document.querySelector("#form input")
const loginButton = document.querySelector("#form button")

const greeting = document.querySelector("#greeting")
const HIDDEN_USERNAME = "hidden"
const USERNAME_KEY = "username"

function onloginSubmit(event) {
    event.preventDefault();
    // greeting.classList.add(HIDDEN_USERNAME)
    loginForm.classList.add("hidden")
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting()
}

function paintGreeting(){
    const getUserName = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = "Hello " + getUserName
    greeting.classList.remove(HIDDEN_USERNAME)
}

const savedName = localStorage.getItem(USERNAME_KEY)

if (savedName == null){
    loginForm.classList.remove(HIDDEN_USERNAME)
    loginForm.addEventListener("submit", onloginSubmit)
}
else{
    paintGreeting()
}