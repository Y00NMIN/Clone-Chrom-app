const title = document.querySelector("div.title:first-child h1");

function handleTitleClick(){
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
