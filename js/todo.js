const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoiList = document.getElementById("todo-list");

function paintToDo(newToDo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  //li안에 span추가
  span.innerText = newToDo;
  //텍스트를 span내부에 추가
  toDoiList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);