const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting =document.querySelector("#greeting");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = 'username';


function onLoginSunbmit(event){
  event.preventDefault();
  //브라우저의 submit행동을 막아준다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `안녕 ${username} !`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSunbmit);
} else{
  paintGreetings(savedUsername);
}