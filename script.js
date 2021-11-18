const h1 = document.querySelector("div.title:first-child h1");

function handleTitleClick(){
  const currentColor =h1.style.color;
  let newColor ;
  if(h1.style.color === "blue"){
    newColor = "tomato";
  }else{
   newColor = "blue";
  }
  h1.style.color = newColor;
}

function handleMouseEnter(){
  h1.style.color = "red";
}

function handleMouseLeave(){
  h1.style.color = "blue";
}

function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave );

