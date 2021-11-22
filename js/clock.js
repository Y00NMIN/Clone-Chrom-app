const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
//1초의 지연시간 없이 즉시 보여주기 위함
setInterval(getClock, 1000);
//setInterval 1000ms마다 함수 호출
//setTimeout 1000ms에 함수호출

