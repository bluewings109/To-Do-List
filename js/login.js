const loginForm = document.body.querySelector("#login-form");
const usernameInput = loginForm.querySelector("#username");
const greeting = document.body.querySelector("#greeting");
const logoutBtn = greeting.querySelector("#logout-btn");

const HIDDEN_KEY = "hidden";
const USERNAME_KEY = "username";

function onLogoutBtnClick(event){
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_KEY);
  greeting.classList.add(HIDDEN_KEY);
}

function paintGreeting(username){
  greeting.querySelector("span").innerText=`Hello ${username}`;
  greeting.classList.remove(HIDDEN_KEY);
}

function onLoginSubmit(event){
  event.preventDefault();
  const username = usernameInput.value;
  console.log(username);

  localStorage.setItem(USERNAME_KEY,username);
  loginForm.classList.add(HIDDEN_KEY);
  usernameInput.value="";
  paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
logoutBtn.addEventListener("click", onLogoutBtnClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
  loginForm.classList.remove(HIDDEN_KEY);
} else {
  paintGreeting(savedUsername);
}
