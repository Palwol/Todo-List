const loginInput = document.querySelector("#username");
const loginForm = document.querySelector("#login-form");
const loginContainer = document.querySelector("#login-container");
const ToDoContainer = document.querySelector("#Todo-container");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function handleLogin(event) {
    event.preventDefault();
    loginContainer.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    getWeather();
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    ToDoContainer.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    loginContainer.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLogin);
} else {
    paintGreetings(savedUsername);
    getWeather();
}
