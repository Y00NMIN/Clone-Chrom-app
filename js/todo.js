const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoiList = document.getElementById("todo-list");

const toDos = []

function saveToDo(){
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  //parentElement은 elemnt의 부모님
  li.remove();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  //텍스트를 span내부에 추가
  const button = document.createElement("button");

  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  //li안에 span추가
  toDoiList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);