const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form input");

function onLoginSunbmit(event){
  event.preventDefault();
  //브라우저의 submit행동을 막아준다.
  console.log(event);
  
}

loginForm.addEventListener("submit", onLoginSunbmit);

