const imges=[
  "earth.jpg",
  "moun.jpg",
  "wave.jpg"
];

const backgroundImg= imges[Math.floor(Math.random() * imges.length)];

const bgImges =document.createElement("img");

bgImges.src = `img/${backgroundImg}`;

document.body.appendChild(bgImges);
//append는 body가장 뒤에 위치
//prepend는 body 가장 앞에 위치
